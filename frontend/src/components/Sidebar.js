import React from "react";
import "./Sidebar.css";

export default function Sidebar({ menuOpen, toggleMenu, cartData }) {
    // Object.keys(cartData.cart).map((item, i) => {
    // console.log(item, cartData.cart[item]);
    // });
    // console.log(cartData.cart);
    if (cartData.cart) {
        console.log(cartData);
    }

    const xdxd = "123";
    return (
        <div
            className="sidebar"
            style={menuOpen ? { width: "25%" } : { width: "1%" }}
            onClick={toggleMenu}
        >
            <div id="sidebar_close" onClick={toggleMenu}></div>
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
        </div>
    );
}
