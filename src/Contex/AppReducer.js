
export default (state, action) => {
  let income = state.income;
  let expense = state.expense;
  let transactions = state.transactions;
  switch (action.type) {
    case 'ADD_TRANSACTION':
      console.log(action.payload)
      return {
        transactions: [...transactions, action.payload],
        income: action.payload.type == 'Income' ? income + action.payload.value : income,
        expense: action.payload.type == 'Expense' ? expense + action.payload.value : expense,
      }
    case 'DELETE_TRANSACTION':
     return {
      transactions: transactions.filter((e)=>e.id != action.payload.id),
      income: action.payload.type == 'Income' ? income - action.payload.value : income,
      expense: action.payload.type == 'Expense' ? expense - action.payload.value : expense,
    }
    default:
      return state;
  }
}