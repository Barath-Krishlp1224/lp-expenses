"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  type Role,
  type Employee,
  type Subtask,
  type Expense,
  type InitialAmountHistoryEntry,
  INITIAL_AMOUNT_CONSTANT,
  getWeekStart,
  isExpensePaid,
} from "./components/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExpenseForm from "./components/ExpenseForm";
import SubExpensesSection from "./components/SubExpensesSection";
import EditExpenseModal from "./components/EditExpenseModal";
import EditSubtaskModal from "./components/EditSubtaskModal";
import CurrentBudgetPeriod from "./BudgetPeriod/page";
import InitialBudget from "./InitialBudget/page";
import FilterComponent from "./FilterComponet/page";
import { getMonthStart, INITIAL_ROWS, ROWS_PER_PAGE } from "./constFunctions";

// Import new components
import ExpensesTable from "./ExpensesTable";
import PaymentHistorySection from "./PaymentHistorySection";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import HeaderSection from "./HeaderSection";
import InitialAmountHistoryModal from "./InitilAmountHistoryModal";
import AddExpenseButton from "./AddExpenseButtonState";
import { EMPLOYEES } from "./InitialBudget/EmployeesList";

interface EditExpenseFields {
  shop: string;
  description: string;
  amount: string;
  date: string;
  role: Role;
  employeeId: string;
  employeeName: string;
}

const ExpensesContent: React.FC = () => {
  // State declarations (keep the same)
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [initialAmountHistory, setInitialAmountHistory] = useState<
    InitialAmountHistoryEntry[]
  >([]);
  const [showInitialAmountHistory, setShowInitialAmountHistory] = useState(false);
  const [budgetPeriodStart, setBudgetPeriodStart] = useState(() => {
    const now = new Date().toISOString().slice(0, 10);
    return getMonthStart(now);
  });

  // Form states (keep the same)
  const [shopName, setShopName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [role, setRole] = useState<Role>("founder");
  const [selectedEmployeeId, setSelectedEmployeeId] = useState("");

  // UI states (keep the same)
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [subTitle, setSubTitle] = useState("");
  const [subAmount, setSubAmount] = useState("");
  const [subDate, setSubDate] = useState(
    () => new Date().toISOString().slice(0, 10)
  );
  const [subEmployeeId, setSubEmployeeId] = useState("");

  // Filter states (keep the same)
  const [filterRole, setFilterRole] = useState<"all" | Role>("all");
  const [filterStatus, setFilterStatus] = useState<"all" | "paid" | "unpaid">(
    "all"
  );
  const [filterEmployee, setFilterEmployee] = useState<string>("all");
  const [filterShop, setFilterShop] = useState<string>("all");
  const [filterSearch, setFilterSearch] = useState("");
  const [filterFrom, setFilterFrom] = useState("");
  const [filterTo, setFilterTo] = useState("");

  // History states (keep the same)
  const [showHistory, setShowHistory] = useState(false);
  const [historyEmployeeId, setHistoryEmployeeId] = useState<string>("");
  const [visibleRowCount, setVisibleRowCount] = useState(INITIAL_ROWS);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  // Editing states (keep the same)
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  const [editExpenseFields, setEditExpenseFields] = useState<EditExpenseFields>({
    shop: "",
    description: "",
    amount: "",
    date: "",
    role: "founder" as Role,
    employeeId: "",
    employeeName: "",
  });
  const [editingSubtask, setEditingSubtask] = useState<{
    parentId: string;
    subId: string;
    title: string;
    amount: string;
    date: string;
    employeeId?: string;
  } | null>(null);

  // Effects (keep the same)
  useEffect(() => {
    const fetchInitialAmount = async () => {
      try {
        const res = await fetch("/api/initial-amount");
        const json = await res.json();
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setInitialAmountHistory(json.data);
        } else {
          setInitialAmountHistory([
            {
              amount: INITIAL_AMOUNT_CONSTANT,
              date: new Date().toISOString(),
            },
          ]);
        }
      } catch (err: any) {
        toast.error("Failed to load initial budget from server.");
        setInitialAmountHistory([
          {
            amount: INITIAL_AMOUNT_CONSTANT,
            date: new Date().toISOString(),
          },
        ]);
      }
    };

    fetchInitialAmount();
  }, []);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("/api/expenses");
        const json = await res.json();
        if (!json.success) throw new Error(json.error || "Failed to fetch");

        const fetchedExpenses: Expense[] = (json.data || []).map((e: any) => {
          const paid = typeof e.paid === "boolean" ? e.paid : false;
          const subtasks: Subtask[] = Array.isArray(e.subtasks)
            ? e.subtasks
            : [];
          return {
            ...e,
            paid,
            subtasks,
          } as Expense;
        });

        const sortedExpenses = fetchedExpenses.sort((a, b) => {
          if (a.date > b.date) return 1;
          if (a.date < b.date) return -1;
          return 0;
        });

        setExpenses(sortedExpenses);
      } catch (err: any) {
        setError(err.message || "Failed to load expenses");
        toast.error(err.message || "Failed to load expenses");
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  // useEffect(() => {
  //   const fetchEmployees = async () => {
  //     try {
  //       const res = await fetch("https://check-seven-steel.vercel.app/api/employees");
  //       const data = await res.json();
  //       const arr: Employee[] = Array.isArray(data)
  //         ? data
  //         : data.employees || [];
  //       setEmployees(arr);
  //     } catch (err) {
  //       console.error("Error fetching employees:", err);
  //     }
  //   };
  //   fetchEmployees();
  // }, []);

  // Memoized values (keep the same)
  const shopSuggestions = useMemo(() => {
    const arr = expenses
      .map((e) => (e.shop || "").trim())
      .filter((s) => s.length > 0);
    return Array.from(new Set(arr));
  }, [expenses]);

  const filteredExpenses = useMemo(() => {
    const filtered = expenses.filter((e) => {
      const paid = isExpensePaid(e);

      if (filterRole !== "all" && e.role !== filterRole) return false;
      if (filterStatus === "paid" && !paid) return false;
      if (filterStatus === "unpaid" && paid) return false;
      if (
        filterEmployee !== "all" &&
        filterEmployee &&
        e.employeeId !== filterEmployee
      )
        return false;
      if (filterShop !== "all" && filterShop && e.shop !== filterShop)
        return false;

      if (filterFrom && e.date < filterFrom) return false;
      if (filterTo && e.date > filterTo) return false;

      if (filterSearch) {
        const s = filterSearch.toLowerCase();
        if (
          !(
            e.description.toLowerCase().includes(s) ||
            (e.shop || "").toLowerCase().includes(s)
          )
        )
          return false;
      }

      return true;
    });

    return filtered.sort((a, b) => {
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
      return 0;
    });
  }, [
    expenses,
    filterRole,
    filterStatus,
    filterEmployee,
    filterShop,
    filterFrom,
    filterTo,
    filterSearch,
  ]);

  const visibleExpenses = useMemo(() => {
    return filteredExpenses.slice(0, visibleRowCount);
  }, [filteredExpenses, visibleRowCount]);

  const historyExpenses = useMemo(
    () =>
      expenses
        .filter((e) => isExpensePaid(e))
        .sort((a, b) => (a.date < b.date ? 1 : -1)),
    [expenses]
  );

  const employeeHistory = useMemo(() => {
    if (!historyEmployeeId) return [];
    return historyExpenses.filter((e) => e.employeeId === historyEmployeeId);
  }, [historyEmployeeId, historyExpenses]);

  const employeeHistoryTotal = useMemo(
    () =>
      employeeHistory.reduce((sum, e) => {
        const base = e.amount;
        const subs = (e.subtasks || []).reduce(
          (s, sub) => s + (sub.amount || 0),
          0
        );
        return sum + base + subs;
      }, 0),
    [employeeHistory]
  );

  // Handler functions (keep the same)
  const loadMoreRows = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleRowCount((prevCount) =>
        Math.min(prevCount + ROWS_PER_PAGE, filteredExpenses.length)
      );
      setIsLoadingMore(false);
    }, 300);
  };

  useEffect(() => {
    setVisibleRowCount(INITIAL_ROWS);
  }, [
    filterRole,
    filterStatus,
    filterEmployee,
    filterShop,
    filterFrom,
    filterTo,
    filterSearch,
    budgetPeriodStart
  ]);

  const handleUpdatePaidStatus = async (
    exp: Expense,
    isPaid: boolean,
    updateSubtasks = true
  ) => {
    const action = isPaid ? "Done" : "Pending";
    const confirmMessage = `Are you sure you want to mark the expense "${exp.description}" as ${action}?`;

    if (!window.confirm(confirmMessage)) {
      return;
    }

    let updatedSubtasks = exp.subtasks || [];

    if (updateSubtasks) {
      updatedSubtasks = (exp.subtasks || []).map((sub) => ({
        ...sub,
        done: isPaid ? true : sub.done,
      }));
    }

    const updates = { paid: isPaid, subtasks: updatedSubtasks };

    try {
      const res = await fetch("/api/expenses", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: exp._id, updates }),
      });
      const json = await res.json();
      if (!json.success) {
        toast.error(json.error || "Failed to update status.");
        return;
      }

      const updatedExpense: Expense = {
        ...exp,
        paid: isPaid,
        subtasks: updatedSubtasks,
      };

      setExpenses((prev) =>
        prev.map((e) => (e._id === exp._id ? updatedExpense : e))
      );
      toast.success(`Expense marked as ${isPaid ? "Done" : "Pending"}!`);
    } catch (err: any) {
      toast.error(err.message || "Failed to update status.");
    }
  };

  const handleAddExpense = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim() || !amount || !date) {
      toast.warn("Description, amount, date are required.");
      return;
    }

    if (role === "manager" && !selectedEmployeeId) {
      toast.warn("Select employee for Manager role.");
      return;
    }

    const payload = {
      description: description.trim(),
      amount: Number(amount),
      date,
      weekStart: getWeekStart(date),
      shop: shopName.trim(),
      role,
      employeeId: selectedEmployeeId || null,
      employeeName:
        selectedEmployeeId &&
        EMPLOYEES.find((e) => e._id === selectedEmployeeId)?.name,
      subtasks: [],
    };

    try {
      const res = await fetch("/api/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!json.success) {
        toast.error(json.error || "Failed to add expense.");
        return;
      }

      const created: Expense = {
        ...json.data,
        paid: typeof json.data.paid === "boolean" ? json.data.paid : false,
        subtasks: Array.isArray(json.data.subtasks) ? json.data.subtasks : [],
      };

      setExpenses((prev) => {
        const newExpenses = [...prev, created];
        return newExpenses.sort((a, b) => {
          if (a.date > b.date) return 1;
          if (a.date < b.date) return -1;
          return 0;
        });
      });

      setShopName("");
      setDescription("");
      setAmount("");
      setDate(new Date().toISOString().slice(0, 10));
      setRole("founder");
      setSelectedEmployeeId("");
      setShowAddForm(false);
      toast.success("Expense added successfully!");
    } catch (err: any) {
      toast.error(err.message || "Failed to add expense.");
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
    setSubTitle("");
    setSubAmount("");
    setSubDate(new Date().toISOString().slice(0, 10));
    setSubEmployeeId("");
  };

  // const handleAddSubtask = async (e: React.FormEvent, parent: Expense) => {
  //   e.preventDefault();
  //   if (!expandedId) return;
  //   if (!subTitle.trim() || !subAmount) {
  //     toast.warn("Sub description and amount required.");
  //     return;
  //   }

  //   const newSub: Subtask = {
  //     id: Math.random().toString(36).slice(2, 9),
  //     title: subTitle.trim(),
  //     done: isExpensePaid(parent),
  //     amount: Number(subAmount),
  //     date: subDate,
  //     employeeId: subEmployeeId || undefined,
  //     employeeName:
  //       subEmployeeId &&
  //       EMPLOYEES.find((e) => e._id === subEmployeeId)?.name,
  //   }
  //   console.log("newSubnewSub",newSub);;
  // }

  const handleAddSubtask = async (e: React.FormEvent, parent: Expense) => {
    e.preventDefault();
    if (!expandedId) return;
    if (!subTitle.trim() || !subAmount) {
      toast.warn("Sub description and amount required.");
      return;
    }

    const newSub: Subtask = {
      id: Math.random().toString(36).slice(2, 9),
      title: subTitle.trim(),
      done: isExpensePaid(parent),
      amount: Number(subAmount),
      date: subDate,
      employeeId: subEmployeeId || undefined,
      employeeName:
        subEmployeeId &&
        EMPLOYEES.find((e) => e._id === subEmployeeId)?.name,
    };

    const updatedSubtasks = [newSub, ...(parent.subtasks || [])];

    const updates = { subtasks: updatedSubtasks, paid: false };

    try {
      const res = await fetch("/api/expenses", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: parent._id, updates }),
      });
      const json = await res.json();
      if (!json.success) {
        toast.error(json.error || "Failed to add sub expense.");
        return;
      }

      setExpenses((prev) =>
        prev.map((exp) =>
          exp._id === parent._id
            ? { ...exp, subtasks: updatedSubtasks, paid: false }
            : exp
        )
      );
      setSubTitle("");
      setSubAmount("");
      setSubDate(new Date().toISOString().slice(0, 10));
      setSubEmployeeId("");
      toast.success("Sub expense added successfully!");
    } catch (err: any) {
      toast.error(err.message || "Failed to add sub expense.");
    }
  };

  const handleUpdateSubtaskStatus = async (
    parentExp: Expense,
    subtaskId: string,
    isDone: boolean
  ) => {
    const updatedSubtasks = (parentExp.subtasks || []).map((sub) =>
      sub.id === subtaskId ? { ...sub, done: isDone } : sub
    );

    try {
      const res = await fetch("/api/expenses", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: parentExp._id,
          updates: { subtasks: updatedSubtasks },
        }),
      });
      const json = await res.json();
      if (!json.success) {
        toast.error(json.error || "Failed to update subtask status.");
        return;
      }

      const allSubtasksDone = updatedSubtasks.every((sub) => sub.done);
      let newPaidStatus = parentExp.paid;

      if (!parentExp.paid && allSubtasksDone) {
        newPaidStatus = true;
      }

      setExpenses((prev) =>
        prev.map((exp) =>
          exp._id === parentExp._id
            ? { ...exp, subtasks: updatedSubtasks, paid: newPaidStatus }
            : exp
        )
      );

      if (newPaidStatus !== parentExp.paid) {
        await handleUpdatePaidStatus(
          { ...parentExp, subtasks: updatedSubtasks },
          newPaidStatus,
          false
        );
      }
      toast.success("Sub expense status updated!");
    } catch (err: any) {
      toast.error(err.message || "Failed to update subtask status.");
    }
  };

  const handleDeleteSubtask = async (parentExp: Expense, subtaskId: string) => {
    const confirmMessage = `Are you sure you want to delete this sub expense from "${parentExp.description}"? This cannot be undone.`;
    if (!window.confirm(confirmMessage)) {
      return;
    }

    const updatedSubtasks = (parentExp.subtasks || []).filter(
      (sub) => sub.id !== subtaskId
    );

    try {
      const res = await fetch("/api/expenses", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: parentExp._id,
          updates: { subtasks: updatedSubtasks },
        }),
      });
      const json = await res.json();
      if (!json.success) {
        toast.error(json.error || "Failed to delete sub expense.");
        return;
      }

      setExpenses((prev) =>
        prev.map((exp) =>
          exp._id === parentExp._id ? { ...exp, subtasks: updatedSubtasks } : exp
        )
      );
      toast.success("Sub expense deleted successfully!");
    } catch (err: any) {
      toast.error(err.message || "Failed to delete sub expense.");
    }
  };

  const handleDeleteExpense = async (exp: Expense) => {
    const confirmMessage = `Are you sure you want to delete the expense "${exp.description}"? This cannot be undone.`;
    if (!window.confirm(confirmMessage)) {
      return;
    }

    try {
      const res = await fetch("/api/expenses", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: exp._id }),
      });
      const json = await res.json();
      if (!json.success) {
        toast.error(json.error || "Failed to delete expense.");
        return;
      }

      setExpenses((prev) => prev.filter((e) => e._id !== exp._id));
      toast.success("Expense deleted successfully!");
    } catch (err: any) {
      toast.error(err.message || "Failed to delete expense.");
    }
  };

  const onStartEditExpense = (exp: Expense) => {
    setEditingExpense(exp);
    setEditExpenseFields({
      shop: exp.shop || "",
      description: exp.description || "",
      amount: String(exp.amount || 0),
      date: exp.date || new Date().toISOString().slice(0, 10),
      role: exp.role || "founder",
      employeeId: exp.employeeId || "",
      employeeName: exp.employeeName || "",
    });
  };

  const handleSaveEditExpense = async () => {
    if (!editingExpense) return;

    const employeeIdFromModal = editExpenseFields.employeeId;

    const finalEmployeeId = employeeIdFromModal === ""
      ? null
      : employeeIdFromModal;

    const newEmployeeName = finalEmployeeId
      ? employees.find((e) => e._id === finalEmployeeId)?.name
      : null;

    const updates: any = {
      shop: editExpenseFields.shop,
      description: editExpenseFields.description,
      amount: Number(editExpenseFields.amount),
      date: editExpenseFields.date,
      role: editExpenseFields.role,
      employeeId: finalEmployeeId,
      employeeName: newEmployeeName,
    };

    if (updates.role === "manager" && !updates.employeeId) {
      toast.warn("Employee ID is required for Manager role.");
      return;
    }


    try {
      const res = await fetch("/api/expenses", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingExpense._id, updates }),
      });
      const json = await res.json();
      if (!json.success) {
        toast.error(json.error || "Failed to update expense. Expense not found?");
        return;
      }

      const updated = json.data;
      setExpenses((prev) =>
        prev.map((e) => (e._id === updated._id ? { ...e, ...updated } : e))
      );
      setEditingExpense(null);
      toast.success("Expense updated successfully!");
    } catch (err: any) {
      toast.error(err.message || "Failed to update expense.");
    }
  };

  const onStartEditSubtask = (parent: Expense, sub: Subtask) => {
    setEditingSubtask({
      parentId: parent._id,
      subId: sub.id,
      title: sub.title,
      amount: String(sub.amount ?? ""),
      date: sub.date ?? new Date().toISOString().slice(0, 10),
      employeeId: sub.employeeId ?? "",
    });
  };

  const handleSaveEditSubtask = async () => {
    if (!editingSubtask) return;
    const parent = expenses.find((e) => e._id === editingSubtask.parentId);
    if (!parent) {
      toast.error("Parent expense not found");
      return;
    }

    const subEmployeeIdFromModal = editingSubtask.employeeId;
    const finalSubEmployeeId = subEmployeeIdFromModal === ""
      ? undefined
      : subEmployeeIdFromModal;

    const newSubEmployeeName = finalSubEmployeeId
      ? employees.find((e) => e._id === finalSubEmployeeId)?.name
      : undefined;

    const updatedSubtasks = (parent.subtasks || []).map((s) =>
      s.id === editingSubtask.subId
        ? {
          ...s,
          title: editingSubtask.title,
          amount: Number(editingSubtask.amount),
          date: editingSubtask.date,
          employeeId: finalSubEmployeeId,
          employeeName: newSubEmployeeName,
        }
        : s
    );

    try {
      const res = await fetch("/api/expenses", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: parent._id,
          updates: { subtasks: updatedSubtasks },
        }),
      });
      const json = await res.json();
      if (!json.success) {
        toast.error(json.error || "Failed to update sub expense.");
        return;
      }

      setExpenses((prev) =>
        prev.map((e) =>
          e._id === parent._id ? { ...e, subtasks: updatedSubtasks } : e
        )
      );
      setEditingSubtask(null);
      toast.success("Sub expense updated successfully!");
    } catch (err: any) {
      toast.error(err.message || "Failed to update sub expense.");
    }
  };

  const cancelEditExpense = () => setEditingExpense(null);
  const cancelEditSubtask = () => setEditingSubtask(null);
  const cancelAddForm = () => setShowAddForm(false);

  // Render
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-teal-50 p-8">
      <ToastContainer position="bottom-right" autoClose={3000} />

      <div className="max-w-400 mx-auto space-y-8">
        <HeaderSection />

        <CurrentBudgetPeriod
          budgetPeriodStart={budgetPeriodStart}
        />

        <InitialBudget
          budgetPeriodStart={budgetPeriodStart}
          setShowInitialAmountHistory={setShowInitialAmountHistory}
          expenses={expenses}
          initialAmountHistory={initialAmountHistory}
          setInitialAmountHistory={setInitialAmountHistory}
        />

        {showAddForm && (
          <ExpenseForm
            shopName={shopName}
            setShopName={setShopName}
            date={date}
            setDate={setDate}
            description={description}
            setDescription={setDescription}
            amount={amount}
            setAmount={setAmount}
            role={role}
            setRole={setRole}
            selectedEmployeeId={selectedEmployeeId}
            setSelectedEmployeeId={setSelectedEmployeeId}
            employees={employees}
            onSubmit={handleAddExpense}
            shops={shopSuggestions}
            onCancel={cancelAddForm}
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <FilterComponent
              setShowHistory={setShowHistory}
              showHistory={showHistory}
              filterSearch={filterSearch}
              setFilterSearch={setFilterSearch}
              filterShop={filterShop}
              setFilterShop={setFilterShop}
              shopSuggestions={shopSuggestions}
              filterRole={filterRole}
              setFilterRole={setFilterRole}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
              filterEmployee={filterEmployee}
              setFilterEmployee={setFilterEmployee}
              employees={employees}
              filterFrom={filterFrom}
              setFilterFrom={setFilterFrom}
              filterTo={filterTo}
              setFilterTo={setFilterTo}
              filteredExpenses={filteredExpenses}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-100">
              {loading ? (
                <LoadingState />
              ) : error ? (
                <ErrorState error={error} />
              ) : (
                <ExpensesTable
                  visibleExpenses={visibleExpenses}
                  filteredExpenses={filteredExpenses}
                  isLoadingMore={isLoadingMore}
                  visibleRowCount={visibleRowCount}
                  expandedId={expandedId}
                  employees={employees}
                  onToggleExpand={toggleExpand}
                  onStartEditExpense={onStartEditExpense}
                  onDeleteExpense={handleDeleteExpense}
                  onUpdatePaidStatus={(exp: any, status: any) =>
                    handleUpdatePaidStatus(exp, status)
                  }
                  onLoadMore={loadMoreRows}
                >
                  {expandedId && (
                    <SubExpensesSection
                      parent={expenses.find(e => e._id === expandedId)!}
                      employees={employees}
                      subTitle={subTitle}
                      setSubTitle={setSubTitle}
                      subAmount={subAmount}
                      setSubAmount={setSubAmount}
                      subDate={subDate}
                      setSubDate={setSubDate}
                      subEmployeeId={subEmployeeId}
                      setSubEmployeeId={setSubEmployeeId}
                      onAddSubtask={handleAddSubtask}
                      onUpdateSubtaskStatus={handleUpdateSubtaskStatus}
                      onDeleteSubtask={handleDeleteSubtask}
                      onStartEditSubtask={onStartEditSubtask}
                    />
                  )}
                </ExpensesTable>
              )}
            </div>
          </div>
        </div>

        <PaymentHistorySection
          showHistory={showHistory}
          historyEmployeeId={historyEmployeeId}
          setHistoryEmployeeId={setHistoryEmployeeId}
          employees={employees}
          historyExpenses={historyExpenses}
          employeeHistory={employeeHistory}
          employeeHistoryTotal={employeeHistoryTotal}
        />
      </div>

      <AddExpenseButton
        showAddForm={showAddForm}
        onClick={() => setShowAddForm(true)}
      />

      {editingExpense && (
        <EditExpenseModal
          editingExpense={editingExpense}
          editExpenseFields={editExpenseFields}
          setEditExpenseFields={setEditExpenseFields}
          employees={employees}
          onSave={handleSaveEditExpense}
          onCancel={cancelEditExpense}
        />
      )}

      {editingSubtask && (
        <EditSubtaskModal
          editingSubtask={editingSubtask}
          setEditingSubtask={setEditingSubtask}
          employees={employees}
          onSave={handleSaveEditSubtask}
          onCancel={cancelEditSubtask}
        />
      )}

      {showInitialAmountHistory && (
        <InitialAmountHistoryModal
          history={initialAmountHistory}
          onClose={() => setShowInitialAmountHistory(false)}
        />
      )}
    </div>
  );
};

export default ExpensesContent;