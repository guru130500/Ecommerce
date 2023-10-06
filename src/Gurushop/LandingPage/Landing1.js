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


const Landing1 = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data1=>setData(data1))
  })

   /* Slider part */
    




  return (
    <div>

    
        <Navbar/>
  
  
        <Slider/>
   
  
        <Section1/>
   
     
    </div>
  )
}

export default Landing1