import React, { useState, createContext, useReducer } from "react";
import InvestmentReducer from "./InvestmentReducer";

const InvestmentContext = createContext();
export const InvestmentProvider = (props) => {
  const monthlyInvestments = [
    {
      year: 2022,
      month: "jan",
      amount: 300,
    },
    {
      year: 2022,
      month: "feb",
      amount: 500,
    },
  ];

  const [state, dispatch] = useReducer(InvestmentReducer, monthlyInvestments);

  /* Tomamos la data de monto invertido ingresado por el ususario y lo enviamos al InvestmentReducer */
  const addInvestment = (investedAmountData) => {
    dispatch({
      type: "ADD_AMOUNT",
      payload: investedAmountData,
    });
  };
  return (
    <InvestmentContext.Provider
      value={{ addInvestment, state }}
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
