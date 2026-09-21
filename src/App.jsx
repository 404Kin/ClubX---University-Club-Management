import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";       
import Login from "./components/Login";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Mission from "./components/Mission";
import ClubDetails from "./pages/ClubDetails";


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
    <BrowserRouter basename="/ClubX---University-Club-Management">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clubs/:slug" element={<ClubDetails />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;