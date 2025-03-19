import React, { useState, useEffect, useCallback } from "react";
import { Card, CardBody, Input, TimeInput, Button } from "@heroui/react";
import { Time } from "@internationalized/date";
import { v4 as uuidv4 } from "uuid";
import { useTimeEntries } from "../../context/TimeEntriesContext";

export const PomodoroTimer: React.FC = () => {
  const { addEntry } = useTimeEntries();

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

  // State variables
  const [task, setTask] = useState<string>("");
  const [currentPhase, setCurrentPhase] = useState<string>(PHASES.TASK);
  const [phaseCount, setPhaseCount] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(TASK_DURATION);
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
  }, [
    currentPhase,
    phaseCount,
    PHASES.TASK,
    PHASES.SHORT_BREAK,
    PHASES.LONG_BREAK,
  ]);

  // Get phase display name
  const getPhaseDisplayName = useCallback(
    (phase: string) => {
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
    },
    [PHASES.TASK, PHASES.SHORT_BREAK, PHASES.LONG_BREAK]
  );

  // Get phase duration in seconds
  const getPhaseDuration = useCallback(
    (phase: string) => {
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
    },
    [
      TASK_DURATION,
      SHORT_BREAK_DURATION,
      LONG_BREAK_DURATION,
      PHASES.TASK,
      PHASES.SHORT_BREAK,
      PHASES.LONG_BREAK,
    ]
  );

  // Start the timer
  const startTimer = () => {
    setIsRunning(true);
    setIsPaused(false);
    setStartTime(new Date());
  };

  // Pause the timer
  const pauseTimer = () => {
    setIsRunning(false);
    setIsPaused(true);
  };

  // Resume the timer
  const resumeTimer = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  // End the current phase and move to the next
  const endPhase = useCallback(() => {
    const endTime = new Date();

    // Add entry for the task phase
    if (currentPhase === PHASES.TASK) {
      void addEntry({
        key: uuidv4(),
        task,
        startTime: startTime!,
        endTime,
      });

      // Update phase count if task phase completed
      setPhaseCount((prev) => prev + 1);
    }

    // Determine the next phase
    const nextPhase = getNextPhase();
    setCurrentPhase(nextPhase);

    // Reset timer for the next phase
    setTimeLeft(getPhaseDuration(nextPhase));

    // Reset timer state
    setIsRunning(false);
    setIsPaused(false);
    setStartTime(null);
  }, [
    currentPhase,
    addEntry,
    task,
    startTime,
    getNextPhase,
    getPhaseDuration,
    PHASES.TASK,
  ]);

  // Timer effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (isRunning && timeLeft <= 0) {
      // Phase completed automatically
      endPhase();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, endPhase]);

  // Format time for TimeInput component
  const timeObject = () => {
    const hours = 0;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return new Time(hours, minutes, seconds);
  };

  // Get label text for the input
  const getLabelText = () => {
    const currentPhaseName = getPhaseDisplayName(currentPhase);
    const nextPhaseName = getPhaseDisplayName(getNextPhase());
    return `${currentPhaseName} (Next: ${nextPhaseName})`;
  };

  // Render appropriate button based on timer state
  const renderButton = () => {
    if (timeLeft <= 0) {
      return (
        <Button color="primary" onPress={endPhase}>
          End
        </Button>
      );
    } else if (isRunning) {
      return (
        <Button color="primary" onPress={pauseTimer}>
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
        <Button color="primary" onPress={startTimer}>
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
