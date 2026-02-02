export const WALLETS = [
  { key: "cash", label: "Cash Wallet" },
  { key: "upi_prepaid", label: "UPI Prepaid" },
  { key: "upi_postpaid", label: "UPI Postpaid" },
] as const;

export type WalletKey = typeof WALLETS[number]["key"];
