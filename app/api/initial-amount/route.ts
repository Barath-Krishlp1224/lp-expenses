import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectToDatabase } from "@/lib/mongoose";
import InitialAmountHistory, {
  IInitialAmountHistoryEntry,
} from "@/models/InitialAmount";

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

export async function GET() {
  try {
    await ensureConnected();

    const history = (await InitialAmountHistory.find({})
      .sort({ createdAt: -1 }) // Sort by creation date descending to get latest first
      .lean()) as unknown as IInitialAmountHistoryEntry[];

    return NextResponse.json(
      { success: true, data: history },
      { status: 200, headers: corsHeaders }
    );
  } catch (err: any) {
    console.error("GET Initial Amount Error:", err);
    return NextResponse.json(
      { success: false, error: err?.message || "Internal Server Error" },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { amount: unknown; date: unknown, wallet: unknown };
    console.log('body: ', body);
    const wallet: any = body.wallet;

    const amount =
      typeof body.amount === "number" ? body.amount : Number(body.amount);
    const date = typeof body.date === "string" ? body.date : "";

    // if (!(typeof amount === "number" && !Number.isNaN(amount) && amount >= 0)) {
    //   return NextResponse.json(
    //     { success: false, error: "Invalid amount provided." },
    //     { status: 400 }
    //   );
    // }

    // if (!date) {
    //   return NextResponse.json(
    //     { success: false, error: "Date is required." },
    //     { status: 400 }
    //   );
    // }
    // if (!wallet) {
    //   return NextResponse.json(
    //     { success: false, error: "Wallet is required." },
    //     { status: 400 }
    //   );
    // }

    await ensureConnected();

    const created = new InitialAmountHistory({
      amount,
      date,
      wallet
    });
    console.log("createdcreatedcreated", created);

    await created.save();

    return NextResponse.json(
      { success: true, data: created.toObject() },
      { status: 200, headers: corsHeaders }
    );
  } catch (err: any) {
    console.error("POST Initial Amount Error:", err);
    return NextResponse.json(
      { success: false, error: err?.message || "Internal Server Error" },
      { status: 500, headers: corsHeaders }
    );
  }
}