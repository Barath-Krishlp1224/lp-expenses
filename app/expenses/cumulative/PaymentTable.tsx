"use client";

import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";

interface CumulativePayment {
  paymentId: string;
  paymentDate: string;
  paymentTime: string;
  paidBy?: string;
  totalAmount: number;
  expenseIds: string[];
}

interface Expense {
  _id: string;
  shop?: string;
  description?: string;
  amount: number;
  date: string;
  role?: string;
  employeeName?: string;
  paymentMode?: string;
  paymentType?: string;
}

export default function CumulativePaymentsTable() {
  const [payments, setPayments] = useState<CumulativePayment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [visibleRowCount, setVisibleRowCount] = useState(20);
  const [expandedPaymentId, setExpandedPaymentId] = useState<string | null>(null);
  const [expensesMap, setExpensesMap] = useState<Record<string, Expense[]>>({});
  const tableRef = useRef<HTMLDivElement>(null);

  const fetchPayments = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/cumulativeExpense");
      const json = await res.json();
      if (!json.success) throw new Error(json.error || "Failed to fetch payments");
      setPayments(json.data || []);
    } catch (err: any) {
      setError(err.message || "Failed to fetch payments");
      toast.error(err.message || "Failed to fetch payments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const handleDelete = async (paymentId: string) => {
    if (!window.confirm("Are you sure you want to delete this payment?")) return;
    try {
      const res = await fetch("/api/cumulativeExpense", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentId }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.error || "Failed to delete");
      setPayments((prev) => prev.filter((p) => p.paymentId !== paymentId));
      toast.success("Payment deleted successfully");
    } catch (err: any) {
      toast.error(err.message || "Failed to delete payment");
    }
  };

  const handleRowClick = async (payment: CumulativePayment) => {
    if (expandedPaymentId === payment.paymentId) {
      setExpandedPaymentId(null); // collapse
      return;
    }

    // fetch expenses only if not already fetched
    if (!expensesMap[payment.paymentId]) {
      try {
        const res = await fetch("/api/ExpenseByIds", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ids: payment.expenseIds }),
        });
        const json = await res.json();
        if (!json.success) throw new Error(json.error || "Failed to fetch expenses");
        setExpensesMap((prev) => ({ ...prev, [payment.paymentId]: json.data }));
      } catch (err: any) {
        toast.error(err.message || "Failed to fetch expenses");
      }
    }

    setExpandedPaymentId(payment.paymentId);
  };

  // Infinite scroll / Load more
  useEffect(() => {
    const handleScroll = () => {
      if (!tableRef.current) return;
      const { scrollTop, clientHeight, scrollHeight } = tableRef.current;
      if (scrollHeight - (scrollTop + clientHeight) < 150 && visibleRowCount < payments.length) {
        setVisibleRowCount((prev) => Math.min(prev + 20, payments.length));
      }
    };

    tableRef.current?.addEventListener("scroll", handleScroll);
    return () => tableRef.current?.removeEventListener("scroll", handleScroll);
  }, [visibleRowCount, payments.length]);

  if (loading) return <div className="p-4">Loading cumulative payments...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;
  if (payments.length === 0) return <div className="p-4">No cumulative payments yet.</div>;

  return (
    <div
      ref={tableRef}
      className="overflow-x-auto rounded-xl shadow p-4 mt-6 bg-white"
      style={{ maxHeight: "70vh" }}
    >
      <h3 className="text-xl font-bold mb-4">Cumulative Payments</h3>
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-900 sticky top-0">
          <tr>
            <th className="p-3 text-left font-black text-white text-xs">#</th>
            <th className="p-3 text-left font-black text-white text-xs">Date</th>
            <th className="p-3 text-left font-black text-white text-xs">Time</th>
            <th className="p-3 text-left font-black text-white text-xs">Paid By</th>
            <th className="p-3 text-right font-black text-white text-xs">Total Amount</th>
            <th className="p-3 text-left font-black text-white text-xs">Expense Count</th>
            <th className="p-3 text-left font-black text-white text-xs">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {payments.slice(0, visibleRowCount).map((p, idx) => (
            <React.Fragment key={p.paymentId}>
              <tr
                className="hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => handleRowClick(p)}
              >
                <td className="p-3 text-gray-600 font-bold">{idx + 1}</td>
                <td className="p-3 text-gray-600">{p.paymentDate}</td>
                <td className="p-3 text-gray-600">{p.paymentTime}</td>
                <td className="p-3 text-gray-600">{p.paidBy || "-"}</td>
                <td className="p-3 text-right font-bold text-gray-900">
                  ₹{p.totalAmount.toLocaleString()}
                </td>
                <td className="p-3 text-gray-600">{p.expenseIds.length}</td>
                <td className="p-3 flex gap-2">
                  <button
                    className="px-3 py-1 text-xs font-bold text-red-700 bg-red-100 rounded hover:bg-red-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(p.paymentId);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>

              {/* Expanded Expenses */}
              {expandedPaymentId === p.paymentId && expensesMap[p.paymentId] && (
                <tr>
                  <td colSpan={7} className="p-3 bg-gray-50">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="p-2 text-left text-xs font-bold">Shop</th>
                          <th className="p-2 text-left text-xs font-bold">Description</th>
                          <th className="p-2 text-right text-xs font-bold">Amount</th>
                          <th className="p-2 text-left text-xs font-bold">Date</th>
                          <th className="p-2 text-left text-xs font-bold">Role</th>
                          <th className="p-2 text-left text-xs font-bold">Employee</th>
                        </tr>
                      </thead>
                      <tbody>
                        {expensesMap[p.paymentId].map((exp) => (
                          <tr key={exp._id} className="bg-white hover:bg-gray-100">
                            <td className="p-2">{exp.shop || "-"}</td>
                            <td className="p-2">{exp.description}</td>
                            <td className="p-2 text-right font-bold">₹{exp.amount.toLocaleString()}</td>
                            <td className="p-2">{exp.date}</td>
                            <td className="p-2 capitalize">{exp.role || "-"}</td>
                            <td className="p-2">{exp.employeeName || "-"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {visibleRowCount < payments.length && (
        <div className="text-center py-4 text-sm font-bold text-gray-600">
          <button
            onClick={() => setVisibleRowCount((prev) => Math.min(prev + 20, payments.length))}
            className="text-blue-600 hover:text-blue-800 font-bold"
          >
            Load More ({payments.length - visibleRowCount} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
