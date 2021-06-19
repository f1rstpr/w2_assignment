import React, { useState } from "react";
import Product from "./Product";

export default function RightSidePage({ menuOpen, toggleMenu, products }) {
  const [filteredSearch, setFilteredSearch] = useState("");

  const handleOnInputChange = (newText) => {
    setFilteredSearch(newText);
  };

  // console.log(products);
  const filteredProducts =
    filteredSearch.length === 0
      ? products
      : products.filter((p) => p.name.toLowerCase().includes(filteredSearch));

  return (
    <div
      id="right"
      style={menuOpen ? { marginLeft: "30%" } : { marginLeft: "0%" }}
    >
      <button onClick={toggleMenu}> hi </button>
      <div id="right_div1">
        <div id="items_div">
          <Product
            products={filteredProducts}
            handleOnInputChange={handleOnInputChange}
            filteredSearch={filteredSearch}
          />
        </div>
      </div>
    </div>
  );
}
