import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";       
import Login from "./components/Login";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Mission from "./components/Mission";


import "./App.css";

function Home() {
  return (
    <div>
      <Hero />

      <Mission />

      <Events />

      <Gallery />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;