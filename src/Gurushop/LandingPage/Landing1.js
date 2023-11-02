import React, { useEffect, useState } from 'react'
import  Navbar from './Navbar/Navbar'
import Slider from './Slider/MainSlider'
import Section1 from './Card-section1/Section1'
import Nav from './Nav/Nav'
import Shop from './Shop/Shop'

import Contact from './Contact/Contact'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

/*   slidebar*/
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom';
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Card1 from './Card/Card1'
import './Landing.css'
import Nav2 from './Nav/Nav2'
const Landing1 = () => {
  const[data,setData]=useState([])
  const[data2,setData2]=useState([])
  const navigate=useNavigate()
  const feature=[]
  const sale=[]
  useEffect(()=>{
    fetch('http://localhost:9000/products')
    .then(res=>res.json())
    .then(data1=>setData(data1))
  },[])

  data.forEach((e,i) => {
    if(i>=26 && i<=29)
    {
      feature.push(e)
    }
  });

  useEffect(()=>{
    fetch('http://localhost:9000/products')
    .then(res=>res.json())
    .then(data1=>setData2(data1))
  },[])
  data2.forEach((e,i)=>{
    if(i>=30 && i<=35)
    {
      sale.push(e)
    }
  })

   /* Slider part */
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

    
        <Nav/>
        <Nav2/>
  
        <Slider/>
   
  
        <Section1/>
      
      <div className='feature'>
       
      <h2 style={{marginLeft:'5%',color:'rgb(1, 1, 90)'}}>Top Deals</h2>
        
      </div>
        <Box className="feature-box" sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'30px'}}>
              {
                feature.map((item)=>{
                     return(
                      <Card1 item={item}  addtoCart={addtoCart} />
                     )
                      
                     
                })
              }
       </Box>
            
       <h2 style={{marginLeft:'5%',color:'rgb(1, 1, 90)'}}>On sale products</h2>
 


        <Box className="feature-box" sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'30px'}}>
              {
                sale.map((item)=>{
                     return(
                      <Card1 item={item}  addtoCart={addtoCart} />
                     )
                      
                     
                })
              }
       </Box>

       
    </div>
  )
}

export default Landing1