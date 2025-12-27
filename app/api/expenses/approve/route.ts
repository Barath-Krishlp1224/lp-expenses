import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Expense from "@/models/Expense";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    /* ---------------------------------------------------------------------- */
    /*                            AUTH CHECK                                   */
    /* ---------------------------------------------------------------------- */

    const authHeader = req.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];
    const decoded: any = jwt.verify(
      token,
      process.env.JWT_SECRET!
    );

    if (!["MANAGER", "ADMIN"].includes(decoded.role)) {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      );
    }

    /* ---------------------------------------------------------------------- */
    /*                           BUSINESS LOGIC                                */
    /* ---------------------------------------------------------------------- */

    const { expenseId, status } = await req.json();

    if (!expenseId || !["APPROVED", "REJECTED"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid request" },
        { status: 400 }
      );
    }

    const expense = await Expense.findByIdAndUpdate(
      expenseId,
      { status },
      { new: true }
    );

    if (!expense) {
      return NextResponse.json(
        { error: "Expense not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(expense);
  } catch (err) {
    return NextResponse.json(
      { error: "Approval failed" },
      { status: 500 }
    );
  }
}
