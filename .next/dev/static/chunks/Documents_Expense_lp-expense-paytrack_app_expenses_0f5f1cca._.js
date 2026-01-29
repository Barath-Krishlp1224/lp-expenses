(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// types.ts
__turbopack_context__.s([
    "INITIAL_AMOUNT_CONSTANT",
    ()=>INITIAL_AMOUNT_CONSTANT,
    "formatDate",
    ()=>formatDate,
    "getWeekStart",
    ()=>getWeekStart,
    "isExpensePaid",
    ()=>isExpensePaid
]);
const INITIAL_AMOUNT_CONSTANT = 500000;
const formatDate = (dateString)=>{
    if (!dateString) return "-";
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }).replace(/\s/g, "-");
    } catch (error) {
        return dateString;
    }
};
const getWeekStart = (dateString)=>{
    const date = new Date(dateString);
    const day = date.getDay();
    const diff = date.getDate() - day; // Adjust to Sunday (day 0)
    const weekStart = new Date(date.setDate(diff));
    return weekStart.toISOString().slice(0, 10);
};
const isExpensePaid = (expense)=>{
    if (expense.paid) return true;
    if (!expense.subtasks || expense.subtasks.length === 0) return false;
    return expense.subtasks.every((sub)=>sub.done);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// components/ExpenseForm.tsx
"use client";
;
const ExpenseForm = ({ shopName, setShopName, date, setDate, description, setDescription, amount, setAmount, role, setRole, selectedEmployeeId, setSelectedEmployeeId, employees, onSubmit, shops, onCancel })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: onSubmit,
        className: "bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "New Expense"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1 flex-1 mx-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                        children: "Shop / Vendor"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: shopName,
                                        onChange: (e)=>setShopName(e.target.value),
                                        list: "shops-list",
                                        className: "w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 transition-all",
                                        placeholder: "Enter shop name"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                        id: "shops-list",
                                        children: shops.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: s
                                            }, s, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: description,
                                        onChange: (e)=>setDescription(e.target.value),
                                        className: "w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 transition-all",
                                        placeholder: "What is this expense for?"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 md:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                        children: "Amount (₹)"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        value: amount,
                                        onChange: (e)=>setAmount(e.target.value),
                                        className: "w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 transition-all",
                                        placeholder: "0.00"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                        children: "Date"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: date,
                                        onChange: (e)=>setDate(e.target.value),
                                        className: "w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                        children: "Role"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: role,
                                        onChange: (e)=>setRole(e.target.value),
                                        className: "w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 transition-all bg-white cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "founder",
                                                children: "Founder"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "manager",
                                                children: "Manager"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "other",
                                                children: "Other"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                children: "Assign to Employee"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedEmployeeId,
                                onChange: (e)=>setSelectedEmployeeId(e.target.value),
                                className: "w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 transition-all bg-white cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select Employee"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    employees.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: emp._id,
                                            children: emp.name
                                        }, emp._id, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 flex justify-end gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancel,
                        className: "px-6 py-3 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 shadow-lg transition-all",
                        children: "Add Expense"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ExpenseForm;
const __TURBOPACK__default__export__ = ExpenseForm;
var _c;
__turbopack_context__.k.register(_c, "ExpenseForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/types.ts [app-client] (ecmascript)");
// components/SubExpensesSection.tsx
"use client";
;
;
const SubExpensesSection = ({ parent, employees, subTitle, setSubTitle, subAmount, setSubAmount, subDate, setSubDate, subEmployeeId, setSubEmployeeId, onAddSubtask, onUpdateSubtaskStatus, onDeleteSubtask, onStartEditSubtask })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "bg-gradient-to-r from-blue-50 to-teal-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
            className: "p-6",
            colSpan: 10,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border-2 border-blue-200 p-6 shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 pb-4 border-b-2 border-gray-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-lg font-bold text-gray-900",
                            children: [
                                "Sub Expenses for:",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-blue-600",
                                    children: parent.shop || parent.description
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: (ev)=>onAddSubtask(ev, parent),
                        className: "mb-6 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                                children: "Description"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: subTitle,
                                                onChange: (e)=>setSubTitle(e.target.value),
                                                className: "w-full border-2 border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all",
                                                placeholder: "Sub expense title"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                                children: "Amount (₹)"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: subAmount,
                                                onChange: (e)=>setSubAmount(e.target.value),
                                                className: "w-full border-2 border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all",
                                                placeholder: "0.00"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                                children: "Date"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: subDate,
                                                onChange: (e)=>setSubDate(e.target.value),
                                                className: "w-full border-2 border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                                children: "Employee"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: subEmployeeId,
                                                onChange: (e)=>setSubEmployeeId(e.target.value),
                                                className: "w-full border-2 border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select Employee"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    employees.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: emp._id,
                                                            children: emp.name
                                                        }, emp._id, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "px-6 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 shadow-md transition-all text-sm",
                                children: "Add Sub Expense"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    (parent.subtasks || []).length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto rounded-xl border-2 border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "min-w-full text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-gradient-to-r from-gray-100 to-gray-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-4 text-left font-bold text-gray-900 uppercase tracking-wide text-xs",
                                                children: "Description"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 128,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-4 text-right font-bold text-gray-900 uppercase tracking-wide text-xs",
                                                children: "Amount"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 131,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-4 text-left font-bold text-gray-900 uppercase tracking-wide text-xs",
                                                children: "Date"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 134,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-4 text-left font-bold text-gray-900 uppercase tracking-wide text-xs",
                                                children: "Employee"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 137,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-4 text-left font-bold text-gray-900 uppercase tracking-wide text-xs",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 140,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-4 text-left font-bold text-gray-900 uppercase tracking-wide text-xs",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 143,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                        lineNumber: 127,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                    lineNumber: 126,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-gray-200",
                                    children: parent.subtasks.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-blue-50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-4 text-gray-900 font-medium",
                                                    children: sub.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-4 text-right font-bold text-gray-900",
                                                    children: [
                                                        "₹",
                                                        (sub.amount || 0).toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-4 text-gray-600",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(sub.date)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-4 text-gray-600",
                                                    children: sub.employeeName || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: sub.done ? "done" : "pending",
                                                        onChange: (e)=>{
                                                            const newStatus = e.target.value === "done";
                                                            onUpdateSubtaskStatus(parent, sub.id, newStatus);
                                                        },
                                                        className: "border-2 border-gray-200 rounded-lg px-3 py-1.5 text-xs font-semibold outline-none focus:border-blue-500 bg-white cursor-pointer text-gray-900",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "pending",
                                                                children: "Pending"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "done",
                                                                children: "Done"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>onStartEditSubtask(parent, sub),
                                                                className: "px-4 py-1.5 rounded-lg text-xs font-semibold text-blue-700 bg-blue-100 hover:bg-blue-200 transition-all",
                                                                children: "Edit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>onDeleteSubtask(parent, sub.id),
                                                                className: "px-4 py-1.5 rounded-lg text-xs font-semibold text-red-700 bg-red-100 hover:bg-red-200 transition-all",
                                                                children: "Delete"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                                lineNumber: 188,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, sub.id, true, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                            lineNumber: 150,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                    lineNumber: 148,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                            lineNumber: 125,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8 text-gray-500 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium",
                            children: "No sub expenses added yet"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                            lineNumber: 204,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                        lineNumber: 203,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SubExpensesSection;
const __TURBOPACK__default__export__ = SubExpensesSection;
var _c;
__turbopack_context__.k.register(_c, "SubExpensesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// components/EditExpenseModal.tsx
"use client";
;
const EditExpenseModal = ({ editingExpense, editExpenseFields, setEditExpenseFields, employees, onSave, onCancel })=>{
    const setField = (key, value)=>{
        setEditExpenseFields((p)=>({
                ...p,
                [key]: value
            }));
    };
    const handleEmployeeChange = (e)=>{
        const newEmployeeId = e.target.value;
        const selectedEmployee = employees.find((emp)=>emp._id === newEmployeeId);
        setEditExpenseFields((p)=>({
                ...p,
                employeeId: newEmployeeId,
                // Update employeeName when employeeId changes
                employeeName: selectedEmployee ? selectedEmployee.name : ""
            }));
    };
    const handleSave = ()=>{
        // Pass the expense ID to the parent's save handler
        onSave(editingExpense._id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-white/90 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-black text-gray-900 mb-6",
                    children: "Edit Expense"
                }, void 0, false, {
                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-2",
                                            children: "Shop"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: editExpenseFields.shop,
                                            onChange: (e)=>setField("shop", e.target.value),
                                            className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-gray-900 outline-none focus:border-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-2",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: editExpenseFields.description,
                                            onChange: (e)=>setField("description", e.target.value),
                                            className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-gray-900 outline-none focus:border-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-2",
                                            children: "Amount"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: editExpenseFields.amount,
                                            onChange: (e)=>setField("amount", e.target.value),
                                            className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-gray-900 outline-none focus:border-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-2",
                                            children: "Date"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: editExpenseFields.date,
                                            onChange: (e)=>setField("date", e.target.value),
                                            className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-gray-900 outline-none focus:border-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-2",
                                            children: "Role"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editExpenseFields.role,
                                            onChange: (e)=>setField("role", e.target.value),
                                            className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-gray-900 outline-none focus:border-blue-500 bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "founder",
                                                    children: "Founder"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "manager",
                                                    children: "Manager"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "other",
                                                    children: "Other"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-2",
                                            children: "Employee"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editExpenseFields.employeeId,
                                            onChange: handleEmployeeChange,
                                            className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-gray-900 outline-none focus:border-blue-500 bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "None"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                employees.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: emp._id,
                                                        children: emp.name
                                                    }, emp._id, false, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-3 mt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-6 py-3 rounded-xl font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all",
                            onClick: onCancel,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 shadow-lg transition-all",
                            onClick: handleSave,
                            children: "Save Changes"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = EditExpenseModal;
const __TURBOPACK__default__export__ = EditExpenseModal;
var _c;
__turbopack_context__.k.register(_c, "EditExpenseModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// components/EditSubtaskModal.tsx
"use client";
;
const EditSubtaskModal = ({ editingSubtask, setEditingSubtask, employees, onSave, onCancel })=>{
    const setField = (key, value)=>{
        setEditingSubtask((p)=>p ? {
                ...p,
                [key]: value
            } : p);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-2xl w-full max-w-md p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-black text-gray-900 mb-6",
                    children: "Edit Sub Expense"
                }, void 0, false, {
                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                    children: "Title"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: editingSubtask.title,
                                    onChange: (e)=>setField("title", e.target.value),
                                    className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-gray-900 outline-none focus:border-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                    children: "Amount"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    value: editingSubtask.amount,
                                    onChange: (e)=>setField("amount", e.target.value),
                                    className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-gray-900 outline-none focus:border-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                    children: "Date"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: editingSubtask.date,
                                    onChange: (e)=>setField("date", e.target.value),
                                    className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-gray-900 outline-none focus:border-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                    children: "Employee"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: editingSubtask.employeeId,
                                    onChange: (e)=>setField("employeeId", e.target.value),
                                    className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-gray-900 outline-none focus:border-blue-500 bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "None"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        employees.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: emp._id,
                                                children: emp.name
                                            }, emp._id, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-3 mt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-6 py-3 rounded-xl font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all",
                            onClick: onCancel,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 shadow-lg transition-all",
                            onClick: onSave,
                            children: "Save"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = EditSubtaskModal;
const __TURBOPACK__default__export__ = EditSubtaskModal;
var _c;
__turbopack_context__.k.register(_c, "EditSubtaskModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$ExpenseForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$SubExpensesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$EditExpenseModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$EditSubtaskModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const ROWS_PER_PAGE = 10;
const INITIAL_ROWS = 5;
const getMonthStart = (dateString)=>{
    const date = new Date(dateString);
    return new Date(date.getFullYear(), date.getMonth(), 1).toISOString().slice(0, 10);
};
const convertToCSV = (data, employees)=>{
    const employeeMap = employees.reduce((map, emp)=>{
        map.set(emp._id, emp.name);
        return map;
    }, new Map());
    const headers = [
        "Date",
        "Shop/Vendor",
        "Description",
        "Role",
        "Employee",
        "Amount (Base)",
        "Sub Expenses Total",
        "Total Expense",
        "Status"
    ];
    let grandTotalAmountBase = 0;
    let grandTotalSubExpenses = 0;
    let grandTotalExpense = 0;
    const detailRows = data.map((exp)=>{
        const subsTotal = (exp.subtasks || []).reduce((s, sub)=>s + (sub.amount || 0), 0);
        const total = exp.amount + subsTotal;
        const paid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExpensePaid"])(exp) ? "Done" : "Pending";
        const employeeName = exp.employeeId ? employeeMap.get(exp.employeeId) || exp.employeeName || "-" : "-";
        grandTotalAmountBase += exp.amount;
        grandTotalSubExpenses += subsTotal;
        grandTotalExpense += total;
        const mainRow = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(exp.date),
            (exp.shop || "-").replace(/,/g, ""),
            exp.description.replace(/,/g, ""),
            exp.role,
            employeeName.replace(/,/g, ""),
            exp.amount.toFixed(2),
            subsTotal.toFixed(2),
            total.toFixed(2),
            paid
        ];
        const subRows = (exp.subtasks || []).map((sub)=>{
            const subEmployeeName = sub.employeeId ? employeeMap.get(sub.employeeId) || sub.employeeName || "-" : "-";
            const subAmountValue = sub.amount ?? 0;
            return [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(sub.date),
                "",
                `  -> ${sub.title}`.replace(/,/g, ""),
                exp.role,
                subEmployeeName.replace(/,/g, ""),
                "0.00",
                subAmountValue.toFixed(2),
                subAmountValue.toFixed(2),
                sub.done ? "Done (Sub)" : "Pending (Sub)"
            ];
        });
        return [
            mainRow,
            ...subRows
        ];
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
        ""
    ];
    const csvContent = "data:text/csv;charset=utf-8," + [
        headers.join(","),
        ...detailRows.map((e)=>e.join(",")),
        totalRow.join(",")
    ].join("\n");
    return encodeURI(csvContent);
};
const ExpensesContent = ()=>{
    _s();
    const [expenses, setExpenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [employees, setEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [, setEmployeesLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [initialAmountHistory, setInitialAmountHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const initialAmount = initialAmountHistory[0]?.amount || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_AMOUNT_CONSTANT"];
    const [isEditingInitialAmount, setIsEditingInitialAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [initialAmountInput, setInitialAmountInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialAmount.toString());
    const [showInitialAmountHistory, setShowInitialAmountHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [budgetPeriodStart, setBudgetPeriodStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ExpensesContent.useState": ()=>{
            const now = new Date().toISOString().slice(0, 10);
            return getMonthStart(now);
        }
    }["ExpensesContent.useState"]);
    const [shopName, setShopName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ExpensesContent.useState": ()=>new Date().toISOString().slice(0, 10)
    }["ExpensesContent.useState"]);
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("founder");
    const [selectedEmployeeId, setSelectedEmployeeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [expandedId, setExpandedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [subTitle, setSubTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [subAmount, setSubAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [subDate, setSubDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ExpensesContent.useState": ()=>new Date().toISOString().slice(0, 10)
    }["ExpensesContent.useState"]);
    const [subEmployeeId, setSubEmployeeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterRole, setFilterRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [filterEmployee, setFilterEmployee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [filterShop, setFilterShop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [filterSearch, setFilterSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterFrom, setFilterFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterTo, setFilterTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showHistory, setShowHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [historyEmployeeId, setHistoryEmployeeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [visibleRowCount, setVisibleRowCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_ROWS);
    const [isLoadingMore, setIsLoadingMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const tableRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showAddForm, setShowAddForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingExpense, setEditingExpense] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editExpenseFields, setEditExpenseFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        shop: "",
        description: "",
        amount: "",
        date: "",
        role: "founder",
        employeeId: "",
        employeeName: ""
    });
    const [editingSubtask, setEditingSubtask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExpensesContent.useEffect": ()=>{
            const fetchInitialAmount = {
                "ExpensesContent.useEffect.fetchInitialAmount": async ()=>{
                    try {
                        const res = await fetch("/api/initial-amount");
                        const json = await res.json();
                        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
                            setInitialAmountHistory(json.data);
                        } else {
                            setInitialAmountHistory([
                                {
                                    amount: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_AMOUNT_CONSTANT"],
                                    date: new Date().toISOString()
                                }
                            ]);
                        }
                    } catch (err) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load initial budget from server.");
                        setInitialAmountHistory([
                            {
                                amount: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_AMOUNT_CONSTANT"],
                                date: new Date().toISOString()
                            }
                        ]);
                    }
                }
            }["ExpensesContent.useEffect.fetchInitialAmount"];
            fetchInitialAmount();
        }
    }["ExpensesContent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExpensesContent.useEffect": ()=>{
            const fetchExpenses = {
                "ExpensesContent.useEffect.fetchExpenses": async ()=>{
                    try {
                        setLoading(true);
                        setError(null);
                        const res = await fetch("/api/expenses");
                        const json = await res.json();
                        if (!json.success) throw new Error(json.error || "Failed to fetch");
                        const fetchedExpenses = (json.data || []).map({
                            "ExpensesContent.useEffect.fetchExpenses.fetchedExpenses": (e)=>{
                                const paid = typeof e.paid === "boolean" ? e.paid : false;
                                const subtasks = Array.isArray(e.subtasks) ? e.subtasks : [];
                                return {
                                    ...e,
                                    paid,
                                    subtasks
                                };
                            }
                        }["ExpensesContent.useEffect.fetchExpenses.fetchedExpenses"]);
                        const sortedExpenses = fetchedExpenses.sort({
                            "ExpensesContent.useEffect.fetchExpenses.sortedExpenses": (a, b)=>{
                                if (a.date > b.date) return 1;
                                if (a.date < b.date) return -1;
                                return 0;
                            }
                        }["ExpensesContent.useEffect.fetchExpenses.sortedExpenses"]);
                        setExpenses(sortedExpenses);
                    } catch (err) {
                        setError(err.message || "Failed to load expenses");
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to load expenses");
                    } finally{
                        setLoading(false);
                    }
                }
            }["ExpensesContent.useEffect.fetchExpenses"];
            fetchExpenses();
        }
    }["ExpensesContent.useEffect"], []);
    // UPDATED: Now fetches from the external Vercel URL
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExpensesContent.useEffect": ()=>{
            const fetchEmployees = {
                "ExpensesContent.useEffect.fetchEmployees": async ()=>{
                    try {
                        setEmployeesLoading(true);
                        const res = await fetch("https://check-seven-steel.vercel.app/api/employees");
                        const data = await res.json();
                        const arr = Array.isArray(data) ? data : data.employees || [];
                        setEmployees(arr);
                    } catch (err) {
                        console.error("Error fetching employees:", err);
                    } finally{
                        setEmployeesLoading(false);
                    }
                }
            }["ExpensesContent.useEffect.fetchEmployees"];
            fetchEmployees();
        }
    }["ExpensesContent.useEffect"], []);
    const walletStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExpensesContent.useMemo[walletStats]": ()=>{
            let spent = 0;
            let pending = 0;
            const periodExpenses = expenses.filter({
                "ExpensesContent.useMemo[walletStats].periodExpenses": (e)=>e.date >= budgetPeriodStart
            }["ExpensesContent.useMemo[walletStats].periodExpenses"]);
            periodExpenses.forEach({
                "ExpensesContent.useMemo[walletStats]": (e)=>{
                    const base = e.amount;
                    const subsTotal = (e.subtasks || []).reduce({
                        "ExpensesContent.useMemo[walletStats].subsTotal": (sum, s)=>sum + (s.amount || 0)
                    }["ExpensesContent.useMemo[walletStats].subsTotal"], 0);
                    const full = base + subsTotal;
                    const paid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExpensePaid"])(e);
                    if (paid) {
                        spent += full;
                    } else {
                        pending += full;
                    }
                }
            }["ExpensesContent.useMemo[walletStats]"]);
            const remaining = initialAmount - spent;
            return {
                spent,
                pending,
                remaining
            };
        }
    }["ExpensesContent.useMemo[walletStats]"], [
        expenses,
        initialAmount,
        budgetPeriodStart
    ]);
    const shopSuggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExpensesContent.useMemo[shopSuggestions]": ()=>{
            const arr = expenses.map({
                "ExpensesContent.useMemo[shopSuggestions].arr": (e)=>(e.shop || "").trim()
            }["ExpensesContent.useMemo[shopSuggestions].arr"]).filter({
                "ExpensesContent.useMemo[shopSuggestions].arr": (s)=>s.length > 0
            }["ExpensesContent.useMemo[shopSuggestions].arr"]);
            return Array.from(new Set(arr));
        }
    }["ExpensesContent.useMemo[shopSuggestions]"], [
        expenses
    ]);
    const filteredExpenses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExpensesContent.useMemo[filteredExpenses]": ()=>{
            const filtered = expenses.filter({
                "ExpensesContent.useMemo[filteredExpenses].filtered": (e)=>{
                    const paid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExpensePaid"])(e);
                    if (filterRole !== "all" && e.role !== filterRole) return false;
                    if (filterStatus === "paid" && !paid) return false;
                    if (filterStatus === "unpaid" && paid) return false;
                    if (filterEmployee !== "all" && filterEmployee && e.employeeId !== filterEmployee) return false;
                    if (filterShop !== "all" && filterShop && e.shop !== filterShop) return false;
                    if (filterFrom && e.date < filterFrom) return false;
                    if (filterTo && e.date > filterTo) return false;
                    if (filterSearch) {
                        const s = filterSearch.toLowerCase();
                        if (!(e.description.toLowerCase().includes(s) || (e.shop || "").toLowerCase().includes(s))) return false;
                    }
                    return true;
                }
            }["ExpensesContent.useMemo[filteredExpenses].filtered"]);
            return filtered.sort({
                "ExpensesContent.useMemo[filteredExpenses]": (a, b)=>{
                    if (a.date > b.date) return 1;
                    if (a.date < b.date) return -1;
                    return 0;
                }
            }["ExpensesContent.useMemo[filteredExpenses]"]);
        }
    }["ExpensesContent.useMemo[filteredExpenses]"], [
        expenses,
        filterRole,
        filterStatus,
        filterEmployee,
        filterShop,
        filterFrom,
        filterTo,
        filterSearch
    ]);
    const visibleExpenses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExpensesContent.useMemo[visibleExpenses]": ()=>{
            return filteredExpenses.slice(0, visibleRowCount);
        }
    }["ExpensesContent.useMemo[visibleExpenses]"], [
        filteredExpenses,
        visibleRowCount
    ]);
    const hasMoreExpenses = visibleRowCount < filteredExpenses.length;
    const historyExpenses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExpensesContent.useMemo[historyExpenses]": ()=>expenses.filter({
                "ExpensesContent.useMemo[historyExpenses]": (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExpensePaid"])(e)
            }["ExpensesContent.useMemo[historyExpenses]"]).sort({
                "ExpensesContent.useMemo[historyExpenses]": (a, b)=>a.date < b.date ? 1 : -1
            }["ExpensesContent.useMemo[historyExpenses]"])
    }["ExpensesContent.useMemo[historyExpenses]"], [
        expenses
    ]);
    const employeeHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExpensesContent.useMemo[employeeHistory]": ()=>{
            if (!historyEmployeeId) return [];
            return historyExpenses.filter({
                "ExpensesContent.useMemo[employeeHistory]": (e)=>e.employeeId === historyEmployeeId
            }["ExpensesContent.useMemo[employeeHistory]"]);
        }
    }["ExpensesContent.useMemo[employeeHistory]"], [
        historyEmployeeId,
        historyExpenses
    ]);
    const employeeHistoryTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExpensesContent.useMemo[employeeHistoryTotal]": ()=>employeeHistory.reduce({
                "ExpensesContent.useMemo[employeeHistoryTotal]": (sum, e)=>{
                    const base = e.amount;
                    const subs = (e.subtasks || []).reduce({
                        "ExpensesContent.useMemo[employeeHistoryTotal].subs": (s, sub)=>s + (sub.amount || 0)
                    }["ExpensesContent.useMemo[employeeHistoryTotal].subs"], 0);
                    return sum + base + subs;
                }
            }["ExpensesContent.useMemo[employeeHistoryTotal]"], 0)
    }["ExpensesContent.useMemo[employeeHistoryTotal]"], [
        employeeHistory
    ]);
    const handleUpdateInitialAmount = async ()=>{
        const newAmount = Number(initialAmountInput);
        if (!Number.isNaN(newAmount) && newAmount >= 0) {
            const newEntry = {
                amount: newAmount,
                date: new Date().toISOString()
            };
            if (newAmount !== initialAmountHistory[0]?.amount) {
                try {
                    const res = await fetch("/api/initial-amount", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(newEntry)
                    });
                    const json = await res.json();
                    if (!json.success) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(json.error || "Failed to save initial amount to database.");
                        return;
                    }
                    const newHistory = [
                        newEntry,
                        ...initialAmountHistory
                    ];
                    setInitialAmountHistory(newHistory);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Initial amount updated successfully!");
                } catch (err) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to update initial amount.");
                }
            }
            setIsEditingInitialAmount(false);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a valid amount.");
        }
    };
    const loadMoreRows = ()=>{
        setIsLoadingMore(true);
        setTimeout(()=>{
            setVisibleRowCount((prevCount)=>Math.min(prevCount + ROWS_PER_PAGE, filteredExpenses.length));
            setIsLoadingMore(false);
        }, 300);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExpensesContent.useEffect": ()=>{
            setVisibleRowCount(INITIAL_ROWS);
        }
    }["ExpensesContent.useEffect"], [
        filterRole,
        filterStatus,
        filterEmployee,
        filterShop,
        filterFrom,
        filterTo,
        filterSearch,
        budgetPeriodStart
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExpensesContent.useEffect": ()=>{
            const handleScroll = {
                "ExpensesContent.useEffect.handleScroll": ()=>{
                    if (tableRef.current) {
                        const { scrollTop, clientHeight, scrollHeight } = tableRef.current;
                        if (scrollHeight - (scrollTop + clientHeight) < 200 && !isLoadingMore && visibleRowCount < filteredExpenses.length) {
                            loadMoreRows();
                        }
                    }
                }
            }["ExpensesContent.useEffect.handleScroll"];
            if (tableRef.current) {
                tableRef.current.addEventListener("scroll", handleScroll);
            }
            return ({
                "ExpensesContent.useEffect": ()=>{
                    if (tableRef.current) {
                        tableRef.current.removeEventListener("scroll", handleScroll);
                    }
                }
            })["ExpensesContent.useEffect"];
        }
    }["ExpensesContent.useEffect"], [
        visibleRowCount,
        filteredExpenses.length,
        isLoadingMore
    ]);
    const handleUpdatePaidStatus = async (exp, isPaid, updateSubtasks = true)=>{
        const action = isPaid ? "Done" : "Pending";
        const confirmMessage = `Are you sure you want to mark the expense "${exp.description}" as ${action}?`;
        if (!window.confirm(confirmMessage)) {
            return;
        }
        let updatedSubtasks = exp.subtasks || [];
        if (updateSubtasks) {
            updatedSubtasks = (exp.subtasks || []).map((sub)=>({
                    ...sub,
                    done: isPaid ? true : sub.done
                }));
        }
        const updates = {
            paid: isPaid,
            subtasks: updatedSubtasks
        };
        try {
            const res = await fetch("/api/expenses", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: exp._id,
                    updates
                })
            });
            const json = await res.json();
            if (!json.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(json.error || "Failed to update status.");
                return;
            }
            const updatedExpense = {
                ...exp,
                paid: isPaid,
                subtasks: updatedSubtasks
            };
            setExpenses((prev)=>prev.map((e)=>e._id === exp._id ? updatedExpense : e));
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Expense marked as ${isPaid ? "Done" : "Pending"}!`);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to update status.");
        }
    };
    const handleAddExpense = async (e)=>{
        e.preventDefault();
        if (!description.trim() || !amount || !date) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warn("Description, amount, date are required.");
            return;
        }
        if (role === "manager" && !selectedEmployeeId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warn("Select employee for Manager role.");
            return;
        }
        const payload = {
            description: description.trim(),
            amount: Number(amount),
            date,
            weekStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeekStart"])(date),
            shop: shopName.trim(),
            role,
            employeeId: selectedEmployeeId || null,
            employeeName: selectedEmployeeId && employees.find((e)=>e._id === selectedEmployeeId)?.name,
            subtasks: []
        };
        try {
            const res = await fetch("/api/expenses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const json = await res.json();
            if (!json.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(json.error || "Failed to add expense.");
                return;
            }
            const created = {
                ...json.data,
                paid: typeof json.data.paid === "boolean" ? json.data.paid : false,
                subtasks: Array.isArray(json.data.subtasks) ? json.data.subtasks : []
            };
            setExpenses((prev)=>{
                const newExpenses = [
                    ...prev,
                    created
                ];
                return newExpenses.sort((a, b)=>{
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Expense added successfully!");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to add expense.");
        }
    };
    const toggleExpand = (id)=>{
        setExpandedId((prev)=>prev === id ? null : id);
        setSubTitle("");
        setSubAmount("");
        setSubDate(new Date().toISOString().slice(0, 10));
        setSubEmployeeId("");
    };
    const handleAddSubtask = async (e, parent)=>{
        e.preventDefault();
        if (!expandedId) return;
        if (!subTitle.trim() || !subAmount) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warn("Sub description and amount required.");
            return;
        }
        const newSub = {
            id: Math.random().toString(36).slice(2, 9),
            title: subTitle.trim(),
            done: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExpensePaid"])(parent),
            amount: Number(subAmount),
            date: subDate,
            employeeId: subEmployeeId || undefined,
            employeeName: subEmployeeId && employees.find((e)=>e._id === subEmployeeId)?.name
        };
        const updatedSubtasks = [
            newSub,
            ...parent.subtasks || []
        ];
        const updates = {
            subtasks: updatedSubtasks,
            paid: false
        };
        try {
            const res = await fetch("/api/expenses", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: parent._id,
                    updates
                })
            });
            const json = await res.json();
            if (!json.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(json.error || "Failed to add sub expense.");
                return;
            }
            setExpenses((prev)=>prev.map((exp)=>exp._id === parent._id ? {
                        ...exp,
                        subtasks: updatedSubtasks,
                        paid: false
                    } : exp));
            setSubTitle("");
            setSubAmount("");
            setSubDate(new Date().toISOString().slice(0, 10));
            setSubEmployeeId("");
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Sub expense added successfully!");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to add sub expense.");
        }
    };
    const handleUpdateSubtaskStatus = async (parentExp, subtaskId, isDone)=>{
        const updatedSubtasks = (parentExp.subtasks || []).map((sub)=>sub.id === subtaskId ? {
                ...sub,
                done: isDone
            } : sub);
        try {
            const res = await fetch("/api/expenses", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: parentExp._id,
                    updates: {
                        subtasks: updatedSubtasks
                    }
                })
            });
            const json = await res.json();
            if (!json.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(json.error || "Failed to update subtask status.");
                return;
            }
            const allSubtasksDone = updatedSubtasks.every((sub)=>sub.done);
            let newPaidStatus = parentExp.paid;
            if (!parentExp.paid && allSubtasksDone) {
                newPaidStatus = true;
            }
            setExpenses((prev)=>prev.map((exp)=>exp._id === parentExp._id ? {
                        ...exp,
                        subtasks: updatedSubtasks,
                        paid: newPaidStatus
                    } : exp));
            if (newPaidStatus !== parentExp.paid) {
                await handleUpdatePaidStatus({
                    ...parentExp,
                    subtasks: updatedSubtasks
                }, newPaidStatus, false);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Sub expense status updated!");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to update subtask status.");
        }
    };
    const handleDeleteSubtask = async (parentExp, subtaskId)=>{
        const confirmMessage = `Are you sure you want to delete this sub expense from "${parentExp.description}"? This cannot be undone.`;
        if (!window.confirm(confirmMessage)) {
            return;
        }
        const updatedSubtasks = (parentExp.subtasks || []).filter((sub)=>sub.id !== subtaskId);
        try {
            const res = await fetch("/api/expenses", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: parentExp._id,
                    updates: {
                        subtasks: updatedSubtasks
                    }
                })
            });
            const json = await res.json();
            if (!json.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(json.error || "Failed to delete sub expense.");
                return;
            }
            setExpenses((prev)=>prev.map((exp)=>exp._id === parentExp._id ? {
                        ...exp,
                        subtasks: updatedSubtasks
                    } : exp));
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Sub expense deleted successfully!");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to delete sub expense.");
        }
    };
    const handleDeleteExpense = async (exp)=>{
        const confirmMessage = `Are you sure you want to delete the expense "${exp.description}"? This cannot be undone.`;
        if (!window.confirm(confirmMessage)) {
            return;
        }
        try {
            const res = await fetch("/api/expenses", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: exp._id
                })
            });
            const json = await res.json();
            if (!json.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(json.error || "Failed to delete expense.");
                return;
            }
            setExpenses((prev)=>prev.filter((e)=>e._id !== exp._id));
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Expense deleted successfully!");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to delete expense.");
        }
    };
    const onStartEditExpense = (exp)=>{
        setEditingExpense(exp);
        setEditExpenseFields({
            shop: exp.shop || "",
            description: exp.description || "",
            amount: String(exp.amount || 0),
            date: exp.date || new Date().toISOString().slice(0, 10),
            role: exp.role || "founder",
            employeeId: exp.employeeId || "",
            employeeName: exp.employeeName || ""
        });
    };
    const handleSaveEditExpense = async ()=>{
        if (!editingExpense) return;
        const employeeIdFromModal = editExpenseFields.employeeId;
        const finalEmployeeId = employeeIdFromModal === "" ? null : employeeIdFromModal;
        const newEmployeeName = finalEmployeeId ? employees.find((e)=>e._id === finalEmployeeId)?.name : null;
        const updates = {
            shop: editExpenseFields.shop,
            description: editExpenseFields.description,
            amount: Number(editExpenseFields.amount),
            date: editExpenseFields.date,
            role: editExpenseFields.role,
            employeeId: finalEmployeeId,
            employeeName: newEmployeeName
        };
        if (updates.role === "manager" && !updates.employeeId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warn("Employee ID is required for Manager role.");
            return;
        }
        try {
            const res = await fetch("/api/expenses", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: editingExpense._id,
                    updates
                })
            });
            const json = await res.json();
            if (!json.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(json.error || "Failed to update expense. Expense not found?");
                return;
            }
            const updated = json.data;
            setExpenses((prev)=>prev.map((e)=>e._id === updated._id ? {
                        ...e,
                        ...updated
                    } : e));
            setEditingExpense(null);
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Expense updated successfully!");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to update expense.");
        }
    };
    const onStartEditSubtask = (parent, sub)=>{
        setEditingSubtask({
            parentId: parent._id,
            subId: sub.id,
            title: sub.title,
            amount: String(sub.amount ?? ""),
            date: sub.date ?? new Date().toISOString().slice(0, 10),
            employeeId: sub.employeeId ?? ""
        });
    };
    const handleSaveEditSubtask = async ()=>{
        if (!editingSubtask) return;
        const parent = expenses.find((e)=>e._id === editingSubtask.parentId);
        if (!parent) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Parent expense not found");
            return;
        }
        const subEmployeeIdFromModal = editingSubtask.employeeId;
        const finalSubEmployeeId = subEmployeeIdFromModal === "" ? undefined : subEmployeeIdFromModal;
        const newSubEmployeeName = finalSubEmployeeId ? employees.find((e)=>e._id === finalSubEmployeeId)?.name : undefined;
        const updatedSubtasks = (parent.subtasks || []).map((s)=>s.id === editingSubtask.subId ? {
                ...s,
                title: editingSubtask.title,
                amount: Number(editingSubtask.amount),
                date: editingSubtask.date,
                employeeId: finalSubEmployeeId,
                employeeName: newSubEmployeeName
            } : s);
        try {
            const res = await fetch("/api/expenses", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: parent._id,
                    updates: {
                        subtasks: updatedSubtasks
                    }
                })
            });
            const json = await res.json();
            if (!json.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(json.error || "Failed to update sub expense.");
                return;
            }
            setExpenses((prev)=>prev.map((e)=>e._id === parent._id ? {
                        ...e,
                        subtasks: updatedSubtasks
                    } : e));
            setEditingSubtask(null);
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Sub expense updated successfully!");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to update sub expense.");
        }
    };
    const cancelEditExpense = ()=>setEditingExpense(null);
    const cancelEditSubtask = ()=>setEditingSubtask(null);
    const cancelAddForm = ()=>setShowAddForm(false);
    const handleDownloadCSV = ()=>{
        if (filteredExpenses.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warn("No expenses match the current filters to download.");
            return;
        }
        const csvUri = convertToCSV(filteredExpenses, employees);
        const link = document.createElement("a");
        link.setAttribute("href", csvUri);
        link.setAttribute("download", `expenses_report_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`${filteredExpenses.length} expenses downloaded!`);
    };
    const InitialAmountHistoryView = ({ history, onClose })=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-white/90 z-50 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl p-8 shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-6 border-b pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-black text-gray-900",
                                children: "Initial Budget History"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                lineNumber: 964,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-gray-400 hover:text-gray-600 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                        lineNumber: 978,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                    lineNumber: 971,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                lineNumber: 967,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                        lineNumber: 963,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 mb-4",
                        children: "This log shows all changes made to the initial budget amount."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                        lineNumber: 987,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: history.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex justify-between p-4 rounded-xl ${index === 0 ? "bg-blue-50 border-2 border-blue-300 shadow-md" : "bg-gray-50 border border-gray-200"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `font-bold ${index === 0 ? "text-blue-700 text-lg" : "text-gray-900"}`,
                                            children: [
                                                "₹",
                                                entry.amount.toLocaleString(),
                                                index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 text-xs font-normal text-green-600 bg-green-100 px-2 py-0.5 rounded-full",
                                                    children: "Current"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                    lineNumber: 1008,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                            lineNumber: 1001,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                        lineNumber: 1000,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-500 font-medium",
                                            children: new Date(entry.date).toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                            lineNumber: 1015,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                        lineNumber: 1014,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                lineNumber: 992,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                        lineNumber: 990,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    history.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-gray-500 pt-4",
                        children: "No history found."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                        lineNumber: 1023,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                lineNumber: 962,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
            lineNumber: 961,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastContainer"], {
                position: "bottom-right",
                autoClose: 3000
            }, void 0, false, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                lineNumber: 1033,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1600px] mx-auto space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12 mt-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl font-black text-gray-900 mb-3 tracking-tight",
                                children: "Expense Tracker"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                lineNumber: 1037,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-600",
                                children: "Manage your business finances with ease"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                lineNumber: 1040,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                        lineNumber: 1036,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-black text-gray-900 mb-4",
                                children: "Current Budget Period"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                lineNumber: 1046,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row items-end gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                                children: "Period Start Date (Resets Wallet Stats)"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                lineNumber: 1051,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: budgetPeriodStart,
                                                onChange: (e)=>setBudgetPeriodStart(e.target.value),
                                                className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                lineNumber: 1054,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                        lineNumber: 1050,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            const now = new Date().toISOString().slice(0, 10);
                                            setBudgetPeriodStart(getMonthStart(now));
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Budget period reset to the start of the current month.");
                                        },
                                        className: "w-full md:w-auto px-6 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg transition-all flex items-center justify-center text-sm",
                                        children: "Reset to Current Month"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                        lineNumber: 1061,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                lineNumber: 1049,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                        lineNumber: 1045,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-shadow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-bold text-gray-500 uppercase tracking-wide mb-1",
                                                        children: "Initial Budget"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                        lineNumber: 1078,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    !isEditingInitialAmount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl font-black text-gray-900",
                                                        children: [
                                                            "₹",
                                                            initialAmount.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                        lineNumber: 1082,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                lineNumber: 1077,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    !isEditingInitialAmount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setIsEditingInitialAmount(true);
                                                            setInitialAmountInput(initialAmount.toString());
                                                        },
                                                        className: "px-3 py-1 rounded-lg text-xs font-bold text-blue-600 bg-blue-100 hover:bg-blue-200 transition-all",
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                        lineNumber: 1089,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowInitialAmountHistory(true),
                                                        className: "px-3 py-1 rounded-lg text-xs font-bold text-teal-600 bg-teal-100 hover:bg-teal-200 transition-all",
                                                        children: "History"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                        lineNumber: 1099,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                lineNumber: 1087,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                        lineNumber: 1076,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isEditingInitialAmount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: initialAmountInput,
                                                onChange: (e)=>setInitialAmountInput(e.target.value),
                                                className: "w-full border-2 border-gray-300 rounded-xl px-4 py-2 text-gray-900 outline-none focus:border-blue-500",
                                                placeholder: "Enter new amount"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                lineNumber: 1109,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleUpdateInitialAmount,
                                                        className: "flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-bold transition-all",
                                                        children: "Save"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                        lineNumber: 1117,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setIsEditingInitialAmount(false);
                                                            setInitialAmountInput(initialAmount.toString());
                                                        },
                                                        className: "flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-2 rounded-lg text-sm font-bold transition-all",
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                        lineNumber: 1123,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                lineNumber: 1116,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                        lineNumber: 1108,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                lineNumber: 1075,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-white to-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-bold text-gray-500 uppercase tracking-wide mb-2",
                                        children: "Total Spent (Current Period)"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                        lineNumber: 1138,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-black text-black",
                                        children: [
                                            "₹",
                                            walletStats.spent.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                        lineNumber: 1141,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                lineNumber: 1137,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-white to-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-bold text-gray-500 uppercase tracking-wide mb-2",
                                        children: "Pending (Current Period)"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                        lineNumber: 1147,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-black text-black",
                                        children: [
                                            "₹",
                                            walletStats.pending.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                        lineNumber: 1150,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                lineNumber: 1146,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-white to-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-bold text-gray-500 uppercase tracking-wide mb-2",
                                        children: "Remaining (Current Period)"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                        lineNumber: 1156,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-black text-black",
                                        children: [
                                            "₹",
                                            walletStats.remaining.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                        lineNumber: 1159,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                lineNumber: 1155,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                        lineNumber: 1074,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    showAddForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$ExpenseForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        shopName: shopName,
                        setShopName: setShopName,
                        date: date,
                        setDate: setDate,
                        description: description,
                        setDescription: setDescription,
                        amount: amount,
                        setAmount: setAmount,
                        role: role,
                        setRole: setRole,
                        selectedEmployeeId: selectedEmployeeId,
                        setSelectedEmployeeId: setSelectedEmployeeId,
                        employees: employees,
                        onSubmit: handleAddExpense,
                        shops: shopSuggestions,
                        onCancel: cancelAddForm
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                        lineNumber: 1166,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 sticky top-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-black text-gray-900",
                                                    children: "Filters"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                    lineNumber: 1190,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowHistory((s)=>!s),
                                                    className: "px-4 py-2 rounded-lg text-xs font-bold text-teal-700 bg-teal-100 hover:bg-teal-200 transition-all",
                                                    children: showHistory ? "Hide" : "History"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                    lineNumber: 1191,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                            lineNumber: 1189,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                                            children: "Search"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1201,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: filterSearch,
                                                            onChange: (e)=>setFilterSearch(e.target.value),
                                                            className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all",
                                                            placeholder: "Search..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1204,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                    lineNumber: 1200,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                                            children: "Shop"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1212,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: filterShop,
                                                            onChange: (e)=>setFilterShop(e.target.value),
                                                            className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "all",
                                                                    children: "All Shops"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                    lineNumber: 1220,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                shopSuggestions.map((shop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: shop,
                                                                        children: shop
                                                                    }, shop, false, {
                                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                        lineNumber: 1222,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1215,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                    lineNumber: 1211,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                                            children: "Role"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1229,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: filterRole,
                                                            onChange: (e)=>setFilterRole(e.target.value),
                                                            className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "all",
                                                                    children: "All Roles"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                    lineNumber: 1237,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "founder",
                                                                    children: "Founder"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                    lineNumber: 1238,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "manager",
                                                                    children: "Manager"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                    lineNumber: 1239,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "other",
                                                                    children: "Other"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                    lineNumber: 1240,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1232,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                    lineNumber: 1228,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1244,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: filterStatus,
                                                            onChange: (e)=>setFilterStatus(e.target.value),
                                                            className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "all",
                                                                    children: "All Status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                    lineNumber: 1252,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "paid",
                                                                    children: "Done/Paid"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                    lineNumber: 1253,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "unpaid",
                                                                    children: "Pending"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                    lineNumber: 1254,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1247,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                    lineNumber: 1243,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                                            children: "Employee"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1258,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: filterEmployee,
                                                            onChange: (e)=>setFilterEmployee(e.target.value),
                                                            className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "all",
                                                                    children: "All Employees"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                    lineNumber: 1266,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                employees.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: emp._id,
                                                                        children: emp.name
                                                                    }, emp._id, false, {
                                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                        lineNumber: 1268,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1261,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                    lineNumber: 1257,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                                            children: "From Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1275,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: filterFrom,
                                                            onChange: (e)=>setFilterFrom(e.target.value),
                                                            className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1278,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                    lineNumber: 1274,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                                            children: "To Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1286,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: filterTo,
                                                            onChange: (e)=>setFilterTo(e.target.value),
                                                            className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1289,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                    lineNumber: 1285,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handleDownloadCSV,
                                                        className: "w-full px-6 py-3 rounded-xl font-bold text-white bg-green-600 hover:bg-green-700 shadow-lg transition-all flex items-center justify-center text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4 mr-2",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: "2",
                                                                    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                    lineNumber: 1310,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                lineNumber: 1303,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Download Filtered (",
                                                            filteredExpenses.length,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                        lineNumber: 1298,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                    lineNumber: 1297,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                            lineNumber: 1199,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                    lineNumber: 1188,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                lineNumber: 1187,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-100",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-16 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                lineNumber: 1328,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-4 text-gray-600 font-medium",
                                                children: "Loading expenses..."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                lineNumber: 1329,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                        lineNumber: 1327,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-16 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-block w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-3xl text-red-600",
                                                    children: "!"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                    lineNumber: 1336,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                lineNumber: 1335,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-red-600 font-bold",
                                                children: error
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                lineNumber: 1338,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                        lineNumber: 1334,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: tableRef,
                                        className: "overflow-x-auto",
                                        style: {
                                            maxHeight: "70vh"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "min-w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        className: "bg-gradient-to-r from-gray-900 to-gray-800 sticky top-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                                                    children: "#"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                    lineNumber: 1349,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                                                    children: "Shop"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                    lineNumber: 1352,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                                                    children: "Description"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                    lineNumber: 1355,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "p-4 text-right font-black text-white uppercase tracking-wide text-xs",
                                                                    children: "Amount"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                    lineNumber: 1358,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "p-4 text-right font-black text-white uppercase tracking-wide text-xs",
                                                                    children: "Total"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                    lineNumber: 1361,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                                                    children: "Date"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                    lineNumber: 1364,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                                                    children: "Role"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                    lineNumber: 1367,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                                                    children: "Employee"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                    lineNumber: 1370,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                                                    children: "Status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                    lineNumber: 1373,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                                                    children: "Actions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                    lineNumber: 1376,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1348,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                        lineNumber: 1347,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        className: "divide-y-2 divide-gray-100",
                                                        children: visibleExpenses.length === 0 && filteredExpenses.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-16 text-center text-gray-500",
                                                                colSpan: 10,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-6xl mb-4",
                                                                        children: "📊"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                        lineNumber: 1389,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-bold text-lg",
                                                                        children: "No expenses found"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                        lineNumber: 1390,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm",
                                                                        children: "Try adjusting your filters"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                        lineNumber: 1393,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                lineNumber: 1385,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1384,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)) : visibleExpenses.map((exp, idx)=>{
                                                            const subsTotal = (exp.subtasks || []).reduce((s, sub)=>s + (sub.amount || 0), 0);
                                                            const total = exp.amount + subsTotal;
                                                            const paid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExpensePaid"])(exp);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "hover:bg-blue-50 transition-colors",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "p-4 text-gray-600 font-bold",
                                                                                children: idx + 1
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                                lineNumber: 1408,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "p-4 text-gray-900 font-bold",
                                                                                children: exp.shop || "-"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                                lineNumber: 1411,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "p-4 text-gray-900",
                                                                                children: exp.description
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                                lineNumber: 1414,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "p-4 text-right font-bold text-gray-900",
                                                                                children: [
                                                                                    "₹",
                                                                                    exp.amount.toLocaleString()
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                                lineNumber: 1417,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "p-4 text-right font-black text-gray-900 text-lg",
                                                                                children: [
                                                                                    "₹",
                                                                                    total.toLocaleString()
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                                lineNumber: 1420,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "p-4 text-gray-600 text-sm",
                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(exp.date)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                                lineNumber: 1423,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "p-4 text-gray-600 capitalize text-sm",
                                                                                children: exp.role || "other"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                                lineNumber: 1426,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "p-4 text-gray-600 text-sm",
                                                                                children: exp.employeeName || "-"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                                lineNumber: 1429,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "p-4",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                    value: paid ? "paid" : "unpaid",
                                                                                    onChange: (e)=>{
                                                                                        const newStatus = e.target.value === "paid";
                                                                                        handleUpdatePaidStatus(exp, newStatus);
                                                                                    },
                                                                                    className: `border-2 rounded-lg px-3 py-2 text-xs font-bold outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer ${paid ? "border-green-300 bg-green-50 text-green-700" : "border-orange-300 bg-orange-50 text-orange-700"}`,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "unpaid",
                                                                                            children: "Pending"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                                            lineNumber: 1446,
                                                                                            columnNumber: 37
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "paid",
                                                                                            children: "Done"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                                            lineNumber: 1447,
                                                                                            columnNumber: 37
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                                    lineNumber: 1433,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                                lineNumber: 1432,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "p-4",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex flex-wrap gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            type: "button",
                                                                                            className: "px-4 py-2 rounded-lg text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all",
                                                                                            onClick: ()=>toggleExpand(exp._id),
                                                                                            children: expandedId === exp._id ? "Hide" : "View"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                                            lineNumber: 1452,
                                                                                            columnNumber: 37
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            type: "button",
                                                                                            className: "px-4 py-2 rounded-lg text-xs font-bold text-blue-700 bg-blue-100 hover:bg-blue-200 transition-all",
                                                                                            onClick: ()=>onStartEditExpense(exp),
                                                                                            children: "Edit"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                                            lineNumber: 1459,
                                                                                            columnNumber: 37
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            type: "button",
                                                                                            className: "px-4 py-2 rounded-lg text-xs font-bold text-red-700 bg-red-100 hover:bg-red-200 transition-all",
                                                                                            onClick: ()=>handleDeleteExpense(exp),
                                                                                            children: "Delete"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                                            lineNumber: 1466,
                                                                                            columnNumber: 37
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                                    lineNumber: 1451,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                                lineNumber: 1450,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                        lineNumber: 1407,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    expandedId === exp._id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$SubExpensesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        parent: exp,
                                                                        employees: employees,
                                                                        subTitle: subTitle,
                                                                        setSubTitle: setSubTitle,
                                                                        subAmount: subAmount,
                                                                        setSubAmount: setSubAmount,
                                                                        subDate: subDate,
                                                                        setSubDate: setSubDate,
                                                                        subEmployeeId: subEmployeeId,
                                                                        setSubEmployeeId: setSubEmployeeId,
                                                                        onAddSubtask: handleAddSubtask,
                                                                        onUpdateSubtaskStatus: handleUpdateSubtaskStatus,
                                                                        onDeleteSubtask: handleDeleteSubtask,
                                                                        onStartEditSubtask: onStartEditSubtask
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                        lineNumber: 1478,
                                                                        columnNumber: 33
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, exp._id, true, {
                                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                                lineNumber: 1406,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                        lineNumber: 1381,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                lineNumber: 1346,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-6 text-sm font-bold text-gray-600 bg-gray-50",
                                                children: [
                                                    isLoadingMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Loading more expenses..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                        lineNumber: 1505,
                                                        columnNumber: 39
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    !hasMoreExpenses && filteredExpenses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "All expenses loaded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                        lineNumber: 1507,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    hasMoreExpenses && !isLoadingMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: loadMoreRows,
                                                        className: "text-blue-600 hover:text-blue-800 font-bold",
                                                        children: [
                                                            "Load More (",
                                                            filteredExpenses.length - visibleRowCount,
                                                            " ",
                                                            "remaining)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                        lineNumber: 1510,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                lineNumber: 1504,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                        lineNumber: 1341,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                    lineNumber: 1325,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                lineNumber: 1324,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                        lineNumber: 1186,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    showHistory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-black text-gray-900 mb-6",
                                children: "Payment History"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                lineNumber: 1527,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-6 md:grid-cols-2 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-bold text-gray-700 mb-2",
                                                children: "Filter by Employee"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                lineNumber: 1532,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: historyEmployeeId,
                                                onChange: (e)=>setHistoryEmployeeId(e.target.value),
                                                className: "w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 transition-all bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "All Paid Expenses"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                        lineNumber: 1540,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    employees.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: emp._id,
                                                            children: emp.name
                                                        }, emp._id, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1542,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                lineNumber: 1535,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                        lineNumber: 1531,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-bold text-gray-700 mb-2",
                                                children: historyEmployeeId ? "Selected Employee Total" : "All Time Total"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                lineNumber: 1549,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `border-2 rounded-xl px-6 py-4 text-2xl font-black ${historyEmployeeId ? "border-blue-300 bg-blue-50 text-blue-700" : "border-green-300 bg-green-50 text-green-700"}`,
                                                children: [
                                                    "₹",
                                                    (historyEmployeeId ? employeeHistoryTotal : historyExpenses.reduce((sum, e)=>sum + e.amount + (e.subtasks || []).reduce((s, sub)=>s + (sub.amount || 0), 0), 0)).toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                lineNumber: 1554,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                        lineNumber: 1548,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                lineNumber: 1530,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto rounded-xl border-2 border-gray-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "min-w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-gradient-to-r from-gray-900 to-gray-800",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                                        children: "Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                        lineNumber: 1583,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                                        children: "Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                        lineNumber: 1586,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                                        children: "Shop"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                        lineNumber: 1589,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-4 text-right font-black text-white uppercase tracking-wide text-xs",
                                                        children: "Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                        lineNumber: 1592,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-4 text-right font-black text-white uppercase tracking-wide text-xs",
                                                        children: "Total"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                        lineNumber: 1595,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                                        children: "Employee"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                        lineNumber: 1598,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                lineNumber: 1582,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                            lineNumber: 1581,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y-2 divide-gray-100",
                                            children: (historyEmployeeId ? employeeHistory : historyExpenses).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: 6,
                                                    className: "p-16 text-center text-gray-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-6xl mb-4",
                                                            children: "📜"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1611,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-lg",
                                                            children: "No payment history"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1612,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                    lineNumber: 1607,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                lineNumber: 1606,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)) : (historyEmployeeId ? employeeHistory : historyExpenses).map((exp)=>{
                                                const subsTotal = (exp.subtasks || []).reduce((s, sub)=>s + (sub.amount || 0), 0);
                                                const total = exp.amount + subsTotal;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "hover:bg-blue-50 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-4 text-gray-600 text-sm",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(exp.date)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1628,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-4 text-gray-900 font-bold",
                                                            children: exp.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1631,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-4 text-gray-900",
                                                            children: exp.shop || "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1634,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-4 text-right text-gray-600 font-bold",
                                                            children: [
                                                                "₹",
                                                                exp.amount.toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1637,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-4 text-right font-black text-gray-900 text-lg",
                                                            children: [
                                                                "₹",
                                                                total.toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1640,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-4 text-gray-600",
                                                            children: exp.employeeName || "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                            lineNumber: 1643,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, exp._id, true, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                                    lineNumber: 1624,
                                                    columnNumber: 27
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                            lineNumber: 1603,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                    lineNumber: 1580,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                lineNumber: 1579,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                        lineNumber: 1526,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                lineNumber: 1035,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !showAddForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowAddForm(true),
                className: "fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-4xl font-light shadow-2xl transition-all duration-300 transform hover:scale-110 z-50",
                "aria-label": "Add New Expense",
                children: "+"
            }, void 0, false, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                lineNumber: 1659,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            editingExpense && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$EditExpenseModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                editingExpense: editingExpense,
                editExpenseFields: editExpenseFields,
                setEditExpenseFields: setEditExpenseFields,
                employees: employees,
                onSave: handleSaveEditExpense,
                onCancel: cancelEditExpense
            }, void 0, false, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                lineNumber: 1669,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            editingSubtask && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$EditSubtaskModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                editingSubtask: editingSubtask,
                setEditingSubtask: setEditingSubtask,
                employees: employees,
                onSave: handleSaveEditSubtask,
                onCancel: cancelEditSubtask
            }, void 0, false, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                lineNumber: 1680,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showInitialAmountHistory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InitialAmountHistoryView, {
                history: initialAmountHistory,
                onClose: ()=>setShowInitialAmountHistory(false)
            }, void 0, false, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                lineNumber: 1690,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
        lineNumber: 1032,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ExpensesContent, "SMUjNh/0HfWZX8a/4Lj1Ivjb/GE=");
_c = ExpensesContent;
const __TURBOPACK__default__export__ = ExpensesContent;
var _c;
__turbopack_context__.k.register(_c, "ExpensesContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Expense_lp-expense-paytrack_app_expenses_0f5f1cca._.js.map