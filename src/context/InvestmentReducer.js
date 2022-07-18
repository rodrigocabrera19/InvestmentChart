export default function InvestmentReducer(state, action) {
  const { payload, type } = action;
  const { year, month, amount, currentAmount, isProfit } = payload;
  switch (type) {
    case "ADD_AMOUNT":
      return [
        {
          monthlyInvestments: [ //Se guardan los montos reales de inversión
            ...state[0].monthlyInvestments,
            {
              year: year,
              month: month,
              amount: amount,
              currencyPurchasePrice: null,
            },
          ],
        },
        {
          profitOrLossInvestment: [ //Se guardan los montos con pérdidas o ganancias.
            ...state[1].profitOrLossInvestment,
            {
              year: "",
              month: "",
              currentAmount: currentAmount,
              status: isProfit ? 'green' : 'red',
            },
          ],
        },
      ];
    default:
      return state;
  };

  
}
