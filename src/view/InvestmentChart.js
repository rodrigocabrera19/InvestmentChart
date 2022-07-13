import styled from "styled-components";
import React, { useState, useEffect } from "react";

import { monthlyInvestments } from "../data/gastosData";
import Barras from "../components/Barras";

function InvestmentChart() {
  const [totalAmountMonth, setTotalAmountMonth] = useState(0);
  const [amountPerMonth, setAmountPerMonth] = useState({
    jan: null,
    /* Etc... */
  });
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  useEffect(() => {
    /* Una function que itere por montos mensuales */
    const sumaTotalMount = monthlyInvestments.reduce(
      (acc, curr) => acc + (curr.amount || 0),
      0
    );
    setTotalAmountMonth(sumaTotalMount);
  }, []);
  return (
    <Main>
      {monthlyInvestments.map((gasto, i) => {
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
