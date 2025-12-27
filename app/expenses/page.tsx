"use client";
import { useEffect, useState } from "react";

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("/api/expenses/list")
      .then(res => res.json())
      .then(setExpenses);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Expenses</h1>
      {expenses.map((e: any) => (
        <div key={e._id} className="border p-3 rounded mb-2">
          <div className="font-semibold">{e.title}</div>
          <div>₹{e.amount} · {e.category}</div>
          <div className="text-sm text-gray-500">{e.status}</div>
        </div>
      ))}
    </div>
  );
}
