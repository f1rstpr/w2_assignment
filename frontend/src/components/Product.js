import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import CardComponent from "./Card";

export default function Product({ products }) {
    console.log(products);
    return (
        <div>
            <h1> Products </h1>
            <div id="img_wrapper">
                {products.map((p) => (
                    <Link to={`/item/${p.id}`} key={p.id}>
                        {/*     <img id="img" src={`${p.image}`} />
                        <div id="img_border">
                            <div id="img_name">{p.name}</div>
                        </div>*/}
                        <CardComponent img={p.image} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
