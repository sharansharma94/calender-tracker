import "./App.css";
import { Container } from "./StyledComponents/Container";

function App() {
  return (
    <div className="App">
      <h1>Calender Tracker</h1>
      <form>
        <Container>
          <div>
            <label htmlFor="title">Title</label>
            <input name="title" />
          </div>
          <div>
            <label htmlFor="desc">Description</label>
            <input name="desc" />
          </div>
          <div>
            <button> Submit</button>
          </div>
        </Container>
      </form>
    </div>
  );
}

export default App;
