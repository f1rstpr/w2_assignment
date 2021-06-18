import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Product from "./components/Product";
import ProductPage from "./components/ProductPage";
import RightSidePage from "./components/RightSidePage";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState({});
  const [cart, setCart] = useState({});

  useEffect(() => {
    const getAllProducts = async () => {
      const res = await axios.get("http://localhost:3001/store/products/");
      const resData = res.data.products;
      setProducts(resData);
    };

    getAllProducts();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      const res = await axios.post("http://localhost:3001/store/cart", {
        cart: cart,
        // userInfo: {
        // name: "SampleUser",
        // email: "user@user.com",
        // },
      });
      console.log(res.data.cart, "?ADNIAWDHNIOANDOAWNDIOAWINODOI");
      setCartData(res.data.cart);
    };
    fetchCart();
  }, [cart]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSingleProductClick = async (productId) => {
    const res = await axios.get(
      `http://localhost:3001/store/products/${productId}`
    );
  };

  const handleAddToCart = async (p) => {
    let itemName = p.name;
    if (!(itemName in cart)) {
      setCart((prev) => {
        return {
          ...prev,
          [itemName]: { quantity: parseInt(1), unitPrice: parseFloat(p.price) },
        };
      });
    } else {
      setCart((prev) => {
        return {
          ...prev,
          [itemName]: {
            quantity: prev[itemName].quantity + parseFloat(1),
            unitPrice: parseFloat(p.price),
          },
        };
      });
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Sidebar
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          cartData={cartData}
        />
        <Routes>
          <Route
            path="/"
            element={
              <RightSidePage
                products={products}
                menuOpen={menuOpen}
                toggleMenu={toggleMenu}
              />
            }
          />
          <Route
            path="/item/:productId"
            element={
              <ProductPage
                menuOpen={menuOpen}
                handleAddToCart={handleAddToCart}
                products={products}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
