import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectToDatabase } from "@/lib/mongoose";
import Expense from "@/models/Expense";

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

// POST: Fetch expenses by their IDs
export async function POST(request: Request) {
  try {
    await ensureConnected();

    const body = await request.json();
    const { ids } = body;

    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { success: false, error: "ids array is required" },
        { status: 400 }
      );
    }

    // Convert strings to ObjectId
    const objectIds = ids.map((id: string) => new mongoose.Types.ObjectId(id));

    const expenses = await Expense.find({ _id: { $in: objectIds } }).sort({ date: -1 });

    return NextResponse.json({ success: true, data: expenses }, { status: 200 });
  } catch (err: any) {
    console.error("POST /expensesByIds Error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
