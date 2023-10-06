import React, { useEffect, useState } from 'react'
import './Cart.css'
import { Button } from '@mui/material'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
const Cart = () => {
    const[cart,setCart]=useState()
    useEffect(()=>{
        const url=`http://localhost:9000/cart?userId=${sessionStorage.getItem("userId")}`;
        axios.get(url)
        .then((response)=>{
             setCart(response.data)
            console.log(response.data)
        })
      },[])

   function removeProduct(product){
       cart.map((item)=>{
           if(item.id==product.id && item.userId==sessionStorage.getItem("userId")){
              axios.delete(`http://localhost:9000/cart/${item.id}`)
           
              window.location.href='/cart'
           }
       })
   }

  return (
   




    <div>

        <div  style={{marginBottom:'130px'}}>
            <Navbar/>
        </div>
         
         <div className='display-div'>
                
                     <div className='cart-main-div'>

                           <div className='free-shipping-div'>

                           </div>
                         <div className='cart-heading'>
                             <div className='head1'>PRODUCT</div>
                             <div className='head2'>PRODUCT-NAME</div>
                             <div className='head3'>PRICE</div>
                             <div className='head4'>QUANTITY</div>
                             <div className='head5'>SUBTOTAL</div>
                         </div>
                        
                        
                        {
                            cart && cart.map((e)=>{
                                return(
                                      
                                        <div className='cart-content-div'>
                                             <button onClick={()=>removeProduct(e)}>remove</button>
                                        <div className='product-image-div'> <img  className='cart-image' src={e.image} alt='image' height={'100%'} width={'100%'}></img></div>
                                        <div className="product-heading">{e.title}</div>
                                        <div className='product-price'>{e.price}</div>
                                        <div className='product-qty'>6</div>
                                        <div className='product-subtotal'> 76776767</div>
                                       </div>
                                    
                                )
                            })
                        }

                    



                     </div>
             





                <div className='total-cart-div'></div> 
         </div>


    </div>
  )
}

export default Cart