import { useState } from "react";
import "./App.css";
import Content from "./Components/Content";
import Header from "./Components/Header";

function App() {
  const [forms, setForms] = useState(["old"]);

  const handleButtonClick = (val: string) => {
    setForms([...forms, val]);
  };

  return (
    <div className="App">
      <Header handleButtonClick={handleButtonClick}></Header>
      <Content forms={forms}></Content>
    </div>
  );
}

export default App;
