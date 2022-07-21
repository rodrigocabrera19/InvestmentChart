import React, { useState } from "react";
import { useInvestment } from "../context/InvestmentContext";

const AddInvestmentAmount = () => {
  const [investmentData, setInvestmentData] = useState({});

  const { addInvestment, getCoin } = useInvestment();

  const changeinvestmentData = (e) => {
    const investmentValue = e.target.value; //Tomamos el valos de los input
    const dataType = e.target.name; //Detectamos el tipo de dato: year, month, amount.
    //Guardamos la data en un state
    switch (dataType) {
      case "fecha":
        setInvestmentData({
          ...investmentData,
          fecha: investmentValue,
        });
        break;
      case "amount":
        setInvestmentData({
          ...investmentData,
          amount: Number(investmentValue),
        });
        break;
      case "price":
        setInvestmentData({
          ...investmentData,
          currencyPurchasePrice: Number(investmentValue),
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
        <label htmlFor="fecha">Fecha de compra</label>
        <input type="month" name="fecha" onChange={changeinvestmentData} />
      </div>
      <div>
        <label htmlFor="amount">Monto</label>
        <input type="number" name="amount" onChange={changeinvestmentData} />
      </div>
      <div>
        <label htmlFor="price">Precio de compra de la cripto</label>
        <input type="number" name="price" onChange={changeinvestmentData} />
      </div>
      <div>
        <label htmlFor="coin">Elije la criptomoneda que compraste</label>
        <select onChange={(e) => getCoin(e.target.value)} name="coin">
          <option value=''>Seleccione</option>
          <option value='bitcoin'>Bitcoin</option>
          <option value='ethereum'>Ethereum</option>
          <option value='solana'>Solana</option>
        </select>
      </div>
      <div>
        <button type="submit"> Add Investment</button>
      </div>
    </form>
  );
};

export default AddInvestmentAmount;
