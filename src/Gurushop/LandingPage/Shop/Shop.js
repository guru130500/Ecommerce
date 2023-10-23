import React, { useEffect, useState } from 'react'
import  Navbar from '../Navbar/Navbar'
import './Shop.css'
import { Box, Card } from '@mui/material'
import Card1 from '../Card/Card1'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

import { useTheme } from '@mui/material/styles';

import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Tooltip from '@mui/material/Tooltip';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);




const Shop = () => {
  const[data,setData]=useState([])
  const[slide,setSlide]=useState('')
  const[men,setMen]=useState('')
  const[women,setWomen]=useState('')
  const[electronics,setElectronics]=useState('')
  const[jewelery,setJewelery]=useState('')
  const[accesories,setAccesories]=useState('')



  /*..... */
  const navigate=useNavigate();

 const men2=[]
 const women2=[]
 const electronics2=[]
 const jewelery2=[]
 const accesories2=[]
  

 // men fetching
  useEffect(()=>{
  
        fetch(`http://localhost:9000/products?q=men`)
        .then(res=>res.json())
        .then(data1=>setMen(data1))
  
    },[])
    men && men.forEach((e,i)=>{
      if(i<4)
      {
        men2.push(e)
      }
    })

    // women fetching
  useEffect(()=>{
  
    fetch(`http://localhost:9000/products?q=women`)
    .then(res=>res.json())
    .then(data1=>setWomen(data1))

},[])

women && women.forEach((e,i)=>{
  if(i<4) women2.push(e)
})

// electronics fetching

useEffect(()=>{
  
  fetch(`http://localhost:9000/products?q=electronics`)
  .then(res=>res.json())
  .then(data1=>setElectronics(data1))

},[])
   
electronics && electronics.forEach((e,i)=>{
  if(i<4) electronics2.push(e)
})

// jewelery fetching

useEffect(()=>{
  
  fetch(`http://localhost:9000/products?q=jewelery`)
  .then(res=>res.json())
  .then(data1=>setJewelery(data1))

},[])

jewelery && jewelery.forEach((e,i)=>{
  if(i<4) jewelery2.push(e)
})


// accesories fetching
useEffect(()=>{
  
  fetch(`http://localhost:9000/products?q=accessories`)
  .then(res=>res.json())
  .then(data1=>setAccesories(data1))

},[])

accesories && accesories.forEach((e,i)=>{
  if(i<4) accesories2.push(e)
})



  useEffect(()=>{
 
  //  (search=='')?fetch('https://fakestoreapi.com/products'):fetch(`https://fakestoreapi.com/products/category/${search}`)
    
      fetch('http://localhost:9000/products')
      .then(res=>res.json())
      .then(data1=>setData(data1))
  
 
  },[])
 
  useEffect(()=>{
 
    //  (search=='')?fetch('https://fakestoreapi.com/products'):fetch(`https://fakestoreapi.com/products/category/${search}`)
      
        fetch('http://localhost:9000/sliders')
        .then(res=>res.json())
        .then(data3=>setSlide(data3))
    
   
    },[])
 


  /* slider part*/
  

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = slide.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

/* .................*/

function gotoCategory(value){
  
  navigate(`/category/${value}`)
 

}


  return (
    <div style={{backgroundColor:'rgb(242, 253, 253)'}}>
      <Navbar />
       
      <Box sx={{ width: '100%', flexGrow: 1 ,maxWidth:'100%',marginTop:'3.5%'}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        {/* <Typography>{images[activeStep].label}</Typography> */}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        { slide && slide.map((step, index) => (
          <div>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 300,
                  display: 'block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.image}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            sx={{color:'black'}}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button   sx={{color:'black'}} size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
       <Box sx={{width:'93%',margin:'0 auto'}} >
          <p  className='shop-sub-category' style={{fontSize:'160%',marginBottom:'0.5%',fontWeight:'bold'}} onClick={()=>{gotoCategory(`men`)}}>MENS COLLECTION <ArrowForwardIosIcon sx={{fontSize:'80%'}}/> </p>
       <p style={{fontSize:'100%',marginTop:'0.5%'}}>We will provide you best Mens collection in our collection</p>
       </Box>

       <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'30px',marginTop:'20px',marginBottom:'60px'}}>
              {
               men2 && men2.map((item)=>{
                    
                     return(
                      <Card1 item={item} />
                     )
                      
                     
                })
              }
       </Box>
         
       <Box sx={{width:'93%',margin:'0 auto'}}>
          <p className='shop-sub-category' style={{fontSize:'160%',marginBottom:'0.5%',fontWeight:'bold'}} onClick={()=>{gotoCategory(`women`)}}>WOMENS COLLECTION <ArrowForwardIosIcon sx={{fontSize:'80%'}}/> </p>
       <p style={{fontSize:'100%',marginTop:'0.5%'}}>We will provide you best Womens collection in our collection</p>
       </Box>

       
       <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'30px',marginTop:'20px',marginBottom:'60px'}}>
              {
              women2 && women2.map((item)=>{
                    
                     return(
                      <Card1 item={item}/>
                     )
                      
                     
                })
              }
       </Box>
             
       <Box sx={{width:'93%',margin:'0 auto'}}>
          <p className='shop-sub-category' style={{fontSize:'160%',marginBottom:'0.5%',fontWeight:'bold'}} onClick={()=>{gotoCategory(`electronics`)}}>ELECTRONICS COLLECTION <ArrowForwardIosIcon sx={{fontSize:'80%'}}/> </p>
       <p style={{fontSize:'100%',marginTop:'0.5%'}}>We will provide you best electronics collection in our collection.</p>
       </Box>
         
       <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'30px',marginTop:'20px',marginBottom:'60px'}}>
              {
              electronics2 && electronics2.map((item)=>{
                    
                     return(
                      <Card1 item={item} />
                     )
                })
              }
       </Box>

       <Box sx={{width:'93%',margin:'0 auto'}}>
          <p className='shop-sub-category' style={{fontSize:'160%',marginBottom:'0.5%',fontWeight:'bold'}} onClick={()=>{gotoCategory(`jewelery`)}} >JEWELERY COLLECTION <ArrowForwardIosIcon sx={{fontSize:'80%'}}/> </p>
       <p style={{fontSize:'100%',marginTop:'0.5%'}}>We will provide you best Jewelery collection in our collection.</p>
       </Box>
          
       <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'30px',marginTop:'20px',marginBottom:'60px'}}>
              {
              jewelery2 && jewelery2.map((item)=>{
                    
                     return(
                      <Card1 item={item} />
                     )
                })
              }
       </Box>
       
       <Box sx={{width:'93%',margin:'0 auto'}}>
          <p className='shop-sub-category' style={{fontSize:'160%',marginBottom:'0.5%',fontWeight:'bold'}} onClick={()=>{gotoCategory(`accessories`)}}> ACCESORIES COLLECTION <ArrowForwardIosIcon sx={{fontSize:'80%'}}/> </p>
       <p style={{fontSize:'100%',marginTop:'0.5%'}}>We will provide you best Accesories collection in our collection.</p>
       </Box>

          
       <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'30px',marginTop:'20px',marginBottom:'60px'}}>
              {
              accesories2 && accesories2.map((item)=>{
                    
                     return(
                      <Card1 item={item} />
                     )
                })
              }
       </Box>

    </div>
  )
}


export default Shop