export default (state, action) => {
  console.log(state)
  let income = state.income;
  let expense = state.expense;
  let transactions = state.transactions;
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        transactions: [...transactions, action.payload],
        income: action.payload.type == 'Income' ? income + action.payload.value : income,
        expense: action.payload.type == 'Expense' ? income + action.payload.value : expense,
      }
    default:
      return state;
  }
}