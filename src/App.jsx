import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./components/Produtos/Produtos";
import Contato from "./components/Contato/Contato";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Produto from "./components/Produto/Produto";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
