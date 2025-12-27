import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Expense from "@/models/Expense";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const expense = await Expense.create({
      shopName: body.shopName || "",
      description: body.description || "",
      amount: body.amount || 0,
      category: body.category || "Other",
      date: body.date || new Date().toISOString().split("T")[0],
      createdBy: body.createdBy || null, // Allows saving without a user
      status: "PENDING"
    });

    return NextResponse.json(expense);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create expense" }, { status: 500 });
  }
}