"use client";

import React from "react";
import { formatDate } from "../../lib/expense-helpers";
import { Employee, Expense, Subtask } from "../../lib/expense-types";

interface SubExpensesSectionProps {
  parent: Expense;
  employees: Employee[];
  subTitle: string;
  setSubTitle: (value: string) => void;
  subAmount: string;
  setSubAmount: (value: string) => void;
  subDate: string;
  setSubDate: (value: string) => void;
  subEmployeeId: string;
  setSubEmployeeId: (value: string) => void;
  onAddSubtask: (event: React.FormEvent, parent: Expense) => void;
  onUpdateSubtaskStatus: (parentExpense: Expense, subtaskId: string, isDone: boolean) => void;
  onDeleteSubtask: (parentExpense: Expense, subtaskId: string) => void;
  onStartEditSubtask: (parent: Expense, sub: Subtask) => void;
}

const SubExpensesSection: React.FC<SubExpensesSectionProps> = ({
  parent,
  employees,
  subTitle,
  setSubTitle,
  subAmount,
  setSubAmount,
  subDate,
  setSubDate,
  subEmployeeId,
  setSubEmployeeId,
  onAddSubtask,
  onUpdateSubtaskStatus,
  onDeleteSubtask,
  onStartEditSubtask,
}) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-5">
      <div className="mb-4 pb-3 border-b border-slate-100">
        <h4 className="text-sm font-bold text-slate-900">
          Sub Expenses for: <span className="text-slate-700">{parent.productName || parent.description || parent.shop}</span>
        </h4>
      </div>

      <form
        onSubmit={(event) => onAddSubtask(event, parent)}
        className="mb-5 p-4 bg-slate-50 rounded-xl border border-slate-200"
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 mb-3">
          <div>
            <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wider">
              Description
            </label>
            <input
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
              className="input-field"
              placeholder="Sub expense title"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wider">
              Amount (₹)
            </label>
            <input
              type="number"
              value={subAmount}
              onChange={(e) => setSubAmount(e.target.value)}
              className="input-field"
              placeholder="0.00"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wider">
              Date
            </label>
            <input
              type="date"
              value={subDate}
              onChange={(e) => setSubDate(e.target.value)}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wider">
              Employee
            </label>
            <select
              value={subEmployeeId}
              onChange={(e) => setSubEmployeeId(e.target.value)}
              className="select-field"
            >
              <option value="">Select Employee</option>
              {employees.map((employee) => (
                <option key={employee._id} value={employee._id}>
                  {employee.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="btn-primary !text-xs"
        >
          Add Sub Expense
        </button>
      </form>

      {(parent.subtasks || []).length > 0 ? (
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="premium-table min-w-[600px] w-full text-sm">
            <thead>
              <tr>
                <th>Description</th>
                <th className="!text-right">Amount</th>
                <th>Date</th>
                <th>Employee</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {parent.subtasks!.map((subtask) => (
                <tr key={subtask.id}>
                  <td className="!font-medium">{subtask.title}</td>
                  <td className="!text-right !font-bold">
                    ₹{(subtask.amount || 0).toLocaleString("en-IN")}
                  </td>
                  <td className="!text-slate-500">{formatDate(subtask.date)}</td>
                  <td className="!text-slate-500">{subtask.employeeName || "-"}</td>
                  <td>
                    <select
                      value={subtask.done ? "done" : "pending"}
                      onChange={(e) => onUpdateSubtaskStatus(parent, subtask.id, e.target.value === "done")}
                      className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-semibold outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                    >
                      <option value="pending">Pending</option>
                      <option value="done">Done</option>
                    </select>
                  </td>
                  <td>
                    <div className="flex gap-1.5">
                      <button
                        type="button"
                        onClick={() => onStartEditSubtask(parent, subtask)}
                        className="rounded-lg bg-sky-50 px-2.5 py-1.5 text-xs font-semibold text-sky-700 transition hover:bg-sky-100"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => onDeleteSubtask(parent, subtask.id)}
                        className="rounded-lg bg-rose-50 px-2.5 py-1.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-100"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-6 bg-slate-50 rounded-xl border border-dashed border-slate-300">
          <p className="text-sm font-medium text-slate-500">No sub expenses added yet</p>
        </div>
      )}
    </div>
  );
};

export default SubExpensesSection;