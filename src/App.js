import "./App.css";
import { Routes, Route } from "react-router";

import NavBar from "./components/NavBar";
import Details from "./components/Details";
import { BrowserRouter } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
