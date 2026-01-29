module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/Documents/Expense/lp-expense-paytrack/lib/mongoose.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectToDatabase",
    ()=>connectToDatabase
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Documents/Expense/lp-expense-paytrack/node_modules/mongoose)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$dotenv$2f$lib$2f$main$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/dotenv/lib/main.js [app-route] (ecmascript)");
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$dotenv$2f$lib$2f$main$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].config();
const MONGODB_URI = process.env.MONGODB_URI || "";
if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable in .env");
}
let cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.__mongoose;
if (!cached) {
    cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.__mongoose = {
        conn: null,
        promise: null
    };
}
async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$mongoose$29$__["default"].connect(MONGODB_URI).then((m)=>m).catch((err)=>{
            cached.promise = null;
            throw err;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
}),
"[project]/Documents/Expense/lp-expense-paytrack/models/Expense.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// models/Expense.ts
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Documents/Expense/lp-expense-paytrack/node_modules/mongoose)");
;
const SubExpenseSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$mongoose$29$__["Schema"]({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    },
    amount: {
        type: Number,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    employeeId: {
        type: String,
        required: false
    },
    employeeName: {
        type: String,
        required: false,
        trim: true
    }
}, {
    _id: false
});
const ExpenseSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$mongoose$29$__["Schema"]({
    description: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    shop: {
        type: String,
        default: "",
        trim: true
    },
    paid: {
        type: Boolean,
        default: false
    },
    weekStart: {
        type: String,
        required: true
    },
    subtasks: {
        type: [
            SubExpenseSchema
        ],
        default: []
    },
    role: {
        type: String,
        enum: [
            "founder",
            "manager",
            "other"
        ],
        default: "other"
    },
    employeeId: {
        type: String,
        required: false
    },
    employeeName: {
        type: String,
        required: false,
        trim: true
    }
}, {
    timestamps: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$mongoose$29$__["default"].models.Expense || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$mongoose$29$__["default"].model("Expense", ExpenseSchema);
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/api/expenses/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "PATCH",
    ()=>PATCH,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT
]);
// app/api/expenses/route.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Documents/Expense/lp-expense-paytrack/node_modules/mongoose)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$lib$2f$mongoose$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/lib/mongoose.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$models$2f$Expense$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/models/Expense.ts [app-route] (ecmascript)");
;
;
;
;
async function ensureConnected() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$lib$2f$mongoose$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    let tries = 0;
    while(Number(__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$mongoose$29$__["default"].connection.readyState) !== 1 && tries < 20){
        await new Promise((r)=>setTimeout(r, 100));
        tries++;
    }
    if (Number(__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$mongoose$29$__["default"].connection.readyState) !== 1) {
        throw new Error("Failed to connect to MongoDB");
    }
}
function normalizeSubExpense(raw) {
    const title = typeof raw.title === "string" ? raw.title.trim() : "";
    if (!title) return null;
    const id = typeof raw.id === "string" && raw.id.length > 0 ? raw.id : Math.random().toString(36).slice(2, 9);
    const done = typeof raw.done === "boolean" ? raw.done : Boolean(raw.done);
    const amount = raw.amount === undefined || raw.amount === null ? undefined : typeof raw.amount === "number" && !Number.isNaN(raw.amount) ? raw.amount : Number(raw.amount);
    const date = typeof raw.date === "string" ? raw.date : raw.date ? String(raw.date) : undefined;
    const employeeId = raw.employeeId === undefined || raw.employeeId === null ? undefined : String(raw.employeeId);
    const employeeName = typeof raw.employeeName === "string" ? raw.employeeName.trim() : undefined;
    const subExpense = {
        id,
        title,
        done
    };
    if (amount !== undefined && !Number.isNaN(amount)) subExpense.amount = amount;
    if (date) subExpense.date = date;
    if (employeeId) subExpense.employeeId = employeeId;
    if (employeeName) subExpense.employeeName = employeeName;
    return subExpense;
}
function normalizeSubExpenses(arr) {
    if (!Array.isArray(arr)) return [];
    return arr.map((r)=>normalizeSubExpense(r)).filter((s)=>s !== null);
}
function computeExpenseTotal(e) {
    const expenseAmount = typeof e.amount === "number" && !Number.isNaN(e.amount) ? e.amount : Number(e.amount) || 0;
    const subtasksTotal = (e.subtasks || []).reduce((ss, st)=>{
        const a = st.amount;
        return ss + (typeof a === "number" && !Number.isNaN(a) ? a : 0);
    }, 0);
    return expenseAmount + subtasksTotal;
}
function dedupeShopsFromExpenses(expenses) {
    const seen = new Set();
    const shops = [];
    for (const e of expenses){
        const s = (e.shop || "").trim();
        if (!s) continue;
        if (!seen.has(s)) {
            seen.add(s);
            shops.push(s);
        }
    }
    return shops;
}
async function GET(request) {
    try {
        await ensureConnected();
        const url = new URL(request.url);
        const weekStart = url.searchParams.get("weekStart");
        if (weekStart) {
            const wkItems = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$models$2f$Expense$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
                weekStart
            }).sort({
                date: -1
            }).lean().exec();
            const weekTotal = wkItems.reduce((s, e)=>s + computeExpenseTotal(e), 0);
            const shops = dedupeShopsFromExpenses(wkItems);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                data: wkItems,
                weekTotal,
                shops
            }, {
                status: 200
            });
        }
        const expenses = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$models$2f$Expense$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({}).sort({
            createdAt: -1
        }).lean().exec();
        const shops = dedupeShopsFromExpenses(expenses);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: expenses,
            shops
        }, {
            status: 200
        });
    } catch (err) {
        console.error("GET Expense Error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: err?.message || "Internal Server Error"
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const body = await request.json();
        const description = typeof body.description === "string" ? body.description.trim() : "";
        const amount = typeof body.amount === "number" ? body.amount : Number(body.amount);
        const date = typeof body.date === "string" ? body.date : "";
        const weekStart = typeof body.weekStart === "string" ? body.weekStart : "";
        const shop = body.shop === undefined || body.shop === null ? "" : String(body.shop);
        const roleRaw = typeof body.role === "string" ? body.role.trim() : "other";
        const role = [
            "founder",
            "manager",
            "other"
        ].includes(roleRaw) ? roleRaw : "other";
        const employeeId = body.employeeId === undefined || body.employeeId === null ? undefined : String(body.employeeId);
        const employeeName = typeof body.employeeName === "string" ? body.employeeName.trim() : undefined;
        const subtasks = normalizeSubExpenses(body.subtasks);
        if (!description || !date || !weekStart || !(typeof amount === "number" && !Number.isNaN(amount) && amount >= 0)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Missing or invalid fields. Required: description (string), amount (number >= 0), date (string), weekStart (string)"
            }, {
                status: 400
            });
        }
        if (role === "manager" && (!employeeId || !employeeName)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Employee ID and Name are required for Manager role."
            }, {
                status: 400
            });
        }
        await ensureConnected();
        const created = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$models$2f$Expense$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]({
            description,
            amount,
            date,
            shop,
            weekStart,
            paid: false,
            role,
            employeeId,
            employeeName,
            subtasks
        });
        await created.save();
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: created.toObject()
        }, {
            status: 201
        });
    } catch (err) {
        console.error("POST Expense Error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: err?.message || "Internal Server Error"
        }, {
            status: 500
        });
    }
}
async function PUT(request) {
    try {
        const body = await request.json();
        const { weekStart, ids } = body;
        if (!weekStart && (!Array.isArray(ids) || ids.length === 0)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Provide weekStart or ids array"
            }, {
                status: 400
            });
        }
        await ensureConnected();
        let res;
        if (weekStart) {
            res = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$models$2f$Expense$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].updateMany({
                weekStart,
                paid: false
            }, {
                $set: {
                    paid: true
                }
            }).exec();
        } else if (Array.isArray(ids) && ids.length > 0) {
            res = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$models$2f$Expense$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].updateMany({
                _id: {
                    $in: ids
                },
                paid: false
            }, {
                $set: {
                    paid: true
                }
            }).exec();
        }
        if (res) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                modifiedCount: res.modifiedCount ?? 0
            }, {
                status: 200
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: "No valid update criteria provided"
        }, {
            status: 400
        });
    } catch (err) {
        console.error("PUT Expense Error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: err?.message || "Internal Server Error"
        }, {
            status: 500
        });
    }
}
async function PATCH(request) {
    try {
        const body = await request.json();
        const { id, updates } = body;
        console.log("PATCH Request - ID:", id, "Updates:", updates);
        if (!id || !updates || typeof updates !== "object") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Provide id and updates object"
            }, {
                status: 400
            });
        }
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$mongoose$29$__["default"].Types.ObjectId.isValid(id)) {
            console.error(`PATCH Invalid ID format: ${id}`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Invalid Expense ID format"
            }, {
                status: 400
            });
        }
        await ensureConnected();
        const allowed = [
            "description",
            "amount",
            "date",
            "shop",
            "paid",
            "weekStart",
            "subtasks",
            "role",
            "employeeId",
            "employeeName"
        ];
        const payload = {};
        for (const key of Object.keys(updates)){
            if (!allowed.includes(key)) continue;
            switch(key){
                case "shop":
                    payload[key] = String(updates[key] || "").trim();
                    break;
                case "amount":
                    const am = Number(updates.amount);
                    if (!Number.isNaN(am) && am >= 0) payload.amount = am;
                    break;
                case "subtasks":
                    payload.subtasks = normalizeSubExpenses(updates.subtasks);
                    break;
                case "date":
                case "description":
                case "weekStart":
                    payload[key] = String(updates[key] || "").trim();
                    break;
                case "employeeName":
                    payload.employeeName = updates.employeeName === null ? null : String(updates.employeeName || "").trim();
                    break;
                case "paid":
                    payload.paid = Boolean(updates.paid);
                    break;
                case "role":
                    const roleRaw = String(updates.role || "other").trim();
                    payload.role = [
                        "founder",
                        "manager",
                        "other"
                    ].includes(roleRaw) ? roleRaw : "other";
                    break;
                case "employeeId":
                    payload.employeeId = updates.employeeId === "" || updates.employeeId === null ? null : String(updates.employeeId);
                    break;
                default:
                    payload[key] = updates[key];
                    break;
            }
        }
        if (Object.keys(payload).length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "No valid fields to update"
            }, {
                status: 400
            });
        }
        console.log("PATCH Payload:", payload);
        // CRITICAL FIX: Use findOne with string _id comparison instead of ObjectId
        // This bypasses Mongoose's ObjectId casting issues on Vercel
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$models$2f$Expense$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            _id: id
        }).lean().exec();
        if (!existing) {
            console.error(`PATCH: Expense not found with ID: ${id}`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Expense not found"
            }, {
                status: 404
            });
        }
        console.log("PATCH: Found existing document");
        // Role validation check
        if (payload.role === "manager" && !payload.employeeId) {
            const existingExpense = existing;
            const isUpdatingToManagerWithoutEmployee = updates.role === "manager" && (updates.employeeId === null || updates.employeeId === undefined);
            if (isUpdatingToManagerWithoutEmployee && !existingExpense.employeeId) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: "Employee ID is required for Manager role update if not previously set."
                }, {
                    status: 400
                });
            }
        }
        // CRITICAL FIX: Use updateOne with string _id instead of ObjectId
        const updateResult = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$models$2f$Expense$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].updateOne({
            _id: id
        }, {
            $set: payload
        }).exec();
        console.log("PATCH Update result:", updateResult);
        if (updateResult.matchedCount === 0) {
            console.error(`PATCH: No document matched for ID: ${id}`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Expense not found"
            }, {
                status: 404
            });
        }
        // Fetch the updated document
        const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$models$2f$Expense$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            _id: id
        }).lean().exec();
        if (!updated) {
            console.error(`PATCH: Could not retrieve updated document`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Failed to retrieve updated expense"
            }, {
                status: 500
            });
        }
        console.log("PATCH: Successfully updated and retrieved document");
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: updated
        }, {
            status: 200
        });
    } catch (err) {
        console.error("PATCH Expense Error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: err?.message || "Internal Server Error"
        }, {
            status: 500
        });
    }
}
async function DELETE(request) {
    try {
        let id = null;
        const contentType = request.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
            const body = await request.json().catch(()=>null);
            if (body && typeof body.id === "string" && body.id.trim().length > 0) {
                id = body.id.trim();
            }
        }
        if (!id) {
            const url = new URL(request.url);
            const qpId = url.searchParams.get("id");
            if (qpId && qpId.trim().length > 0) {
                id = qpId.trim();
            }
        }
        if (!id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Missing id (in body or query param)"
            }, {
                status: 400
            });
        }
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$mongoose$29$__["default"].Types.ObjectId.isValid(id)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Invalid Expense ID format"
            }, {
                status: 400
            });
        }
        await ensureConnected();
        // CRITICAL FIX: Use string _id instead of ObjectId
        const deleted = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$models$2f$Expense$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOneAndDelete({
            _id: id
        }).lean().exec();
        if (!deleted) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Expense not found"
            }, {
                status: 404
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: deleted
        }, {
            status: 200
        });
    } catch (err) {
        console.error("DELETE Expense Error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: err?.message || "Internal Server Error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cd866c35._.js.map