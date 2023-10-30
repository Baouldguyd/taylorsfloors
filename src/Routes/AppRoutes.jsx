import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "../Home";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={ <Home/> }/>


            

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
