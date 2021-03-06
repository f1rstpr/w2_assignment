import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import ProductPage from "./components/ProductPage";
import RightSidePage from "./components/RightSidePage";
import Navbar from "./components/Navbar";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState({});
  const [cart, setCart] = useState({});
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [orderObj, setOrderObj] = useState({});
  const [changed, setChanged] = useState(1);
  const [filteredSearch, setFilteredSearch] = useState("");

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
      });
      setCartData(res.data.cart);
    };
    fetchCart();
  }, [cart]);

  useEffect(() => {
    setOrderObj((prevState) => ({
      ...prevState,
      email: form.email,
      name: form.name,
      items: { ...prevState.items, cartItem: cartData.cart },
    }));
  }, [form, cartData.cart]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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

  const handleOnInputChange = (newText) => {
    setFilteredSearch(newText);
  };

  return (
    <div>
      <BrowserRouter>
        <Sidebar
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          cartData={cartData}
          setCartData={setCartData}
          form={form}
          setForm={setForm}
          orderObj={orderObj}
          setOrderObj={setOrderObj}
          setCart={setCart}
        />
        <Navbar
          toggleMenu={toggleMenu}
          handleOnInputChange={handleOnInputChange}
          filteredSearch={filteredSearch}
        />
        <Routes>
          <Route
            path="/"
            element={
              <RightSidePage
                products={products}
                menuOpen={menuOpen}
                toggleMenu={toggleMenu}
                filteredSearch={filteredSearch}
                handleOnInputChange={handleOnInputChange}
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
                changed={changed}
                setChanged={setChanged}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
