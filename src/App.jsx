import { CheckoutSteps } from "./components/CheckoutSteps";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Label } from "./components/Label";
import { Main } from "./components/Main";
import { TopHeader } from "./components/TopHeader";
import "./App.css";

function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <Label />
      <CheckoutSteps />
      <Main />
      <Footer />
    </>
  );
}

export default App;
