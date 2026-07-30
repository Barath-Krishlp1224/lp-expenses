"use client";

import React from "react";
import { EditingSubtaskState, Employee } from "../../lib/expense-types";

interface EditSubtaskModalProps {
  editingSubtask: EditingSubtaskState;
  setEditingSubtask: React.Dispatch<React.SetStateAction<EditingSubtaskState | null>>;
  employees: Employee[];
  onSave: () => void;
  onCancel: () => void;
}

const EditSubtaskModal: React.FC<EditSubtaskModalProps> = ({
  editingSubtask,
  setEditingSubtask,
  employees,
  onSave,
  onCancel,
}) => {
  const setField = (key: keyof EditingSubtaskState, value: string) => {
    setEditingSubtask((current) => (current ? { ...current, [key]: value } : current));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/35 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        <h2 className="text-lg font-bold text-slate-900 mb-5">Edit Sub Expense</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Title</label>
            <input
              value={editingSubtask.title}
              onChange={(e) => setField("title", e.target.value)}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Amount</label>
            <input
              type="number"
              value={editingSubtask.amount}
              onChange={(e) => setField("amount", e.target.value)}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Date</label>
            <input
              type="date"
              value={editingSubtask.date}
              onChange={(e) => setField("date", e.target.value)}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Employee</label>
            <select
              value={editingSubtask.employeeId}
              onChange={(e) => setField("employeeId", e.target.value)}
              className="select-field"
            >
              <option value="">None</option>
              {employees.map((employee) => (
                <option key={employee._id} value={employee._id}>
                  {employee.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            className="btn-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="btn-primary"
            onClick={onSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditSubtaskModal;