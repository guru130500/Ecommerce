import React from 'react'
import './Section1.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Section1 = () => {
    const navigate=useNavigate()
  
    
function gotoCategory(value){
  
    navigate('/category',{state:value})
   
  
  }
  return (
    // <div className='main-card'>
    //     <div className='card-div1' onClick={sectiontoWomen}>
    //         <div className='card-div1-img'>
    //               <img className='card-img1' src='https://cdn.pixabay.com/photo/2017/09/19/21/37/fashion-2766734_640.jpg'></img>
    //         </div>
    //         <div className='card-div1-content' >
    //             <p className='card-div1-para1' style={{width:'200px',textAlign:'center',fontSize:'30px',marginBottom:'10px'}}>WOMEN COLLECTION</p>
         
    //             <Button className='card-div1-btn' onClick={sectiontoWomen}>Read More</Button>
    //         </div>
           
    //     </div>
    //     <div className='card-div2' onClick={sectiontoMen}>
    //           <div className='card-div1-img'>
    //               <img className='card-img2' src='https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_640.jpg'></img>
    //         </div>
    //     <div className='card-div2-content'onClick={sectiontoMen}>
    //             <p className='card-div2-para1' style={{width:'200px',textAlign:'center',fontSize:'30px',marginBottom:'10px'}}>Men COLLECTION</p>
               
    //             <Button className='card-div1-btn' >Read More</Button>
    //         </div>
    //     </div>
    //     <div className='card-div3' onClick={sectiontoElectronics}>
    //     <div className='card-div1-img'>
    //               <img className='card-img1' src='https://cdn.pixabay.com/photo/2019/12/18/19/19/christmas-4704703_640.jpg'></img>
    //         </div>
    //         <div className='card-div3-content' >
    //             <p className='card-div3-para1' style={{width:'200px',textAlign:'center',fontSize:'30px',marginBottom:'10px'}}>JEWELERY COLLECTION</p>
            
    //             <Button className='card-div1-btn' onClick={sectiontoElectronics}>Read More</Button>
    //          </div>

                
    //     </div>
    // </div>

    <div className='section-main-div'>

        <h2 style={{marginLeft:'1.2%'}}>Shop by Category</h2>
        <div className='section-card-main-div'>
            <div className='section-card1' onClick={()=>{gotoCategory(`men`)}}>
                <img className='section-card1-img1' src='https://cdn11.bigcommerce.com/s-d18iepu0cs/product_images/uploaded_images/men-desktop.jpg' alt='' height='300px' width='280px' ></img>
                <p className='section-card1-para1'>Men</p>
            </div>
            <div className='section-card2' onClick={()=>{gotoCategory(`women`)}}>
                <img className='section-card2-img2' height='300px' width='280px' src='https://cdn11.bigcommerce.com/s-d18iepu0cs/product_images/uploaded_images/women-desktop.jpg' alt=''></img>
                <p className='section-card2-para2'>Women</p>
            </div>
            <div className='section-card3' onClick={()=>{gotoCategory(`electronics`)}}>
                <img className='section-card3-img3'  height='300px' width='280px' src='https://images.meesho.com/images/products/19780555/y0l1e_400.webp' alt=''></img>
                <p className='section-card3-para3'>Electronics</p>
            </div>
            <div className='section-card4' onClick={()=>{gotoCategory(`jewelery`)}}>
               <img className='section-card4-img4'  height='300px' width='280px' src='https://images.meesho.com/images/products/282596088/l207t_400.webp' alt=''></img>
                <p className='section-card4-para4'>Jewelery</p>
            </div>
            <div className='section-card5' onClick={()=>{gotoCategory(`accessories`)}}>
               <img className='section-card5-img5'  height='300px' width='280px' src='https://images.meesho.com/images/products/205330312/mwgpu_400.webp' alt=''></img>
                <p className='section-card5-para5'>Accesories</p>
            </div>
        </div>
    </div>

  )
}

export default Section1