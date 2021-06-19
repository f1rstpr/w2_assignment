import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import axios from "axios";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Sidebar({
    menuOpen,
    toggleMenu,
    cartData,
    form,
    setForm,
    orderObj,
    setOrderObj,
}) {
    // console.log(cartData.cart, ": inside Sidebar.js");
    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleOnSubmit = async () => {
        console.log(orderObj);
        const res = await axios.post("http://localhost:3001/store/newOrder", {
            order: orderObj,
        });
        console.log("SUBMITTED NEW ORDER: >>>>>>>>>>>>>>>>>>", res.data);
        setForm({
            name: "",
            email: "",
        });
    };

    console.log(`CART OBJ`, orderObj);
    // {/*<div id="sidebar_close"></div>*/}
    return (
        <div
            className="sidebar"
            style={menuOpen ? { width: "25%" } : { width: "1.5%" }}
            // onClick={toggleMenu}
        >
            {menuOpen ? (
                <div>
                    <table className="table">
                        <thead>
                            <tr id="tr">
                                <th> Name </th>
                                <th> Quantity</th>
                                <th> Unit Price </th>
                                <th> Cost </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartData.cart !== undefined &&
                                Object.keys(cartData.cart).map((item, i) => {
                                    return (
                                        <tr>
                                            <td> {item} </td>
                                            <td>
                                                {cartData.cart[item].quantity}
                                            </td>
                                            <td>
                                                {cartData.cart[item].unitPrice}
                                            </td>
                                            <td>
                                                {cartData.cart[item].quantity *
                                                    cartData.cart[item]
                                                        .unitPrice}
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                    TOTAL COST: {cartData.totalCost}
                    <div>
                        <input
                            name="name"
                            type="text"
                            placeholder="name"
                            value={form.name}
                            onChange={(e) => handleInputChange(e)}
                        />

                        <input
                            name="email"
                            type="text"
                            placeholder="email"
                            value={form.email}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <button onClick={handleOnSubmit}> submit </button>
                </div>
            ) : (
                <ShoppingCartIcon />
            )}
        </div>
    );
}
