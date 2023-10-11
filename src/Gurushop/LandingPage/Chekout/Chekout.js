import React, { useEffect, useState } from 'react'
import './Checkout.css'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import { json, useParams,useLocation } from 'react-router-dom'
const Chekout = () => {
  
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
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
  return (
    <div>
        <Navbar/>
    <div className='chekout-main-div'>
    <div className="billing-form">
      <h2>BILLING DETAILS</h2>
      <form>
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
            {/* Add more country options if needed */}
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

      </form>
    </div>


    
         <div className='chekout-order-div'>
         <div class="order-summary">
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
                              <td>{e.title} × {e.qty}</td>
                              <td>₹{e.price * e.qty}</td>
                          </tr>
                        )
                    })
                }
                <tr>
                    <td>Subtotal</td>
                    <td>₹2,998.00</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Flat Rate: ₹40.00</td>
                </tr>
                <tr class="total-row">
                    <td>Total</td>
                    <td>₹3,038.00</td>
                </tr>
            </tbody>
        </table>
        <div class="payment-info">
            <h3>Pay with UPI QR Code</h3>
            <p>It uses UPI apps like BHIM, Paytm, Google Pay, PhonePe, or any Banking UPI app to make payment.</p>
            <form>
                <label for="upiAddress">UPI Address *</label>
                <input type="text" id="upiAddress" name="upiAddress" required/>
                <button type="submit">Pay with UPI QR Code</button>
            </form>
        </div>
    </div>
         </div>
    </div>
    </div>
  )
}

export default Chekout