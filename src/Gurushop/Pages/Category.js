import React, { useEffect, useState } from 'react';
import './pages.css'
import { Box } from '@mui/material';
import Card1 from '../LandingPage/Card/Card1';
import { useParams,useLocation } from 'react-router-dom';
import Navbar from '../LandingPage/Navbar/Navbar'

const Category = () => {


  const[data,setData]=useState([])
  const[heading,setHeading]=useState('')
  useEffect(()=>{
 
    
      
        fetch(`http://localhost:9000/products?category=${value}`)
        .then(res=>res.json())
        .then(data1=>setData(data1))
    
   
    })

    const location=useLocation()
    const value=location.state
   useEffect(()=>{
    if(value=='men')
    {
      setHeading(`MEN'S COLLECTION`)
    }
    else if(value=='women')
    {
      setHeading(`WOMEN'S COLLECTION`)
    }
    else if(value=='electronics')
    {
      setHeading(`ELECTRONICS COLLECTION`)
    }
    else if(value=='jewelery')
    {
      setHeading(`JEWELERY COLLECTION`)
    }
    else if(value=='accessories')
    {
      setHeading(`ACCESSORIES COLLECTION`)
    }
   })
  return (
    <div>
      <Navbar/>
      <div className='category-main-div'> 
        <h1 style={{borderBottom:'2px solid grey'}}>{heading}</h1> 
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
    </div>
  )
}

export default Category