"use client";

import { useEffect, useMemo, useState } from "react";
import { Wallet, CheckCircle2, Clock, Plus, X, Store, FileText } from "lucide-react";

type Expense = {
  _id: string;
  shopName: string;
  description: string;
  amount: number;
  category: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  date: string;
  createdBy: { _id: string; name: string } | null;
};

type Employee = {
  _id: string;
  name: string;
};

export default function DashboardPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    shopName: "",
    description: "",
    amount: "",
    category: "",
    date: new Date().toISOString().split("T")[0],
    createdBy: "",
  });

  const fetchData = async () => {
    try {
      const [expRes, empRes] = await Promise.all([
        fetch("/api/expenses/list"),
        fetch("https://check-seven-steel.vercel.app/api/employees") 
      ]);

      const expData = await expRes.json();
      const empData = await empRes.json();

      setExpenses(Array.isArray(expData) ? expData : []);
      
      if (Array.isArray(empData)) {
        setEmployees(empData);
      } else if (empData && typeof empData === 'object') {
        const list = empData.employees || empData.data || empData.users || [];
        setEmployees(list);
      }
    } catch (err) {
      console.error("Fetch failed", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddExpense = async () => {
    await fetch("/api/expenses/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        amount: formData.amount ? Number(formData.amount) : 0,
      }),
    });

    setFormData({
      shopName: "",
      description: "",
      amount: "",
      category: "",
      date: new Date().toISOString().split("T")[0],
      createdBy: "",
    });
    setIsModalOpen(false);
    fetchData();
  };

  const stats = useMemo(() => {
    const total = expenses.reduce((sum, e) => sum + (e.amount || 0), 0);
    const approved = expenses
      .filter((e) => e.status === "APPROVED")
      .reduce((sum, e) => sum + (e.amount || 0), 0);
    const pending = expenses.filter((e) => e.status === "PENDING").length;
    return { total, approved, pending };
  }, [expenses]);

  if (loading) return <div className="p-6 text-gray-600">Loading Dashboard...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-8 relative text-gray-900">
      <h1 className="text-3xl font-bold">Expense Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Volume" value={`₹${stats.total}`} icon={<Wallet />} />
        <StatCard title="Approved" value={`₹${stats.approved}`} icon={<CheckCircle2 />} />
        <StatCard title="Pending" value={stats.pending} icon={<Clock />} />
      </div>

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b bg-gray-50/50 font-bold">Recent Transactions ({expenses.length})</div>
        <div className="divide-y divide-gray-100">
          {expenses.length > 0 ? (
            expenses.map((e) => (
              <div key={e._id} className="p-4 flex justify-between items-center hover:bg-gray-50">
                <div className="space-y-1">
                  <div className="font-semibold text-gray-900">{e.shopName || "Unnamed Shop"}</div>
                  <div className="text-xs text-gray-500 flex flex-wrap gap-2">
                    <span className="flex items-center gap-1"><FileText size={12}/> {e.description || "No description"}</span>
                    <span>•</span>
                    <span>{e.date}</span>
                    <span>•</span>
                    <span className="text-blue-600 font-medium italic">By: {e.createdBy?.name || "N/A"}</span>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end gap-1">
                  <div className="font-bold">₹{e.amount}</div>
                  <StatusBadge status={e.status} />
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center text-gray-400">No transactions recorded yet.</div>
          )}
        </div>
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all z-40"
      >
        <Plus size={32} />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-5 right-5 text-gray-400">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-6">Add Expense</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="text-sm font-semibold text-gray-700 mb-1 block">Shop Name</label>
                <input
                  value={formData.shopName}
                  onChange={(e) => setFormData({...formData, shopName: e.target.value})}
                  placeholder="Merchant name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 placeholder-gray-500 text-gray-900 outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-semibold text-gray-700 mb-1 block">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="What was bought?"
                  rows={2}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 placeholder-gray-500 text-gray-900 outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">Amount</label>
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  placeholder="0.00"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 placeholder-gray-500 text-gray-900 outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">Category</label>
                <input
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  placeholder="Tools, food, etc."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 placeholder-gray-500 text-gray-900 outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">Who Paid</label>
                <select
                  value={formData.createdBy}
                  onChange={(e) => setFormData({...formData, createdBy: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-900 outline-none"
                >
                  <option value="">Select Employee</option>
                  {employees.map((emp) => (
                    <option key={emp._id} value={emp._id}>{emp.name}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleAddExpense}
                className="md:col-span-2 bg-blue-600 text-white rounded-xl py-3.5 font-bold hover:bg-blue-700"
              >
                Save Transaction
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ title, value, icon }: { title: string; value: string | number; icon: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center gap-5 shadow-sm">
      <div className="p-4 bg-blue-50 text-blue-600 rounded-xl">{icon}</div>
      <div>
        <div className="text-sm font-bold text-gray-400 uppercase tracking-tight">{title}</div>
        <div className="text-2xl font-black text-gray-900">{value}</div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    APPROVED: "bg-green-100 text-green-700 border-green-200",
    PENDING: "bg-amber-100 text-amber-700 border-amber-200",
    REJECTED: "bg-red-100 text-red-700 border-red-200",
  };
  return (
    <span className={`text-[10px] font-black px-2.5 py-1 rounded-full border uppercase tracking-widest ${styles[status as keyof typeof styles] || "bg-gray-100"}`}>
      {status}
    </span>
  );
}