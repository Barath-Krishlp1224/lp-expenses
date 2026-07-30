"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f7fb]">
      {/* Logo Header - No background, not sticky, just the logo */}
      <div className="mx-auto max-w-[1600px] px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>

            {/* Logo - Bigger size */}
            <div className="relative h-20 w-48 flex-shrink-0">
              <Image
                src="/logo.svg"
                alt="LemonPay"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden rounded-b-xl shadow-sm">
            <nav className="space-y-1">
              <a className="block rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-900">
                Dashboard
              </a>
              <a className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50">
                Expenses
              </a>
              <a className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50">
                Budget
              </a>
              <a className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50">
                Reports
              </a>
            </nav>
          </div>
        )}
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-[1600px] px-4 py-6 md:px-6 md:py-8">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;