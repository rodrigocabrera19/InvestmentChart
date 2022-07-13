const gastosData = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
  {
    day: "sun",
    amount: 65.48,
  },
];

/* Guardamos el total de dinero invertido por mes sin importar ganancias o pérdidas que se representará en cada barra del gráfico de inversiones totales mensuales*/
export const monthlyInvestments = [
  {
    year: 2022,
    month: 'jan',
    amount: 300
  },
  {
    year: 2022,
    month: 'feb',
    amount: 500
  }
];
/* Guardamos el dinero invertido por mes con pérdidas o ganancias que se representará en el gráfico de barras al lado del que contiene el total mensual invertido*/
export const profitOrLoss = [
  {
    year: 2022,
    month: 'jan',
    amount: 250,
    status: 'red'
  },
  {
    year: 2022,
    month: 'feb',
    amount: 550,
    status: 'green'
  }
];