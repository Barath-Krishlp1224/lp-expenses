"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { FiCalendar, FiDownload, FiFilter, FiSearch } from "react-icons/fi";
import { Employee, Expense, FilterTotals, Role } from "../../lib/expense-types";
import {
  formatDate,
  getExpenseAmount,
  getExpenseDisplayName,
  getExpenseQuantity,
  getExpenseTotal,
  getExpenseUnitPrice,
  getWeekLabel,
  isExpensePaid,
} from "../../lib/expense-helpers";

interface ExpenseFiltersProps {
  setShowHistory: (show: boolean) => void;
  showHistory: boolean;
  filterSearch: string;
  setFilterSearch: (value: string) => void;
  filterShop: string;
  setFilterShop: (value: string) => void;
  shopSuggestions: string[];
  filterRole: "all" | Role;
  setFilterRole: (value: "all" | Role) => void;
  filterStatus: "all" | "paid" | "unpaid";
  setFilterStatus: (value: "all" | "paid" | "unpaid") => void;
  filterEmployee: string;
  setFilterEmployee: (value: string) => void;
  employees: Employee[];
  filterFrom: string;
  setFilterFrom: (value: string) => void;
  filterTo: string;
  setFilterTo: (value: string) => void;
  filteredExpenses: Expense[];
  filterProduct: string;
  setFilterProduct: (value: string) => void;
  productSuggestions: string[];
  filterWeek: string;
  setFilterWeek: (value: string) => void;
  weekOptions: Array<{ value: string; label: string }>;
  totals: FilterTotals;
}

const convertToCSV = (data: Expense[], employees: Employee[]) => {
  const employeeMap = employees.reduce((map, employee) => {
    map.set(employee._id, employee.name);
    return map;
  }, new Map<string, string>());

  const headers = [
    "Date",
    "Week",
    "Shop/Vendor",
    "Product",
    "Notes",
    "Role",
    "Employee",
    "Quantity",
    "Price Per Unit",
    "Total Amount",
    "Subtotal (with items)",
    "Status",
    "Expense Items",
  ];

  const rows = data.map((expense) => {
    const employeeName = expense.employeeId
      ? employeeMap.get(expense.employeeId) || expense.employeeName || "-"
      : "-";

    const subtasksList = (expense.subtasks || [])
      .map((subtask) => `${subtask.title}: ₹${(subtask.amount || 0).toFixed(2)}${subtask.employeeName ? ` (${subtask.employeeName})` : ""}`)
      .join("; ");

    return [
      formatDate(expense.date),
      getWeekLabel(expense.weekStart),
      (expense.shop || "-").replace(/,/g, ""),
      getExpenseDisplayName(expense).replace(/,/g, ""),
      (expense.description || "-").replace(/,/g, ""),
      expense.role,
      employeeName.replace(/,/g, ""),
      String(getExpenseQuantity(expense)),
      getExpenseUnitPrice(expense).toFixed(2),
      getExpenseAmount(expense).toFixed(2),
      getExpenseTotal(expense).toFixed(2),
      isExpensePaid(expense) ? "Done" : "Pending",
      subtasksList ? `"${subtasksList.replace(/"/g, '""')}"` : "",
    ];
  });

  return encodeURI(
    "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((row) => row.join(","))].join("\n")
  );
};

const SummaryCard = ({ label, value }: { label: string; value: number }) => (
  <div className="stat-card">
    <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{label}</div>
    <div className="mt-2 text-xl font-bold tracking-tight text-slate-900">
      ₹{value.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
    </div>
  </div>
);

function ExpenseFilters(props: ExpenseFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const handleDownloadCSV = () => {
    if (props.filteredExpenses.length === 0) {
      toast.warn("No expenses match the current filters to download.");
      return;
    }

    const csvUri = convertToCSV(props.filteredExpenses, props.employees);
    const link = document.createElement("a");
    link.setAttribute("href", csvUri);
    link.setAttribute("download", `expenses_report_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success(`${props.filteredExpenses.length} expenses downloaded!`);
  };

  const FilterItem = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </span>
      {children}
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Action Bar */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative flex items-center">
            <FiSearch className="absolute left-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={props.filterSearch}
              onChange={(e) => props.setFilterSearch(e.target.value)}
              placeholder="Search products, notes, or vendors..."
              className="input-field !w-64 !pl-10"
            />
          </div>

          <button
            onClick={() => setShowFilters((current) => !current)}
            className={`btn-secondary !p-2.5 ${showFilters ? "!bg-slate-100 !border-slate-300" : ""}`}
            title="Show Filters"
          >
            <FiFilter size={16} />
          </button>

          <button
            onClick={() => setShowDate((current) => !current)}
            className={`btn-secondary !p-2.5 ${showDate ? "!bg-slate-100 !border-slate-300" : ""}`}
            title="Date Range"
          >
            <FiCalendar size={16} />
          </button>

          <button
            onClick={() => props.setShowHistory(!props.showHistory)}
            className={`btn-secondary ${props.showHistory ? "!bg-slate-100 !border-slate-300" : ""}`}
          >
            {props.showHistory ? "Hide History" : "Show History"}
          </button>

          <button
            onClick={handleDownloadCSV}
            className="btn-secondary"
          >
            <FiDownload size={14} />
            Export
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <SummaryCard label="Filtered Total" value={props.totals.filteredTotal} />
        <SummaryCard
          label={props.filterProduct === "all" ? "Current Product Total" : `${props.filterProduct} Total`}
          value={props.totals.selectedProductTotal}
        />
        <SummaryCard
          label={props.filterWeek === "all" ? "Current Week Total" : `${getWeekLabel(props.filterWeek)} Total`}
          value={props.totals.selectedWeekTotal}
        />
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <FilterItem label="Shop">
              <select
                value={props.filterShop}
                onChange={(e) => props.setFilterShop(e.target.value)}
                className="select-field"
              >
                <option value="all">All Shops</option>
                {props.shopSuggestions.map((shop) => (
                  <option key={shop} value={shop}>
                    {shop}
                  </option>
                ))}
              </select>
            </FilterItem>

            <FilterItem label="Product">
              <select
                value={props.filterProduct}
                onChange={(e) => props.setFilterProduct(e.target.value)}
                className="select-field"
              >
                <option value="all">All Products</option>
                {props.productSuggestions.map((product) => (
                  <option key={product} value={product}>
                    {product}
                  </option>
                ))}
              </select>
            </FilterItem>

            <FilterItem label="Week">
              <select
                value={props.filterWeek}
                onChange={(e) => props.setFilterWeek(e.target.value)}
                className="select-field"
              >
                <option value="all">All Weeks</option>
                {props.weekOptions.map((week) => (
                  <option key={week.value} value={week.value}>
                    {week.label}
                  </option>
                ))}
              </select>
            </FilterItem>

            <FilterItem label="Role">
              <select
                value={props.filterRole}
                onChange={(e) => props.setFilterRole(e.target.value as "all" | Role)}
                className="select-field"
              >
                <option value="all">All Roles</option>
                <option value="founder">Founder</option>
                <option value="manager">Manager</option>
                <option value="other">Other</option>
              </select>
            </FilterItem>

            <FilterItem label="Status">
              <select
                value={props.filterStatus}
                onChange={(e) => props.setFilterStatus(e.target.value as "all" | "paid" | "unpaid")}
                className="select-field"
              >
                <option value="all">All Status</option>
                <option value="paid">Done/Paid</option>
                <option value="unpaid">Pending</option>
              </select>
            </FilterItem>

            <FilterItem label="Employee">
              <select
                value={props.filterEmployee}
                onChange={(e) => props.setFilterEmployee(e.target.value)}
                className="select-field"
              >
                <option value="all">All Employees</option>
                {props.employees.map((employee) => (
                  <option key={employee._id} value={employee._id}>
                    {employee.name}
                  </option>
                ))}
              </select>
            </FilterItem>
          </div>
        </div>
      )}

      {/* Date Range Panel */}
      {showDate && (
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FilterItem label="From">
              <input
                type="date"
                value={props.filterFrom}
                onChange={(e) => props.setFilterFrom(e.target.value)}
                className="input-field"
              />
            </FilterItem>
            <FilterItem label="To">
              <input
                type="date"
                value={props.filterTo}
                onChange={(e) => props.setFilterTo(e.target.value)}
                className="input-field"
              />
            </FilterItem>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExpenseFilters;