import React, { useEffect, useState } from 'react';
import './pages.css'
import { Box } from '@mui/material';
import Card1 from '../LandingPage/Card/Card1';
import { useParams,useLocation } from 'react-router-dom';
import Nav from '../LandingPage/Nav/Nav'

const Category = () => {


  const[data,setData]=useState([])
  const[heading,setHeading]=useState('')
  const[cat,setCat]=useState('')
  const value=useParams()
  useEffect(()=>{
 setCat(value.category)
  })
  useEffect(()=>{
 
    
      
        fetch(`http://localhost:9000/products?category=${cat}`)
        .then(res=>res.json())
        .then(data1=>setData(data1))
    
   
    },[data])

    // const location=useLocation()
    // const value=location.state
   useEffect(()=>{
    if(value.category=='men')
    {
      setHeading(`MEN'S COLLECTION`)
    }
    else if(value.category=='women')
    {
      setHeading(`WOMEN'S COLLECTION`)
    }
    else if(value.category=='electronics')
    {
      setHeading(`ELECTRONICS COLLECTION`)
    }
    else if(value.category=='jewelery')
    {
      setHeading(`JEWELERY COLLECTION`)
    }
    else if(value.category=='accessories')
    {
      setHeading(`ACCESSORIES COLLECTION`)
    }
   },[value])
  return (
    <div>
      <Nav/>
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