import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import './Login.css'
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Login = () => {
   const[btn,Setbtn]=useState('Login')
   const[open1,setOpen1]=useState(false)
   const[open2,setOpen2]=useState(false)
  const[user,setUser]=useState([])
  const[userName,setUsername]=useState('')
  const[pass,setPas]=useState('');

// toast


const [open, setOpen] = React.useState(false);

const handleClick = () => {
  setOpen(true);
};

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
  setOpen1(false)
  setOpen2(false)
};


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
    // alert("login successful");
    setOpen(true);
   
    // window.location.href = "/";
    setTimeout(() => {
        window.location.href = "/";
    }, 1000);
    
  }
  else{
    setOpen1(true)
 
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

       setOpen2(true)
     
   }

   function logintoHome(){
    navigate('/')
   }

  return (
    <div className='login-body'>
      <div>
      <Navbar/>
      </div>
                      
       <div className='header2'>
          <img className='header-image' src='https://lootlere.com/wp-content/uploads/2023/02/4.png' height='100%' width='100%'></img>
         
           <div className='login-nav'>

            <div className='login-nav-div1'>
               {/* <p className={(search=='')?'header-para2-dummy':'header-para2'} onClick={all}><KeyboardBackspaceIcon/></p> */}
               <p className='login-header-para1'>My account</p>
            </div>
            <div className='login-spans'>
              <span className='login-span1' onClick={logintoHome}>Home </span><span className='login-span1'>  / My account</span>
            </div>
            {/* <div className='header-nav-div2'>
              <span className={(search==``)?'span5':'sp5'} onClick={all}>All</span>
              <span className={(search==`men's clothing`)?'span1':'sp1'}  onClick={men}>MEN</span>
              <span className={(search==` women's clothing`)?'span2':'sp2'} onClick={women}>WOMEN</span>
              <span className={(search==`jewelery`)?'span3':'sp3'} onClick={jewelery}>JEWELERY</span>
              <span className={(search==`electronics`)?'span4':'sp4'}  onClick={electronics}>ELECTRONICS</span>
              </div>*/
            }
           </div> 
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
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Login successful!
        </Alert>
        </Snackbar>
          <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
             Please check your userid or password enter correct details
          </Alert>
          </Snackbar>
       
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
                          UserName  <span style={{color:'red'}}>*</span>
                        </label>
                        <br></br>
                        <input className='input1' type='text' placeholder='Enter user name' onChange={(e)=>SetUserregister(e.target.value)} ></input>
                        <br></br>
                        <label className='lable1' >Email</label>
                        <br></br>
                        <input className='input2' type='email' placeholder='Enter Email Adress' onChange={(e)=>setUserEmail(e.target.value)}></input>
                        <br></br>
                        <label className='lable2'>Password  <span style={{color:'red'}}>*</span></label>
                        <br></br>
                    
                        <input type='password' className='input2'  placeholder='Enter Password' onChange={(e)=>SetUserpass(e.target.value)}></input>
                        <br></br>
                      
                        <input className='input3' type='submit' name='submit' value={'Register'} ></input>

                        <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                             successfuly Registered go to login
                           </Alert>
                           </Snackbar>
                      </form>
                     </div>





      <div className='guide-div'>
                                      
               <p className='guide-div-para1'>LOGIN / REGISTER</p>
              <p className='guide-div-para2'>Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
              <Button  className='guide-div-btn' onClick={handleButton}>{(btn=='Login')?'Register':'Login'}</Button>
      </div>
           
      </div>
      

    </div>
  )
}

export default Login