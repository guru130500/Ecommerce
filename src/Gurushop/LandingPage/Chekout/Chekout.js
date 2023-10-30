import React, { useEffect, useState } from 'react'
import './Checkout.css'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import { json, useParams,useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import Snackbar from '@mui/material/Snackbar';
import GooglePayButton from "@google-pay/button-react"
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert/Alert'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Chekout = () => {
  const [total,setTotal]=useState(0)
    const[user,setUser]=useState([])
  // const[order,setOrder]=useState('')
    const location = useLocation();
    const[open,setOpen]=useState(false)
    const navigate=useNavigate()
    const [open1, setOpen1] = useState(false);
    const [open2,setOpen2]=useState(false)
    const[option,setOption]=useState('')

    const handleClickOpen = () => {
      setOpen1(true);
      
    };
  
    const handleClose1 = () => {
      setOpen1(false);

    };
  const  handleClickOpen2=()=>{
    setOpen2(true)
  }
  const handleClose2=()=>{
        setOpen2(false)
  }
 
    const cart = location.state.ischecked || [];
    
    
    // useEffect(()=>{
        
    //       console.log(order)
    // })
    const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; 
const day = today.getDate();

    useEffect(()=>{
      const url=`http://localhost:9000/address?userId=${sessionStorage.getItem("userId")}`;
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
            userId:sessionStorage.getItem("userId"),
            products:cart,
            total:total,
            date:`${day}/${month}/${year}`,
            address:option
          }
          if(option=='')
          {
            alert("please select address")
          }
          else{
            axios.post(`http://localhost:9000/orders`, order)
            .then((response)=>{
               setOpen(true)
              setTimeout(()=>{
                navigate('/order')
              },2000)
            })
            .catch((err)=>{
              console.log(err);
            })
          }
      
          console.log(order)
       }
      
       /* snakbar*/
    
       const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
      
      
        setOpen(false)
       
      };
      
    function handleAddress(e){
     setOption(e.target.value)
    }
    
  return (
    <div style={{backgroundColor:'rgb(242, 253, 253)'}}>
        <Navbar/>
    <div className='chekout-main-div'>
         <div className='chekout-order-div'>
         <div class="order-summary">
         
         
        <h2 style={{color:'#595959'}}>YOUR ORDERS</h2>
        <table class="order-table">
            <thead >
                <tr>
                    <th>PRODUCT</th>
                    <th>PRODUCT NAME</th>
                    <th>SUBTOTAL</th>
                    
                </tr>
            </thead>
            <tbody>
             
                {
                   cart && cart.map((e)=>{
                        return(
                          <tr>
                              {/* <td className='order-title'>{e.title} × {e.qty}</td> */}
                              <td><img className='chekout-item-image'  src={e.image} alt='img' height='120px' width='115px'></img></td>
                              <td className='chekout-product-title'>{e.title}</td>
                              <td>₹{e.price * e.qty}</td>
                          </tr>
                        )
                    })
                }
             
            </tbody>
        </table>
        <table class="order-table2">
         <tbody>
         <tr>
                    <td>Subtotal</td>
                    <td className='order-subtotal'>₹{Math.floor(total)}</td>
                </tr>
                <tr>
                    <td>Shipping Address</td>
                    
                     
                    <div class="select-option">
                           <select onChange={(e) => { handleAddress(e) }}>
                             
                             {
                               user.map((e, i) => {
                                 return (
                                   <option><td >{e.city} , {e.state}. pincode - {e.pinCode}  </td></option>
                                 )
                               })
                             }
                             
                           </select>
                    </div>
                        
                       
                    
                
                </tr>
                <tr class="total-row">
                    <td>Total</td>
                    <td className='order-complete-total'>₹{Math.floor(total)+40}.00</td>
                </tr>
         </tbody>
        </table>
        <div  className='select-option'>
           <p style={{fontSize:'16px',color:'#8a8a5c'}}>Select Below payment option to chekout:</p>
        </div>
        <div class="payment-info">
           
   <form onSubmit={handleSubmit} style={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'20px'}}>
      <label>
{/*        
      <Button variant='outlined' sx={{backgroundColor:"#66ffff",color:'black',boxShadow:'2px 2px 3px 4px solid grey'}} onClick={handleClickOpen2}>
       Pay by UPI
      </Button>  */}
      <button onClick={handleClickOpen2} className='upi-btn'>
        <span>PAY AND ORDER</span>
      </button>
      </label>
      <br />

      <label>
       
      {/* <Button variant="outlined"  sx={{backgroundColor:'#ddff99',color:'black'}} onClick={handleClickOpen}>
        Cash on Delivery
      </Button> */}
       <button onClick={handleClickOpen} className='cod-btn'>
        <span>CASH ON DELIVERY</span>
      </button>
      </label>
      <br />
     <label>
      <button className='add-btn' onClick={()=>navigate('/adress')} >ADD NEW ADDRESS</button>
     </label>

    </form>
            
      </div>
     
         </div>
        
         </div>
         {/* <div className={(paymentMethod=='upi')?'Upi2':'Upi1'}>
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
          
          </div> */}
              <Dialog
        open={open1}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose1}
        aria-describedby="alert-dialog-slide-description"
      >

         <div className='Cod1'>
       
         <p style={{marginLeft:'15%'}}>Selected Option : <span style={{fontSize:'15px',fontWeight:'700',color:'#a3a375'}}>Cash on Delivery</span></p>
            <h3 style={{paddingLeft:'27px'}}>Order summary</h3>
            <p style={{width:'80%',display:'flex',justifyContent:'space-between',margin:'0 auto',paddingBottom:'15px'}}><span>Items:</span><span>₹{Math.floor(total)}.00</span></p>
            <p style={{width:'80%',display:'flex',justifyContent:'space-between',margin:'0 auto'}}><span>Delivery:</span><span>₹40.00</span></p>
            <p style={{width:'80%',display:'flex',justifyContent:'space-between',fontSize:'25px',borderTop:'1px solid grey',color:'	 #cc0000',margin:'0 auto'}}><span>Total:</span><span>₹{Math.floor(total)+40}.00</span></p>
            <p style={{paddingLeft:'30px'}}><Button sx={{backgroundColor:'#ffcc00',color:'black',marginLeft:'17%',height:"40px",width:'60%'}} onClick={()=>{placebyCod({ vertical: 'top', horizontal: 'center' })}}>
             place Order  </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' ,position:'relative',bottom:'550px',left:'250%'}}>
         Order Placed successfuly
        </Alert>
        </Snackbar>
        </p>
          
          </div>
       
        
      </Dialog>


      <Dialog
        open={open2}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose2}
        aria-describedby="alert-dialog-slide-description"
      >
         <div className='Upi2'>
             <p style={{marginLeft:'15%'}}>Selected Option : <span style={{fontSize:'15px',fontWeight:'700',color:'#a3a375'}}>UPI payment</span></p>
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
        {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions> */}
      </Dialog>





    </div>
 
    </div>
  )
}

export default Chekout