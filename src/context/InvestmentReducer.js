export default function InvestmentReducer(state, action) {
  const { payload, type } = action;

  switch (type) {
    case "ADD_AMOUNT":
      return {
        ...state,
        year: payload.year,
        month: payload.month,
        amount: payload.amount
      };
    default:
      return state;
  }
}
