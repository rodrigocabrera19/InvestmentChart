export default function InvestmentReducer(state, action) {
  const { payload, type } = action;
  const { fecha, amount, currentAmount, isProfit, currencyPurchasePrice } =
    payload;
  switch (type) {
    case "ADD_AMOUNT":
      const dateExist = state.some(
        (investment) => investment?.fecha === fecha
      );
      if (dateExist) {
        const newState = state.map((investment) => {
          if (investment?.fecha === fecha) {
            return {
              ...investment,
              amount: parseInt(investment.amount + amount),
              currentAmount: parseInt(investment.currentAmount + currentAmount),
              status: investment.amount + amount > investment.currentAmount + currentAmount ? 'red' : 'green',
              currencyPurchasePrice:
                (investment.currencyPurchasePrice +
                  currencyPurchasePrice) /
                2,
            };
          } else return investment;
        });
        console.log(newState[0].status)
        return newState;
      } else {
        return [
          ...state,
          {
            fecha,
            amount,
            currentAmount: parseInt(currentAmount),
            status: isProfit ? "green" : "red",
            currencyPurchasePrice,
          },
        ];
      }
    default:
      return state;
  }
}
