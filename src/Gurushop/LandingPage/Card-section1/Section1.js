import React from 'react'
import './Section1.css'
import { Button } from '@mui/material'
const Section1 = () => {
  return (
    <div className='main-card'>
        <div className='card-div1'>
            <div className='card-div1-img'>
                  <img className='card-img1' src='https://cdn.pixabay.com/photo/2017/09/19/21/37/fashion-2766734_640.jpg'></img>
            </div>
            <div className='card-div1-content'>
                <p className='card-div1-para1' style={{width:'200px',textAlign:'center',fontSize:'30px',marginBottom:'10px'}}>WOMEN COLLECTION</p>
                <p style={{width:'120px',textAlign:'center',marginTop:'5px'}}>hbjbjkvjbjkbkbb</p>
                <Button className='card-div1-btn'>Read More</Button>
            </div>
           
        </div>
        <div className='card-div2'>
              <div className='card-div1-img'>
                  <img className='card-img2' src='https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_640.jpg'></img>
            </div>
        <div className='card-div2-content'>
                <p className='card-div2-para1' style={{width:'200px',textAlign:'center',fontSize:'30px',marginBottom:'10px'}}>Men COLLECTION</p>
                <p style={{width:'120px',textAlign:'center',marginTop:'5px'}}>hbjbjkvjbjkbkbb</p>
                <Button className='card-div1-btn'>Read More</Button>
            </div>
        </div>
        <div className='card-div3'>
        <div className='card-div1-img'>
                  <img className='card-img1' src='https://cdn.pixabay.com/photo/2019/12/18/19/19/christmas-4704703_640.jpg'></img>
            </div>
            <div className='card-div3-content'>
                <p className='card-div3-para1' style={{width:'200px',textAlign:'center',fontSize:'30px',marginBottom:'10px'}}>JEWELERY COLLECTION</p>
                <p style={{width:'120px',textAlign:'center',marginTop:'5px'}}>hbjbjkvjbjkbkbb</p>
                <Button className='card-div1-btn'>Read More</Button>
             </div>

                
        </div>
    </div>

  )
}

export default Section1