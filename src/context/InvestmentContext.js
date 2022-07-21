import React, { useState, createContext, useReducer, useEffect } from "react";
import InvestmentReducer from "./InvestmentReducer";

const InvestmentContext = createContext();
export const InvestmentProvider = (props) => {
  const investmentStatement = [];
  const [state, dispatch] = useReducer(InvestmentReducer, investmentStatement);

  const [coinPriceCurrent, setCoinPriceCurrent] = useState(0);
  const getCoin = async (coinName) => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinName}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`
      );
      const coin = await res.json();
      setCoinPriceCurrent(coin.market_data.current_price.usd);
    } catch (e) {
      console.log(e);
    }
  };
  const addInvestment = async (investedAmountData) => {
    //Calculamos pérdidas o ganancias.
    let amount = investedAmountData.amount; //Monto invertido
    let currencyPurchasePrice = investedAmountData.currencyPurchasePrice; //Precio de compra de la cripto
    let profitOrLossInPercentage =
      ((coinPriceCurrent - currencyPurchasePrice) / currencyPurchasePrice) *
      amount; //Porcentaje de pérdida o ganancia.
    const isProfit = Math.sign(profitOrLossInPercentage) === 1; //Detectamos si es ganancia o no.

    //Si el porcentaje apartir del cálculo de la variación del precio de la cripto es negativo se resta al monto y viceversa.
    let amountWithProfitOrLoss = isProfit
      ? amount + profitOrLossInPercentage
      : amount - Math.abs(profitOrLossInPercentage); //Monto final de la inversión con pérdida o ganancia

    investedAmountData.currentAmount = amountWithProfitOrLoss; //Agregamos el monto final con pédida o ganancia.
    investedAmountData.isProfit = isProfit; //Agregamos un boolean para determinar si hubo pérdida o ganancias.

    dispatch({
      type: "ADD_AMOUNT",
      payload: investedAmountData,
    });
  };

  return (
    <InvestmentContext.Provider
      value={{
        addInvestment,
        getCoin,
        state
      }}
      {...props}
    />
  );
};

export const useInvestment = () => {
  const context = React.useContext(InvestmentContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};
