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
      setExpandedPaymentId(null);
      return;
    }

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

  if (loading) return <div className="p-4 text-sm text-slate-500">Loading cumulative payments...</div>;
  if (error) return <div className="p-4 text-sm text-rose-600">{error}</div>;
  if (payments.length === 0) return <div className="p-4 text-sm text-slate-500">No cumulative payments yet.</div>;

  return (
    <div className="premium-card p-5 md:p-6">
      <h3 className="text-base font-bold text-slate-900 mb-4">Cumulative Payments</h3>
      <div
        ref={tableRef}
        className="overflow-x-auto rounded-xl border border-slate-200"
        style={{ maxHeight: "70vh" }}
      >
        <table className="premium-table min-w-[700px] w-full">
          <thead>
            <tr>
              <th className="!w-10">#</th>
              <th>Date</th>
              <th>Time</th>
              <th>Paid By</th>
              <th className="!text-right">Total Amount</th>
              <th className="!text-right">Expenses</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.slice(0, visibleRowCount).map((p, idx) => (
              <React.Fragment key={p.paymentId ?? `temp-${idx}`}>
                <tr
                  className="cursor-pointer"
                  onClick={() => handleRowClick(p)}
                >
                  <td className="!font-semibold">{idx + 1}</td>
                  <td>{p.paymentDate}</td>
                  <td>{p.paymentTime}</td>
                  <td>{p.paidBy || "-"}</td>
                  <td className="!text-right !font-bold">
                    ₹{p.totalAmount.toLocaleString("en-IN")}
                  </td>
                  <td className="!text-right">{p.expenseIds.length}</td>
                  <td>
                    <button
                      className="rounded-lg bg-rose-50 px-2.5 py-1.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-100"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(p.paymentId);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>

                {expandedPaymentId === p.paymentId && expensesMap[p.paymentId] && (
                  <tr>
                    <td colSpan={7} className="!bg-slate-50 !p-3">
                      <div className="rounded-lg border border-slate-200 bg-white">
                        <table className="w-full text-sm">
                          <thead className="border-b border-slate-100">
                            <tr>
                              <th className="p-2 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">Shop</th>
                              <th className="p-2 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">Description</th>
                              <th className="p-2 text-right text-[10px] font-bold uppercase tracking-wider text-slate-500">Amount</th>
                              <th className="p-2 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">Date</th>
                              <th className="p-2 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">Role</th>
                              <th className="p-2 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">Employee</th>
                            </tr>
                          </thead>
                          <tbody>
                            {expensesMap[p.paymentId].map((exp) => (
                              <tr key={exp._id} className="hover:bg-slate-50">
                                <td className="p-2">{exp.shop || "-"}</td>
                                <td className="p-2">{exp.description}</td>
                                <td className="p-2 text-right font-semibold">₹{exp.amount.toLocaleString("en-IN")}</td>
                                <td className="p-2">{exp.date}</td>
                                <td className="p-2 capitalize">{exp.role || "-"}</td>
                                <td className="p-2">{exp.employeeName || "-"}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {visibleRowCount < payments.length && (
        <div className="mt-3 text-center">
          <button
            onClick={() => setVisibleRowCount((prev) => Math.min(prev + 20, payments.length))}
            className="btn-secondary !text-xs"
          >
            Load More ({payments.length - visibleRowCount} remaining)
          </button>
        </div>
      )}
    </div>
  );
}