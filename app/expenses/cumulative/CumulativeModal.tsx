"use client";

import React, { useState } from "react";
import { Expense } from "../components/types";

interface CumulativeModalProps {
    isOpen: boolean;
    onClose: () => void;
    expenses: Expense[];
    selectedExpenseIds: string[];
}

export function CumulativeModal({
    isOpen,
    onClose,
    expenses,
    selectedExpenseIds,
}: CumulativeModalProps) {
    if (!isOpen) return null;
    const selectedExpenses = expenses.filter((e) =>
        selectedExpenseIds.includes(e._id)
    );

    const totalAmount = selectedExpenses.reduce((sum, e) => {
        const mainAmount = Number(e.amount) || 0;
        const subTotal = e.subtasks?.reduce(
            (s, sub) => s + (Number(sub.amount) || 0),
            0
        ) || 0;

        return sum + mainAmount + subTotal;
    }, 0);

    const now = new Date();
    const [paymentDate, setPaymentDate] = useState(
        now.toISOString().split("T")[0]
    );
    const [paymentTime, setPaymentTime] = useState(
        now.toTimeString().slice(0, 5)
    );
    const [paidBy, setPaidBy] = useState("");
    const [showExpenses, setShowExpenses] = useState(false);

   const handleAdd = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/cumulativeExpense", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paymentDate,
        paymentTime,
        paidBy: paidBy || undefined,
        totalAmount,
        expenseIds: selectedExpenses.map((e) => e._id),
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Failed to add cumulative payment");
    }

    const data = await res.json();
    console.log("Cumulative Payment Added:", data.data);
    onClose();
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 p-4">
            <form
                onSubmit={handleAdd}
                className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-6 md:p-8 flex flex-col space-y-5"
            >
                <h3 className="text-xl font-bold text-slate-900 text-center">
                    Add Cumulative Payment
                </h3>

                <div className="grid gap-4 md:grid-cols-3">
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                            Payment Date
                        </label>
                        <input
                            type="date"
                            value={paymentDate}
                            onChange={(e) => setPaymentDate(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                            Payment Time
                        </label>
                        <input
                            type="time"
                            value={paymentTime}
                            onChange={(e) => setPaymentTime(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                            Paid By (optional)
                        </label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            value={paidBy}
                            onChange={(e) => setPaidBy(e.target.value)}
                            className="input-field"
                        />
                    </div>
                </div>

                <div className="flex justify-between items-center font-bold text-base border-t border-slate-200 pt-4">
                    <span className="text-slate-700">Total Amount</span>
                    <span className="text-slate-900">₹{totalAmount.toLocaleString("en-IN")}</span>
                </div>

                {selectedExpenses.length > 0 && (
                    <button
                        type="button"
                        onClick={() => setShowExpenses(!showExpenses)}
                        className="self-start btn-secondary !text-xs"
                    >
                        {showExpenses ? "Hide Expenses" : "View Expenses"}
                    </button>
                )}

                {showExpenses && (
                    <div className="border border-slate-200 rounded-xl overflow-hidden max-h-72 overflow-y-auto">
                        <div className="grid grid-cols-3 bg-slate-50 font-semibold text-slate-600 text-xs p-3 border-b border-slate-200">
                            <span>Shop</span>
                            <span>Role</span>
                            <span>Amount</span>
                        </div>
                        {selectedExpenses.map((e) => {
                            const subTotal =
                                e.subtasks?.reduce((s, sub) => s + (sub.amount || 0), 0) || 0;
                            return (
                                <div
                                    key={e._id}
                                    className="grid grid-cols-3 text-sm text-slate-700 p-3 border-b border-slate-100 last:border-b-0"
                                >
                                    <span>{e.shop}</span>
                                    <span>{e.role}</span>
                                    <span>₹{(e.amount + subTotal).toLocaleString("en-IN")}</span>
                                </div>
                            );
                        })}
                    </div>
                )}

                <div className="flex justify-end gap-3 pt-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="btn-secondary"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="btn-primary"
                    >
                        Add Cumulative Payment
                    </button>
                </div>
            </form>
        </div>
    );
}