import React from "react";
import { Employee } from "./types";
import { Expense, formatDate } from "./components/types";

interface PaymentHistorySectionProps {
  showHistory: boolean;
  historyEmployeeId: string;
  setHistoryEmployeeId: (id: string) => void;
  employees: Employee[];
  historyExpenses: Expense[];
  employeeHistory: Expense[];
  employeeHistoryTotal: number;
}

const PaymentHistorySection: React.FC<PaymentHistorySectionProps> = ({
  showHistory,
  historyEmployeeId,
  setHistoryEmployeeId,
  employees,
  historyExpenses,
  employeeHistory,
  employeeHistoryTotal,
}) => {
  if (!showHistory) return null;

  const displayedExpenses = historyEmployeeId
    ? employeeHistory
    : historyExpenses;
  const totalAmount = historyEmployeeId
    ? employeeHistoryTotal
    : historyExpenses.reduce(
        (sum, e) =>
          sum +
          e.amount +
          (e.subtasks || []).reduce((s, sub) => s + (sub.amount || 0), 0),
        0
      );

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
      <h2 className="text-2xl font-black text-gray-900 mb-6">
        Payment History
      </h2>
      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Filter by Employee
          </label>
          <select
            value={historyEmployeeId}
            onChange={(e) => setHistoryEmployeeId(e.target.value)}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 transition-all bg-white"
          >
            <option value="">All Paid Expenses</option>
            {employees.map((emp) => (
              <option key={emp._id} value={emp._id}>
                {emp.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            {historyEmployeeId
              ? "Selected Employee Total"
              : "All Time Total"}
          </label>
          <div
            className={`border-2 rounded-xl px-6 py-4 text-2xl font-black ${
              historyEmployeeId
                ? "border-blue-300 bg-blue-50 text-blue-700"
                : "border-green-300 bg-green-50 text-green-700"
            }`}
          >
            ₹{totalAmount.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border-2 border-gray-200">
        <table className="min-w-full">
          <thead className="bg-linear-to-r from-gray-900 to-gray-800">
            <tr>
              <th className="p-4 text-left font-black text-white uppercase tracking-wide text-xs">
                Date
              </th>
              <th className="p-4 text-left font-black text-white uppercase tracking-wide text-xs">
                Description
              </th>
              <th className="p-4 text-left font-black text-white uppercase tracking-wide text-xs">
                Shop
              </th>
              <th className="p-4 text-right font-black text-white uppercase tracking-wide text-xs">
                Amount
              </th>
              <th className="p-4 text-right font-black text-white uppercase tracking-wide text-xs">
                Total
              </th>
              <th className="p-4 text-left font-black text-white uppercase tracking-wide text-xs">
                Employee
              </th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-gray-100">
            {displayedExpenses.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-16 text-center text-gray-500">
                  <div className="text-6xl mb-4">📜</div>
                  <p className="font-bold text-lg">No payment history</p>
                </td>
              </tr>
            ) : (
              displayedExpenses.map((exp) => {
                const subsTotal = (exp.subtasks || []).reduce(
                  (s, sub) => s + (sub.amount || 0),
                  0
                );
                const total = exp.amount + subsTotal;
                return (
                  <tr
                    key={exp._id}
                    className="hover:bg-blue-50 transition-colors"
                  >
                    <td className="p-4 text-gray-600 text-sm">
                      {formatDate(exp.date)}
                    </td>
                    <td className="p-4 text-gray-900 font-bold">
                      {exp.description}
                    </td>
                    <td className="p-4 text-gray-900">{exp.shop || "-"}</td>
                    <td className="p-4 text-right text-gray-600 font-bold">
                      ₹{exp.amount.toLocaleString()}
                    </td>
                    <td className="p-4 text-right font-black text-gray-900 text-lg">
                      ₹{total.toLocaleString()}
                    </td>
                    <td className="p-4 text-gray-600">
                      {exp.employeeName || "-"}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistorySection;