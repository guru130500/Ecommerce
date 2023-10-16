import React, { useEffect, useState } from 'react'
import './Checkout.css'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import { json, useParams,useLocation } from 'react-router-dom'
const Chekout = () => {
  const [total,setTotal]=useState(0)
    const[user,setUser]=useState([])

    const location = useLocation();
 
    const cart = location.state.cart || [];
    // const [cart, setCart] = useState("");

    // useEffect(() => {                  
 
    //     const url = `http://localhost:9000/cart?userId=${sessionStorage.getItem(
    //       "userId"
    //     )}`;
    //     axios.get(url).then((response) => {
    //       setCart(response.data);
    
    //       sessionStorage.setItem("cartlength", response.data.length);
    //       console.log(sessionStorage.getItem("cartlength"));
    //     });
    //  console.log("useparam"+ "    ")
    //   }, []);
    const handleChange = (e) => {
      console.log(e)
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

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

      
    function billingData(){
             
        const url="http://localhost:9000/users";
        axios.get(url)
        .then(response=>{
            console.log(response)
           const users=response.data
       
     const targetEmail=formData.email
     const targetUser=users.find(e=>e.userEmail===targetEmail)
     if(targetUser)
     {
       Object.assign(targetUser,formData)
       axios.post(`http://localhost:9000/users?userEmail=${formData.email}`,{targetUser})
       .then(postResponse => {
         console.log('User data updated:', postResponse.data);
       })
       .catch(error => {
         console.error('Error updating user data:', error);
       });
     }
     else {
       console.error('User not found with email address:', targetEmail);
     }
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
    }
     //billing post 
      // function billingData(){
      //       user.map((e)=>{
      //           if(e.userEmail==formData.email)
      //           {
                 
      //             axios.post(`http://localhost:9000/users?userEmail=${formData.email}`, formData)
      //             .then((response)=>{
      //               console.log(response)
      //             })
      //             .catch((err)=>{
      //               alert(err)
      //             })
                  
      //           }
              
      //       })
      // }

  return (
    <div>
        <Navbar/>
    <div className='chekout-main-div'>
    {/* <div className="billing-form">
      <h2>BILLING DETAILS</h2>
      <form  onSubmit={(e)=>{
      e.preventDefault();
    billingData();
     }} method='post'>
        <div className="form-group">
          <label htmlFor="firstName">First name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country / Region *</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="India">India</option>
         
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="address">Street address *</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="apartment">Apartment, suite, unit, etc. (optional)</label>
          <input
            type="text"
            id="apartment"
            name="apartment"
            value={formData.apartment}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">Town / City *</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State *</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pinCode">PIN Code *</label>
          <input
            type="text"
            id="pinCode"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone *</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
         
        <div className="form-group">
          
          <input className='billing-submit-btn'
            type="submit"
            id="submit"
            name="submit"
          />
        </div>
      </form>
    </div> */}


    
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
                {/* <tr>
                    <td>layasa Comfotable Lightweight Casual Sneaker for Women/Girls × 1</td>
                    <td>₹1,499.00</td>
                </tr>
                <tr>
                    <td>Men's Trouser × 1</td
                    <td>₹1,499.00</td>
                </tr> */}
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
            <form>
                <label for="upiAddress">UPI Address *</label>
                <input className='upi-input' type="text" id="upiAddress" name="upiAddress" required/>

                <button className='upi-submit-btn' type="submit">Pay with UPI QR Code</button>
                <button className='upi-submit-btn' type="submit">Cash on delivery</button>
            </form>
        </div>
    </div>
         </div>
    </div>
    </div>
  )
}

export default Chekout