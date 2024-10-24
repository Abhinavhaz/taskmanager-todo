// import logo from './logo.svg';
import './App.css';
import { Container } from "@mui/material";
import { TaskManager } from "./components/TaskManager";
import { Nav } from "./components/AppBar";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Container maxWidth="lg">
        <TaskManager />
      </Container>
    </div>
  );
};

export default App;