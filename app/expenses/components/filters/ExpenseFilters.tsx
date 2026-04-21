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
    "Status",
  ];

  const rows = data.map((expense) => {
    const employeeName = expense.employeeId
      ? employeeMap.get(expense.employeeId) || expense.employeeName || "-"
      : "-";

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
      isExpensePaid(expense) ? "Done" : "Pending",
    ];
  });

  return encodeURI(
    "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((row) => row.join(","))].join("\n")
  );
};

const inputClass =
  "border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-full bg-white text-gray-800 placeholder:text-gray-700";

const SummaryCard = ({ label, value }: { label: string; value: number }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-4">
    <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</div>
    <div className="mt-2 text-xl font-bold text-gray-900">
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
    <div className="flex flex-col">
      <span className="text-xs font-semibold text-gray-800 mb-1">{label}</span>
      {children}
    </div>
  );

  return (
    <div className="rounded-2xl sticky top-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <div className="relative flex items-center">
            <FiSearch className="absolute left-3 text-gray-800 w-4 h-4" />
            <input
              type="text"
              value={props.filterSearch}
              onChange={(e) => props.setFilterSearch(e.target.value)}
              placeholder="Search..."
              className="border border-gray-300 rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-60 bg-white text-gray-800 placeholder:text-gray-700"
            />
          </div>

          <button
            onClick={() => setShowFilters((current) => !current)}
            className="p-2 rounded-md bg-blue-600 hover:bg-blue-700 transition text-white shadow-sm"
            title="Show Filters"
          >
            <FiFilter size={18} />
          </button>

          <button
            onClick={() => setShowDate((current) => !current)}
            className="p-2 rounded-md bg-blue-600 hover:bg-blue-700 transition text-white shadow-sm"
            title="Date Range"
          >
            <FiCalendar size={18} />
          </button>

          <button
            onClick={() => props.setShowHistory(!props.showHistory)}
            className="px-3 py-2 rounded-md bg-white border border-gray-300 text-sm font-semibold text-gray-800 hover:border-blue-500 transition-all"
          >
            {props.showHistory ? "Hide History" : "Show History"}
          </button>

          <div className="mt-2 md:mt-0">
            <button
              onClick={handleDownloadCSV}
              className="flex items-center gap-2 px-3 py-2 bg-blue-600 border border-blue-700 text-white font-semibold rounded-md hover:bg-blue-700 transition-all shadow-md"
            >
              <FiDownload className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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

      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
          <FilterItem label="Shop">
            <select
              value={props.filterShop}
              onChange={(e) => props.setFilterShop(e.target.value)}
              className={inputClass}
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
              className={inputClass}
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
              className={inputClass}
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
              className={inputClass}
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
              className={inputClass}
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
              className={inputClass}
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
      )}

      {showDate && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <FilterItem label="From">
            <input
              type="date"
              value={props.filterFrom}
              onChange={(e) => props.setFilterFrom(e.target.value)}
              className={inputClass}
            />
          </FilterItem>
          <FilterItem label="To">
            <input
              type="date"
              value={props.filterTo}
              onChange={(e) => props.setFilterTo(e.target.value)}
              className={inputClass}
            />
          </FilterItem>
        </div>
      )}
    </div>
  );
}

export default ExpenseFilters;

