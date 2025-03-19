import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  TimeInput,
  Input,
} from "@heroui/react";
import { Time } from "@internationalized/date";
import { useTimeEntries } from "../../context/TimeEntriesContext";
import type { Selection } from "@heroui/react";

export const EntryTable: React.FC = () => {
  const { entries, updateEntry } = useTimeEntries();

  // local state for the selected row and its editable fields
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [editingTask, setEditingTask] = useState("");
  const [editingStartTime, setEditingStartTime] = useState<Time | null>(null);
  const [editingEndTime, setEditingEndTime] = useState<Time | null>(null);

  // handler for selection changes
  const handleSelectionChange = (selectedKeys: Selection) => {
    // When no row is selected, update the previous row with the edited values.
    if ((selectedKeys as Set<string>).size === 0) {
      if (selectedKey && editingStartTime && editingEndTime) {
        const originalEntry = entries.find((e) => e.key === selectedKey);
        if (originalEntry) {
          // Build new Date objects based on the original date parts but with new time values.
          const updatedEntry = {
            ...originalEntry,
            task: editingTask,
            startTime: new Date(
              originalEntry.startTime.getFullYear(),
              originalEntry.startTime.getMonth(),
              originalEntry.startTime.getDate(),
              editingStartTime.hour,
              editingStartTime.minute,
              editingStartTime.second
            ),
            endTime: new Date(
              originalEntry.endTime.getFullYear(),
              originalEntry.endTime.getMonth(),
              originalEntry.endTime.getDate(),
              editingEndTime.hour,
              editingEndTime.minute,
              editingEndTime.second
            ),
          };
          void updateEntry(updatedEntry);
        }
      }
      // Clear the editing state
      setSelectedKey(null);
      setEditingTask("");
      setEditingStartTime(null);
      setEditingEndTime(null);
    } else {
      // When a new row is selected
      const newSelectedKey = [...(selectedKeys as Set<string>)][0] || null;
      // If switching from another row, update the previous one first.
      if (
        selectedKey &&
        selectedKey !== newSelectedKey &&
        editingStartTime &&
        editingEndTime
      ) {
        const originalEntry = entries.find((e) => e.key === selectedKey);
        if (originalEntry) {
          const updatedEntry = {
            ...originalEntry,
            task: editingTask,
            startTime: new Date(
              originalEntry.startTime.getFullYear(),
              originalEntry.startTime.getMonth(),
              originalEntry.startTime.getDate(),
              editingStartTime.hour,
              editingStartTime.minute,
              editingStartTime.second
            ),
            endTime: new Date(
              originalEntry.endTime.getFullYear(),
              originalEntry.endTime.getMonth(),
              originalEntry.endTime.getDate(),
              editingEndTime.hour,
              editingEndTime.minute,
              editingEndTime.second
            ),
          };
          void updateEntry(updatedEntry);
        }
      }
      // Set the new selection and load its data into state.
      setSelectedKey(newSelectedKey);
      const entry = entries.find((e) => e.key === newSelectedKey);
      if (entry) {
        setEditingTask(entry.task);
        setEditingStartTime(
          new Time(
            entry.startTime.getHours(),
            entry.startTime.getMinutes(),
            entry.startTime.getSeconds()
          )
        );
        setEditingEndTime(
          new Time(
            entry.endTime.getHours(),
            entry.endTime.getMinutes(),
            entry.endTime.getSeconds()
          )
        );
      }
    }
  };

  return (
    <Table selectionMode="single" onSelectionChange={handleSelectionChange}>
      <TableHeader>
        <TableColumn>TASK</TableColumn>
        <TableColumn align="center" className="w-28">
          START
        </TableColumn>
        <TableColumn align="center" className="w-28">
          END
        </TableColumn>
      </TableHeader>
      <TableBody>
        {entries.map(({ key, task, startTime, endTime }) => (
          <TableRow key={key}>
            <TableCell>
              {selectedKey === key ? (
                <Input
                  value={editingTask}
                  onValueChange={(value) => setEditingTask(value)}
                />
              ) : (
                task
              )}
            </TableCell>
            <TableCell>
              <TimeInput
                // enable the input only when this row is selected
                isDisabled={selectedKey !== key}
                value={
                  selectedKey === key && editingStartTime
                    ? editingStartTime
                    : new Time(
                        startTime.getHours(),
                        startTime.getMinutes(),
                        startTime.getSeconds()
                      )
                }
                onChange={(newTime) => {
                  if (selectedKey === key) setEditingStartTime(newTime);
                }}
                hourCycle={24}
                variant="flat"
                className="w-fit"
                granularity="second"
              />
            </TableCell>
            <TableCell>
              <TimeInput
                isDisabled={selectedKey !== key}
                value={
                  selectedKey === key && editingEndTime
                    ? editingEndTime
                    : new Time(
                        endTime.getHours(),
                        endTime.getMinutes(),
                        endTime.getSeconds()
                      )
                }
                onChange={(newTime) => {
                  if (selectedKey === key) setEditingEndTime(newTime);
                }}
                hourCycle={24}
                variant="flat"
                className="w-fit"
                granularity="second"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
