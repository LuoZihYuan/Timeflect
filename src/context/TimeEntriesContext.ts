import { use, createContext } from "react";
import { Timestamp } from "firebase/firestore";

// Define the shape of a single time entry.
export interface TimeEntry {
  key: string;
  task: string;
  startTime: Date;
  endTime: Date;
  createdAt?: Date;
  updatedAt?: Date;
  userId?: string;
}

// Interface for Firestore data structure
export interface FirestoreTimeEntry {
  task: string;
  startTime: Timestamp;
  endTime: Timestamp;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  userId: string;
}

// Function to convert Firestore document to TimeEntry
export const convertFirestoreToTimeEntry = (
  id: string,
  data: FirestoreTimeEntry
): TimeEntry => ({
  key: id,
  task: data.task,
  startTime: data.startTime.toDate(),
  endTime: data.endTime.toDate(),
  createdAt: data.createdAt.toDate(),
  updatedAt: data.updatedAt.toDate(),
  userId: data.userId,
});

// Function to prepare TimeEntry for Firestore
export const prepareTimeEntryForFirestore = (
  entry: TimeEntry,
  userId = "x3jN8qsCG1B8HCQakz2O"
): Omit<FirestoreTimeEntry, "key"> => {
  const now = new Date();
  return {
    task: entry.task,
    startTime: Timestamp.fromDate(entry.startTime),
    endTime: Timestamp.fromDate(entry.endTime),
    createdAt: Timestamp.fromDate(entry.createdAt ?? now),
    updatedAt: Timestamp.fromDate(now),
    userId,
  };
};

// Define the context properties.
interface TimeEntriesContextProps {
  entries: TimeEntry[];
  loading: boolean;
  error: string | null;
  addEntry: (entry: TimeEntry) => Promise<void>;
  deleteEntry: (key: string) => Promise<void>;
  updateEntry: (updatedEntry: TimeEntry) => Promise<void>;
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
