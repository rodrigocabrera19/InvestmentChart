import React, { useState } from "react";
import { useInvestment } from "../context/InvestmentContext";

const AddInvestmentAmount = () => {
  const [investmentData, setInvestmentData] = useState({});

  const { addInvestment } = useInvestment();

  const changeinvestmentData = (e) => {
    const investmentValue = e.target.value; //Tomamos el valos de los input
    const dataType = e.target.name; //Detectamos el tipo de dato: year, month, amount.

    //Guardamos la data en un state
    switch (dataType) {
      case "year":
        setInvestmentData({
          ...investmentData,
          year: investmentValue,
        });
        break;
      case "month":
        setInvestmentData({
          ...investmentData,
          month: investmentValue,
        });
        break;
      case "amount":
        setInvestmentData({
          ...investmentData,
          amount: Number(investmentValue),
        });
        break;
      default:
        setInvestmentData({});
        break;
    }
  };

  const onSubmitData = (e) => {
    e.preventDefault();
    addInvestment(investmentData);//Agregamos el nuevo monto al estado global.
  };
  return (
    <form onSubmit={onSubmitData}>
      <div>
        <label htmlFor="year">Año</label>
        <input type="number" name="year" onChange={changeinvestmentData} />
      </div>
      <div>
        <label htmlFor="month">Mes</label>
        <input type="text" name="month" onChange={changeinvestmentData} />
      </div>
      <div>
        <label htmlFor="amount">Monto</label>
        <input type="number" name="amount" onChange={changeinvestmentData} />
      </div>
      <div>
        <button type="submit"> Add Investment</button>
      </div>
    </form>
  );
};

export default AddInvestmentAmount;
