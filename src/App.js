import Register from "./Componentes/Register";
import Login from "./Componentes/Login";
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Componentes/Home";
import Unirse from "./Componentes/Unirse";
import Crear from "./Componentes/Crear";
import Grupo from "./Componentes/Grupo";


function App() {
  return (
    
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Register" element={<Register />}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/Unirse" element={<Unirse />} />
          <Route path="/Crear" element={<Crear />} />
          <Route path="/Grupo" element={<Grupo />} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
