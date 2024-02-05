import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Products from "./components/products";
import Navigation from "./components/Navigation";
import ShoppingCart from "./components/ShoppingCart";


const App = () => {
  return (
    <Router>
              <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />}/>
         <Route path="/shoppingcart" element={<ShoppingCart />} />
      
      </Routes>
    </Router>
  );
};

export default App;
