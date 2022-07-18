import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Barras from "../components/Barras";
import { useInvestment } from "../context/InvestmentContext";



const ProfitOrlossChart = () => {
  const [totalAmountMonth, setTotalAmountMonth] = useState(0);

  const { profitOrLossInvestment } = useInvestment();
  useEffect(() => {
    /* Una function que itere por montos mensuales */
    const sumaTotalMount = profitOrLossInvestment.reduce(
      (acc, curr) => acc + (curr.currentAmount || 0),
      0
    );
    setTotalAmountMonth(sumaTotalMount);
  });
  return (
    <Main>
      {profitOrLossInvestment.map((gasto, i) => {
        return (
          <Barras
            status={gasto.status}
            key={i}
            amount={gasto.currentAmount}
            month={gasto.month}
            totalMount={(gasto.currentAmount / totalAmountMonth) * 100}
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
