import { useState , } from "react";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import routes from "./routes"
import { useRoutes } from "react-router-dom";
import Headers from "./component/Headers";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  let rot = useRoutes(routes)

  return (
    <>
    <Headers></Headers>
      {rot}
    </>

  )
}

export default App;
