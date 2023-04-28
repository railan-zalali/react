import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./route/AppRoute";
import "./App.css";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
