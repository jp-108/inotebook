import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import NoteState from "./context/NoteState";

function App() {
  return (
    <div className="App">
      <NoteState>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      </NoteState>
    </div>
  );
}

export default App;
