/* Import de context */
import AddInvestmentAmount from "./components/AddInvestmentAmount";
import { InvestmentProvider } from "./context/InvestmentContext";
import InvestmentChart from "./view/InvestmentChart";
import ProfitOrlossChart from "./view/ProfitOrlossChart";

export default () => (
  <InvestmentProvider>
    <App />
  </InvestmentProvider>
);
function App() {
  return (
    <>
      <InvestmentChart />
      <ProfitOrlossChart />
      <AddInvestmentAmount/>
    </>
  );
}
