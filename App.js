import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Kanban from "./Kanban";
import AddStories from "./AddStories";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AddStories />} />
        <Route path="/task" element={<Kanban />} />
      </Routes>
    </div>
  );
}
