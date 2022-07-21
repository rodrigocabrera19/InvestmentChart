import styled from "styled-components";
import React, { useEffect, useState } from "react";
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
    /* const getCoins = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false"
        );
        const coin = await res.json();
        console.log(coin.market_data.current_price.usd);
      } catch (e) {
        console.log(e);
      }
    };
    getCoins(); */
  });

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
