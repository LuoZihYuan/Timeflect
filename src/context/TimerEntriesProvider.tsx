import type { ReactNode } from "react";
import { useState, useCallback, useMemo, useEffect } from "react";
import {
  type TimeEntry,
  TimeEntriesContext,
  convertFirestoreToTimeEntry,
  prepareTimeEntryForFirestore,
  type FirestoreTimeEntry,
} from "./TimeEntriesContext";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

interface TimeEntriesProviderProps {
  children: ReactNode;
}

// Fixed userId for now as specified
const FIXED_USER_ID = "x3jN8qsCG1B8HCQakz2O";

export const TimeEntriesProvider: React.FC<TimeEntriesProviderProps> = ({
  children,
}) => {
  const [entries, setEntries] = useState<TimeEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Set up Firestore listener on component mount
  useEffect(() => {
    setLoading(true);

    // Create a query against the timeEntries collection for the fixed user
    const timeEntriesRef = collection(db, "timeEntries");
    const userEntriesQuery = query(
      timeEntriesRef,
      where("userId", "==", FIXED_USER_ID)
    );

    // Subscribe to query results
    const unsubscribe = onSnapshot(
      userEntriesQuery,
      (snapshot) => {
        const fetchedEntries: TimeEntry[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data() as FirestoreTimeEntry;
          fetchedEntries.push(convertFirestoreToTimeEntry(doc.id, data));
        });

        setEntries(fetchedEntries);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error("Error fetching time entries:", err);
        setError("Failed to load time entries. Please try again later.");
        setLoading(false);
      }
    );

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  // Function to add a new entry to Firestore
  const addEntry = useCallback(async (entry: TimeEntry) => {
    try {
      const timeEntriesRef = collection(db, "timeEntries");
      const firestoreEntry = prepareTimeEntryForFirestore(entry, FIXED_USER_ID);
      await addDoc(timeEntriesRef, firestoreEntry);
      // No need to update state manually as the onSnapshot will trigger
    } catch (err) {
      console.error("Error adding entry:", err);
      setError("Failed to add entry. Please try again.");
      throw err;
    }
  }, []);

  // Function to delete an entry from Firestore
  const deleteEntry = useCallback(async (key: string) => {
    try {
      const entryRef = doc(db, "timeEntries", key);
      await deleteDoc(entryRef);
      // No need to update state manually as the onSnapshot will trigger
    } catch (err) {
      console.error("Error deleting entry:", err);
      setError("Failed to delete entry. Please try again.");
      throw err;
    }
  }, []);

  // Function to update an existing entry in Firestore
  const updateEntry = useCallback(async (updatedEntry: TimeEntry) => {
    try {
      const entryRef = doc(db, "timeEntries", updatedEntry.key);
      const firestoreEntry = prepareTimeEntryForFirestore(
        updatedEntry,
        FIXED_USER_ID
      );
      // We don't want to update createdAt field
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { createdAt, ...updateData } = firestoreEntry;
      await updateDoc(entryRef, updateData);
      // No need to update state manually as the onSnapshot will trigger
    } catch (err) {
      console.error("Error updating entry:", err);
      setError("Failed to update entry. Please try again.");
      throw err;
    }
  }, []);

  // Memoize the context value
  const value = useMemo(
    () => ({
      entries,
      loading,
      error,
      addEntry,
      deleteEntry,
      updateEntry,
    }),
    [entries, loading, error, addEntry, deleteEntry, updateEntry]
  );

  return (
    <TimeEntriesContext.Provider value={value}>
      {children}
    </TimeEntriesContext.Provider>
  );
};
