import React from "react";
import { Route, Routes } from "react-router";
import ExpensePage from "./components/expensePage";
import HomePage from "./components/homePage";
import IncomePage from "./components/incomePage/Index";
import NotePage from "./components/notePage";
import MessagePage from "./components/messagePage";
import SubmitNewNote from './components/notePage/SubmitNewNote'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/income' element={<IncomePage />} />
      <Route path='/expense' element={<ExpensePage />} />
      <Route path='/notes' element={<NotePage />} />
      <Route path='/notes/:id' element={<SubmitNewNote />} />
      <Route path='/messages' element={<MessagePage />} />
    </Routes>
  )
}

export default App;
