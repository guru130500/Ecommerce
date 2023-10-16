// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import './Card.css'
// export default function MediaCard() {
//    const[num,setNum]=React.useState('false')
   
  
//   return (
//     <Card className='main-card' sx={{ maxWidth: 300 ,maxHeight:450, display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
//       <CardMedia className='card-data'
//         sx={{ height: 320 ,width:'95%',marginTop:'10px'}}
//         image="https://cdn.pixabay.com/photo/2023/08/13/17/54/drone-8188144_640.jpg"
//         title="green iguana"
//       />
//       <CardActions className="card-action" >
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>

//       <CardContent>
//         <Typography className='card-heading' component="div">
//           Lizard
//         </Typography>
         
//         <Typography className='card-category' component="div">
//           Lizard
//         </Typography>
          
//         <Typography className='card-price' component="div">
//           1000Rs
//         </Typography>

//       </CardContent>
     
//     </Card>
//   );
// }
import React from 'react'
import './Card.css'
import { Button } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SearchIcon from '@mui/icons-material/Search';

import AspectRatio from '@mui/joy/AspectRatio';

import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Card1 = ({item,addtoCart,handleclick}) => {
 const navigate=useNavigate()
  function handleclick(item){
    navigate('/detail',{state:{item}})
    window.location.href='/detail'
}

let isLoggedIn = sessionStorage.getItem("userName");
function addtoCart(product){
      if(isLoggedIn)
      {
        product["userId"]=sessionStorage.getItem("userId");
        product["qty"]=1
        axios.post(`http://localhost:9000/cart`, product)
        .then((response)=>{
          console.log(response);      
        })
        .catch((err)=>{
          console.log(err);
        })
        navigate('/cart');
      }
      else{
        navigate('/login');
      }
}

  return (
    <div>
      <div className='main-card-div' >
          <div className='image-card'>
         
            <img className='image-data' src={item.image} alt='dummy'></img>
            </div>
            <div className='card-content-updated'>
              <p className='card-content-para1-updated' onClick={()=>{handleclick(item)}}>{item.title}</p>
              <p></p>
             
            </div>
            <div className='card-price-updated'>
                <p className='card-price-para1'>₹ {item.price}</p>
                <Button className='card-shop-btn' onClick={()=>addtoCart(item)}>SHOP NOW</Button>
              </div>
      </div>
    </div>

  )
}

export default Card1