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
  if (!showHistory) return null;

  const displayedExpenses = historyEmployeeId
    ? employeeHistory
    : historyExpenses;
  const totalAmount = historyEmployeeId
    ? employeeHistoryTotal
    : historyExpenses.reduce((sum, expense) => sum + getExpenseTotal(expense), 0);

  return (
    <div className="premium-card p-5 md:p-6">
      <h2 className="text-lg font-bold text-slate-900 mb-5">
        Payment History
      </h2>
      <div className="grid gap-4 md:grid-cols-2 mb-5">
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
            Filter by Employee
          </label>
          <select
            value={historyEmployeeId}
            onChange={(e) => setHistoryEmployeeId(e.target.value)}
            className="select-field"
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
          <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
            {historyEmployeeId
              ? "Selected Employee Total"
              : "All Time Total"}
          </label>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xl font-bold text-slate-900">
            ₹{totalAmount.toLocaleString("en-IN")}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="premium-table min-w-[800px] w-full">
          <thead>
            <tr>
              <th>Date</th>
              <th>Product</th>
              <th>Shop</th>
              <th className="!text-right">Qty</th>
              <th className="!text-right">Unit Price</th>
              <th className="!text-right">Amount</th>
              <th className="!text-right">Total</th>
              <th>Employee</th>
            </tr>
          </thead>
          <tbody>
            {displayedExpenses.length === 0 ? (
              <tr>
                <td colSpan={8} className="!p-12 !text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                    <svg className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 11.625l2.25-2.25M12 11.625l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-slate-900">No payment history</p>
                </td>
              </tr>
            ) : (
              displayedExpenses.map((exp) => {
                return (
                  <tr key={exp._id}>
                    <td className="!text-slate-500">{formatDate(exp.date)}</td>
                    <td className="!font-semibold">{getExpenseDisplayName(exp)}</td>
                    <td>{exp.shop || "-"}</td>
                    <td className="!text-right !font-semibold">
                      {getExpenseQuantity(exp).toLocaleString()}
                    </td>
                    <td className="!text-right !font-semibold">
                      ₹{getExpenseUnitPrice(exp).toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="!text-right !font-semibold">
                      ₹{getExpenseAmount(exp).toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="!text-right !font-bold">
                      ₹{getExpenseTotal(exp).toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td>{exp.employeeName || "-"}</td>
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