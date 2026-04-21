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
    <tr className="bg-white">
      <td className="p-6" colSpan={14}>
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-sm">
          <div className="mb-6 pb-4 border-b-2 border-gray-200">
            <h4 className="text-lg font-bold text-gray-900">
              Sub Expenses for: <span className="text-gray-900">{parent.productName || parent.description || parent.shop}</span>
            </h4>
          </div>

          <form
            onSubmit={(event) => onAddSubtask(event, parent)}
            className="mb-6 p-6 bg-white rounded-xl border border-gray-200"
          >
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-2 uppercase tracking-wide">
                  Description
                </label>
                <input
                  value={subTitle}
                  onChange={(e) => setSubTitle(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all"
                  placeholder="Sub expense title"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-2 uppercase tracking-wide">
                  Amount (₹)
                </label>
                <input
                  type="number"
                  value={subAmount}
                  onChange={(e) => setSubAmount(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-2 uppercase tracking-wide">
                  Date
                </label>
                <input
                  type="date"
                  value={subDate}
                  onChange={(e) => setSubDate(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-2 uppercase tracking-wide">
                  Employee
                </label>
                <select
                  value={subEmployeeId}
                  onChange={(e) => setSubEmployeeId(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white cursor-pointer"
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
              className="px-6 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all text-sm"
            >
              Add Sub Expense
            </button>
          </form>

          {(parent.subtasks || []).length > 0 ? (
            <div className="overflow-x-auto rounded-xl border-2 border-gray-200 bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-white border-b border-gray-200">
                  <tr>
                    <th className="p-4 text-left font-bold text-gray-900 uppercase tracking-wide text-xs">
                      Description
                    </th>
                    <th className="p-4 text-right font-bold text-gray-900 uppercase tracking-wide text-xs">
                      Amount
                    </th>
                    <th className="p-4 text-left font-bold text-gray-900 uppercase tracking-wide text-xs">
                      Date
                    </th>
                    <th className="p-4 text-left font-bold text-gray-900 uppercase tracking-wide text-xs">
                      Employee
                    </th>
                    <th className="p-4 text-left font-bold text-gray-900 uppercase tracking-wide text-xs">
                      Status
                    </th>
                    <th className="p-4 text-left font-bold text-gray-900 uppercase tracking-wide text-xs">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {parent.subtasks!.map((subtask) => (
                    <tr key={subtask.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-gray-900 font-medium">{subtask.title}</td>
                      <td className="p-4 text-right font-bold text-gray-900">
                        ₹{(subtask.amount || 0).toLocaleString()}
                      </td>
                      <td className="p-4 text-gray-800">{formatDate(subtask.date)}</td>
                      <td className="p-4 text-gray-800">{subtask.employeeName || "-"}</td>
                      <td className="p-4">
                        <select
                          value={subtask.done ? "done" : "pending"}
                          onChange={(e) => onUpdateSubtaskStatus(parent, subtask.id, e.target.value === "done")}
                          className="border-2 border-gray-200 rounded-lg px-3 py-1.5 text-xs font-semibold outline-none focus:border-blue-500 bg-white cursor-pointer text-gray-900"
                        >
                          <option value="pending">Pending</option>
                          <option value="done">Done</option>
                        </select>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => onStartEditSubtask(parent, subtask)}
                            className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => onDeleteSubtask(parent, subtask.id)}
                            className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all"
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
            <div className="text-center py-8 text-gray-800 bg-white rounded-xl border-2 border-dashed border-gray-300">
              <p className="text-sm font-medium">No sub expenses added yet</p>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default SubExpensesSection;
