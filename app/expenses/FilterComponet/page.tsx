"use client"
import React, { useState } from "react";
import { toast } from "react-toastify";
import { formatDate } from "../components/types";
import { Employee, Expense, isExpensePaid } from "../types";
import { FiFilter, FiCalendar, FiSearch, FiDownload } from "react-icons/fi"; // small filter icons
import { EMPLOYEES } from "../InitialBudget/EmployeesList";

const convertToCSV = (data: Expense[], employees: Employee[]) => {
    const employeeMap = employees.reduce((map, emp) => {
        map.set(emp._id, emp.name);
        return map;
    }, new Map<string, string>());

    const headers = [
        "Date",
        "Shop/Vendor",
        "Description",
        "Role",
        "Employee",
        "Amount (Base)",
        "Sub Expenses Total",
        "Total Expense",
        "Status",
    ];

    let grandTotalAmountBase = 0;
    let grandTotalSubExpenses = 0;
    let grandTotalExpense = 0;

    const detailRows = data
        .map((exp) => {
            const subsTotal = (exp.subtasks || []).reduce(
                (s: any, sub: any) => s + (sub.amount || 0),
                0
            );
            const total = exp.amount + subsTotal;
            const paid = isExpensePaid(exp) ? "Done" : "Pending";
            const employeeName = exp.employeeId
                ? employeeMap.get(exp.employeeId) || exp.employeeName || "-"
                : "-";

            grandTotalAmountBase += exp.amount;
            grandTotalSubExpenses += subsTotal;
            grandTotalExpense += total;

            const mainRow = [
                formatDate(exp.date),
                (exp.shop || "-").replace(/,/g, ""),
                exp.description.replace(/,/g, ""),
                exp.role,
                employeeName.replace(/,/g, ""),
                exp.amount.toFixed(2),
                subsTotal.toFixed(2),
                total.toFixed(2),
                paid,
            ];

            const subRows = (exp.subtasks || []).map((sub: any) => {
                const subEmployeeName = sub.employeeId
                    ? employeeMap.get(sub.employeeId) || sub.employeeName || "-"
                    : "-";
                const subAmountValue = sub.amount ?? 0;

                return [
                    formatDate(sub.date),
                    "",
                    `  -> ${sub.title}`.replace(/,/g, ""),
                    exp.role,
                    subEmployeeName.replace(/,/g, ""),
                    "0.00",
                    subAmountValue.toFixed(2),
                    subAmountValue.toFixed(2),
                    sub.done ? "Done (Sub)" : "Pending (Sub)",
                ];
            });

            return [mainRow, ...subRows];
        })
        .flat();

    const totalRow = [
        "",
        "",
        "GRAND TOTAL",
        "",
        "",
        grandTotalAmountBase.toFixed(2),
        grandTotalSubExpenses.toFixed(2),
        grandTotalExpense.toFixed(2),
        "",
    ];

    return encodeURI(
        "data:text/csv;charset=utf-8," +
        [headers.join(","), ...detailRows.map((e) => e.join(",")), totalRow.join(",")].join("\n")
    );
};

function FilterComponent({
    setShowHistory,
    showHistory,
    filterSearch,
    setFilterSearch,
    filterShop,
    setFilterShop,
    shopSuggestions,
    filterRole,
    setFilterRole,
    filterStatus,
    setFilterStatus,
    filterEmployee,
    setFilterEmployee,
    employees,
    filterFrom,
    setFilterFrom,
    filterTo,
    setFilterTo,
    filteredExpenses,
}: any) {
    console.log("employeesemployees", employees);
    const [showFilters, setShowFilters] = useState(false);
    const [showDate, setShowDate] = useState(false);

    const inputClass =
        "border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-full bg-white text-gray-800 placeholder:text-gray-700";

    const FilterItem = ({ label, children }: { label: string; children: React.ReactNode }) => (
        <div className="flex flex-col">
            <span className="text-xs font-semibold text-gray-800 mb-1">{label}</span>
            {children}
        </div>
    );

    const handleDownloadCSV = () => {
        if (filteredExpenses.length === 0) {
            toast.warn("No expenses match the current filters to download.");
            return;
        }
        const csvUri = convertToCSV(filteredExpenses, employees);
        const link = document.createElement("a");
        link.setAttribute("href", csvUri);
        link.setAttribute("download", `expenses_report_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success(`${filteredExpenses.length} expenses downloaded!`);
    };

    return (
        <div className=" rounded-2xl sticky top-6">
            {/* Header Bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-4">
                {/* Left side: Search + Filter + Date */}
                <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
                    {/* Search Input */}
                    <div className="relative flex items-center">
                        <FiSearch className="absolute left-3 text-gray-800 w-4 h-4" />
                        <input
                            type="text"
                            value={filterSearch}
                            onChange={(e) => setFilterSearch(e.target.value)}
                            placeholder="Search..."
                            className="border border-gray-300 rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-60 bg-white text-gray-800 placeholder:text-gray-700"
                        />
                    </div>

                    {/* Filter Button */}
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="p-2 rounded-md bg-blue-600 hover:bg-blue-700 transition text-white shadow-sm"
                        title="Show Filters"
                    >
                        <FiFilter size={18} />
                    </button>

                    {/* Date Button */}
                    <button
                        onClick={() => setShowDate(!showDate)}
                        className="p-2 rounded-md bg-blue-600 hover:bg-blue-700 transition text-white shadow-sm"
                        title="Date Range"
                    >
                        <FiCalendar size={18} />
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
                {/* Right side: Download Button */}

            </div>

            {/* Filters Grid */}
            {showFilters && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <FilterItem label="Shop">
                        <select value={filterShop} onChange={(e) => setFilterShop(e.target.value)} className={inputClass}>
                            <option value="all">All Shops</option>
                            {shopSuggestions.map((s: any) => (
                                <option key={s} value={s}>
                                    {s}
                                </option>
                            ))}
                        </select>
                    </FilterItem>

                    <FilterItem label="Role">
                        <select value={filterRole} onChange={(e) => setFilterRole(e.target.value)} className={inputClass}>
                            <option value="all">All Roles</option>
                            <option value="founder">Founder</option>
                            <option value="manager">Manager</option>
                            <option value="other">Other</option>
                        </select>
                    </FilterItem>

                    <FilterItem label="Status">
                        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className={inputClass}>
                            <option value="all">All Status</option>
                            <option value="paid">Done/Paid</option>
                            <option value="unpaid">Pending</option>
                        </select>
                    </FilterItem>

                    <FilterItem label="Employee">
                        <select value={filterEmployee} onChange={(e) => setFilterEmployee(e.target.value)} className={inputClass}>
                            <option value="all">All Employees</option>
                            {EMPLOYEES.map((emp: any) => (
                                <option key={emp._id} value={emp._id}>
                                    {emp.name}
                                </option>
                            ))}
                        </select>
                    </FilterItem>
                </div>
            )}

            {/* Date Grid */}
            {showDate && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <FilterItem label="From">
                        <input type="date" value={filterFrom} onChange={(e) => setFilterFrom(e.target.value)} className={inputClass} />
                    </FilterItem>
                    <FilterItem label="To">
                        <input type="date" value={filterTo} onChange={(e) => setFilterTo(e.target.value)} className={inputClass} />
                    </FilterItem>
                </div>
            )}

        </div>
    );
}
export default FilterComponent;
