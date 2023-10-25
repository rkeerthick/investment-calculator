import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import DisplayTable from "./components/DisplayTable";

function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValid =
    inputData.initialInvestment > 0 &&
    inputData.annualInvestment > 0 &&
    inputData.expectedReturn > 0 &&
    inputData.duration > 0;

  const handleInput = (e) => {
    const name = e.target.name;
    const value = +e.target.value;
    setInputData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput inputData={inputData} onInputChange={handleInput} />
      {isValid && <DisplayTable inputData={inputData} />}
      {!isValid && <p className="center">please enter positive number!!</p>}
    </>
  );
}

export default App;
