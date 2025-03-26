import React, { useState, useEffect, useCallback } from "react";
import { Card, CardBody, Input, TimeInput, Button } from "@heroui/react";
import { Time } from "@internationalized/date";
import { v4 as uuidv4 } from "uuid";
import { useTimeEntries } from "../../context/TimeEntriesContext";

// Phase durations in seconds
const TASK_DURATION = 25 * 60; // 25 minutes
const SHORT_BREAK_DURATION = 5 * 60; // 5 minutes
const LONG_BREAK_DURATION = 15 * 60; // 15 minutes

// Phase types
const PHASES = {
  TASK: "task",
  SHORT_BREAK: "shortBreak",
  LONG_BREAK: "longBreak",
};

export const PomodoroTimer: React.FC = () => {
  const { addEntry } = useTimeEntries();

  // State variables
  const [task, setTask] = useState<string>("");
  const [currentPhase, setCurrentPhase] = useState<string>(PHASES.TASK);
  const [phaseCount, setPhaseCount] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(TASK_DURATION);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<Date | null>(null);

  // Get the next phase based on current phase and count
  const getNextPhase = useCallback(() => {
    if (currentPhase === PHASES.TASK) {
      // After 3 task phases (so on the 4th), go to long break
      if ((phaseCount + 1) % 4 === 0) {
        return PHASES.LONG_BREAK;
      } else {
        return PHASES.SHORT_BREAK;
      }
    } else {
      // After any break, go to task
      return PHASES.TASK;
    }
  }, [currentPhase, phaseCount]);

  // Get phase display name
  const getPhaseDisplayName = useCallback((phase: string) => {
    switch (phase) {
      case PHASES.TASK:
        return "Task";
      case PHASES.SHORT_BREAK:
        return "Short Break";
      case PHASES.LONG_BREAK:
        return "Long Break";
      default:
        return "Task";
    }
  }, []);

  // Get phase duration in seconds
  const getPhaseDuration = useCallback((phase: string) => {
    switch (phase) {
      case PHASES.TASK:
        return TASK_DURATION;
      case PHASES.SHORT_BREAK:
        return SHORT_BREAK_DURATION;
      case PHASES.LONG_BREAK:
        return LONG_BREAK_DURATION;
      default:
        return TASK_DURATION;
    }
  }, []);

  // Start the timer
  const startTimer = () => {
    setIsRunning(true);
    setIsPaused(false);
    setStartTime(new Date());
  };

  // Pause the timer
  const pauseTimer = () => {
    const endTime = new Date();
    const entry = {
      key: uuidv4(),
      task,
      startTime: startTime!,
      endTime,
    };
    // Add entry for the task phase
    void addEntry(entry);

    setTimeLeft((prev) => prev - elapsedSeconds);

    setStartTime(null);
    setElapsedSeconds(0);

    setIsRunning(false);
    setIsPaused(true);
  };

  // Resume the timer
  const resumeTimer = () => {
    setStartTime(new Date());
    setIsRunning(true);
    setIsPaused(false);
  };

  // End the current phase and move to the next
  const endPhase = useCallback(() => {
    const endTime = new Date();
    const entry = {
      key: uuidv4(),
      task,
      startTime: startTime!,
      endTime,
    };

    // Add entry for the task phase
    void addEntry(entry);

    // Update phase count if task phase completed
    if (currentPhase === PHASES.TASK) setPhaseCount((prev) => prev + 1);

    // Determine the next phase
    const nextPhase = getNextPhase();
    setCurrentPhase(nextPhase);

    // Reset timer for the next phase
    setTimeLeft(getPhaseDuration(nextPhase));
    setTask("");

    // Reset timer state
    setIsRunning(false);
    setIsPaused(false);
    setStartTime(null);
    setElapsedSeconds(0);
  }, [currentPhase, addEntry, task, startTime, getNextPhase, getPhaseDuration]);

  // Timer effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isRunning && timeLeft > elapsedSeconds) {
      interval = setInterval(() => {
        const currentTime = new Date();
        setElapsedSeconds(
          (currentTime.getTime() - startTime!.getTime()) / 1000
        );
      }, 1000);
    } else if (isRunning && timeLeft <= elapsedSeconds) {
      // Phase completed automatically
      endPhase();
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, endPhase, startTime, elapsedSeconds]);

  // Format time for TimeInput component
  const timeObject = () => {
    const countdown = timeLeft - elapsedSeconds;
    const hours = Math.floor(countdown / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;
    return new Time(hours, minutes, seconds);
  };

  // Get label text for the input
  const getLabelText = () => {
    const currentPhaseName = getPhaseDisplayName(currentPhase);
    const nextPhaseName = getPhaseDisplayName(getNextPhase());
    return `${currentPhaseName} (next: ${nextPhaseName})`;
  };

  // Render appropriate button based on timer state
  const renderButton = () => {
    if (isRunning) {
      return (
        <Button color="secondary" onPress={pauseTimer}>
          Pause
        </Button>
      );
    } else if (isPaused) {
      return (
        <Button color="primary" onPress={resumeTimer}>
          Resume
        </Button>
      );
    } else {
      return (
        <Button isDisabled={task === ""} color="primary" onPress={startTimer}>
          Start
        </Button>
      );
    }
  };

  return (
    <Card className="flex">
      <CardBody>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-8 items-center">
          <Input
            label={getLabelText()}
            variant="underlined"
            value={task}
            onValueChange={(value) => setTask(value)}
            disabled={isRunning || isPaused}
          />
          <div className="flex gap-3">
            <TimeInput
              isReadOnly
              hourCycle={24}
              variant="flat"
              className="w-fit"
              granularity="second"
              value={timeObject()}
            />
            {renderButton()}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
