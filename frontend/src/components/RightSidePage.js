import React from "react";
import Product from "./Product";

export default function RightSidePage({
  menuOpen,
  toggleMenu,
  products,
  filteredSearch,
  handleOnInputChange,
}) {
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
