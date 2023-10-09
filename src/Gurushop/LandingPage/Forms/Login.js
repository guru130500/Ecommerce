import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import './Login.css'
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
const Login = () => {
   const[btn,Setbtn]=useState('Login')
  const[user,setUser]=useState([])
  const[userName,setUsername]=useState('')
  const[pass,setPas]=useState('');

   // useregister

   const[userRegister,SetUserregister]=useState('')
   const[userEmail,setUserEmail]=useState('')
   const[userpass,SetUserpass]=useState('')

   useEffect(()=>{
     const url="http://localhost:9000/users";
     axios.get(url)
     .then((response)=>{
          setUser(response.data)
        
     })
   },[])
    let navigate=useNavigate()

//  Validation
function validateUser(userInput,passInput){
  let status=false;
  user.map((e)=>{
    // console.log("ApiData : " + e.userName + " "+ e.password);
    // console.log("userData : " + userInput + " "+ passInput);

    if(e.userName===userInput&&e.password===passInput)
    {
      status=true;
      sessionStorage.setItem("userName", userInput)
      sessionStorage.setItem("userId", e.id)
      sessionStorage.setItem("qty",1)
    }
  })
  if(status){
    console.log("login successful");
    navigate('/')
    
  }
  else{
    alert("Invalid username or password")
  }
}

//authentication

 function authenticate(userInput,passInput) {
     if(userInput=='' || passInput==''){
        alert("Please fill all fields in the login form")
     }
     else
     {
      validateUser(userInput,passInput);
     }
 } 
  function handleButton(){
    if(btn!='Register')
    {
      Setbtn('Register')
    }
    else
    {
      Setbtn('Login')
    }
  }

   function handleRegisterbtn(){
         Setbtn('Register')
   }

/* User Register*/

   function registerUser(nameInput,emailInput,passInput){
    const userData={
        userName:nameInput,
        userEmail:emailInput,
        password:passInput
    }
      const url=`http://localhost:9000/users`;
      axios.post(`http://localhost:9000/users`, userData)
      .then((response)=>{
        console.log(response)
      })
      .catch((err)=>{
        alert(err)
      })
   }

  return (
    <div className='login-body'>
      <div>
      <Navbar/>
      </div>

      <div className='login-main-div'>
      <div className={(btn=='Login')?'form-div1-updated':'form-div1'}>
     <form method='post' onSubmit={(e)=>{
      e.preventDefault();
      authenticate(userName,pass);
     }}>

        <p className='form-heading'>LOGIN</p>
        <label className='lable1'>
          Username <span style={{color:'red'}}>*</span>
        </label>
        <br></br>
        <input className='input1' type='text' placeholder='Enter user name' onChange={(e)=>setUsername(e.target.value)} ></input>
        <br></br>
        <label className='lable2'>Password</label> <span style={{color:'red'}}>*</span>
        <br></br>
        <input className='input2' type='password' placeholder='Enter password' onChange={(e)=>setPas(e.target.value)}></input>
        <br></br>
        <input className='input3' type='submit' name='submit' value={'LOG IN'}></input>
        <p className='form-bottom-heading'>Don't have account ? click to Register</p>
        <Button className='handle-register-btn' onClick={handleRegisterbtn} >REGISTER</Button>
      </form>
     </div>
           
              
     <div className={(btn=='Register')?'form-div2-updated':'form-div2'}>
                     <form method='post' onSubmit={(e)=>{
                      e.preventDefault();
                      registerUser(userRegister,userEmail,userpass)
                     }}>
                         <p className='form-heading'>REGISTER</p>
                        <label className='lable1'>
                          UserName
                        </label>
                        <br></br>
                        <input className='input1' type='text' placeholder='Enter user name' onChange={(e)=>SetUserregister(e.target.value)} ></input>
                        <br></br>
                        <label className='lable1' >Email</label>
                        <br></br>
                        <input className='input2' type='email' placeholder='Enter Email Adress' onChange={(e)=>setUserEmail(e.target.value)}></input>
                        <br></br>
                        <label className='lable2'>Password</label>
                        <br></br>
                    
                        <input type='password' className='input2'  placeholder='Enter Password' onChange={(e)=>SetUserpass(e.target.value)}></input>
                        <br></br>
                        <input className='input3' type='submit' name='submit' value={'Register'} ></input>
                      </form>
                     </div>





      <div className='guide-div'>
                                      
              <Button  onClick={handleButton}>{(btn=='Login')?'Register':'Login'}</Button>
      </div>
           
      </div>
      

    </div>
  )
}

export default Login