import React, { useEffect, useState } from 'react';
import './pages.css'
import { Box, Divider, List, ListItem, ListItemText } from '@mui/material';
import Card1 from '../LandingPage/Card/Card1';
import { useParams,useLocation, useNavigate } from 'react-router-dom';
import Nav from '../LandingPage/Nav/Nav'


/* List Items*/

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


   /* go to category*/

   const navigate=useNavigate()
  
    
   function gotoCategory(value){
 
       navigate(`/category/${value}`)
      
     
     }
  return (
    <div>
      <Nav/>
      <div className='category-parent-div' style={{width:'90%',display:'flex',justifyContent:'center',justifyContent:'space-around',margin:'0 auto'}}>
        <div className='category-div'>
        <h2 style={{marginBottom:'0px',paddingLeft:'15px'}}>Category</h2>
         <List sx={{color:'#669999',cursor:'pointer',marginTop:'0px'}}>
                     
          <ListItem>
            <ListItemText>
            <h4  onClick={()=>{gotoCategory(`men`)}}>Men's Collection</h4>
            </ListItemText>
          </ListItem>

        <Divider/>

          <ListItem >
         <ListItemText>
         <h4  onClick={()=>{gotoCategory(`women`)}}>Women's Collection</h4>
         </ListItemText>
       </ListItem>
      
      <Divider/>

       <ListItem >
         <ListItemText>
         <h4  onClick={()=>{gotoCategory(`electronics`)}}>Electronics Collection</h4>
         </ListItemText>
       </ListItem>

        <Divider/>

       
       <ListItem >
         <ListItemText>
         <h4 onClick={()=>{gotoCategory(`jewelery`)}}>Jewelery Collection</h4>
         </ListItemText>
       </ListItem>
  
        <Divider/>

       <ListItem >
         <ListItemText>
         <h4  onClick={()=>{gotoCategory(`accessories`)}}>Accesories Collection</h4>
         </ListItemText>
       </ListItem>
        </List>
      

          </div>
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
    
    </div>
  )
}

export default Category