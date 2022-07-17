export default function InvestmentReducer(state, action) {
  const { payload, type } = action;
  const { year, month, amount } = payload;

  //Calculamos pérdidas o ganancias.
  let coinPrice = 19000; //Precio de la cripto
  let profitOrLossInPercentage = ((coinPrice - 20000) / 20000) * amount; //Porcentaje de pérdida o ganancia.
  const isProfit = Math.sign(profitOrLossInPercentage) === 1; //Detectamos si es ganancia o no.
  console.log(isProfit)
  //Si el porcentaje apartir del cálculo de la variación del precio de la cripto es negativo se resta al monto y viceversa.
  let amountWithProfitOrLoss = isProfit
    ? amount + profitOrLossInPercentage
    : amount - Math.abs(profitOrLossInPercentage); //Monto final de la inversión con pérdida o ganancia
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
              coinPrice: null,
            },
          ],
        },
        {
          profitOrLossInvestment: [ //Se guardan los montos con pérdidas o ganancias.
            ...state[1].profitOrLossInvestment,
            {
              year: "",
              month: "",
              amount: amountWithProfitOrLoss,
              status: isProfit ? 'green' : 'red',
            },
          ],
        },
      ];
    default:
      return state;
  }
}
