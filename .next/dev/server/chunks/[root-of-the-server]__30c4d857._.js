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
"[project]/Documents/Expense/lp-expense-paytrack/models/InitialAmount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Documents/Expense/lp-expense-paytrack/node_modules/mongoose)");
;
const InitialAmountHistoryEntrySchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$mongoose$29$__["Schema"]({
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$mongoose$29$__["default"].models.InitialAmountHistory || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$mongoose$29$__["default"].model("InitialAmountHistory", InitialAmountHistoryEntrySchema);
}),
"[project]/Documents/Expense/lp-expense-paytrack/app/api/initial-amount/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Documents/Expense/lp-expense-paytrack/node_modules/mongoose)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$lib$2f$mongoose$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/lib/mongoose.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$models$2f$InitialAmount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Expense/lp-expense-paytrack/models/InitialAmount.ts [app-route] (ecmascript)");
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
async function GET() {
    try {
        await ensureConnected();
        const history = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$models$2f$InitialAmount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({}).sort({
            createdAt: -1
        }) // Sort by creation date descending to get latest first
        .lean();
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: history
        }, {
            status: 200
        });
    } catch (err) {
        console.error("GET Initial Amount Error:", err);
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
        const amount = typeof body.amount === "number" ? body.amount : Number(body.amount);
        const date = typeof body.date === "string" ? body.date : "";
        if (!(typeof amount === "number" && !Number.isNaN(amount) && amount >= 0)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Invalid amount provided."
            }, {
                status: 400
            });
        }
        if (!date) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Date is required."
            }, {
                status: 400
            });
        }
        await ensureConnected();
        const created = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$models$2f$InitialAmount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]({
            amount,
            date
        });
        await created.save();
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Expense$2f$lp$2d$expense$2d$paytrack$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: created.toObject()
        }, {
            status: 201
        });
    } catch (err) {
        console.error("POST Initial Amount Error:", err);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__30c4d857._.js.map