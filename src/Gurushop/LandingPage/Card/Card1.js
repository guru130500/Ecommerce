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
const Card1 = ({item,addtoCart}) => {
  return (
    <div>
      <div className='main-card-div'>
          <div className='image-card'>
         
            <img className='image-data' src={item.image} alt='dummy'></img>
            <div className='add-to-cart-btn'><Button onClick={()=>addtoCart(item)} className='add-to-cart-innerbtn' sx={{color:'#fff'}}> ADD TO CART<ShoppingCartOutlinedIcon className='shopping-cart-div'/></Button></div>
          </div>
          <div className='card-div'>
             <p className='card-para1'>{item.title}</p>
             <p className='card-para2'>{item.category}</p>
             <p className='card-para3'><CurrencyRupeeIcon sx={{fontSize:'19px'}}/>{item.price}</p>
           
          </div>
      </div>
    </div>
  )
}

export default Card1