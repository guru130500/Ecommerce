import React, { useEffect, useState } from 'react'
import './EditAddress.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const EditAddress = () => {
    const {id}=useParams();
    const navigate=useNavigate()
    const[data,setData]=useState({})


    // console.log(data)
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[email,setEmail]=useState('')
    const[country,setCountry]=useState('')
    const[state,setState]=useState('')
    const[city,setCity]=useState('')
    const[pincode,setPincode]=useState('')
    const[area,setArea]=useState('')
    const[landmark,setLandmark]=useState('')
    const[flat,setFlat]=useState('')
  

     
 
      useEffect(()=>{
         axios.get(`http://localhost:9000/address/${id}`)
         .then((res)=>{
            setData(res.data)
         })
      },[])
       
  useEffect(()=>{
    // data.map((e,i)=>{
        // if(i==0)
        // {
            setFirstName(data.firstName)
            setLastName(data.lastName)
            setEmail(data.email)
            setCountry(data.country)
            setState(data.state)
            setCity(data.city)
            setPincode(data.pinCode)
            setArea(data.area)
            setLandmark(data.landmark)
            setFlat(data.flat)
          
    //     }
    // })
    // console.log("hello")

  },[])

      function updateData(){
  
        const data={
            firstName: firstName,
            lastName: lastName,
            email: email,
            country: country,
            state: state,
            city: city,
            pinCode: pincode,
            area:area,
            landmark:landmark,
            flat:flat,
            userId:sessionStorage.getItem("userId"),
            id:id
        }
      
         axios.put(`http://localhost:9000/address/${id}`, data)
         .then((response)=>{

             setTimeout(() => {
                navigate('/adress')
             }, 1500);
         })
         .catch((err)=>{
           alert(err)
         })
 
   
      
    }
  return (


    <div className='addnew-main-div'>
    <form className='addnewaddress-form' method='post' onSubmit={(e)=>{
           e.preventDefault();
           updateData()
          }}> 
          <p onClick={()=>navigate('/adress')}><ArrowBackIcon/></p>
              <p className='form-heading'>Update Address</p>
             <label className=''>
               First Name 
             </label>
         
             <input className='' value={firstName} name='firstName' type='text' placeholder='E.g. Ramesh' onChange={(e)=>setFirstName(e.target.value)} required ></input>
             <br></br>
             <label className=''>Last Name</label>
             
         
             <input className='' value={lastName} name='lastName' type='text' placeholder='E.g. Punekar'onChange={(e)=>setLastName(e.target.value)} required></input>
         
             <label className='' >Email</label>
           
             <input className=''  value={email} name='email' type='email' placeholder='E.g. Ramesh12@Gmail.com'  onChange={(e)=>setEmail(e.target.value)}required></input>
            
             <label className=''>Country  </label>
             
         
             <input type='text'  value={country} className=''  name='country' placeholder='E.g. India' onChange={(e)=>setCountry(e.target.value)} required></input>
            
             <label className=''>State</label>
            


             <input type='text' value={state} className=''  name='state' placeholder='E.g. Karnataka' onChange={(e)=>setState(e.target.value)} required></input>
           

             <label className=''>city</label>
           
             <input type='text' value={city} className=''  name='city' placeholder='E.g. Hubali'onChange={(e)=>setCity(e.target.value)}required></input>
             <label className=''>Flat,House,Building,Company</label>
             <input type='text' value={flat} className='' name='flat' placeholder='E.g Flat No-13'onChange={(e)=>setFlat(e.target.value)} required></input>
              <label className=''>Area,Street</label>
              <input type='text' value={area} className='' name='area' placeholder='E.g Nagar road' onChange={(e)=>setArea(e.target.value)} required></input>
              <label className=''>Landmark</label>
              <input type='text' value={landmark} className='' name='landmark' placeholder='E.g near apollo hospital' onChange={(e)=>setLandmark(e.target.value)} required></input>
             <label className=''>pinCode</label>
             
             <input type='text' value={pincode} className=''   name='pinCode' placeholder='Enter your Pincode' onChange={(e)=>setPincode(e.target.value)} required></input>
             


             <input className='addnew-btn' type='submit' name='submit' value={'Update'} ></input>

            
           </form>

    </div>
  )
}

export default EditAddress