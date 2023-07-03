import Register from "./Componentes/Register";
import Login from "./Componentes/Login";
import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Home from "./Componentes/Home";

function App() {
  return (
    
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
