import { use, createContext } from "react";

// Define the shape of a single time entry.
export interface TimeEntry {
  key: string;
  task: string;
  startTime: Date;
  endTime: Date;
}

// Define the context properties.
interface TimeEntriesContextProps {
  entries: TimeEntry[];
  addEntry: (entry: TimeEntry) => void;
  deleteEntry: (key: string) => void;
  updateEntry: (updatedEntry: TimeEntry) => void;
}

// Create the context with an undefined initial value.
export const TimeEntriesContext = createContext<
  TimeEntriesContextProps | undefined
>(undefined);

// Custom hook for easier context consumption.
export const useTimeEntries = () => {
  const context = use(TimeEntriesContext);
  if (!context) {
    throw new Error("useTimeEntries must be used within a TimeEntriesProvider");
  }
  return context;
};
