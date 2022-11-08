import logo from "./logo.svg";
import "./App.css";
import { Todoist } from "./pages/Todoist";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Todoist />
      </header>
    </div>
  );
}

export default App;
