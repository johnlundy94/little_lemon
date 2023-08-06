import React from 'react';
import "./App.css";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
