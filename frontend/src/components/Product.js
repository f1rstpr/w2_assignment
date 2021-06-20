import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import CardComponent from "./CardComponent";

export default function Product({
    products,
    handleOnInputChange,
    filteredSearch,
}) {
    return (
        <div>
            <div style={{ display: "grid", placeItems: "center" }}>
                <h1> Products </h1>
            </div>
            <div id="img_wrapper">
                {products.map((p) => (
                    <Link
                        to={`/item/${p.id}`}
                        key={p.id}
                        style={{ textDecoration: "none" }}
                    >
                        <CardComponent p={p} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
