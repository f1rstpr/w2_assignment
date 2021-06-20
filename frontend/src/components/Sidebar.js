import React, { useState} from "react";
import "./Sidebar.css";
import axios from "axios";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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

    return (
        <div
            className="sidebar"
            style={menuOpen ? { width: "25%" } : { width: "0%" }}
        >
            {menuOpen ? (
                <div>
                    <table className="table">
                        <thead>
                            <tr id="tr">
                                <th> Name </th>
                                <th> Quantity</th>
                                <th> Unit Price ($)</th>
                                <th> Cost ($) </th>
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
                                                {cartData.cart[
                                                    item
                                                ].unitPrice.toFixed(2)}
                                            </td>
                                            <td>
                                                {(
                                                    cartData.cart[item]
                                                        .quantity *
                                                    cartData.cart[item]
                                                        .unitPrice
                                                ).toFixed(2)}
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                    <div style={{ margin: "20px" }}>
                        <h2>TOTAL COST: ${cartData.totalCost}</h2>
                    </div>
                    {!hasPurchased ? (
                        <div
                            style={{
                                padding: "20px",
                            }}
                        >
                            <div>
                                <h3> Enter your details </h3>
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
                            </div>
                            <Button
                                id="buttonMui"
                                variant="contained"
                                color="primary"
                                onClick={handleOnSubmit}
                            >
                                Submit
                            </Button>
                        </div>
                    ) : (
                        <div style={{ display: "grid", placeItems: "center" }}>
                            Thank you for ordering, here is some info about your
                            order:
                            <p>
                                {" "}
                                <b> Email </b> : {email}{" "}
                            </p>
                            <p> {email} bought: </p>
                            {userBought.map((product) => (
                                <p>
                                    <b> {product.quantity} </b> of{" "}
                                    <b> {product.item} </b>
                                </p>
                            ))}
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleShopAgainClick}
                            >
                                Shop again
                            </Button>
                        </div>
                    )}
                </div>
            ) : (
                <ShoppingCartIcon />
            )}
        </div>
    );
}
