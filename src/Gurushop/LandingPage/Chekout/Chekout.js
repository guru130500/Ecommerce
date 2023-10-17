import React, { useEffect, useState } from 'react'
import './Checkout.css'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import { json, useParams,useLocation } from 'react-router-dom'
import { Button } from '@mui/material'
import Snackbar from '@mui/material/Snackbar';
import GooglePayButton from "@google-pay/button-react"
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert/Alert'
const Chekout = () => {
  const [total,setTotal]=useState(0)
    const[user,setUser]=useState([])
  // const[order,setOrder]=useState('')
    const location = useLocation();
    const[open,setOpen]=useState(false)
 
    const cart = location.state.cart || [];
    
    
    // useEffect(()=>{
        
    //       console.log(order)
    // })

    useEffect(()=>{
      const url="http://localhost:9000/profile/1";
      axios.get(url)
      .then((response)=>{
           setUser(response.data)
         
      })
    },[])
   
    let dummy=0
    useEffect(()=>{
     for(let i=0;i<cart.length;i++)
     {
          dummy=dummy+(cart[i].qty*cart[i].price)
     }
     console.log("cart Total"+" "+dummy)
     setTotal(dummy)
    })
    
        
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: 'India',
        address: '',
        apartment: '',
        city: '',
        state: 'Maharashtra',
        pinCode: '',
        phone: '',
        email: '',
      });

   
     
        const [paymentMethod, setPaymentMethod] = useState('');
      
        const handlePaymentChange = (event) => {
          setPaymentMethod(event.target.value);
    
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();

        };

       function placebyCod(newState){
          const order={
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            state:user.state,
            city:user.city,
            userId:user.userId,
            products:cart
          }
          axios.post(`http://localhost:9000/orders`, order)
          .then((response)=>{
             setOpen(true)
          })
          .catch((err)=>{
            console.log(err);
          })
          console.log(order)
       }
      
       /* snakbar*/
    
       const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
      
      
        setOpen(false)
       
      };
      

    
  return (
    <div>
        <Navbar/>
    <div className='chekout-main-div'>
         <div className='chekout-order-div'>
         <div class="order-summary">
          <h2>Customer Name:- {user.firstName} {user.lastName}</h2>
         
        <h2>YOUR ORDER</h2>
        <table class="order-table">
            <thead>
                <tr>
                    <th>PRODUCT</th>
                    <th>SUBTOTAL</th>
                </tr>
            </thead>
            <tbody>
             
                {
                   cart && cart.map((e)=>{
                        return(
                          <tr>
                              <td className='order-title'>{e.title} × {e.qty}</td>
                              <td>₹{e.price * e.qty}</td>
                          </tr>
                        )
                    })
                }
                <tr>
                    <td>Subtotal</td>
                    <td className='order-subtotal'>₹{Math.floor(total)}</td>
                </tr>
                <tr>
                    <td>Shipping to</td>
                    <td >{user.city} , {user.state}. pincode - {user.pinCode}</td>
                </tr>
                <tr class="total-row">
                    <td>Total</td>
                    <td className='order-complete-total'>₹{Math.floor(total)+40}.00</td>
                </tr>
            </tbody>
        </table>
        <div class="payment-info">
            <h3>Pay with UPI QR Code</h3>
            <p>It uses UPI apps like BHIM, Paytm, Google Pay, PhonePe, or any Banking UPI app to make payment.</p>
   <form onSubmit={handleSubmit}>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="upi"
          checked={paymentMethod === 'upi'}
          onChange={handlePaymentChange}
        />
        Pay with UPI 
      </label>
      <br />

      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="cod"
          checked={paymentMethod === 'cod'}
          onChange={handlePaymentChange}
        />
        Cash on delivery
      </label>
      <br />


    </form>
            
      </div>
     
         </div>
        
         </div>
         <div className={(paymentMethod=='upi')?'Upi2':'Upi1'}>
             <p>Selected Option : <span style={{fontSize:'15px',fontWeight:'700',color:'#a3a375'}}>UPI payment</span></p>
            <h3 style={{paddingLeft:'27px'}}>Order summary</h3>
            <p style={{width:'80%',display:'flex',justifyContent:'space-between',margin:'0 auto',paddingBottom:'15px'}}><span>Items:</span><span>₹{Math.floor(total)}.00</span></p>
            <p style={{width:'80%',display:'flex',justifyContent:'space-between',margin:'0 auto'}}><span>Delivery:</span><span>₹40.00</span></p>
            <p style={{width:'80%',display:'flex',justifyContent:'space-between',fontSize:'25px',borderTop:'1px solid grey',color:'	 #cc0000',margin:'0 auto'}}><span>Total:</span><span>₹{Math.floor(total)+40}.00</span></p>
            <p style={{paddingLeft:'30px'}}>
<GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/>
</p>
  </div>
         <div className={(paymentMethod=='cod')?'Cod1':'Cod2'}>
         <p>Selected Option : <span style={{fontSize:'15px',fontWeight:'700',color:'#a3a375'}}>Cash on Delivery</span></p>
            <h3 style={{paddingLeft:'27px'}}>Order summary</h3>
            <p style={{width:'80%',display:'flex',justifyContent:'space-between',margin:'0 auto',paddingBottom:'15px'}}><span>Items:</span><span>₹{Math.floor(total)}.00</span></p>
            <p style={{width:'80%',display:'flex',justifyContent:'space-between',margin:'0 auto'}}><span>Delivery:</span><span>₹40.00</span></p>
            <p style={{width:'80%',display:'flex',justifyContent:'space-between',fontSize:'25px',borderTop:'1px solid grey',color:'	 #cc0000',margin:'0 auto'}}><span>Total:</span><span>₹{Math.floor(total)+40}.00</span></p>
            <p style={{paddingLeft:'30px'}}><Button sx={{backgroundColor:'#ffcc00',color:'black'}} onClick={()=>{placebyCod({ vertical: 'top', horizontal: 'center' })}}>
             place Order  </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' ,position:'relative',bottom:'550px',left:'250%'}}>
         Order Placed successfuly
        </Alert>
        </Snackbar>
        </p>
          
          </div>
    </div>
 
    </div>
  )
}

export default Chekout