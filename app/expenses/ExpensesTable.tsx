import React, { useRef, useEffect } from "react";
import {  isExpensePaid } from "./types";
import { Expense, formatDate } from "./components/types";

interface ExpensesTableProps {
  visibleExpenses: Expense[];
  filteredExpenses: Expense[];
  isLoadingMore: boolean;
  visibleRowCount: number;
  expandedId: string | null;
  employees: any[];
  onToggleExpand: (id: string) => void;
  onStartEditExpense: (exp: Expense) => void;
  onDeleteExpense: (exp: Expense) => void;
  onUpdatePaidStatus: (exp: Expense, status: boolean) => void;
  onLoadMore: () => void;
  children?: React.ReactNode;
}

const ExpensesTable: React.FC<ExpensesTableProps> = ({
  visibleExpenses,
  filteredExpenses,
  isLoadingMore,
  visibleRowCount,
  expandedId,
  employees,
  onToggleExpand,
  onStartEditExpense,
  onDeleteExpense,
  onUpdatePaidStatus,
  onLoadMore,
  children,
}) => {
  const tableRef = useRef<HTMLDivElement>(null);
  const hasMoreExpenses = visibleRowCount < filteredExpenses.length;

  useEffect(() => {
    const handleScroll = () => {
      if (tableRef.current) {
        const { scrollTop, clientHeight, scrollHeight } = tableRef.current;

        if (
          scrollHeight - (scrollTop + clientHeight) < 200 &&
          !isLoadingMore &&
          visibleRowCount < filteredExpenses.length
        ) {
          onLoadMore();
        }
      }
    };

    if (tableRef.current) {
      tableRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (tableRef.current) {
        tableRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [visibleRowCount, filteredExpenses.length, isLoadingMore, onLoadMore]);

  if (visibleExpenses.length === 0 && filteredExpenses.length === 0) {
    return (
      <div className="p-16 text-center text-gray-500">
        <div className="text-6xl mb-4">📊</div>
        <p className="font-bold text-lg">No expenses found</p>
        <p className="text-sm">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div
      ref={tableRef}
      className="overflow-x-auto"
      style={{ maxHeight: "70vh" }}
    >
      <table className="min-w-full">
        <thead className="bg-linear-to-r from-gray-900 to-gray-800 sticky top-0">
          <tr>
            <th className="p-4 text-left font-black text-white uppercase tracking-wide text-xs">
              #
            </th>
            <th className="p-4 text-left font-black text-white uppercase tracking-wide text-xs">
              Shop
            </th>
            <th className="p-4 text-left font-black text-white uppercase tracking-wide text-xs">
              Description
            </th>
            <th className="p-4 text-right font-black text-white uppercase tracking-wide text-xs">
              Amount
            </th>
            {/* <th className="p-4 text-right font-black text-white uppercase tracking-wide text-xs">
              Total
            </th> */}
            <th className="p-4 text-left font-black text-white uppercase tracking-wide text-xs">
              Date
            </th>
            <th className="p-4 text-left font-black text-white uppercase tracking-wide text-xs">
              Role
            </th>
            <th className="p-4 text-left font-black text-white uppercase tracking-wide text-xs">
              Employee
            </th>
            <th className="p-4 text-left font-black text-white uppercase tracking-wide text-xs">
             Payment Mode
            </th>
            <th className="p-4 text-left font-black text-white uppercase tracking-wide text-xs">
             Payment Type
            </th>
            <th className="p-4 text-left font-black text-white uppercase tracking-wide text-xs">
              Status
            </th>
            <th className="p-4 text-left font-black text-white uppercase tracking-wide text-xs">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-gray-100">
          {visibleExpenses.map((exp, idx) => {
            const subsTotal = (exp.subtasks || []).reduce(
              (s, sub) => s + (sub.amount || 0),
              0
            );
            const total = exp.amount + subsTotal;
            const paid = isExpensePaid(exp);

            return (
              <React.Fragment key={exp._id}>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="p-4 text-gray-600 font-bold">{idx + 1}</td>
                  <td className="p-4 text-gray-900 font-bold">
                    {exp.shop || "-"}
                  </td>
                  <td className="p-4 text-gray-900">{exp.description}</td>
                  <td className="p-4 text-right font-bold text-gray-900">
                    ₹{exp.amount.toLocaleString()}
                  </td>
                  {/* <td className="p-4 text-right font-black text-gray-900 text-lg">
                    ₹{total.toLocaleString()}
                  </td> */}
                  <td className="p-4 text-gray-600 text-sm">
                    {formatDate(exp.date)}
                  </td>
                  <td className="p-4 text-gray-600 capitalize text-sm">
                    {exp.role || "other"}
                  </td>
                  <td className="p-4 text-gray-600 text-sm">
                    {exp.employeeName || "-"}
                  </td>
                  <td className="p-4 text-gray-600 text-sm">
                    {exp.paymentMode || "-"}
                  </td>
                  <td className="p-4 text-gray-600 text-sm">
                    {exp.paymentType || "-"}
                  </td>
                  <td className="p-4">
                    <select
                      value={paid ? "paid" : "unpaid"}
                      onChange={(e) => {
                        const newStatus = e.target.value === "paid";
                        onUpdatePaidStatus(exp, newStatus);
                      }}
                      className={`border-2 rounded-lg px-3 py-2 text-xs font-bold outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer ${
                        paid
                          ? "border-green-300 bg-green-50 text-green-700"
                          : "border-orange-300 bg-orange-50 text-orange-700"
                      }`}
                    >
                      <option value="unpaid">Pending</option>
                      <option value="paid">Done</option>
                    </select>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {/* <button
                        type="button"
                        className="px-4 py-2 rounded-lg text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
                        onClick={() => onToggleExpand(exp._id)}
                      >
                        {expandedId === exp._id ? "Hide" : "View"}
                      </button> */}
                      <button
                        type="button"
                        className="px-4 py-2 rounded-lg text-xs font-bold text-blue-700 bg-blue-100 hover:bg-blue-200 transition-all"
                        onClick={() => onStartEditExpense(exp)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 rounded-lg text-xs font-bold text-red-700 bg-red-100 hover:bg-red-200 transition-all"
                        onClick={() => onDeleteExpense(exp)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                {expandedId === exp._id && children}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>

      <div className="text-center py-6 text-sm font-bold text-gray-600 bg-gray-50">
        {isLoadingMore && <p>Loading more expenses...</p>}
        {!hasMoreExpenses && filteredExpenses.length > 0 && (
          <p>All expenses loaded</p>
        )}
        {hasMoreExpenses && !isLoadingMore && (
          <button
            onClick={onLoadMore}
            className="text-blue-600 hover:text-blue-800 font-bold"
          >
            Load More ({filteredExpenses.length - visibleRowCount} remaining)
          </button>
        )}
      </div>
    </div>
  );
};

export default ExpensesTable;
// // components/expenses/ExpensesTable.tsx

// import React from "react";
// import { Employee, Expense, Role } from "./types";
// import { isExpensePaid } from "./utils";
// import SubExpensesSection from "./SubExpensesSection";

// interface ExpensesTableProps {
//   loading: boolean;
//   error: string | null;
//   filteredExpenses: Expense[];
//   expenses: Expense[];
//   expandedId: string | null;
//   onToggleExpand: (id: string) => void;

//   employees: Employee[];

//   subTitle: string;
//   setSubTitle: (v: string) => void;
//   subAmount: string;
//   setSubAmount: (v: string) => void;
//   subDate: string;
//   setSubDate: (v: string) => void;
//   subRole: Role;
//   setSubRole: (v: Role) => void;
//   subEmployeeId: string;
//   setSubEmployeeId: (v: string) => void;

//   onAddSubtask: (e: React.FormEvent, parent: Expense) => void;
//   onUpdateSubtaskStatus: (
//     parentExp: Expense,
//     subtaskId: string,
//     isDone: boolean
//   ) => void;
//   onUpdatePaidStatus: (exp: Expense, isPaid: boolean) => void;
// }

// const ExpensesTable: React.FC<ExpensesTableProps> = ({
//   loading,
//   error,
//   filteredExpenses,
//   expandedId,
//   onToggleExpand,
//   employees,
//   subTitle,
//   setSubTitle,
//   subAmount,
//   setSubAmount,
//   subDate,
//   setSubDate,
//   subRole,
//   setSubRole,
//   subEmployeeId,
//   setSubEmployeeId,
//   onAddSubtask,
//   onUpdateSubtaskStatus,
//   onUpdatePaidStatus,
// }) => {
//   return (
//     <div className="border rounded-lg overflow-x-auto">
//       {loading ? (
//         <div className="p-4 text-sm">Loading expenses…</div>
//       ) : error ? (
//         <div className="p-4 text-sm text-red-500">{error}</div>
//       ) : (
//         <table className="min-w-full text-sm">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="p-2 text-left">#</th>
//               <th className="p-2 text-left">Shop</th>
//               <th className="p-2 text-left">Description</th>
//               <th className="p-2 text-right">Amount</th>
//               <th className="p-2 text-right">Total (incl. sub)</th>
//               <th className="p-2 text-left">Date</th>
//               <th className="p-2 text-left">Role</th>
//               <th className="p-2 text-left">Employee</th>
//               <th className="p-2 text-left">Status</th>
//               <th className="p-2 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredExpenses.length === 0 ? (
//               <tr>
//                 <td className="p-3 text-center" colSpan={10}>
//                   No expenses found
//                 </td>
//               </tr>
//             ) : (
//               filteredExpenses.map((exp, idx) => {
//                 const subsTotal = (exp.subtasks || []).reduce(
//                   (s, sub) => s + (sub.amount || 0),
//                   0
//                 );
//                 const total = exp.amount + subsTotal;
//                 const paid = isExpensePaid(exp);

//                 return (
//                   <React.Fragment key={exp._id}>
//                     <tr className="border-t">
//                       <td className="p-2">{idx + 1}</td>
//                       <td className="p-2">{exp.shop || "-"}</td>
//                       <td className="p-2">{exp.description}</td>
//                       <td className="p-2 text-right">
//                         ₹{exp.amount.toLocaleString()}
//                       </td>
//                       <td className="p-2 text-right">
//                         ₹{total.toLocaleString()}
//                       </td>
//                       <td className="p-2">{exp.date}</td>
//                       <td className="p-2 capitalize">
//                         {exp.role || "other"}
//                       </td>
//                       <td className="p-2">{exp.employeeName || "-"}</td>
//                       <td className="p-2">
//                         <select
//                           value={paid ? "paid" : "unpaid"}
//                           onChange={(e) => {
//                             const newStatus = e.target.value === "paid";
//                             onUpdatePaidStatus(exp, newStatus);
//                           }}
//                           className="border rounded-md px-2 py-1 text-xs outline-none bg-white"
//                         >
//                           <option value="unpaid">Pending</option>
//                           <option value="paid">Done</option>
//                         </select>
//                       </td>
//                       <td className="p-2 space-x-2">
//                         <button
//                           type="button"
//                           className="border px-2 py-1 rounded-md text-xs"
//                           onClick={() => onToggleExpand(exp._id)}
//                         >
//                           {expandedId === exp._id ? "Hide" : "View"}
//                         </button>
//                       </td>
//                     </tr>

//                     {expandedId === exp._id && (
//                       <SubExpensesSection
//                         parent={exp}
//                         employees={employees}
//                         subTitle={subTitle}
//                         setSubTitle={setSubTitle}
//                         subAmount={subAmount}
//                         setSubAmount={setSubAmount}
//                         subDate={subDate}
//                         setSubDate={setSubDate}
//                         subRole={subRole}
//                         setSubRole={setSubRole}
//                         subEmployeeId={subEmployeeId}
//                         setSubEmployeeId={setSubEmployeeId}
//                         onAddSubtask={onAddSubtask}
//                         onUpdateSubtaskStatus={onUpdateSubtaskStatus}
//                       />
//                     )}
//                   </React.Fragment>
//                 );
//               })
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default ExpensesTable;
