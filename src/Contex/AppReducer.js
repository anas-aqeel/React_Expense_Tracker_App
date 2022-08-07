
export default (state, action) => {
  let income = state.income;
  let expense = state.expense;
  let transactions = state.transactions;
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        transactions: [...transactions, action.payload],
        income: action.payload.type == 'Income' ? income + action.payload.value : income,
        expense: action.payload.type == 'Expense' ? expense + action.payload.value : expense,
      }
    
    case 'UPDATE_TRANSACTION':

      let old_Item = transactions[action.index]
      console.log(old_Item)
      if (old_Item?.type == 'Income') { income -= old_Item?.value } else { expense -= old_Item.value }
      transactions[action.index] = action.payload
      return {
        transactions,
        income: action.payload.type== 'Income' ? income + action.payload.value : income,
        expense: action.payload.type == 'Expense' ? expense + action.payload.value : expense,
      }
    case 'DELETE_TRANSACTION':
      console.log(action)
      return {
        transactions: transactions.filter((e) => e.id != action.payload.id),
        income: action.payload.type == 'Income' ? income - action.payload.value : income,
        expense: action.payload.type == 'Expense' ? expense - action.payload.value : expense,
      }
    default:
      return state;
  }
}