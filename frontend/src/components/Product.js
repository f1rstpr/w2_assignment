import React from "react";
import { Link } from "react-router-dom";

export default function Product({ products }) {
    return (
        <div>
            products:
            {products.map((p) => (
                <Link to={`/item/${p.id}`} key={p.id}>
                    <div> {p.name} </div>
                </Link>
            ))}
        </div>
    );
}
