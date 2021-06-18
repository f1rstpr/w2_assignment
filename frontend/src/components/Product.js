import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import CardComponent from "./CardComponent";

export default function Product({ products }) {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}> Products </h1>
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
