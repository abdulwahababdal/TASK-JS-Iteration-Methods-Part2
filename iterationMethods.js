const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

// 1) Write a `filterIncomeTransactions` function that returns a new array containing only the income transactions.
function filterIncomeTransactions(transactions) {
  return transactions.filter((transaction) => transaction[0] === "income");
}

// 2) Write a `filterExpenseTransactions` function that return a new array containing only the expense transactions.
function filterExpenseTransactions(transactions) {
  return transactions.filter((transaction) => transaction[0] === "expense");
}

// 3) Write a `calculateTotalIncome` function that calculates the total income and returns it.
function calculateTotalIncome(transactions) {
  return transactions.reduce((total, transaction) => {
    if (transaction[0] === "income") {
      return total + transaction[1];
    }
    return total;
  }, 0);
}

// 4) Write a `calculateTotalExpenses` function that calculates the total expense and returns it.
function calculateTotalExpenses(transactions) {
  const expenseTransactions = transactions.filter((transaction) => {
    return transaction[0] === "expense";
  });
  return expenseTransactions.reduce(function (total, transaction) {
    return total + transaction[1];
  }, 0);
}

// 5) Write a `calculateNetTotal` function that calculates the net total (total income - total expenses) and returns it.
function calculateNetTotal(transactions) {
  const totalIncome = transactions
    .filter((transaction) => {
      return transaction[0] === "income";
    })
    .reduce((total, transaction) => {
      return total + transaction[1];
    }, 0);

  const totalExpenses = transactions
    .filter((transaction) => {
      return transaction[0] === "expense";
    })
    .reduce((total, transaction) => {
      return total + transaction[1];
    }, 0);

  return totalIncome - totalExpenses;
}

// 6) Write a `filterSignificantTransactions` function that identifies and creates a new array with transactions (both incomes and expenses) above or equal to $500.
function filterSignificantTransactions(transactions, threshold = 500) {
  return transactions.filter((transaction) => {
    return transaction[1] >= threshold;
  });
}

module.exports = {
  filterIncomeTransactions,
  filterExpenseTransactions,
  calculateTotalIncome,
  calculateTotalExpenses,
  calculateNetTotal,
  filterSignificantTransactions,
};

module.exports = {
  filterIncomeTransactions,
  filterExpenseTransactions,
  calculateTotalIncome,
  calculateTotalExpenses,
  calculateNetTotal,
  filterSignificantTransactions,
};
