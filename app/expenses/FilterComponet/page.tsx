import React from 'react'
import { toast } from 'react-toastify';
import { formatDate } from '../components/types';
import { Employee, Expense, isExpensePaid } from '../types';

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

    const detailRows = data.map((exp) => {
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
    }).flat();

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

    const csvContent =
        "data:text/csv;charset=utf-8," +
        [
            headers.join(","),
            ...detailRows.map((e) => e.join(",")),
            totalRow.join(","),
        ].join("\n");

    return encodeURI(csvContent);
};

function FilterComponent({
    setShowHistory, showHistory, filterSearch, setFilterSearch, filterShop, setFilterShop, shopSuggestions, filterRole, setFilterRole,
    filterStatus, setFilterStatus, filterEmployee, setFilterEmployee, employees, filterFrom, setFilterFrom, filterTo, setFilterTo, filteredExpenses
}: any) {
    const handleDownloadCSV = () => {
        if (filteredExpenses.length === 0) {
            toast.warn("No expenses match the current filters to download.");
            return;
        }

        const csvUri = convertToCSV(filteredExpenses, employees);
        const link = document.createElement("a");
        link.setAttribute("href", csvUri);
        link.setAttribute(
            "download",
            `expenses_report_${new Date().toISOString().slice(0, 10)}.csv`
        );
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success(`${filteredExpenses.length} expenses downloaded!`);
    };
    return (
        <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 sticky top-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-gray-900">Filters</h3>
                <button
                    type="button"
                    onClick={() => setShowHistory((s: any) => !s)}
                    className="px-4 py-2 rounded-lg text-xs font-bold text-teal-700 bg-teal-100 hover:bg-teal-200 transition-all"
                >
                    {showHistory ? "Hide" : "History"}
                </button>
            </div>
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Search
                    </label>
                    <input
                        value={filterSearch}
                        onChange={(e) => setFilterSearch(e.target.value)}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all"
                        placeholder="Search..."
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Shop
                    </label>
                    <select
                        value={filterShop}
                        onChange={(e) => setFilterShop(e.target.value)}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white"
                    >
                        <option value="all">All Shops</option>
                        {shopSuggestions.map((shop: any) => (
                            <option key={shop} value={shop}>
                                {shop}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Role
                    </label>
                    <select
                        value={filterRole}
                        onChange={(e) => setFilterRole(e.target.value as any)}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white"
                    >
                        <option value="all">All Roles</option>
                        <option value="founder">Founder</option>
                        <option value="manager">Manager</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Status
                    </label>
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value as any)}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white"
                    >
                        <option value="all">All Status</option>
                        <option value="paid">Done/Paid</option>
                        <option value="unpaid">Pending</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Employee
                    </label>
                    <select
                        value={filterEmployee}
                        onChange={(e) => setFilterEmployee(e.target.value)}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white"
                    >
                        <option value="all">All Employees</option>
                        {employees.map((emp: any) => (
                            <option key={emp._id} value={emp._id}>
                                {emp.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        From Date
                    </label>
                    <input
                        type="date"
                        value={filterFrom}
                        onChange={(e) => setFilterFrom(e.target.value)}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        To Date
                    </label>
                    <input
                        type="date"
                        value={filterTo}
                        onChange={(e) => setFilterTo(e.target.value)}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white"
                    />
                </div>

                <div className="pt-4">
                    <button
                        type="button"
                        onClick={handleDownloadCSV}
                        className="w-full px-6 py-3 rounded-xl font-bold text-white bg-green-600 hover:bg-green-700 shadow-lg transition-all flex items-center justify-center text-sm"
                    >
                        <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            ></path>
                        </svg>
                        Download Filtered ({filteredExpenses.length})
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FilterComponent