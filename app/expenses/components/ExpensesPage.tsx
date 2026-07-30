"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddExpenseButton from "../AddExpenseButtonState";
import ErrorState from "../ErrorState";
import HeaderSection from "../HeaderSection";
import InitialAmountHistoryModal from "../InitilAmountHistoryModal";
import LoadingState from "../LoadingState";
import PaymentHistorySection from "../PaymentHistorySection";
import CurrentBudgetPeriod from "../BudgetPeriod/page";
import { CumulativeModal } from "../cumulative/CumulativeModal";
import CumulativePaymentsTable from "../cumulative/PaymentTable";
import InitialBudget from "../InitialBudget/InitialBudget";
import ExpenseFilters from "./filters/ExpenseFilters";
import AddExpenseModal from "./modals/AddExpenseModal";
import EditExpenseModal from "./modals/EditExpenseModal";
import EditSubtaskModal from "./modals/EditSubtaskModal";
import ExpensesTable from "./table/ExpensesTable";
import SubExpensesSection from "./table/SubExpensesSection";
import DailyExpenseSummary from "./DailyExpenseSummary";
import { useExpensesModule } from "../hooks/useExpensesModule";

const ExpensesPage = () => {
  const expenseModule = useExpensesModule();

  const expandedExpense = expenseModule.expandedId
    ? expenseModule.expenses.find((expense) => expense._id === expenseModule.expandedId) || null
    : null;

  return (
    <div className="min-h-screen px-4 py-6 text-gray-800 md:px-6 md:py-8">
      <ToastContainer position="bottom-right" autoClose={3000} />

      <div className="mx-auto max-w-[1600px] space-y-6">
        <HeaderSection />

        <InitialBudget
          budgetPeriodStart={expenseModule.budgetPeriodStart}
          setShowInitialAmountHistory={expenseModule.setShowInitialAmountHistory}
          onOpenHistory={(wallet) => {
            expenseModule.setActiveWallet(wallet);
            expenseModule.setShowInitialAmountHistory(true);
          }}
          activeWallet={expenseModule.activeWallet}
          onEditWallet={(wallet) => expenseModule.setActiveWallet(wallet)}
          expenses={expenseModule.expenses}
          initialAmountHistory={expenseModule.initialAmountHistory}
          setInitialAmountHistory={expenseModule.setInitialAmountHistory}
        />

        <AddExpenseModal
          show={expenseModule.showAddForm}
          onClose={() => {
            expenseModule.setShowAddForm(false);
            expenseModule.setExpenseItems([]);
          }}
          formValues={expenseModule.formValues}
          setFormValue={expenseModule.updateFormValue}
          employees={expenseModule.employees}
          productSuggestions={expenseModule.productSuggestions}
          shops={expenseModule.shopSuggestions}
          computedTotal={expenseModule.addFormTotal}
          onSubmit={expenseModule.handleAddExpense}
          expenseItems={expenseModule.expenseItems}
          onExpenseItemsChange={expenseModule.setExpenseItems}
        />

        <div className="glass-card space-y-6 rounded-[2rem] p-4 md:p-6">
          <div className="flex flex-col gap-4 border-b border-slate-200/80 pb-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Expense Overview
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Latest entries stay on top, totals stay readable, and edits stay close to the row.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm md:block">
                {expenseModule.filteredExpenses.length} visible expense
                {expenseModule.filteredExpenses.length === 1 ? "" : "s"}
              </div>
              <button
                onClick={() => expenseModule.setShowAddForm(true)}
                className="inline-flex items-center rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white shadow-[0_16px_34px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                + Add Expense
              </button>
            </div>
          </div>

          <ExpenseFilters
            setShowHistory={expenseModule.setShowHistory}
            showHistory={expenseModule.showHistory}
            filterSearch={expenseModule.filterSearch}
            setFilterSearch={expenseModule.setFilterSearch}
            filterShop={expenseModule.filterShop}
            setFilterShop={expenseModule.setFilterShop}
            shopSuggestions={expenseModule.shopSuggestions}
            filterRole={expenseModule.filterRole}
            setFilterRole={expenseModule.setFilterRole}
            filterStatus={expenseModule.filterStatus}
            setFilterStatus={expenseModule.setFilterStatus}
            filterEmployee={expenseModule.filterEmployee}
            setFilterEmployee={expenseModule.setFilterEmployee}
            employees={expenseModule.employees}
            filterFrom={expenseModule.filterFrom}
            setFilterFrom={expenseModule.setFilterFrom}
            filterTo={expenseModule.filterTo}
            setFilterTo={expenseModule.setFilterTo}
            filteredExpenses={expenseModule.filteredExpenses}
            filterProduct={expenseModule.filterProduct}
            setFilterProduct={expenseModule.setFilterProduct}
            productSuggestions={expenseModule.productSuggestions}
            filterWeek={expenseModule.filterWeek}
            setFilterWeek={expenseModule.setFilterWeek}
            weekOptions={expenseModule.weekOptions}
            totals={expenseModule.filterTotals}
          />

          <DailyExpenseSummary
            expenses={expenseModule.currentWeekExpenses}
            onEditExpense={expenseModule.onStartEditExpense}
          />

          <div className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            {expenseModule.loading ? (
              <LoadingState />
            ) : expenseModule.error ? (
              <ErrorState error={expenseModule.error} />
            ) : (
              <ExpensesTable
                visibleExpenses={expenseModule.visibleExpenses}
                filteredExpenses={expenseModule.filteredExpenses}
                isLoadingMore={expenseModule.isLoadingMore}
                visibleRowCount={expenseModule.visibleRowCount}
                expandedId={expenseModule.expandedId}
                selectedExpenseIds={expenseModule.selectedExpenseIds}
                onRowToggle={expenseModule.handleRowToggle}
                onToggleExpand={expenseModule.toggleExpand}
                onStartEditExpense={expenseModule.onStartEditExpense}
                onDeleteExpense={expenseModule.handleDeleteExpense}
                onUpdatePaidStatus={expenseModule.handleUpdatePaidStatus}
                onLoadMore={expenseModule.loadMoreRows}
                onQuickRenameExpense={expenseModule.handleQuickRenameExpense}
              >
                {expandedExpense && (
                  <SubExpensesSection
                    parent={expandedExpense}
                    employees={expenseModule.employees}
                    subTitle={expenseModule.subTitle}
                    setSubTitle={expenseModule.setSubTitle}
                    subAmount={expenseModule.subAmount}
                    setSubAmount={expenseModule.setSubAmount}
                    subDate={expenseModule.subDate}
                    setSubDate={expenseModule.setSubDate}
                    subEmployeeId={expenseModule.subEmployeeId}
                    setSubEmployeeId={expenseModule.setSubEmployeeId}
                    onAddSubtask={expenseModule.handleAddSubtask}
                    onUpdateSubtaskStatus={expenseModule.handleUpdateSubtaskStatus}
                    onDeleteSubtask={expenseModule.handleDeleteSubtask}
                    onStartEditSubtask={expenseModule.onStartEditSubtask}
                  />
                )}
              </ExpensesTable>
            )}
          </div>

          <PaymentHistorySection
            showHistory={expenseModule.showHistory}
            historyEmployeeId={expenseModule.historyEmployeeId}
            setHistoryEmployeeId={expenseModule.setHistoryEmployeeId}
            employees={expenseModule.employees}
            historyExpenses={expenseModule.historyExpenses}
            employeeHistory={expenseModule.employeeHistory}
            employeeHistoryTotal={expenseModule.employeeHistoryTotal}
          />

          <CumulativePaymentsTable />
        </div>

        <CurrentBudgetPeriod budgetPeriodStart={expenseModule.budgetPeriodStart} />
      </div>

      <AddExpenseButton onClick={expenseModule.handleAddToCumulativeTotal} />

      {expenseModule.showCumulativeModal && (
        <CumulativeModal
          isOpen={expenseModule.showCumulativeModal}
          onClose={() => expenseModule.setShowCumulativeModal(false)}
          expenses={expenseModule.expenses.filter((expense) =>
            expenseModule.modalSelectedIds.includes(expense._id)
          )}
          selectedExpenseIds={expenseModule.modalSelectedIds}
        />
      )}

      {expenseModule.editingExpense && (
        <EditExpenseModal
          editingExpense={expenseModule.editingExpense}
          editExpenseFields={expenseModule.editExpenseFields}
          setEditExpenseFields={expenseModule.setEditExpenseFields}
          employees={expenseModule.employees}
          computedTotal={expenseModule.editFormTotal}
          onSave={expenseModule.handleSaveEditExpense}
          onCancel={expenseModule.cancelEditExpense}
        />
      )}

      {expenseModule.editingSubtask && (
        <EditSubtaskModal
          editingSubtask={expenseModule.editingSubtask}
          setEditingSubtask={expenseModule.setEditingSubtask}
          employees={expenseModule.employees}
          onSave={expenseModule.handleSaveEditSubtask}
          onCancel={expenseModule.cancelEditSubtask}
        />
      )}

      {expenseModule.showInitialAmountHistory && (
        <InitialAmountHistoryModal
          history={expenseModule.filteredHistory}
          onClose={() => expenseModule.setShowInitialAmountHistory(false)}
        />
      )}
    </div>
  );
};

export default ExpensesPage;
