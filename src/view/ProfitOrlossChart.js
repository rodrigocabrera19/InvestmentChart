import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Barras from "../components/Barras";
import { useInvestment } from "../context/InvestmentContext";



const ProfitOrlossChart = () => {
  const [totalAmountMonth, setTotalAmountMonth] = useState(0);

  const { state } = useInvestment();
  useEffect(() => {
    /* Una function que itere por montos mensuales */
    const sumaTotalMount = state[1].profitOrLossInvestment.reduce(
      (acc, curr) => acc + (curr.amount || 0),
      0
    );
    setTotalAmountMonth(sumaTotalMount);
      
  });
  return (
    <Main>
      {state[1].profitOrLossInvestment.map((gasto, i) => {
        return (
          <Barras
            status={gasto.status}
            key={i}
            amount={gasto.amount}
            month={gasto.month}
            totalMount={(gasto.amount / totalAmountMonth) * 100}
          />
        );
      })}
    </Main>
  );
};

export default ProfitOrlossChart;

const Main = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: flex-end;
`;
