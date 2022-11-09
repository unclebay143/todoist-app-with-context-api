import logo from "./logo.svg";
import "./App.css";
import { Todoist } from "./pages/Todoist";
import { TodoDetail } from "./pages/TodoDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Routes>
          <Route index element={<Todoist />} />
          <Route path=':todo_id' element={<TodoDetail />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
