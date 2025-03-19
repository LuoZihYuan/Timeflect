import type { ReactNode } from "react";
import { useState, useCallback, useMemo } from "react";
import { type TimeEntry, TimeEntriesContext } from "./TimeEntriesContext";

interface TimeEntriesProviderProps {
  children: ReactNode;
}

export const TimeEntriesProvider: React.FC<TimeEntriesProviderProps> = ({
  children,
}) => {
  const [entries, setEntries] = useState<TimeEntry[]>([]);

  // Memoized function to add a new entry.
  const addEntry = useCallback((entry: TimeEntry) => {
    setEntries((prevEntries) => [...prevEntries, entry]);
  }, []);

  // Memoized function to delete an entry by its key.
  const deleteEntry = useCallback((key: string) => {
    setEntries((prevEntries) =>
      prevEntries.filter((entry) => entry.key !== key)
    );
  }, []);

  // Memoized function to update an existing entry.
  const updateEntry = useCallback((updatedEntry: TimeEntry) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.key === updatedEntry.key ? updatedEntry : entry
      )
    );
  }, []);

  // Memoize the context value so that it only changes when dependencies change.
  const value = useMemo(
    () => ({ entries, addEntry, deleteEntry, updateEntry }),
    [entries, addEntry, deleteEntry, updateEntry]
  );

  return <TimeEntriesContext value={value}>{children}</TimeEntriesContext>;
};
