import React from "react";
import { Employee, Expense } from "./types";
import {
  formatDate,
  getExpenseAmount,
  getExpenseDisplayName,
  getExpenseQuantity,
  getExpenseUnitPrice,
  getExpenseTotal,
} from "./lib/expense-helpers";

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
  console.log("employeeHistoryemployeeHistory",employeeHistory);
  if (!showHistory) return null;

  const displayedExpenses = historyEmployeeId
    ? employeeHistory
    : historyExpenses;
  const totalAmount = historyEmployeeId
    ? employeeHistoryTotal
    : historyExpenses.reduce((sum, expense) => sum + getExpenseTotal(expense), 0);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
      <h2 className="text-2xl font-black text-gray-900 mb-6">
        Payment History
      </h2>
      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">
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
          <label className="block text-sm font-bold text-gray-800 mb-2">
            {historyEmployeeId
              ? "Selected Employee Total"
              : "All Time Total"}
          </label>
          <div
            className="border-2 rounded-xl px-6 py-4 text-2xl font-black border-gray-300 bg-white text-gray-900"
          >
            ₹{totalAmount.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border-2 border-gray-200">
        <table className="min-w-full">
          <thead className="bg-white border-b border-gray-200">
            <tr>
              <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">
                Date
              </th>
              <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">
                Product
              </th>
              <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">
                Shop
              </th>
              <th className="p-4 text-right font-black text-gray-900 uppercase tracking-wide text-xs">
                Qty
              </th>
              <th className="p-4 text-right font-black text-gray-900 uppercase tracking-wide text-xs">
                Unit Price
              </th>
              <th className="p-4 text-right font-black text-gray-900 uppercase tracking-wide text-xs">
                Amount
              </th>
              <th className="p-4 text-right font-black text-gray-900 uppercase tracking-wide text-xs">
                Total
              </th>
              <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">
                Employee
              </th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-gray-100">
            {displayedExpenses.length === 0 ? (
              <tr>
                <td colSpan={8} className="p-16 text-center text-gray-800">
                  <div className="text-4xl mb-4 text-gray-900">[ ]</div>
                  <p className="font-bold text-lg">No payment history</p>
                </td>
              </tr>
            ) : (
              displayedExpenses.map((exp) => {
                return (
                  <tr
                    key={exp._id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4 text-gray-800 text-sm">
                      {formatDate(exp.date)}
                    </td>
                    <td className="p-4 text-gray-900 font-bold">
                      {getExpenseDisplayName(exp)}
                    </td>
                    <td className="p-4 text-gray-900">{exp.shop || "-"}</td>
                    <td className="p-4 text-right text-gray-800 font-bold">
                      {getExpenseQuantity(exp).toLocaleString()}
                    </td>
                    <td className="p-4 text-right text-gray-800 font-bold">
                      ₹{getExpenseUnitPrice(exp).toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="p-4 text-right text-gray-800 font-bold">
                      ₹{getExpenseAmount(exp).toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="p-4 text-right font-black text-gray-900 text-lg">
                      ₹{getExpenseTotal(exp).toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="p-4 text-gray-800">
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
