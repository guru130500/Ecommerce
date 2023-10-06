import React, { useEffect, useState } from 'react'
import  Navbar from '../Navbar/Navbar'
import './Shop.css'
import { Box, Card } from '@mui/material'
import Card1 from '../Card/Card1'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import axios from 'axios'
const Shop = () => {
  const[data,setData]=useState([])
  const[search,setSearch]=useState('')
  const[head,setHead]=useState('Shop')
  useEffect(()=>{
 
  //  (search=='')?fetch('https://fakestoreapi.com/products'):fetch(`https://fakestoreapi.com/products/category/${search}`)
     if (search=='')
     {
      fetch('http://localhost:9000/products')
      .then(res=>res.json())
      .then(data1=>setData(data1))
     }
     else
     {
      fetch(`http://localhost:9000/products?category=${search}`)
      .then(res=>res.json())
      .then(data1=>setData(data1))
     }
 
  },[search])

  function men(){
    setSearch(`men's clothing`)
    setHead(`men's clothing`)
  }
  function women(){
    setSearch(`women's clothing`)
    setHead(`women's clothing`)
  }
  function jewelery(){
     setSearch('jewelery')
     setHead('jewelery')
  }
  function electronics(){
    setSearch('electronics')
    setHead('electronics')
  }
  function all(){
    setSearch('')
    setHead('Shop')
  }
  function handleClick1(){
    alert("hello")
  }


  function addtoCart(product){
    product["userId"]=sessionStorage.getItem("userId")
    console.log(product)
    axios.post(`http://localhost:9000/cart`, product)
    .then((response)=>{
      console.log(response)
    })
    .catch((err)=>{
      alert(err)
    })
  }
  return (
    <div>
      <Navbar handleClick1={handleClick1}/>
       
       <div className='header'>
          <img className='header-image' src='https://lootlere.com/wp-content/uploads/2023/02/4.png' height='100%' width='100%'></img>
              <p className='dummy-para'>{head}</p>
           <div className='header-nav'>

            <div className='header-nav-div1'>
               <p className={(search=='')?'header-para2-dummy':'header-para2'} onClick={all}><KeyboardBackspaceIcon/></p>
               <p className='header-para1'>{head}</p>
            </div>
            <div className='header-nav-div2'>
              <span className={(search==``)?'span5':'sp5'} onClick={all}>All</span>
              <span className={(search==`men's clothing`)?'span1':'sp1'}  onClick={men}>MEN</span>
              <span className={(search==` women's clothing`)?'span2':'sp2'} onClick={women}>WOMEN</span>
              <span className={(search==`jewelery`)?'span3':'sp3'} onClick={jewelery}>JEWELERY</span>
              <span className={(search==`electronics`)?'span4':'sp4'}  onClick={electronics}>ELECTRONICS</span>
              </div>
           </div>
       </div>
       

       <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',justifyContent:'space-around'}}>
              {
                data.map((item)=>{
                     return(
                      <Card1 item={item}  addtoCart={addtoCart} />
                     )
                      
                     
                })
              }
       </Box>

    </div>
  )
}

export default Shop