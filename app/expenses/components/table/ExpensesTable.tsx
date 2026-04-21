"use client";

import React, { useEffect, useRef } from "react";
import {
  formatDate,
  getExpenseAmount,
  getExpenseDisplayName,
  getExpenseQuantity,
  getExpenseUnitPrice,
  isExpensePaid,
} from "../../lib/expense-helpers";
import { Expense } from "../../lib/expense-types";

interface ExpensesTableProps {
  visibleExpenses: Expense[];
  filteredExpenses: Expense[];
  isLoadingMore: boolean;
  visibleRowCount: number;
  expandedId: string | null;
  onToggleExpand: (id: string) => void;
  onStartEditExpense: (expense: Expense) => void;
  onDeleteExpense: (expense: Expense) => void;
  onUpdatePaidStatus: (expense: Expense, status: boolean) => void;
  onLoadMore: () => void;
  children?: React.ReactNode;
  selectedExpenseIds: string[];
  onRowToggle: (id: string) => void;
}

const ExpensesTable: React.FC<ExpensesTableProps> = ({
  visibleExpenses,
  filteredExpenses,
  isLoadingMore,
  visibleRowCount,
  expandedId,
  onToggleExpand,
  onStartEditExpense,
  onDeleteExpense,
  onUpdatePaidStatus,
  onLoadMore,
  children,
  selectedExpenseIds,
  onRowToggle,
}) => {
  const tableRef = useRef<HTMLDivElement>(null);
  const hasMoreExpenses = visibleRowCount < filteredExpenses.length;

  useEffect(() => {
    const tableElement = tableRef.current;
    if (!tableElement) return;

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = tableElement;
      if (scrollHeight - (scrollTop + clientHeight) < 200 && !isLoadingMore && hasMoreExpenses) {
        onLoadMore();
      }
    };

    tableElement.addEventListener("scroll", handleScroll);
    return () => tableElement.removeEventListener("scroll", handleScroll);
  }, [hasMoreExpenses, isLoadingMore, onLoadMore]);

  if (visibleExpenses.length === 0 && filteredExpenses.length === 0) {
    return (
      <div className="p-16 text-center text-gray-800">
        <div className="text-4xl mb-4 text-gray-900">[ ]</div>
        <p className="font-bold text-lg">No expenses found</p>
        <p className="text-sm">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div ref={tableRef} className="overflow-x-auto" style={{ maxHeight: "70vh" }}>
      <table className="min-w-full">
        <thead className="bg-white sticky top-0 border-b border-gray-200">
          <tr>
            <th className="p-4 text-left font-black text-gray-900 text-xs">Select</th>
            <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">#</th>
            <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">Shop</th>
            <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">Product</th>
            <th className="p-4 text-right font-black text-gray-900 uppercase tracking-wide text-xs">Qty</th>
            <th className="p-4 text-right font-black text-gray-900 uppercase tracking-wide text-xs">Unit Price</th>
            <th className="p-4 text-right font-black text-gray-900 uppercase tracking-wide text-xs">Total</th>
            <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">Date</th>
            <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">Role</th>
            <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">Employee</th>
            <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">Payment Mode</th>
            <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">Payment Type</th>
            <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">Status</th>
            <th className="p-4 text-left font-black text-gray-900 uppercase tracking-wide text-xs">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-gray-100">
          {visibleExpenses.map((expense, index) => {
            const paid = isExpensePaid(expense);
            const displayName = getExpenseDisplayName(expense);

            return (
              <React.Fragment key={expense._id}>
                <tr
                  className={`transition-colors ${
                    selectedExpenseIds.includes(expense._id)
                      ? "bg-gray-100 ring-2 ring-gray-300"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={selectedExpenseIds.includes(expense._id)}
                      onChange={() => onRowToggle(expense._id)}
                      className="cursor-pointer"
                    />
                  </td>
                  <td className="p-4 text-gray-800 font-bold">{index + 1}</td>
                  <td className="p-4 text-gray-900 font-bold">{expense.shop || "-"}</td>
                  <td className="p-4 text-gray-900">
                    <button
                      type="button"
                      onClick={() => onToggleExpand(expense._id)}
                      className="text-left"
                    >
                      <div className="font-semibold text-gray-900">{displayName}</div>
                      <div className="text-xs text-gray-500">
                        {expense.description ? expense.description : "No notes"}
                      </div>
                    </button>
                  </td>
                  <td className="p-4 text-right font-bold text-gray-900">
                    {getExpenseQuantity(expense).toLocaleString()}
                  </td>
                  <td className="p-4 text-right font-bold text-gray-900">
                    ₹{getExpenseUnitPrice(expense).toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className="p-4 text-right font-bold text-gray-900">
                    ₹{getExpenseAmount(expense).toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className="p-4 text-gray-800 text-sm">{formatDate(expense.date)}</td>
                  <td className="p-4 text-gray-800 capitalize text-sm">{expense.role || "other"}</td>
                  <td className="p-4 text-gray-800 text-sm">{expense.employeeName || "-"}</td>
                  <td className="p-4 text-gray-800 text-sm">{expense.paymentMode || "-"}</td>
                  <td className="p-4 text-gray-800 text-sm">{expense.paymentType || "-"}</td>
                  <td className="p-4">
                    <select
                      value={paid ? "paid" : "unpaid"}
                      onChange={(e) => onUpdatePaidStatus(expense, e.target.value === "paid")}
                      className="border-2 rounded-lg px-3 py-2 text-xs font-bold outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer border-gray-300 text-gray-800"
                    >
                      <option value="unpaid">Pending</option>
                      <option value="paid">Done</option>
                    </select>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        className="px-4 py-2 rounded-lg text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
                        onClick={() => onToggleExpand(expense._id)}
                      >
                        {expandedId === expense._id ? "Hide" : "View"}
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all"
                        onClick={() => onStartEditExpense(expense)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all"
                        onClick={() => onDeleteExpense(expense)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                {expandedId === expense._id && children}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>

      <div className="text-center py-6 text-sm font-bold text-gray-800 bg-white">
        {isLoadingMore && <p>Loading more expenses...</p>}
        {!hasMoreExpenses && filteredExpenses.length > 0 && <p>All expenses loaded</p>}
        {hasMoreExpenses && !isLoadingMore && (
          <button
            onClick={onLoadMore}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-all shadow-md"
          >
            Load More ({filteredExpenses.length - visibleRowCount} remaining)
          </button>
        )}
      </div>
    </div>
  );
};

export default ExpensesTable;

