import React, { useEffect, useState } from "react";
import "./Cart.css";
import { AlertTitle, Box, Button, colors } from "@mui/material";
import Nav from '../Nav/Nav'
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
console.log("cart Page")
const Cart = () => {
  
  const [cart, setCart] = useState([]);
  const[item,setItem]=useState([])
  const[ischecked,setIschecked]=useState([])
  const [input, setInput] = useState(1);
  const [total,setTotal]=useState(0)
  const navigate=useNavigate()
 let dummy=0
 useEffect(()=>{
  for(let i=0;i<cart.length;i++)
  {
       dummy=dummy+(cart[i].qty*cart[i].price)
  }

  setTotal(dummy)
 })
 
  function handleselectitem(e){
   const select=ischecked.includes(e)
   if (select) {
    // If the item is already selected, remove it from the selectedItems array
    setIschecked(ischecked.filter((id) => id !== e));
  } else {
    // If the item is not selected, add it to the selectedItems array
    setIschecked([...ischecked, e]);
  }
  // console.log("value"+ischecked)
 
  }
  const totalValue=ischecked.reduce((all,item)=>{
    const itemTotal=(item.price*item.qty).toFixed(2);
    return(parseFloat(all)+parseFloat(itemTotal)).toFixed(2)
  },"0.00")
  ischecked["totalPrice"]=totalValue;
  
    

  
  function handleChange1(item,d){
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

        // window.location.href = "/cart";

        setCart((prevData)=> prevData.filter((item)=> item.id !== product.id))
        setIschecked((prevData)=>prevData.filter((item)=>item.id!==product.id))
      }
     
    });
  }
  function emptycart(){
  
   
  }
  function chekout(){
   if(ischecked.length==0)
   {
   alert('please selet items from cart to checkout')
    
 
   }
   else
   {
    navigate('/chekout', { state: { ischecked } })
    console.log(ischecked)
   }
  }


  // go to detail
  function handleclick(id){
    navigate(`/detail/${id}`)
 
}


  return (
    <div style={{backgroundColor:'rgb(242, 253, 253)'}}>
      <div style={{ marginBottom: "10px" }}>
        <Nav />
      
      </div>

    


      <div className="display-div">
        <div className="cart-main-div">
          <div className="header-cart-divs">
            <div className="free-shipping-div">
              <p className="free-shipping-para">Shopping Cart</p>
            </div>
           
          </div>
        
          {cart &&
            cart.map((e) => {
              const select=ischecked.includes(e)
              return (
                <div className="cart-content-div">
                  <div><input className="checkbox" type="checkbox" onClick={()=>{handleselectitem(e)}}></input></div>
                  <div className="product-image-div">
                    {" "}
                    <img
                      className="cart-image"
                      src={e.image}
                      alt="image"
                      height={"100%"}
                      width={"100%"}
                      onClick={()=>{handleclick(e.pId)}}
                   ></img>
                  </div>
                  <div className="product-heading">{e.title}
                  <div className="product-price">
                    
                  ₹{Math.floor(e.price)}.00
                  </div>

                  
                  <div className="product-qty">
                    <button className="incre-btn" onClick={()=>handleChange1(e,+1)}>
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
                    
                    <button onClick={()=>handleChange1(e,-1)} className="decre-btn">
                      -
                    </button>
                    
                  </div>
                  
{/*                   
                  <div className="product-subtotal">
                    <CurrencyRupeeIcon fontSize="6px" />{" "}
                    {Math.floor(e.price * e.qty)}.00
                  </div> */}
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeProduct(e)}
                  >
                    <CloseIcon sx={{ fontSize: "15 px" }} />
                  </button>
                </div>
              );
            })}

          {cart &&
            cart.map((e) => {
              return (
                <div className="cart-content-div-mobile">
                      <div><input className="checkbox2" type="checkbox" onClick={()=>{handleselectitem(e)}}></input></div>
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
                      <button className="incre-btn" onClick={()=>handleChange1(e,+1)}>
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
                    <button onClick={()=>handleChange1(e,-1)} className="decre-btn">
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
          <div className="total-cart-div1"><p className="subtotal-para1">Subtotal</p><p className="subtotal-para2"><CurrencyRupeeIcon  fontSize="5px"/>{ischecked.totalPrice}</p></div>
          <div className="total-cart-div2">
            <p className="shipping-para">Shipping</p>
          <div className="total-cart-flat-div">
            <p className="flat-para1">Delivery Rate:<span style={{color:'#009900'}}><CurrencyRupeeIcon fontSize="3px"/>40.00</span></p>
           
          </div>
          
          </div>
          <div className="total-cart-div3">
            <p className="total-cart-para1">Total</p>
            <p className="total-cart-para2"><CurrencyRupeeIcon  fontSize="8px"/>{ischecked.totalPrice}</p>
          </div>
           <Button className="total-cart-btn" onClick={chekout}>proceed to chekout</Button>
        </div>

      </div>
    </div>
  );
};

export default Cart;
