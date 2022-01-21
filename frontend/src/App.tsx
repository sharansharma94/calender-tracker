import { useState } from "react";
import "./App.css";
import Content from "./Components/Content";
import Header from "./Components/Header";

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <Header handleButtonClick={handleButtonClick}></Header>
      <Content showForm={showForm}></Content>
    </div>
  );
}

export default App;
