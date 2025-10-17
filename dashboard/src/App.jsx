import React from "react";
import'./App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";



function App() {
  return (
    <div className="app-container">
    <BrowserRouter>
      
      <Routes>
        <Route path="/*" element={<Home />} />
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

