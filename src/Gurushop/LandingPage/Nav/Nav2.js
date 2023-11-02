import React from 'react'
import './Nav2.css'
import { useNavigate } from 'react-router-dom'
const Nav2 = () => {
    const navigate=useNavigate()
  
    
    function gotoCategory(value){
  
        navigate(`/category/${value}`)
       
      
      }
  return (
    <div>
        <div className='nav2-main-div'>
         
            <div  onClick={()=>{gotoCategory(`men`)}}>Men</div>
            <div  onClick={()=>{gotoCategory(`women`)}}>Women</div>
            <div  onClick={()=>{gotoCategory(`electronics`)}}>Electronics</div>
          
            <div onClick={()=>{gotoCategory(`jewelery`)}}>Jewelery</div>
            <div onClick={()=>{gotoCategory(`accessories`)}}>Accesories</div>
            <div>Beauty</div>
            <div>Groceries</div>
            <div>Premium Fruits</div>
            <div>Home & Kitchen</div>

        </div>
    </div>
  )
}

export default Nav2