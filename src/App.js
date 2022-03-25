// rfce
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import BbApi from "./components/BbApi";
import BeersApi from "./components/BeersApi";
import DinosaurApi from "./components/DinosaurApi";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/BbApi/Profile";
// Style
import "./App.css";

function App() {
  return (
    <div className="App-container">
      <BrowserRouter>
        <nav className="Nav-container">
          <Navigation />
        </nav>
        <Routes>
          <Route path="/bbapi" element={<BbApi />} />
          <Route path="/beersapi" element={<BeersApi />} />
          <Route path="/dinosaurapi" element={<DinosaurApi />} />
          <Route path="/bbapi/profile/:username" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
