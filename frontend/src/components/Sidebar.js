import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import axios from "axios";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
}));

export default function Sidebar({
    menuOpen,
    toggleMenu,
    cartData,
    setCartData,
    form,
    setForm,
    orderObj,
    setOrderObj,
}) {
    const classes = useStyles();

    const [latestCartEntry, getLastestCartEntry] = useState({});
    const [hasPurchased, setHasPurchased] = useState(false);
    const [email, setEmail] = useState("");
    const [userBought, setUserBought] = useState([]);

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleOnSubmit = async () => {
        console.log(orderObj);
        const res = await axios.post("http://localhost:3001/store/newOrder", {
            order: orderObj,
        });
        console.log("SUBMITTED NEW ORDER: >>>>>>>>>>>>>>>>>>", res.data);

        const lol = res.data.order.order.email;
        setEmail(lol);

        const cartItems = res.data.order.order.items.cartItem;

        for (const [key, val] of Object.entries(cartItems)) {
            setUserBought((prev) => [
                ...prev,
                { item: key, quantity: val.quantity },
            ]);
        }

        console.log(`Email is: ${lol}`);
        setHasPurchased(true);
        setForm({
            name: "",
            email: "",
        });
    };

    const handleShopAgainClick = () => {
        setHasPurchased(false);
        setCartData({});
    };

    // {/*<div id="sidebar_close"></div>*/}
    console.log(userBought);

    return (
        <div
            className="sidebar"
            style={menuOpen ? { width: "25%" } : { width: "0%" }}
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
                    <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                        <h2>TOTAL COST: {cartData.totalCost}</h2>
                    </div>
                    {!hasPurchased ? (
                        <div>
                            <form
                                className={classes.root}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    name="name"
                                    type="text"
                                    label="name"
                                    value={form.name}
                                    onChange={(e) => handleInputChange(e)}
                                />

                                <TextField
                                    name="email"
                                    type="text"
                                    placeholder="email"
                                    value={form.email}
                                    onChange={(e) => handleInputChange(e)}
                                />
                            </form>
                            <button onClick={handleOnSubmit}> submit </button>
                        </div>
                    ) : (
                        <div>
                            Thank you for ordering, here is some info about your
                            order:
                            <p> Email: {email} </p>
                            <p> {email} bought: </p>
                            {userBought.map((product) => (
                                <p>
                                    {product.quantity} of {product.item}
                                </p>
                            ))}
                            <button onClick={handleShopAgainClick}>
                                Shop again
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <ShoppingCartIcon />
            )}
        </div>
    );
}
