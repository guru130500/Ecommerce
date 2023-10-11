import React, { useEffect, useState } from 'react'
import  Navbar from './Navbar/Navbar'
import Slider from './Slider/MainSlider'
import Section1 from './Card-section1/Section1'

import Shop from './Shop/Shop'
import About from './About/About'
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
const Landing1 = () => {
  const[data,setData]=useState([])
  const[data2,setData2]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    fetch('http://localhost:9000/featuredProducts')
    .then(res=>res.json())
    .then(data1=>setData(data1))
  },[])

  useEffect(()=>{
    fetch('http://localhost:9000/saleProduct')
    .then(res=>res.json())
    .then(data1=>setData2(data1))
  },[])

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

    
        <Navbar/>
  
  
        <Slider/>
   
  
        <Section1/>
      
      <div className='feature-box-heading'>
        <p className='feature-box-par1'>SEE OUR COLLECTION</p>
        <p className='feature-box-par2'>FEATURED PRODUCTS</p>
        <p className='feature-box-par3'>Street art salvia irony wolf waistcoat actually lomo meh fap jean shorts.</p>
      </div>
        <Box className="feature-box" sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'30px'}}>
              {
                data.map((item)=>{
                     return(
                      <Card1 item={item}  addtoCart={addtoCart} />
                     )
                      
                     
                })
              }
       </Box>
            

       <div className='feature-box-heading' style={{marginTop:'80px'}}>
        <p className='feature-box-par1'>SEE OUR COLLECTION</p>
        <p className='feature-box-par2'>TOP VISITED CATEGORIES</p>
        <p className='feature-box-par3'>Street art salvia irony wolf waistcoat actually lomo meh fap jean shorts.</p>
        </div>

        <div className='visited-category'>
          <div className='category-div1'>
              <img className='visted-img' src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' alt='img1' height='100%' width='100%'></img>
              <p className='visited-para1'>MENS</p>
          </div>
          <div className='category-div2'>
             <img className='visted-img' src='https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg' height='100%' width='100%'></img>
             <p className='visited-para2'>WOMENS</p>
          </div>
          <div className='category-div3'>
             <img className='visted-img' src='https://m.media-amazon.com/images/I/71SZ7g7hH4L._AC_UY327_FMwebp_QL65_.jpg' height='100%' width='100%'></img>
             <p className='visited-para3'>ELECTRONICS</p>
          </div>
          <div className='category-div4'>
             <img className='visted-img' src='https://m.media-amazon.com/images/I/71Q07iSG7lL._AC_UL480_FMwebp_QL65_.jpg' height='100%' width='100%'></img>
             <p className='visited-para4'>JEWELERY</p>
          </div>
          <div className='category-div5'>
             <img className='visted-img' src='https://m.media-amazon.com/images/I/71wTOnIlUWL._AC_UL480_FMwebp_QL65_.jpg' height='100%' width='100%'></img>
             <p className='visited-para5'>ACCESSORIES</p>
          </div>
        </div>
         
        <div className='feature-box-heading' style={{marginTop:'80px'}}>
        <p className='feature-box-par1'>SEE OUR COLLECTION</p>
        <p className='feature-box-par2'>ON SALE PRODUCTS   (<span style={{color:'red'}}>60-85% OFF</span>)</p>
        <p className='feature-box-par3'>Street art salvia irony wolf waistcoat actually lomo meh fap jean shorts.</p>
        </div>



        <Box className="feature-box" sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'30px'}}>
              {
                data2.map((item)=>{
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