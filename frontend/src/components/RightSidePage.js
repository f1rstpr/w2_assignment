import React, { useState } from "react";
import Product from "./Product";
import Navbar from "./Navbar";

export default function RightSidePage({ menuOpen, toggleMenu, products }) {
  const [filteredSearch, setFilteredSearch] = useState("");

  const handleOnInputChange = (newText) => {
    setFilteredSearch(newText);
  };
  console.log(products);
  const filteredProducts =
    filteredSearch.length === 0
      ? products
      : products.filter((p) => p.name.toLowerCase().includes(filteredSearch));

  return (
    <div
      id="right"
      style={menuOpen ? { marginLeft: "30%" } : { marginLeft: "0%" }}
    >
      <div id="right_div1">
       {/* <button id="sidebar_open" onClick={toggleMenu}>
          Cart
        </button>*/}
        <Navbar
          handleOnInputChange={handleOnInputChange}
          filteredSearch={filteredSearch}
        />
        <div id="items_div">
          <Product products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}
