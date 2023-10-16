import React, { useEffect, useState } from 'react'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import { useLocation } from 'react-router-dom';
import GradeIcon from '@mui/icons-material/Grade';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Navbar from '../Navbar/Navbar'
import Card1 from '../Card/Card1'
import './Detail.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Detail = () => {
  const navigate=useNavigate()
  const[data,setData]=useState([])
  const [product,setProduct]=useState({})
  const location=useLocation();
  const item=location.state.item ||{}

  useEffect(()=>{
 
    
      console.log(product.category)
    fetch(`http://localhost:9000/products?category=${product.category}`)
    .then(res=>res.json())
    .then(data1=>setData(data1))


})
  
  useEffect(()=>{
    setProduct(item)
  },[])
  console.log(product)

  
let isLoggedIn = sessionStorage.getItem("userName");
function addtoCart(product){
      if(isLoggedIn)
      {
        product["userId"]=sessionStorage.getItem("userId");
        product["qty"]=1
        axios.post(`http://localhost:9000/cart`, product)
        .then((response)=>{
          console.log(response);      
        })
        .catch((err)=>{
          console.log(err);
        })
        navigate('/cart');
      }
      else{
        navigate('/login');
      }
}

  return (
    
    <div>
      <Navbar/>
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'30px',width:'100%',height:'auto',marginTop:'7%'}}>
        
      
        <Box sx={{ border:'2px solid #f2f2f2', height: '80vh',width:'600px' ,display:'flex',flexDirection:"column",flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
          <Box sx={{height:'60vh',width:'60%'}}>
            <img src={product.image} alt='img' height='100%' width='100%'></img>
          </Box>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'20%'}}>
            <Button className='detail-btn1' sx={{bgcolor:'#ff9900',margin:'20px',height:'50%',width:'40%',color:'white'}} onClick={()=>{addtoCart(product)}}><ShoppingCartOutlined/> ADD TO CART</Button>
          <Button className='detail-btn2' sx={{bgcolor:'#ff4000',margin:'20px',height:'50%',width:'40%',color:'white'}} onClick={()=>{addtoCart(product)}}>BUY NOW</Button></div>
          </Box>
          <Box sx={{height:'auto',width:'600px',padding:'40px'}}>
              <h2><span>Name: {product.title}</span></h2>
              <h2>Price:  <span style={{color:'red'}}> ₹{product.price}</span></h2>
              {/* <p><span style={{fontWeight:'bold'}}>Rating: </span>{product.rating.rate} <GradeIcon fontSize='10px' sx={{color:'green',fontWeight:'bold'}}/></p> */}
              {/* <p><span style={{fontWeight:'bold'}}>Available stock: </span>{product.rating.count} items.</p> */}
              <p> <span style={{fontWeight:'bold',textAlign:'center'}}> Description:  </span> {product.description}.</p>
              <p><span style={{color:'#00804d',fontFamily:'serif',fontWeight:"bolder",fontSize:'30px'}}>Available Offers:</span></p>
              <p><span style={{fontWeight:'bold'}}><LocalOfferIcon sx={{color:' #00b300'}} fontSize='10px'/> Bank Offer</span> Additional ₹1500 off on Debit and Credit card Transactions.</p>
              <p><span style={{fontWeight:'bold'}}><LocalOfferIcon sx={{color:' #00b300'}} fontSize='10px'/> Bank Offer</span> Get 10% Cashback on Samsung Axis bank Credit Card.</p>
              <p><span style={{fontWeight:'bold'}}><LocalOfferIcon sx={{color:' #00b300'}} fontSize='10px'/> Bank Offer</span> 5% Cashback on Flipkart Axis Bank Card.</p>
              <p><span style={{fontWeight:'bold'}}><LocalOfferIcon sx={{color:' #00b300'}} fontSize='10px'/> Special Price</span> Get extra ₹6000 off (price inclusive of cashback/coupon).</p>
          </Box>

    </div>

    <h2> You may also like related products..</h2>
    <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'30px',marginTop:'20px',marginBottom:'60px'}}>
              {
               data && data.map((item)=>{
                    
                     return(
                      <Card1 item={item}  />
                     )
                      
                     
                })
              }
       </Box>
    </div>
  )
}

export default Detail