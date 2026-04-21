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
import { useExpensesModule } from "../hooks/useExpensesModule";

const ExpensesPage = () => {
  const expenseModule = useExpensesModule();

  const expandedExpense = expenseModule.expandedId
    ? expenseModule.expenses.find((expense) => expense._id === expenseModule.expandedId) || null
    : null;

  return (
    <div className="min-h-screen bg-white p-8 text-gray-800">
      <ToastContainer position="bottom-right" autoClose={3000} />

      <div className="max-w-400 mx-auto space-y-4">
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
          onClose={() => expenseModule.setShowAddForm(false)}
          formValues={expenseModule.formValues}
          setFormValue={expenseModule.updateFormValue}
          employees={expenseModule.employees}
          productSuggestions={expenseModule.productSuggestions}
          shops={expenseModule.shopSuggestions}
          computedTotal={expenseModule.addFormTotal}
          onSubmit={expenseModule.handleAddExpense}
        />

        <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-5 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            <h3 className="flex items-center text-2xl md:text-3xl font-bold text-gray-900">
              Expenses Table
            </h3>
            <button
              onClick={() => expenseModule.setShowAddForm(true)}
              className="mt-3 md:mt-0 inline-flex items-center px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
            >
              + Add Expense
            </button>
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

          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-100">
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

