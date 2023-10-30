import React, { useEffect, useState } from 'react'
import './Adress.css'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
const Adress = () => {
    const[profile,setProfile]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:9000/address?userId=${sessionStorage.getItem("userId")}`)
        .then((res)=>{
          setProfile(res.data)
          console.log(profile)
        })
     
    },[profile])


    function removeAdress(id)
    { 

        axios.delete(`http://localhost:9000/address/${id}`)
        .then((res)=>{
         
         alert("successfuly deleted")
            setProfile((prev)=>{
            prev.filter((item)=>item.id!=id)
        })

        })
        .catch((err)=>{
            alert(err)
        })
     

    }
  return (

    <div>
        <Navbar/>
       <div className='adress-main-div'>
      
         <p>
         <span onClick={()=>navigate('/profile')}><ArrowBackIcon/></span> Your Addresses
        </p>
        <div>
           <div className='add-address-class' onClick={()=>navigate('/addnew')}>
             <p style={{fontSize:'40px',marginBottom:'5px'}}>+</p>
             <p>Add New Address</p>
           </div>
          
               {
                profile && profile.map((e,i)=>{
                    return(
                        <div className='address-card'>
                   
                        <p>{e.firstName} {e.lastName}</p>
                        <p>{e.area}  ,  {e.landmark} </p>
                        <p>{e.city} , {e.state}  {e.pinCode}</p>
                        <p>{e.country}.</p>
                        <p style={{width:'100%',textAlign:'center',marginTop:'10px',marginBottom:'0px',color:'red'}}  onClick={()=>navigate(`/edit/${e.id}`)}>Edit</p>
                        <p style={{width:'100%',textAlign:'center',marginTop:'10px',marginBottom:'0px',color:'red'}}  onClick={()=>{removeAdress(e.id)}}>Remove</p>
                        
                        </div>
                    )
                })
               }
          
        </div>
       </div>
    </div>
  )
}

export default Adress