import React from "react";
import { Route, Routes } from "react-router";
import ExpensePage from "./components/expensePage";
import HomePage from "./components/homePage";
import IncomePage from "./components/incomePage/Index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/income' element={<IncomePage />} />
      <Route path='/expense' element={<ExpensePage />} />
    </Routes>
  )
}

export default App;
