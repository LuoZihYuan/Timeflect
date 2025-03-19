import { Tabs, Tab, Divider } from "@heroui/react";
import { TimeEntriesProvider } from "../context/TimerEntriesProvider";
import { NormalTimer } from "../components/timer";
import { EntryTable } from "../components/time-entry";

export const HoursPage: React.FC = () => {
  return (
    <TimeEntriesProvider>
      <div className="flex w-full flex-col p-4">
        <Tabs aria-label="timer-type" className="justify-end">
          <Tab key="timer-normal" title="Normal">
            <NormalTimer />
          </Tab>
          <Tab key="timer-pomodoro" title="Pomodoro">
            <NormalTimer />
          </Tab>
        </Tabs>
        <Divider />
        <div className="py-3 px-1">
          <EntryTable />
        </div>
      </div>
    </TimeEntriesProvider>
  );
};
