import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectToDatabase } from "@/lib/mongoose";
import CumulativePayment from "@/models/CumulativePayment";
import { v4 as uuidv4 } from "uuid"; // <-- install 'uuid' package

async function ensureConnected() {
    await connectToDatabase();
    let tries = 0;
    while (Number(mongoose.connection.readyState) !== 1 && tries < 20) {
        await new Promise((r) => setTimeout(r, 100));
        tries++;
    }
    if (Number(mongoose.connection.readyState) !== 1) {
        throw new Error("Failed to connect to MongoDB");
    }
}

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
    return new Response(null, {
        status: 204,
        headers: corsHeaders,
    });
}
export async function GET() {
    try {
        await ensureConnected();
        const payments = await CumulativePayment.find().sort({ paymentDate: -1, paymentTime: -1 });
        return NextResponse.json(
            { success: true, data: payments },
            { status: 200, headers: corsHeaders }
        );
    } catch (err: any) {
        console.error("GET Cumulative Payments Error:", err);
        return NextResponse.json(
            { success: false, error: err.message || "Internal server error" },
            { status: 500, headers: corsHeaders }
        );
    }
}

// DELETE: Delete a payment by uniqueId
export async function DELETE(request: Request) {
    try {
        await ensureConnected();

        const body = await request.json();
        const { paymentId } = body;

        if (!paymentId) {
            return NextResponse.json(
                { success: false, error: "paymentId is required" },
                { status: 400, headers: corsHeaders }
            );
        }

        const deleted = await CumulativePayment.findOneAndDelete({ paymentId });
        if (!deleted) {
            return NextResponse.json(
                { success: false, error: "Payment not found" },
                { status: 404, headers: corsHeaders }
            );
        }

        return NextResponse.json(
            { success: true, data: deleted },
            { status: 200, headers: corsHeaders }
        );
    } catch (err: any) {
        console.error("DELETE Cumulative Payment Error:", err);
        return NextResponse.json(
            { success: false, error: err.message || "Internal server error" },
            { status: 500, headers: corsHeaders }
        );
    }
}

export async function POST(request: Request) {
    try {
        await ensureConnected();

        const body = (await request.json()) as {
            paymentDate: string;
            paymentTime: string;
            paidBy?: string;
            totalAmount: number;
            expenseIds: string[];
        };

        if (
            !body.paymentDate ||
            !body.paymentTime ||
            !Array.isArray(body.expenseIds) ||
            body.expenseIds.length === 0 ||
            typeof body.totalAmount !== "number"
        ) {
            return NextResponse.json(
                { success: false, error: "Missing or invalid fields" },
                { status: 400, headers: corsHeaders }
            );
        }

        // Generate a separate unique ID
        const uniqueId = uuidv4();

        const cumulativePayment = await CumulativePayment.create({
            uniqueId,          // <-- store this in DB
            paymentDate: body.paymentDate,
            paymentTime: body.paymentTime,
            paidBy: body.paidBy,
            totalAmount: body.totalAmount,
            expenseIds: body.expenseIds,
        });

        return NextResponse.json(
            { success: true, data: cumulativePayment },
            { status: 201, headers: corsHeaders }
        );
    } catch (err: any) {
        console.error("POST Cumulative Payment Error:", err);
        return NextResponse.json(
            { success: false, error: err.message || "Internal server error" },
            { status: 500, headers: corsHeaders }
        );
    }
}
