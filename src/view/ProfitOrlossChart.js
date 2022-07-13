import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Barras from "../components/Barras";


import { profitOrLoss, monthlyInvestments } from "../data/gastosData";

const ProfitOrlossChart = () => {
  const [totalAmountMonth, setTotalAmountMonth] = useState(0);
  useEffect(() => {
    /* Una function que itere por montos mensuales */
    const sumaTotalMount = profitOrLoss.reduce(
      (acc, curr) => acc + (curr.amount || 0),
      0
    );
    setTotalAmountMonth(sumaTotalMount);

  }, []);
  return (
    <Main>
      {profitOrLoss.map((gasto, i) => {
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
