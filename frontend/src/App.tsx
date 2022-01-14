import "./App.css";
import Task from "./Components/Task";
import { Container } from "./StyledComponents/Container";
import { Form } from "./StyledComponents/Form";

function App() {
  return (
    <div className="App">
      <h1>Calender Tracker</h1>

      <Form>
        <Container>
          <Task></Task>
        </Container>
      </Form>
    </div>
  );
}

export default App;
