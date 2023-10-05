import { useState , } from "react";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import routes from "./routes"
import { useRoutes } from "react-router-dom";
import Headers from "./component/Headers";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./component/sideBar/sideBar"
import "./App.css"




function App() {

  let rot = useRoutes(routes)

  return (
    <>
    <Headers></Headers>
    <div className="container">
      <div className="sideBarPlace">
      <SideBar></SideBar>
      </div>
      {rot}
    </div>
    </>

  )
}

export default App;
