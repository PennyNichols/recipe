import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
    const auth = localStorage.getItem('Auth')
    const [isAuth, setIsAuth] = useState(auth? true: false)

  return (
    <BrowserRouter>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>

        {/* public routes */}
        <Route path="" element={<Home/>} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} isAuth={isAuth}/>} />


        {/* private routes */}
        <Route path='/about' element={<PrivateRouter isAuth={isAuth}/> }>
            <Route path="" element={<About />} />
        </Route>

        <Route path='/details' element={<PrivateRouter isAuth={isAuth}/> }>
            <Route path="" element={<Details />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;