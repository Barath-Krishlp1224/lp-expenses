import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Expense from "@/models/Expense";
import User from "@/models/User"; // REQUIRED: This registers the User schema

export async function GET() {
  try {
    await connectDB();

    // We explicitly reference User here to ensure Mongoose knows it exists
    const expenses = await Expense.find()
      .populate({
        path: "createdBy",
        model: User, // Explicitly passing the model fixes the "not showing" issue
        select: "name"
      })
      .sort({ createdAt: -1 })
      .lean();

    // This return ensures an empty array if no data exists, preventing frontend crashes
    return NextResponse.json(expenses || []);
  } catch (error: any) {
    console.error("Backend Error:", error.message);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}