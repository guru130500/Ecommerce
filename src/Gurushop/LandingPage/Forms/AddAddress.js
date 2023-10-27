import React from 'react'
import './AddAddress.css'
import axios from 'axios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
const AddAddress = () => {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        country: 'India',
        state: 'Maharashtra',
        city: '',
        pinCode: '',
      
      
      });
      const navigate=useNavigate()
    const handleformchange = (e) => {
        console.log(e)
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      function updateData(){
  
        const data={...formData}
        data["userId"]=sessionStorage.getItem("userId")
       // console.log(data)
         axios.post(`http://localhost:9000/address?userId=${sessionStorage.getItem("userId")}`, data)
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
    <div className='addnew-variant'>
        <div className='addnew-main-div'>
        <form className='addnewaddress-form' method='post' onSubmit={(e)=>{
               e.preventDefault();
               updateData()
              }}> 
              <p onClick={()=>navigate('/adress')}><ArrowBackIcon/></p>
                  <p className='form-heading'>Add New Address</p>
                 <label className=''>
                   First Name 
                 </label>
             
                 <input className=''  name='firstName' type='text' placeholder='Enter First Name' onChange={handleformchange} required ></input>
                 <br></br>
                 <label className=''>Last Name</label>
                 
             
                 <input className='' name='lastName' type='text' placeholder='Enter last name' onChange={handleformchange} required></input>
             
                 <label className='' >Email</label>
               
                 <input className=''  name='email' type='email' placeholder='Enter Email Adress' onChange={handleformchange}required></input>
                
                 <label className=''>Country  </label>
                 
             
                 <input type='text' className=''  name='country' placeholder='Enter your Country' onChange={handleformchange} required></input>
                
                 <label className=''>State</label>
                


                 <input type='text' className=''  name='state' placeholder='Enter your State' onChange={handleformchange} required></input>
               

                 <label className=''>city</label>
               
                 <input type='text' className=''  name='city' placeholder='Enter your city'onChange={handleformchange} required></input>
                 

                 <label className=''>pinCode</label>
                 
                 <input type='text'  className=''   name='pinCode' placeholder='Enter your Pincode' onChange={handleformchange} required></input>
                 


                 <input className='addnew-btn' type='submit' name='submit' value={'Create'} ></input>

                
               </form>

        </div>
    </div>
  )
}

export default AddAddress