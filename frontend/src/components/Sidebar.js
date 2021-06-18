import React, { useState } from "react";
import "./Sidebar.css";
import axios from "axios";

export default function Sidebar({ menuOpen, toggleMenu, cartData }) {
    console.log(cartData.cart);
    const [form, setForm] = useState({
        name: "",
        email: "",
    });

    const handleInputChange = (e) => {
        console.log(e.target);
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleOnSubmit = async () => {
        // const res = await axios.post(`${}`)
        // const newUser = {
        //     form.name,
        //     form.email
        // }
        // setForm({
        //     name: "",
        //     email: ""
        // })
    };

    return (
        <div
            className="sidebar"
            style={menuOpen ? { width: "25%" } : { width: "1%" }}
            onClick={toggleMenu}
        >
            <div id="sidebar_close"></div>
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
                            const cur_cost =
                                cartData.cart[item].quantity *
                                cartData.cart[item].unitPrice;
                            return (
                                <tr>
                                    <td> {item} </td>
                                    <td> {cartData.cart[item].quantity} </td>
                                    <td> {cartData.cart[item].unitPrice} </td>
                                    <td>{cur_cost}</td>
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
    );
}
