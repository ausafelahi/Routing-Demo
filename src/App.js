"use client";

import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Nav from "./Components/Nav";

function App() {
  return (
  <>
    <Nav />  
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='signup' element={<SignUp />}></Route>
    </Routes>
  </>  
  );
}

export default App;
