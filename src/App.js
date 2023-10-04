import { useState , } from "react";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import routes from "./routes"
import { useRoutes } from "react-router-dom";




function App() {

  let rot = useRoutes(routes)

  return (
    <>
      {rot}
    </>

  )
}

export default App;
