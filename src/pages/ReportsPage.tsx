import { Tabs, Tab } from "@heroui/react";
import { PieChart } from "../components/chart";
import { useTimeEntries } from "../context/TimeEntriesContext";

interface Accumulator {
  daily: Record<string, number>;
  weekly: Record<string, number>;
}

const MS_PER_DAY = 1000 * 60 * 60 * 24;
const calculate_date_diff = (startTime: Date, endTime: Date) => {
  const startDate = new Date(startTime.getTime());
  const endDate = new Date(endTime.getTime());
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(23, 59, 59, 999);
  return Math.floor((endDate.getTime() - startDate.getTime()) / MS_PER_DAY);
};

export const ReportsPage: React.FC = () => {
  const { entries } = useTimeEntries();
  const { daily, weekly } = entries.reduce<Accumulator>(
    (acc, entry) => {
      const diff = calculate_date_diff(entry.startTime, new Date());

      if (diff <= 1) {
        acc.daily[entry.task] = acc.daily[entry.task] || 0;
        acc.daily[entry.task] +=
          entry.endTime.getTime() - entry.startTime.getTime();
      }
      if (diff <= 7) {
        acc.weekly[entry.task] = acc.weekly[entry.task] || 0;
        acc.weekly[entry.task] +=
          entry.endTime.getTime() - entry.startTime.getTime();
      }
      return acc;
    },
    {
      daily: {},
      weekly: {},
    }
  );
  return (
    <div className="flex w-full flex-col p-4">
      <Tabs aria-label="timer-type" className="justify-end">
        <Tab key="report-daily" title="Daily">
          <PieChart
            title=""
            labels={Object.keys(daily)}
            data={Object.values(daily)}
          />
        </Tab>
        <Tab key="report-wekly" title="Weekly">
          <PieChart
            title=""
            labels={Object.keys(weekly)}
            data={Object.values(weekly)}
          />
        </Tab>
      </Tabs>
    </div>
  );
};
