import React, { useState, createContext, useReducer } from "react";
import InvestmentReducer from "./InvestmentReducer";

const InvestmentContext = createContext();
export const InvestmentProvider = (props) => {
  const investmentStatement = [
    {
      monthlyInvestments: [
        
      ]
    },
    {
      profitOrLossInvestment: [
        
      ]
    }
  ];
  const [profitOrLoss, setProfitOrLoss] = useState([]);

  const [state, dispatch] = useReducer(InvestmentReducer, investmentStatement);

  /* Tomamos la data de monto invertido ingresado por el ususario y lo enviamos al InvestmentReducer */
  const addInvestment = (investedAmountData) => {
    dispatch({
      type: "ADD_AMOUNT",
      payload: investedAmountData,
    });
  };
  return (
    <InvestmentContext.Provider
      value={{
        addInvestment,
        state,
        profitOrLoss,
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
