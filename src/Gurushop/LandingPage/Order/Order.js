import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Order.css'
import {  useNavigate } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Nav2 from '../Nav/Nav2'
const Order = () => {
    const[data,setData]=useState()
    const[total,setTotal]=useState()
    const[date,setDate]=useState('')
    const[profile,setProfile]=useState([])
    const  navigate=useNavigate()
    const sum=[]
    const name=[]
    var Date1=''
    useEffect(()=>{
        axios.get(`http://localhost:9000/orders?userId=${sessionStorage.getItem("userId")}`)
        .then((res)=>{
          setData(res.data)
          console.log(data)
        })
     
    },[])

    useEffect(()=>{
        axios.get(`http://localhost:9000/profile?userId=${sessionStorage.getItem("userId")}`)
        .then((res)=>{
          setProfile(res.data)
        })
     
    },[])
    function handleclick(id){
        navigate(`/detail/${id}`)
     
    }
   
    data && data.map((e)=>{
        return(
            e.products.map((k)=>{
                sum.push(k.price)
              })
            

        )
    })
    data && data.map((e)=>{
        Date1=e.date
       
    })
    useEffect(()=>{
        
        const all = sum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        setTotal(all)
        setDate(Date1)
    })
     

  return (
    <div>
          <Nav/>
          <Nav2/>
    <div style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

   <div className='order-div-content'>
   
   <div className='order-div'>
       <div className='order-div1'>
        <p style={{textAlign:'center',fontSize:'12px',marginBottom:'0px'}}>ORDER PLACED</p>
        <p style={{textAlign:'center',marginTop:'0px',marginBottom:'5px'}}>{date}</p>
       </div>
       <div className='order-div2'>
        <p style={{textAlign:'center',fontSize:'12px',marginBottom:'0px'}}>TOTAL</p>
        <p style={{textAlign:'center',marginTop:'0px',marginBottom:'5px'}}>₹{total}</p>
       </div>
      
     
         
  
       
   </div>
    <h3 style={{color:' #009900',marginLeft:'5%'}}>Arriving Soon</h3>

    {data && data.map((e)=>{
        return(
            e.products.map((k)=>{
                return(
                    <div className='order-inner-content'>
                    <img className='order-images' onClick={()=>{handleclick(k.pId)}} src={k.image} alt='img' height='100px' width='100px'></img>
                    <p className='order-names' onClick={()=>{handleclick(k.pId)}}>{k.title}</p>
                    <p style={{textAlign:'center',marginTop:'0px',marginBottom:'5px'}}><h4>Shipping to</h4> {e.address} </p>
                    </div>
                )
            })
        )
    })}

   </div>
    </div>
    </div>
  )
}

export default Order