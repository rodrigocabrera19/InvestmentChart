import React from "react";
import styled from "styled-components";

const Barras = ({ amount, totalMount, month }) => {
  return (
    <Barra amount={amount} totalMount={totalMount}>
      <Month>{month}</Month>
    </Barra>
  );
};

export default Barras;

const Barra = styled.div`
  width: 40px;
  height: ${(props) => props.totalMount || 0}%;
  background-color: green;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-sizing: border-box;
  transition: background 0.3s ease;
  position: relative;
  &:hover {
    background: #fff;
    border: 1px solid #cdcdcd;
  }
  &:hover:before {
    content: "${(props) => props.amount}";
    font-size: 0.7rem;
    color: #000;
    font-weight: 800;
  }
`;

const Month = styled.div`
  position: absolute;
  bottom: -20px;
  color: #000;
  font-weight: 500;
`;
