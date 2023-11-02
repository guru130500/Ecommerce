import React from 'react'
import './Section1.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Section1 = () => {
    const navigate=useNavigate()
  
    
    function gotoCategory(value){
  
        navigate(`/category/${value}`)
       
      
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

        <h2 style={{marginLeft:'5%',color:'rgb(1, 1, 90)'}}>Shop by Category</h2>
        <div className='section-card-main-div'>
            <div className='section-card1' onClick={()=>{gotoCategory(`men`)}}>
              <div className='section-inner-div'>
               <h4>Men's Collection</h4>
                <img src='https://m.media-amazon.com/images/I/41jBRaPHRPL._AC_UL480_FMwebp_QL65_.jpg' alt='' ></img>
              </div>
               
            </div>
            <div className='section-card2' onClick={()=>{gotoCategory(`women`)}}>
            <div className='section-inner-div'>
               <h4>Women's Collection</h4>
                <img src='https://m.media-amazon.com/images/I/41YJmU04S7L._AC_UL480_FMwebp_QL65_.jpg' alt='' ></img>
              </div>
            </div>

            <div className='section-card3' onClick={()=>{gotoCategory(`electronics`)}}>

            <div className='section-inner-div'>
               <h4>Electronics Collection</h4>
                <img src='https://www.jiomart.com/images/product/original/492850035/oneplus-nord-ce-2-lite-5g-128-gb-6-gb-ram-blue-tide-mobile-phone-digital-o492850035-p591224603-0-202208112007.png?im=Resize=(360,360)' alt='' ></img>
              </div>



            </div>
            <div className='section-card4' onClick={()=>{gotoCategory(`jewelery`)}}>


            <div className='section-inner-div'>
               <h4>Jewelery Collection</h4>
                <img src='https://www.jiomart.com/images/product/original/30000203/reliance-jewels-22-kt-gold-ring-2-06-g-product-images-o30000203-p601365325-0-202305111325.jpg?im=Resize=(360,360)' alt='' ></img>
              </div>

            </div>
            <div className='section-card5' onClick={()=>{gotoCategory(`accessories`)}}>


            <div className='section-inner-div'>
               <h4>Accesories Collection</h4>
                <img src='https://www.jiomart.com/images/product/original/rvppndn1t8/piraso-analog-digital-multicolor-dial-multicolor-strap-2-watch-with-sunglasses-for-men-combo-of-3-product-images-rvppndn1t8-0-202307011544.jpg?im=Resize=(330,410)' alt='' ></img>
              </div>
           
            </div>
        </div>
    </div>

  )
}

export default Section1