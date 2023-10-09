import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Button } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
const Cart = () => {
  const [cart, setCart] = useState("");
  const [input, setInput] = useState(1);

  function increment(id) {
       cart.map((e)=>{
            if(id==e.id)
            { 
                
            }
       })
  }
  function decrement() {
    if (input != 0) {
      setInput(input - 1);
    }
  }
  useEffect(() => {                  
 
    const url = `http://localhost:9000/cart?userId=${sessionStorage.getItem(
      "userId"
    )}`;
    axios.get(url).then((response) => {
      setCart(response.data);

      sessionStorage.setItem("cartlength", response.data.length);
      console.log(sessionStorage.getItem("cartlength"));
    });
  }, []);

  function removeProduct(product) {
    cart.map((item) => {
      if (
        item.id == product.id &&
        item.userId == sessionStorage.getItem("userId")
      ) {
        axios.delete(`http://localhost:9000/cart/${item.id}`);

        window.location.href = "/cart";
      }
    });
  }

  return (
    <div>
      <div style={{ marginBottom: "130px" }}>
        <Navbar />
      </div>

      <div className="display-div">
        <div className="cart-main-div">
          <div className="header-cart-divs">
            <div className="free-shipping-div"></div>
            <div className="cart-heading">
              <div className="head1">PRODUCT</div>
              <div className="head2">PRODUCT-NAME</div>
              <div className="head3">PRICE</div>
              <div className="head4">QUANTITY</div>
              <div className="head5">SUBTOTAL</div>
            </div>
          </div>

          {cart &&
            cart.map((e) => {
              return (
                <div className="cart-content-div">
                  <button
                    className="remove-btn"
                    onClick={() => removeProduct}
                  >
                    <CloseIcon sx={{ fontSize: "15 px" }} />
                  </button>
                  <div className="product-image-div">
                    {" "}
                    <img
                      className="cart-image"
                      src={e.image}
                      alt="image"
                      height={"100%"}
                      width={"100%"}
                    ></img>
                  </div>
                  <div className="product-heading">{e.title}</div>
                  <div className="product-price">
                    <CurrencyRupeeIcon fontSize="10px" />
                    {Math.floor(e.price)}.00
                  </div>
                  <div className="product-qty">
                    <button className="incre-btn" onClick={()=>increment(e.id)}>
                      +
                    </button>
                    <span
                      className="cart-input-span"
                      style={{
                        fontSize: "12px",
                        width: "20px",
                        textAlign: "center",
                      }}
                    >
                     {e.qty}
                    </span>
                    <button onClick={decrement} className="decre-btn">
                      -
                    </button>
                  </div>
                  <div className="product-subtotal">
                    <CurrencyRupeeIcon fontSize="6px" />{" "}
                    {Math.floor(e.price * input)}.00
                  </div>
                </div>
              );
            })}

          {cart &&
            cart.map((e) => {
              return (
                <div className="cart-content-div-mobile">
                  <div className="cart-image-div-mobile">
                    <img
                      className="cart-image"
                      src={e.image}
                      alt="image"
                      height={"100%"}
                      width={"100%"}
                    ></img>
                  </div>
                  <div className="cart-content-mobile">
                    <div className="cart-div1-mobile">
                      <span className="div1-span1-mobile">{e.title}</span>
                      <span className="div1-span2-mobile">
                        {" "}
                        <button
                          className="remove-btn"
                          onClick={() => removeProduct(e)}
                        >
                          <CloseIcon sx={{ fontSize: "12px" }} />
                        </button>
                      </span>
                    </div>
                    <div className="cart-div2-mobile">
                      <span className="div2-span1-mobile">PRICE</span>
                      <span
                        className="div2-span2-mobile"
                        style={{ color: "red" }}
                      >
                        <CurrencyRupeeIcon fontSize="10px" /> {e.price}
                      </span>
                    </div>
                    <div className="cart-div3-mobile">
                      <span className="div3-span1-mobile">QUANTITY</span>
                      <span className="div3-span2-mobile">{input}</span>
                    </div>
                    <div className="cart-div4-mobile">
                      <span className="div4-span1-mobile">SUBTOTAL</span>
                      <span className="div4-span2-mobile">1234</span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="total-cart-div"></div>
      </div>
    </div>
  );
};

export default Cart;
