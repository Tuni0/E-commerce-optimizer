import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ItemPage from "./components/ItemPage.jsx";

import "./App.css";

import Products from "./components/Products.jsx";
import Contact from "./components/Contact.jsx";
import { ThemeProvider } from "./ThemeContext"; // corrected import path
import { ProductsProvider } from "./components/ProductsContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <ProductsProvider>
        <div className="w-full mx-0 px-0">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <Navbar />

                  <Products />
                  <Contact />
                </>
              }
            />
            <Route
              path="/products/*"
              exact
              element={
                <>
                  <Navbar />
                  <ItemPage />
                </>
              }
            />
          </Routes>
        </div>
      </ProductsProvider>
    </ThemeProvider>
  );
}

export default App;
