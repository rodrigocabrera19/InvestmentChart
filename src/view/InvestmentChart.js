import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Barras from "../components/Barras";
import { useInvestment } from "../context/InvestmentContext";

function InvestmentChart() {
  const { state } = useInvestment();
  const [totalAmountMonth, setTotalAmountMonth] = useState(0);
  
  useEffect(() => {
    /* Una function que itere por montos mensuales */
    const sumaTotalMount = state.reduce(
      (acc, curr) => acc + (curr.amount || 0),
      0
    );
    setTotalAmountMonth(sumaTotalMount);
  }, []);
  return (
    <Main>
      {state.map((gasto, i) => {
        return (
          <Barras
            key={i}
            amount={gasto.amount}
            month={gasto.month}
            totalMount={(gasto.amount / totalAmountMonth) * 100}
          />
        );
      })}
    </Main>
  );
}

export default InvestmentChart;

const Main = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: flex-end;
`;
