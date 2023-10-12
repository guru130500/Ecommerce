import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Button, colors } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link, useNavigate } from "react-router-dom";
const Cart = () => {
  const [cart, setCart] = useState("");
  const [input, setInput] = useState(1);
  const [total,setTotal]=useState(0)
  const navigate=useNavigate()
 let dummy=0
 useEffect(()=>{
  for(let i=0;i<cart.length;i++)
  {
       dummy=dummy+(cart[i].qty*cart[i].price)
  }
  console.log("cart Total"+" "+dummy)
  setTotal(dummy)
 })
 

  function handleChange(item,d){
    let arr=cart
    let ind=cart.indexOf(item)
    arr[ind].qty+=d
    if(arr[ind].qty===0) arr[ind].qty=1
    setCart([...arr])
  }

  // <td><button className='btn btn-success btn-sm' onClick={()=>handleChange(item,+1)}>+</button></td>
  // <td>{item.amount}</td>
  // <td><button className='btn btn-info btn-sm' onClick={()=>handleChange(item,-1)}>-</button></td>
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
  function chekout(){
 navigate('/chekout', { state: { cart } })
  }

  return (
    <div>
      <div style={{ marginBottom: "100px" }}>
        <Navbar />
      </div>

      <div className='header-cart'>
          <img className='header-image' src='https://lootlere.com/wp-content/uploads/2023/02/4.png' height='100%' width='100%'></img>
         
           <div className='cart-nav'>

            <div className='cart-nav-div1'>
               {/* <p className={(search=='')?'header-para2-dummy':'header-para2'} onClick={all}><KeyboardBackspaceIcon/></p> */}
               <p className='cart-header-para1'><span className='cart-header-span1'>SHOPPING CART</span><span className="cart-span-right1"><ArrowRightAltIcon fontSize="80px"/></span><span className="cart-header-span2" onClick={chekout}>CHEKOUT</span><span className="cart-span-right2"><ArrowRightAltIcon fontSize="30px"/></span><span className="cart-header-span2">ORDER COMPLETE</span></p>
            </div>
            
            {/* <div className='header-nav-div2'>
              <span className={(search==``)?'span5':'sp5'} onClick={all}>All</span>
              <span className={(search==`men's clothing`)?'span1':'sp1'}  onClick={men}>MEN</span>
              <span className={(search==` women's clothing`)?'span2':'sp2'} onClick={women}>WOMEN</span>
              <span className={(search==`jewelery`)?'span3':'sp3'} onClick={jewelery}>JEWELERY</span>
              <span className={(search==`electronics`)?'span4':'sp4'}  onClick={electronics}>ELECTRONICS</span>
              </div>*/
            }
           </div> 
       </div>



      <div className="display-div">
        <div className="cart-main-div">
          <div className="header-cart-divs">
            <div className="free-shipping-div">
              <p className="free-shipping-para">Your order qualifies for free shipping!</p>
            </div>
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
                    onClick={() => removeProduct(e)}
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
                    <button className="incre-btn" onClick={()=>handleChange(e,+1)}>
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
                    <button onClick={()=>handleChange(e,-1)} className="decre-btn">
                      -
                    </button>
                  </div>
                  <div className="product-subtotal">
                    <CurrencyRupeeIcon fontSize="6px" />{" "}
                    {Math.floor(e.price * e.qty)}.00
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
                        style={{ color: "grey" }}
                      >
                        <CurrencyRupeeIcon fontSize="10px" /> {e.price}
                      </span>
                    </div>
                    <div className="cart-div3-mobile">
                      <span className="div3-span1-mobile">
                        QUANTITY
                      </span>
                      <span className="div3-span2-mobile">
                      <button className="incre-btn" onClick={()=>handleChange(e,+1)}>
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
                    <button onClick={()=>handleChange(e,-1)} className="decre-btn">
                      -
                    </button>
                      </span>
                    </div>
                    <div className="cart-div4-mobile">
                      <span className="div4-span1-mobile">SUBTOTAL</span>
                      <span className="div4-span2-mobile" style={{color:'red'}}><CurrencyRupeeIcon fontSize="10px" /> {e.qty*e.price}</span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="total-cart-div">
          <div className="total-cart-heading">CART TOTAL</div>
          <div className="total-cart-div1"><p className="subtotal-para1">Subtotal</p><p className="subtotal-para2"><CurrencyRupeeIcon  fontSize="5px"/>{Math.floor(total)}</p></div>
          <div className="total-cart-div2">
            <p className="shipping-para">Shipping</p>
          <div className="total-cart-flat-div">
            <p className="flat-para1">Flat Rate:<span style={{color:'rgb(198, 5, 5)'}}><CurrencyRupeeIcon fontSize="3px"/>40.00</span></p>
            <p className="flat-para2">shipping to maharastra</p>
            <p className="flat-para3">change address</p>
          </div>
          
          </div>
          <div className="total-cart-div3">
            <p className="total-cart-para1">Total</p>
            <p className="total-cart-para2"><CurrencyRupeeIcon  fontSize="8px"/>{Math.floor(total)+40}.00</p>
          </div>
           <Button className="total-cart-btn">proceed to chekout</Button>
        </div>

      </div>
    </div>
  );
};

export default Cart;
