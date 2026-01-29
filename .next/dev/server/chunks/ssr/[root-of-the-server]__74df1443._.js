module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// components/ExpenseForm.tsx
"use client";
;
const ExpenseForm = ({ shopName, setShopName, date, setDate, description, setDescription, amount, setAmount, role, setRole, selectedEmployeeId, setSelectedEmployeeId, employees, onSubmit, shops, onCancel })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: onSubmit,
        className: "bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "New Expense"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                        children: "Shop / Vendor"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                        id: "shops-list",
                                        children: shops.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 md:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                        children: "Amount (₹)"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                        children: "Date"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                        children: "Role"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: role,
                                        onChange: (e)=>setRole(e.target.value),
                                        className: "w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 transition-all bg-white cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "founder",
                                                children: "Founder"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "manager",
                                                children: "Manager"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                children: "Assign to Employee"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedEmployeeId,
                                onChange: (e)=>setSelectedEmployeeId(e.target.value),
                                className: "w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 transition-all bg-white cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select Employee"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    employees.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 flex justify-end gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancel,
                        className: "px-6 py-3 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
const __TURBOPACK__default__export__ = ExpenseForm;
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/types.ts [app-ssr] (ecmascript)");
// components/SubExpensesSection.tsx
"use client";
;
;
const SubExpensesSection = ({ parent, employees, subTitle, setSubTitle, subAmount, setSubAmount, subDate, setSubDate, subEmployeeId, setSubEmployeeId, onAddSubtask, onUpdateSubtaskStatus, onDeleteSubtask, onStartEditSubtask })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "bg-gradient-to-r from-blue-50 to-teal-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
            className: "p-6",
            colSpan: 10,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border-2 border-blue-200 p-6 shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 pb-4 border-b-2 border-gray-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-lg font-bold text-gray-900",
                            children: [
                                "Sub Expenses for:",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: (ev)=>onAddSubtask(ev, parent),
                        className: "mb-6 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                                children: "Description"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                                children: "Amount (₹)"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                                children: "Date"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                                children: "Employee"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: subEmployeeId,
                                                onChange: (e)=>setSubEmployeeId(e.target.value),
                                                className: "w-full border-2 border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select Employee"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    employees.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    (parent.subtasks || []).length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto rounded-xl border-2 border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "min-w-full text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-gradient-to-r from-gray-100 to-gray-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-4 text-left font-bold text-gray-900 uppercase tracking-wide text-xs",
                                                children: "Description"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 128,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-4 text-right font-bold text-gray-900 uppercase tracking-wide text-xs",
                                                children: "Amount"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 131,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-4 text-left font-bold text-gray-900 uppercase tracking-wide text-xs",
                                                children: "Date"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 134,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-4 text-left font-bold text-gray-900 uppercase tracking-wide text-xs",
                                                children: "Employee"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 137,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-4 text-left font-bold text-gray-900 uppercase tracking-wide text-xs",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                lineNumber: 140,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-gray-200",
                                    children: parent.subtasks.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-blue-50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-4 text-gray-900 font-medium",
                                                    children: sub.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-4 text-gray-600",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(sub.date)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-4 text-gray-600",
                                                    children: sub.employeeName || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: sub.done ? "done" : "pending",
                                                        onChange: (e)=>{
                                                            const newStatus = e.target.value === "done";
                                                            onUpdateSubtaskStatus(parent, sub.id, newStatus);
                                                        },
                                                        className: "border-2 border-gray-200 rounded-lg px-3 py-1.5 text-xs font-semibold outline-none focus:border-blue-500 bg-white cursor-pointer text-gray-900",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "pending",
                                                                children: "Pending"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>onStartEditSubtask(parent, sub),
                                                                className: "px-4 py-1.5 rounded-lg text-xs font-semibold text-blue-700 bg-blue-100 hover:bg-blue-200 transition-all",
                                                                children: "Edit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8 text-gray-500 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
const __TURBOPACK__default__export__ = SubExpensesSection;
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-white/90 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-black text-gray-900 mb-6",
                    children: "Edit Expense"
                }, void 0, false, {
                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-2",
                                            children: "Shop"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-2",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-2",
                                            children: "Amount"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-2",
                                            children: "Date"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-2",
                                            children: "Role"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editExpenseFields.role,
                                            onChange: (e)=>setField("role", e.target.value),
                                            className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-gray-900 outline-none focus:border-blue-500 bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "founder",
                                                    children: "Founder"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "manager",
                                                    children: "Manager"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-2",
                                            children: "Employee"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editExpenseFields.employeeId,
                                            onChange: handleEmployeeChange,
                                            className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-gray-900 outline-none focus:border-blue-500 bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "None"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                employees.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-3 mt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-6 py-3 rounded-xl font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all",
                            onClick: onCancel,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
const __TURBOPACK__default__export__ = EditExpenseModal;
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-2xl w-full max-w-md p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-black text-gray-900 mb-6",
                    children: "Edit Sub Expense"
                }, void 0, false, {
                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                    children: "Title"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                    children: "Amount"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                    children: "Date"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                    children: "Employee"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: editingSubtask.employeeId,
                                    onChange: (e)=>setField("employeeId", e.target.value),
                                    className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-gray-900 outline-none focus:border-blue-500 bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "None"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        employees.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-3 mt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-6 py-3 rounded-xl font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all",
                            onClick: onCancel,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
const __TURBOPACK__default__export__ = EditSubtaskModal;
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/BudgetPeriod/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
function CurrentBudgetPeriod({ budgetPeriodStart }) {
    const getMonthStart = (dateString)=>{
        const date = new Date(dateString);
        return new Date(date.getFullYear(), date.getMonth(), 1).toISOString().slice(0, 10);
    };
    const [, setBudgetPeriodStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const now = new Date().toISOString().slice(0, 10);
        return getMonthStart(now);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-black text-gray-900 mb-4",
                children: "Current Budget Period"
            }, void 0, false, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/BudgetPeriod/page.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-end gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                children: "Period Start Date (Resets Wallet Stats)"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/BudgetPeriod/page.tsx",
                                lineNumber: 24,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                value: budgetPeriodStart,
                                onChange: (e)=>setBudgetPeriodStart(e.target.value),
                                className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/BudgetPeriod/page.tsx",
                                lineNumber: 27,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/BudgetPeriod/page.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            const now = new Date().toISOString().slice(0, 10);
                            setBudgetPeriodStart(getMonthStart(now));
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info("Budget period reset to the start of the current month.");
                        },
                        className: "w-full md:w-auto px-6 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg transition-all flex items-center justify-center text-sm",
                        children: "Reset to Current Month"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/BudgetPeriod/page.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/BudgetPeriod/page.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/BudgetPeriod/page.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = CurrentBudgetPeriod;
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// types.ts
__turbopack_context__.s([
    "INITIAL_AMOUNT_CONSTANT",
    ()=>INITIAL_AMOUNT_CONSTANT,
    "getWeekStart",
    ()=>getWeekStart,
    "isExpensePaid",
    ()=>isExpensePaid
]);
const INITIAL_AMOUNT_CONSTANT = 1000000;
function getWeekStart(dateStr) {
    const d = new Date(dateStr);
    const day = d.getDay();
    // Calculate difference to get to Monday (where Monday is day 1, Sunday is day 0)
    // getDay() returns 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    const diff = day === 0 ? -6 : 1 - day; // If Sunday (0), go back 6 days. Otherwise, go back to Monday (1)
    const monday = new Date(d);
    monday.setDate(d.getDate() + diff);
    return monday.toISOString().slice(0, 10);
}
function isExpensePaid(exp) {
    // Application logic dictates that 'paid' property directly represents status.
    return typeof exp.paid === "boolean" ? exp.paid : false;
}
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
const getMonthStart = (dateString)=>{
    const date = new Date(dateString);
    return new Date(date.getFullYear(), date.getMonth(), 1).toISOString().slice(0, 10);
};
function InitialBudget({ budgetPeriodStart, setShowInitialAmountHistory, expenses, initialAmountHistory, setInitialAmountHistory }) {
    // const [expenses, setExpenses] = useState<Expense[]>([]);
    const [isEditingInitialAmount, setIsEditingInitialAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // const [initialAmountHistory, setInitialAmountHistory] = useState<
    //     InitialAmountHistoryEntry[]
    // >([]);
    console.log("initialAmountHistoryinitialAmountHistory", initialAmountHistory);
    const initialAmount = initialAmountHistory[0]?.amount || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_AMOUNT_CONSTANT"];
    const [initialAmountInput, setInitialAmountInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialAmount.toString());
    // const [budgetPeriodStart, setBudgetPeriodStart] = useState(() => {
    //     const now = new Date().toISOString().slice(0, 10);
    //     return getMonthStart(now);
    // });
    // const [showInitialAmountHistory, setShowInitialAmountHistory] = useState(false);
    const walletStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let spent = 0;
        let pending = 0;
        const periodExpenses = expenses.filter((e)=>e.date >= budgetPeriodStart);
        periodExpenses.forEach((e)=>{
            const base = e.amount;
            const subsTotal = (e.subtasks || []).reduce((sum, s)=>sum + (s.amount || 0), 0);
            const full = base + subsTotal;
            const paid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isExpensePaid"])(e);
            if (paid) {
                spent += full;
            } else {
                pending += full;
            }
        });
        const remaining = initialAmount - spent;
        return {
            spent,
            pending,
            remaining
        };
    }, [
        expenses,
        initialAmount,
        budgetPeriodStart
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
                    console.log("resres", res);
                    const json = await res.json();
                    if (!json.success) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(json.error || "Failed to save initial amount to database.");
                        return;
                    }
                    const newHistory = [
                        newEntry,
                        ...initialAmountHistory
                    ];
                    setInitialAmountHistory(newHistory);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Initial amount updated successfully!");
                } catch (err) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to update initial amount.");
                }
            }
            setIsEditingInitialAmount(false);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please enter a valid amount.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-shadow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-start mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-bold text-gray-500 uppercase tracking-wide mb-1",
                                        children: "Initial Budget"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 25
                                    }, this),
                                    !isEditingInitialAmount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-black text-gray-900",
                                        children: [
                                            "₹",
                                            initialAmount.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                                lineNumber: 106,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    !isEditingInitialAmount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setIsEditingInitialAmount(true);
                                            setInitialAmountInput(initialAmount.toString());
                                        },
                                        className: "px-3 py-1 rounded-lg text-xs font-bold text-blue-600 bg-blue-100 hover:bg-blue-200 transition-all",
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowInitialAmountHistory(true),
                                        className: "px-3 py-1 rounded-lg text-xs font-bold text-teal-600 bg-teal-100 hover:bg-teal-200 transition-all",
                                        children: "History"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                                lineNumber: 116,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                        lineNumber: 105,
                        columnNumber: 17
                    }, this),
                    isEditingInitialAmount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: initialAmountInput,
                                onChange: (e)=>setInitialAmountInput(e.target.value),
                                className: "w-full border-2 border-gray-300 rounded-xl px-4 py-2 text-gray-900 outline-none focus:border-blue-500",
                                placeholder: "Enter new amount"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                                lineNumber: 138,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleUpdateInitialAmount,
                                        className: "flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-bold transition-all",
                                        children: "Save"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setIsEditingInitialAmount(false);
                                            setInitialAmountInput(initialAmount.toString());
                                        },
                                        className: "flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-2 rounded-lg text-sm font-bold transition-all",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                                lineNumber: 145,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                        lineNumber: 137,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                lineNumber: 104,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-br from-white to-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-bold text-gray-500 uppercase tracking-wide mb-2",
                        children: "Total Spent (Current Period)"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                        lineNumber: 167,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl font-black text-black",
                        children: [
                            "₹",
                            walletStats.spent.toLocaleString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                        lineNumber: 170,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                lineNumber: 166,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-br from-white to-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-bold text-gray-500 uppercase tracking-wide mb-2",
                        children: "Pending (Current Period)"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                        lineNumber: 176,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl font-black text-black",
                        children: [
                            "₹",
                            walletStats.pending.toLocaleString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                        lineNumber: 179,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                lineNumber: 175,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-br from-white to-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-bold text-gray-500 uppercase tracking-wide mb-2",
                        children: "Remaining (Current Period)"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                        lineNumber: 185,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl font-black text-black",
                        children: [
                            "₹",
                            walletStats.remaining.toLocaleString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                        lineNumber: 188,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
                lineNumber: 184,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx",
        lineNumber: 103,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = InitialBudget;
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/types.ts [app-ssr] (ecmascript)");
;
;
;
;
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
        const paid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isExpensePaid"])(exp) ? "Done" : "Pending";
        const employeeName = exp.employeeId ? employeeMap.get(exp.employeeId) || exp.employeeName || "-" : "-";
        grandTotalAmountBase += exp.amount;
        grandTotalSubExpenses += subsTotal;
        grandTotalExpense += total;
        const mainRow = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(exp.date),
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(sub.date),
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
function FilterComponent({ setShowHistory, showHistory, filterSearch, setFilterSearch, filterShop, setFilterShop, shopSuggestions, filterRole, setFilterRole, filterStatus, setFilterStatus, filterEmployee, setFilterEmployee, employees, filterFrom, setFilterFrom, filterTo, setFilterTo, filteredExpenses }) {
    const handleDownloadCSV = ()=>{
        if (filteredExpenses.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warn("No expenses match the current filters to download.");
            return;
        }
        const csvUri = convertToCSV(filteredExpenses, employees);
        const link = document.createElement("a");
        link.setAttribute("href", csvUri);
        link.setAttribute("download", `expenses_report_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`${filteredExpenses.length} expenses downloaded!`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 sticky top-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-black text-gray-900",
                        children: "Filters"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                        lineNumber: 126,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setShowHistory((s)=>!s),
                        className: "px-4 py-2 rounded-lg text-xs font-bold text-teal-700 bg-teal-100 hover:bg-teal-200 transition-all",
                        children: showHistory ? "Hide" : "History"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                        lineNumber: 127,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                lineNumber: 125,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                children: "Search"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                lineNumber: 137,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: filterSearch,
                                onChange: (e)=>setFilterSearch(e.target.value),
                                className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all",
                                placeholder: "Search..."
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                lineNumber: 140,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                        lineNumber: 136,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                children: "Shop"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                lineNumber: 148,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: filterShop,
                                onChange: (e)=>setFilterShop(e.target.value),
                                className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "All Shops"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 25
                                    }, this),
                                    shopSuggestions.map((shop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: shop,
                                            children: shop
                                        }, shop, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 29
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                lineNumber: 151,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                        lineNumber: 147,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                children: "Role"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                lineNumber: 165,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: filterRole,
                                onChange: (e)=>setFilterRole(e.target.value),
                                className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "All Roles"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "founder",
                                        children: "Founder"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "manager",
                                        children: "Manager"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "other",
                                        children: "Other"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                lineNumber: 168,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                        lineNumber: 164,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                lineNumber: 180,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: filterStatus,
                                onChange: (e)=>setFilterStatus(e.target.value),
                                className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "All Status"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "paid",
                                        children: "Done/Paid"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "unpaid",
                                        children: "Pending"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                lineNumber: 183,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                        lineNumber: 179,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                children: "Employee"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                lineNumber: 194,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: filterEmployee,
                                onChange: (e)=>setFilterEmployee(e.target.value),
                                className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "All Employees"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 25
                                    }, this),
                                    employees.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: emp._id,
                                            children: emp.name
                                        }, emp._id, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 29
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                lineNumber: 197,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                        lineNumber: 193,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                children: "From Date"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                lineNumber: 211,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                value: filterFrom,
                                onChange: (e)=>setFilterFrom(e.target.value),
                                className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                lineNumber: 214,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                        lineNumber: 210,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide",
                                children: "To Date"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                lineNumber: 222,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                value: filterTo,
                                onChange: (e)=>setFilterTo(e.target.value),
                                className: "w-full border-2 border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 transition-all bg-white"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                lineNumber: 225,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                        lineNumber: 221,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleDownloadCSV,
                            className: "w-full px-6 py-3 rounded-xl font-bold text-white bg-green-600 hover:bg-green-700 shadow-lg transition-all flex items-center justify-center text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 mr-2",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                        lineNumber: 246,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                                    lineNumber: 239,
                                    columnNumber: 25
                                }, this),
                                "Download Filtered (",
                                filteredExpenses.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                            lineNumber: 234,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                        lineNumber: 233,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
                lineNumber: 135,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx",
        lineNumber: 124,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = FilterComponent;
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/constFunctions.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INITIAL_ROWS",
    ()=>INITIAL_ROWS,
    "ROWS_PER_PAGE",
    ()=>ROWS_PER_PAGE,
    "getMonthStart",
    ()=>getMonthStart
]);
const ROWS_PER_PAGE = 10;
const INITIAL_ROWS = 5;
const getMonthStart = (dateString)=>{
    const date = new Date(dateString);
    return new Date(date.getFullYear(), date.getMonth(), 1).toISOString().slice(0, 10);
};
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/types.ts [app-ssr] (ecmascript)");
;
;
;
;
const ExpensesTable = ({ visibleExpenses, filteredExpenses, isLoadingMore, visibleRowCount, expandedId, employees, onToggleExpand, onStartEditExpense, onDeleteExpense, onUpdatePaidStatus, onLoadMore, children })=>{
    const tableRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasMoreExpenses = visibleRowCount < filteredExpenses.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            if (tableRef.current) {
                const { scrollTop, clientHeight, scrollHeight } = tableRef.current;
                if (scrollHeight - (scrollTop + clientHeight) < 200 && !isLoadingMore && visibleRowCount < filteredExpenses.length) {
                    onLoadMore();
                }
            }
        };
        if (tableRef.current) {
            tableRef.current.addEventListener("scroll", handleScroll);
        }
        return ()=>{
            if (tableRef.current) {
                tableRef.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, [
        visibleRowCount,
        filteredExpenses.length,
        isLoadingMore,
        onLoadMore
    ]);
    if (visibleExpenses.length === 0 && filteredExpenses.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-16 text-center text-gray-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-6xl mb-4",
                    children: "📊"
                }, void 0, false, {
                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-bold text-lg",
                    children: "No expenses found"
                }, void 0, false, {
                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm",
                    children: "Try adjusting your filters"
                }, void 0, false, {
                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: tableRef,
        className: "overflow-x-auto",
        style: {
            maxHeight: "70vh"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "min-w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        className: "bg-linear-to-r from-gray-900 to-gray-800 sticky top-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                    children: "#"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                    children: "Shop"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-4 text-right font-black text-white uppercase tracking-wide text-xs",
                                    children: "Amount"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-4 text-right font-black text-white uppercase tracking-wide text-xs",
                                    children: "Total"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                    children: "Date"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                    children: "Role"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                    children: "Employee"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                    children: "Actions"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        className: "divide-y-2 divide-gray-100",
                        children: visibleExpenses.map((exp, idx)=>{
                            const subsTotal = (exp.subtasks || []).reduce((s, sub)=>s + (sub.amount || 0), 0);
                            const total = exp.amount + subsTotal;
                            const paid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isExpensePaid"])(exp);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "hover:bg-blue-50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4 text-gray-600 font-bold",
                                                children: idx + 1
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                                lineNumber: 126,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4 text-gray-900 font-bold",
                                                children: exp.shop || "-"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                                lineNumber: 127,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4 text-gray-900",
                                                children: exp.description
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                                lineNumber: 130,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4 text-right font-bold text-gray-900",
                                                children: [
                                                    "₹",
                                                    exp.amount.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4 text-right font-black text-gray-900 text-lg",
                                                children: [
                                                    "₹",
                                                    total.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4 text-gray-600 text-sm",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(exp.date)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4 text-gray-600 capitalize text-sm",
                                                children: exp.role || "other"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                                lineNumber: 140,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4 text-gray-600 text-sm",
                                                children: exp.employeeName || "-"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: paid ? "paid" : "unpaid",
                                                    onChange: (e)=>{
                                                        const newStatus = e.target.value === "paid";
                                                        onUpdatePaidStatus(exp, newStatus);
                                                    },
                                                    className: `border-2 rounded-lg px-3 py-2 text-xs font-bold outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer ${paid ? "border-green-300 bg-green-50 text-green-700" : "border-orange-300 bg-orange-50 text-orange-700"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "unpaid",
                                                            children: "Pending"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "paid",
                                                            children: "Done"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "px-4 py-2 rounded-lg text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all",
                                                            onClick: ()=>onToggleExpand(exp._id),
                                                            children: expandedId === exp._id ? "Hide" : "View"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "px-4 py-2 rounded-lg text-xs font-bold text-blue-700 bg-blue-100 hover:bg-blue-200 transition-all",
                                                            onClick: ()=>onStartEditExpense(exp),
                                                            children: "Edit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "px-4 py-2 rounded-lg text-xs font-bold text-red-700 bg-red-100 hover:bg-red-200 transition-all",
                                                            onClick: ()=>onDeleteExpense(exp),
                                                            children: "Delete"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                                lineNumber: 163,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    expandedId === exp._id && children
                                ]
                            }, exp._id, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                                lineNumber: 124,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-6 text-sm font-bold text-gray-600 bg-gray-50",
                children: [
                    isLoadingMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Loading more expenses..."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                        lineNumber: 197,
                        columnNumber: 27
                    }, ("TURBOPACK compile-time value", void 0)),
                    !hasMoreExpenses && filteredExpenses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "All expenses loaded"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    hasMoreExpenses && !isLoadingMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onLoadMore,
                        className: "text-blue-600 hover:text-blue-800 font-bold",
                        children: [
                            "Load More (",
                            filteredExpenses.length - visibleRowCount,
                            " remaining)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ExpensesTable;
 // // components/expenses/ExpensesTable.tsx
 // import React from "react";
 // import { Employee, Expense, Role } from "./types";
 // import { isExpensePaid } from "./utils";
 // import SubExpensesSection from "./SubExpensesSection";
 // interface ExpensesTableProps {
 //   loading: boolean;
 //   error: string | null;
 //   filteredExpenses: Expense[];
 //   expenses: Expense[];
 //   expandedId: string | null;
 //   onToggleExpand: (id: string) => void;
 //   employees: Employee[];
 //   subTitle: string;
 //   setSubTitle: (v: string) => void;
 //   subAmount: string;
 //   setSubAmount: (v: string) => void;
 //   subDate: string;
 //   setSubDate: (v: string) => void;
 //   subRole: Role;
 //   setSubRole: (v: Role) => void;
 //   subEmployeeId: string;
 //   setSubEmployeeId: (v: string) => void;
 //   onAddSubtask: (e: React.FormEvent, parent: Expense) => void;
 //   onUpdateSubtaskStatus: (
 //     parentExp: Expense,
 //     subtaskId: string,
 //     isDone: boolean
 //   ) => void;
 //   onUpdatePaidStatus: (exp: Expense, isPaid: boolean) => void;
 // }
 // const ExpensesTable: React.FC<ExpensesTableProps> = ({
 //   loading,
 //   error,
 //   filteredExpenses,
 //   expandedId,
 //   onToggleExpand,
 //   employees,
 //   subTitle,
 //   setSubTitle,
 //   subAmount,
 //   setSubAmount,
 //   subDate,
 //   setSubDate,
 //   subRole,
 //   setSubRole,
 //   subEmployeeId,
 //   setSubEmployeeId,
 //   onAddSubtask,
 //   onUpdateSubtaskStatus,
 //   onUpdatePaidStatus,
 // }) => {
 //   return (
 //     <div className="border rounded-lg overflow-x-auto">
 //       {loading ? (
 //         <div className="p-4 text-sm">Loading expenses…</div>
 //       ) : error ? (
 //         <div className="p-4 text-sm text-red-500">{error}</div>
 //       ) : (
 //         <table className="min-w-full text-sm">
 //           <thead className="bg-gray-200">
 //             <tr>
 //               <th className="p-2 text-left">#</th>
 //               <th className="p-2 text-left">Shop</th>
 //               <th className="p-2 text-left">Description</th>
 //               <th className="p-2 text-right">Amount</th>
 //               <th className="p-2 text-right">Total (incl. sub)</th>
 //               <th className="p-2 text-left">Date</th>
 //               <th className="p-2 text-left">Role</th>
 //               <th className="p-2 text-left">Employee</th>
 //               <th className="p-2 text-left">Status</th>
 //               <th className="p-2 text-left">Actions</th>
 //             </tr>
 //           </thead>
 //           <tbody>
 //             {filteredExpenses.length === 0 ? (
 //               <tr>
 //                 <td className="p-3 text-center" colSpan={10}>
 //                   No expenses found
 //                 </td>
 //               </tr>
 //             ) : (
 //               filteredExpenses.map((exp, idx) => {
 //                 const subsTotal = (exp.subtasks || []).reduce(
 //                   (s, sub) => s + (sub.amount || 0),
 //                   0
 //                 );
 //                 const total = exp.amount + subsTotal;
 //                 const paid = isExpensePaid(exp);
 //                 return (
 //                   <React.Fragment key={exp._id}>
 //                     <tr className="border-t">
 //                       <td className="p-2">{idx + 1}</td>
 //                       <td className="p-2">{exp.shop || "-"}</td>
 //                       <td className="p-2">{exp.description}</td>
 //                       <td className="p-2 text-right">
 //                         ₹{exp.amount.toLocaleString()}
 //                       </td>
 //                       <td className="p-2 text-right">
 //                         ₹{total.toLocaleString()}
 //                       </td>
 //                       <td className="p-2">{exp.date}</td>
 //                       <td className="p-2 capitalize">
 //                         {exp.role || "other"}
 //                       </td>
 //                       <td className="p-2">{exp.employeeName || "-"}</td>
 //                       <td className="p-2">
 //                         <select
 //                           value={paid ? "paid" : "unpaid"}
 //                           onChange={(e) => {
 //                             const newStatus = e.target.value === "paid";
 //                             onUpdatePaidStatus(exp, newStatus);
 //                           }}
 //                           className="border rounded-md px-2 py-1 text-xs outline-none bg-white"
 //                         >
 //                           <option value="unpaid">Pending</option>
 //                           <option value="paid">Done</option>
 //                         </select>
 //                       </td>
 //                       <td className="p-2 space-x-2">
 //                         <button
 //                           type="button"
 //                           className="border px-2 py-1 rounded-md text-xs"
 //                           onClick={() => onToggleExpand(exp._id)}
 //                         >
 //                           {expandedId === exp._id ? "Hide" : "View"}
 //                         </button>
 //                       </td>
 //                     </tr>
 //                     {expandedId === exp._id && (
 //                       <SubExpensesSection
 //                         parent={exp}
 //                         employees={employees}
 //                         subTitle={subTitle}
 //                         setSubTitle={setSubTitle}
 //                         subAmount={subAmount}
 //                         setSubAmount={setSubAmount}
 //                         subDate={subDate}
 //                         setSubDate={setSubDate}
 //                         subRole={subRole}
 //                         setSubRole={setSubRole}
 //                         subEmployeeId={subEmployeeId}
 //                         setSubEmployeeId={setSubEmployeeId}
 //                         onAddSubtask={onAddSubtask}
 //                         onUpdateSubtaskStatus={onUpdateSubtaskStatus}
 //                       />
 //                     )}
 //                   </React.Fragment>
 //                 );
 //               })
 //             )}
 //           </tbody>
 //         </table>
 //       )}
 //     </div>
 //   );
 // };
 // export default ExpensesTable;
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/types.ts [app-ssr] (ecmascript)");
;
;
const PaymentHistorySection = ({ showHistory, historyEmployeeId, setHistoryEmployeeId, employees, historyExpenses, employeeHistory, employeeHistoryTotal })=>{
    if (!showHistory) return null;
    const displayedExpenses = historyEmployeeId ? employeeHistory : historyExpenses;
    const totalAmount = historyEmployeeId ? employeeHistoryTotal : historyExpenses.reduce((sum, e)=>sum + e.amount + (e.subtasks || []).reduce((s, sub)=>s + (sub.amount || 0), 0), 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-black text-gray-900 mb-6",
                children: "Payment History"
            }, void 0, false, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 md:grid-cols-2 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-bold text-gray-700 mb-2",
                                children: "Filter by Employee"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: historyEmployeeId,
                                onChange: (e)=>setHistoryEmployeeId(e.target.value),
                                className: "w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-blue-500 transition-all bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "All Paid Expenses"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    employees.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: emp._id,
                                            children: emp.name
                                        }, emp._id, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-bold text-gray-700 mb-2",
                                children: historyEmployeeId ? "Selected Employee Total" : "All Time Total"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border-2 rounded-xl px-6 py-4 text-2xl font-black ${historyEmployeeId ? "border-blue-300 bg-blue-50 text-blue-700" : "border-green-300 bg-green-50 text-green-700"}`,
                                children: [
                                    "₹",
                                    totalAmount.toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto rounded-xl border-2 border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-linear-to-r from-gray-900 to-gray-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                        children: "Date"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                        children: "Shop"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-4 text-right font-black text-white uppercase tracking-wide text-xs",
                                        children: "Amount"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-4 text-right font-black text-white uppercase tracking-wide text-xs",
                                        children: "Total"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-4 text-left font-black text-white uppercase tracking-wide text-xs",
                                        children: "Employee"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y-2 divide-gray-100",
                            children: displayedExpenses.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 6,
                                    className: "p-16 text-center text-gray-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-6xl mb-4",
                                            children: "📜"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-lg",
                                            children: "No payment history"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                            lineNumber: 109,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : displayedExpenses.map((exp)=>{
                                const subsTotal = (exp.subtasks || []).reduce((s, sub)=>s + (sub.amount || 0), 0);
                                const total = exp.amount + subsTotal;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-blue-50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-4 text-gray-600 text-sm",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(exp.date)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                            lineNumber: 124,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-4 text-gray-900 font-bold",
                                            children: exp.description
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                            lineNumber: 127,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-4 text-gray-900",
                                            children: exp.shop || "-"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                            lineNumber: 130,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-4 text-right text-gray-600 font-bold",
                                            children: [
                                                "₹",
                                                exp.amount.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                            lineNumber: 131,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-4 text-right font-black text-gray-900 text-lg",
                                            children: [
                                                "₹",
                                                total.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                            lineNumber: 134,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-4 text-gray-600",
                                            children: exp.employeeName || "-"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                            lineNumber: 137,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, exp._id, true, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                                    lineNumber: 120,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = PaymentHistorySection;
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/LoadingState.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const LoadingState = ({ message = "Loading expenses..." })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-16 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"
            }, void 0, false, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/LoadingState.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-gray-600 font-medium",
                children: message
            }, void 0, false, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/LoadingState.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/LoadingState.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LoadingState;
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ErrorState.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const ErrorState = ({ error })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-16 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-block w-16 h-16 rounded-full bg-red-100 items-center justify-center mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-3xl text-red-600",
                    children: "!"
                }, void 0, false, {
                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ErrorState.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ErrorState.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-600 font-bold",
                children: error
            }, void 0, false, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ErrorState.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ErrorState.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ErrorState;
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/HeaderSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const HeaderSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center mb-12 mt-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-5xl font-black text-gray-900 mb-3 tracking-tight",
                children: "Expense Tracker"
            }, void 0, false, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/HeaderSection.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg text-gray-600",
                children: "Manage your business finances with ease"
            }, void 0, false, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/HeaderSection.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/HeaderSection.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HeaderSection;
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitilAmountHistoryModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const InitialAmountHistoryModal = ({ history, onClose })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-white/90 z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl p-8 shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-6 border-b pb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-black text-gray-900",
                            children: "Initial Budget History"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitilAmountHistoryModal.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-400 hover:text-gray-600 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitilAmountHistoryModal.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitilAmountHistoryModal.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitilAmountHistoryModal.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitilAmountHistoryModal.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-600 mb-4",
                    children: "This log shows all changes made to the initial budget amount."
                }, void 0, false, {
                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitilAmountHistoryModal.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: history.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex justify-between p-4 rounded-xl ${index === 0 ? "bg-blue-50 border-2 border-blue-300 shadow-md" : "bg-gray-50 border border-gray-200"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `font-bold ${index === 0 ? "text-blue-700 text-lg" : "text-gray-900"}`,
                                        children: [
                                            "₹",
                                            entry.amount.toLocaleString(),
                                            index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-xs font-normal text-green-600 bg-green-100 px-2 py-0.5 rounded-full",
                                                children: "Current"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitilAmountHistoryModal.tsx",
                                                lineNumber: 61,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitilAmountHistoryModal.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitilAmountHistoryModal.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-500 font-medium",
                                        children: new Date(entry.date).toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitilAmountHistoryModal.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitilAmountHistoryModal.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitilAmountHistoryModal.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitilAmountHistoryModal.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                history.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-gray-500 pt-4",
                    children: "No history found."
                }, void 0, false, {
                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitilAmountHistoryModal.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitilAmountHistoryModal.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitilAmountHistoryModal.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = InitialAmountHistoryModal;
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/AddExpenseButtonState.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const AddExpenseButton = ({ showAddForm, onClick })=>{
    if (showAddForm) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "fixed bottom-8 right-8 bg-linear-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-4xl font-light shadow-2xl transition-all duration-300 transform hover:scale-110 z-50",
        "aria-label": "Add New Expense",
        children: "+"
    }, void 0, false, {
        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/AddExpenseButtonState.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AddExpenseButton;
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$ExpenseForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/ExpenseForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$SubExpensesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/SubExpensesSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$EditExpenseModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditExpenseModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$EditSubtaskModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/components/EditSubtaskModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$BudgetPeriod$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/BudgetPeriod/page.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$InitialBudget$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitialBudget/page.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$FilterComponet$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/FilterComponet/page.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$constFunctions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/constFunctions.tsx [app-ssr] (ecmascript)");
// Import new components
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$ExpensesTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ExpensesTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$PaymentHistorySection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/PaymentHistorySection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$LoadingState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/LoadingState.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$ErrorState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/ErrorState.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$HeaderSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/HeaderSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$InitilAmountHistoryModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/InitilAmountHistoryModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$AddExpenseButtonState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/app/expenses/AddExpenseButtonState.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const ExpensesContent = ()=>{
    // State declarations (keep the same)
    const [expenses, setExpenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [employees, setEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [initialAmountHistory, setInitialAmountHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showInitialAmountHistory, setShowInitialAmountHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [budgetPeriodStart, setBudgetPeriodStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const now = new Date().toISOString().slice(0, 10);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$constFunctions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMonthStart"])(now);
    });
    // Form states (keep the same)
    const [shopName, setShopName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new Date().toISOString().slice(0, 10));
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("founder");
    const [selectedEmployeeId, setSelectedEmployeeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // UI states (keep the same)
    const [expandedId, setExpandedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [subTitle, setSubTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [subAmount, setSubAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [subDate, setSubDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new Date().toISOString().slice(0, 10));
    const [subEmployeeId, setSubEmployeeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Filter states (keep the same)
    const [filterRole, setFilterRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [filterEmployee, setFilterEmployee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [filterShop, setFilterShop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [filterSearch, setFilterSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterFrom, setFilterFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterTo, setFilterTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // History states (keep the same)
    const [showHistory, setShowHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [historyEmployeeId, setHistoryEmployeeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [visibleRowCount, setVisibleRowCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$constFunctions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_ROWS"]);
    const [isLoadingMore, setIsLoadingMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAddForm, setShowAddForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Editing states (keep the same)
    const [editingExpense, setEditingExpense] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editExpenseFields, setEditExpenseFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        shop: "",
        description: "",
        amount: "",
        date: "",
        role: "founder",
        employeeId: "",
        employeeName: ""
    });
    const [editingSubtask, setEditingSubtask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Effects (keep the same)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchInitialAmount = async ()=>{
            try {
                const res = await fetch("/api/initial-amount");
                const json = await res.json();
                if (json.success && Array.isArray(json.data) && json.data.length > 0) {
                    setInitialAmountHistory(json.data);
                } else {
                    setInitialAmountHistory([
                        {
                            amount: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_AMOUNT_CONSTANT"],
                            date: new Date().toISOString()
                        }
                    ]);
                }
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to load initial budget from server.");
                setInitialAmountHistory([
                    {
                        amount: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_AMOUNT_CONSTANT"],
                        date: new Date().toISOString()
                    }
                ]);
            }
        };
        fetchInitialAmount();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchExpenses = async ()=>{
            try {
                setLoading(true);
                setError(null);
                const res = await fetch("/api/expenses");
                const json = await res.json();
                if (!json.success) throw new Error(json.error || "Failed to fetch");
                const fetchedExpenses = (json.data || []).map((e)=>{
                    const paid = typeof e.paid === "boolean" ? e.paid : false;
                    const subtasks = Array.isArray(e.subtasks) ? e.subtasks : [];
                    return {
                        ...e,
                        paid,
                        subtasks
                    };
                });
                const sortedExpenses = fetchedExpenses.sort((a, b)=>{
                    if (a.date > b.date) return 1;
                    if (a.date < b.date) return -1;
                    return 0;
                });
                setExpenses(sortedExpenses);
            } catch (err) {
                setError(err.message || "Failed to load expenses");
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to load expenses");
            } finally{
                setLoading(false);
            }
        };
        fetchExpenses();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchEmployees = async ()=>{
            try {
                const res = await fetch("https://check-seven-steel.vercel.app/api/employees");
                const data = await res.json();
                const arr = Array.isArray(data) ? data : data.employees || [];
                setEmployees(arr);
            } catch (err) {
                console.error("Error fetching employees:", err);
            }
        };
        fetchEmployees();
    }, []);
    // Memoized values (keep the same)
    const shopSuggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const arr = expenses.map((e)=>(e.shop || "").trim()).filter((s)=>s.length > 0);
        return Array.from(new Set(arr));
    }, [
        expenses
    ]);
    const filteredExpenses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const filtered = expenses.filter((e)=>{
            const paid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isExpensePaid"])(e);
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
        });
        return filtered.sort((a, b)=>{
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
        filterSearch
    ]);
    const visibleExpenses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return filteredExpenses.slice(0, visibleRowCount);
    }, [
        filteredExpenses,
        visibleRowCount
    ]);
    const historyExpenses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>expenses.filter((e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isExpensePaid"])(e)).sort((a, b)=>a.date < b.date ? 1 : -1), [
        expenses
    ]);
    const employeeHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!historyEmployeeId) return [];
        return historyExpenses.filter((e)=>e.employeeId === historyEmployeeId);
    }, [
        historyEmployeeId,
        historyExpenses
    ]);
    const employeeHistoryTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>employeeHistory.reduce((sum, e)=>{
            const base = e.amount;
            const subs = (e.subtasks || []).reduce((s, sub)=>s + (sub.amount || 0), 0);
            return sum + base + subs;
        }, 0), [
        employeeHistory
    ]);
    // Handler functions (keep the same)
    const loadMoreRows = ()=>{
        setIsLoadingMore(true);
        setTimeout(()=>{
            setVisibleRowCount((prevCount)=>Math.min(prevCount + __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$constFunctions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROWS_PER_PAGE"], filteredExpenses.length));
            setIsLoadingMore(false);
        }, 300);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setVisibleRowCount(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$constFunctions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_ROWS"]);
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
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(json.error || "Failed to update status.");
                return;
            }
            const updatedExpense = {
                ...exp,
                paid: isPaid,
                subtasks: updatedSubtasks
            };
            setExpenses((prev)=>prev.map((e)=>e._id === exp._id ? updatedExpense : e));
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Expense marked as ${isPaid ? "Done" : "Pending"}!`);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to update status.");
        }
    };
    const handleAddExpense = async (e)=>{
        e.preventDefault();
        if (!description.trim() || !amount || !date) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warn("Description, amount, date are required.");
            return;
        }
        if (role === "manager" && !selectedEmployeeId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warn("Select employee for Manager role.");
            return;
        }
        const payload = {
            description: description.trim(),
            amount: Number(amount),
            date,
            weekStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeekStart"])(date),
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
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(json.error || "Failed to add expense.");
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Expense added successfully!");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to add expense.");
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warn("Sub description and amount required.");
            return;
        }
        const newSub = {
            id: Math.random().toString(36).slice(2, 9),
            title: subTitle.trim(),
            done: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isExpensePaid"])(parent),
            amount: Number(subAmount),
            date: subDate,
            employeeId: subEmployeeId || undefined,
            employeeName: subEmployeeId && employees.find((e)=>e._id === subEmployeeId)?.name
        };
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
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(json.error || "Failed to update subtask status.");
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Sub expense status updated!");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to update subtask status.");
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
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(json.error || "Failed to delete sub expense.");
                return;
            }
            setExpenses((prev)=>prev.map((exp)=>exp._id === parentExp._id ? {
                        ...exp,
                        subtasks: updatedSubtasks
                    } : exp));
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Sub expense deleted successfully!");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to delete sub expense.");
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
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(json.error || "Failed to delete expense.");
                return;
            }
            setExpenses((prev)=>prev.filter((e)=>e._id !== exp._id));
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Expense deleted successfully!");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to delete expense.");
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warn("Employee ID is required for Manager role.");
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
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(json.error || "Failed to update expense. Expense not found?");
                return;
            }
            const updated = json.data;
            setExpenses((prev)=>prev.map((e)=>e._id === updated._id ? {
                        ...e,
                        ...updated
                    } : e));
            setEditingExpense(null);
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Expense updated successfully!");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to update expense.");
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Parent expense not found");
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
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(json.error || "Failed to update sub expense.");
                return;
            }
            setExpenses((prev)=>prev.map((e)=>e._id === parent._id ? {
                        ...e,
                        subtasks: updatedSubtasks
                    } : e));
            setEditingSubtask(null);
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Sub expense updated successfully!");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to update sub expense.");
        }
    };
    const cancelEditExpense = ()=>setEditingExpense(null);
    const cancelEditSubtask = ()=>setEditingSubtask(null);
    const cancelAddForm = ()=>setShowAddForm(false);
    // Render
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-teal-50 p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastContainer"], {
                position: "bottom-right",
                autoClose: 3000
            }, void 0, false, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                lineNumber: 708,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-400 mx-auto space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$HeaderSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                        lineNumber: 711,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$BudgetPeriod$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        budgetPeriodStart: budgetPeriodStart
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                        lineNumber: 713,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$InitialBudget$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        budgetPeriodStart: budgetPeriodStart,
                        setShowInitialAmountHistory: setShowInitialAmountHistory,
                        expenses: expenses,
                        initialAmountHistory: initialAmountHistory,
                        setInitialAmountHistory: setInitialAmountHistory
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                        lineNumber: 717,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    showAddForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$ExpenseForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                        lineNumber: 726,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$FilterComponet$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    setShowHistory: setShowHistory,
                                    showHistory: showHistory,
                                    filterSearch: filterSearch,
                                    setFilterSearch: setFilterSearch,
                                    filterShop: filterShop,
                                    setFilterShop: setFilterShop,
                                    shopSuggestions: shopSuggestions,
                                    filterRole: filterRole,
                                    setFilterRole: setFilterRole,
                                    filterStatus: filterStatus,
                                    setFilterStatus: setFilterStatus,
                                    filterEmployee: filterEmployee,
                                    setFilterEmployee: setFilterEmployee,
                                    employees: employees,
                                    filterFrom: filterFrom,
                                    setFilterFrom: setFilterFrom,
                                    filterTo: filterTo,
                                    setFilterTo: setFilterTo,
                                    filteredExpenses: filteredExpenses
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                    lineNumber: 748,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                lineNumber: 747,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-100",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$LoadingState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                        lineNumber: 774,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$ErrorState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        error: error
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                        lineNumber: 776,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$ExpensesTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        visibleExpenses: visibleExpenses,
                                        filteredExpenses: filteredExpenses,
                                        isLoadingMore: isLoadingMore,
                                        visibleRowCount: visibleRowCount,
                                        expandedId: expandedId,
                                        employees: employees,
                                        onToggleExpand: toggleExpand,
                                        onStartEditExpense: onStartEditExpense,
                                        onDeleteExpense: handleDeleteExpense,
                                        onUpdatePaidStatus: (exp, status)=>handleUpdatePaidStatus(exp, status),
                                        onLoadMore: loadMoreRows,
                                        children: expandedId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$SubExpensesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            parent: expenses.find((e)=>e._id === expandedId),
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
                                            lineNumber: 794,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                        lineNumber: 778,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                    lineNumber: 772,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                                lineNumber: 771,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                        lineNumber: 746,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$PaymentHistorySection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        showHistory: showHistory,
                        historyEmployeeId: historyEmployeeId,
                        setHistoryEmployeeId: setHistoryEmployeeId,
                        employees: employees,
                        historyExpenses: historyExpenses,
                        employeeHistory: employeeHistory,
                        employeeHistoryTotal: employeeHistoryTotal
                    }, void 0, false, {
                        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                        lineNumber: 817,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                lineNumber: 710,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$AddExpenseButtonState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                showAddForm: showAddForm,
                onClick: ()=>setShowAddForm(true)
            }, void 0, false, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                lineNumber: 828,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            editingExpense && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$EditExpenseModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                editingExpense: editingExpense,
                editExpenseFields: editExpenseFields,
                setEditExpenseFields: setEditExpenseFields,
                employees: employees,
                onSave: handleSaveEditExpense,
                onCancel: cancelEditExpense
            }, void 0, false, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                lineNumber: 834,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            editingSubtask && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$components$2f$EditSubtaskModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                editingSubtask: editingSubtask,
                setEditingSubtask: setEditingSubtask,
                employees: employees,
                onSave: handleSaveEditSubtask,
                onCancel: cancelEditSubtask
            }, void 0, false, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                lineNumber: 845,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showInitialAmountHistory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$app$2f$expenses$2f$InitilAmountHistoryModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                history: initialAmountHistory,
                onClose: ()=>setShowInitialAmountHistory(false)
            }, void 0, false, {
                fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
                lineNumber: 855,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Expense/lp-expense-paytrack/app/expenses/page.tsx",
        lineNumber: 707,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ExpensesContent;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__74df1443._.js.map