import React, { useState, useEffect, useRef } from "react";
import { Card, CardBody, Input, TimeInput, Button } from "@heroui/react";
import { Time } from "@internationalized/date";
import { v4 as uuidv4 } from "uuid";
import { useTimeEntries } from "../../context/TimeEntriesContext";

export const NormalTimer: React.FC = () => {
  const { addEntry } = useTimeEntries();
  const [task, setTask] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Start or stop the interval based on isRunning
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        const currentTime = new Date();
        setElapsedSeconds(
          (currentTime.getTime() - startTime!.getTime()) / 1000
        );
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    // Cleanup interval on unmount.
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, startTime]);

  // Start the timer: reset elapsed seconds and record start time.
  const handleStart = () => {
    setStartTime(new Date());
    setElapsedSeconds(0);
    setIsRunning(true);
  };

  // End the timer: stop the timer, add a new entry to the context, and reset states.
  const handleEnd = () => {
    if (!isRunning || !startTime) return;
    setIsRunning(false);
    const endTime = new Date();
    const entry = {
      key: (uuidv4 as () => string)(),
      task,
      startTime,
      endTime,
    };
    void addEntry(entry);
    setElapsedSeconds(0);
    setTask("");
    setStartTime(null);
  };

  // Convert elapsedSeconds into hours, minutes, and seconds.
  const hours = Math.floor(elapsedSeconds / 3600);
  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  const seconds = elapsedSeconds % 60;
  const elapsedTime = new Time(hours, minutes, seconds);

  return (
    <Card className="flex">
      <CardBody>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-8 items-center">
          <Input
            label="Task"
            variant="underlined"
            value={task}
            onValueChange={(value) => setTask(value)}
          />
          <div className="flex gap-3">
            <TimeInput
              isReadOnly
              value={elapsedTime}
              hourCycle={24}
              variant="flat"
              className="w-fit"
              granularity="second"
            />
            {isRunning ? (
              <Button color="secondary" onPress={handleEnd}>
                End
              </Button>
            ) : (
              <Button
                isDisabled={task === ""}
                color="primary"
                onPress={handleStart}
              >
                Start
              </Button>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
