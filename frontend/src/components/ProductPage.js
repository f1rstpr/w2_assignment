import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardComponent from "./CardComponent";

export default function ProductPage({ menuOpen, handleAddToCart, changed, setChanged }) {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchCurProduct = async () => {
            const res = await axios.get(
                `http://localhost:3001/store/products/${productId}`
            );
            if (res.data.product) {
                setProduct(res.data.product);
            }
        };
        fetchCurProduct();
    }, [productId]);

    return (
        <div
            style={
                menuOpen
                    ? { marginLeft: "30%" }
                    : { marginLeft: "0%", padding: "50px" }
            }
        >
            <div id="ProductPage_item_wrapper">
                <CardComponent
                    p={product}
                    handleAddToCart={handleAddToCart}
                    isOnProductPage={true}
                    menuOpen={menuOpen}
                    changed={changed}
                    setChanged={setChanged}
                />
            </div>
        </div>
    );
}
