import  React ,{useEffect, useState}from 'react';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './Slider.css'
import { red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://m.media-amazon.com/images/I/81e-sVvy6AL._UY879_.jpg',
  },
  {
    label: 'Bird',
    imgPath:
      'https://cdn.pixabay.com/photo/2017/03/16/16/46/necklace-2149668_640.jpg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

function SwipeableTextMobileStepper() {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch('http://localhost:9000/products')
    .then(res=>res.json())
    .then(data1=>setData(data1))
  },[])

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;
  const images1=[
    {
       id:1,
       imgPath:data[0]
    },
    {
      id:2,
       imgPath:data[1]
      
    },
    {
      id:3,
       imgPath:data[2]
    },
    {
      id:4,
       imgPath:data[3]
    }
  ]
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
/* ......*/
const navigate=useNavigate()
function handleclick(item){
  navigate('/detail',{state:{item}})
}

/* ........*/
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
    <Box className="slider-box-main" sx={{ maxWidth: '100%', flexGrow: 1 ,height:710,marginTop:'100px'}}>

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {  data.map((step, index) => 
                          
          (
            <div key={step.id}>
              {Math.abs(activeStep - index) <= 2 ? (
                // <Box
                //   component="img"
                //   sx={{
                //     height:600,
                //     display: 'block',
                //     maxWidth: '100%',
                //     overflow: 'hidden',
                //     width: '100%',
                //   }}
                //   src={step.imgPath}
                //   alt={step.label}
                // />
                <div className='slider-div1' style={{height:'700px',display:'block',width:'100%'}}>
                     <div className='slider-img-div' style={{height:'700px',display:'block',width:'100%'}}>
                       <img className='slider-inner-image' src={step.image} alt='step.label' style={{height:'700px',display:'block',width:'90%',overflow:'hidden',marginLeft:'75px'}}></img>
                     </div>
                     <div className='slider-content'>
                        {/* <p className='slider-para1' >COLOR</p>
                        <p className='slider-para2'>ghgvjsfbfdhvffssbfksfjsfbvjkvbfdskjbcjbsfkbslbfjvsdbkdbfbjbsbsj</p> */}
                        <div className='slider-btns'>
                          <Button className='slider-btn3' onClick={()=>{handleclick(step)}}>Read More</Button>
                          <Button className='slider-btn4' onClick={()=>{addtoCart(step)}}>Shop Now</Button>
                        </div>
                        {/* <div className='offer-class'>60% Off</div> */}
                     </div>
                </div>
              ) : null}
                  
            </div>
          )
                
              
            
        )}

   
      </AutoPlaySwipeableViews>
      <MobileStepper 
      className='mobile-stepper'
       
       steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button className='slider-btn1'
            size="small"
            onClick={handleNext}
          sx={{height:'50px',width:'30px',borderRadius:'50%',backgroundColor:'black',color:'white'}}
          >
       
              <KeyboardArrowRight className='left-arrow'/>
           
          </Button>
        }
        backButton={
          <Button className='slider-btn2' size="small" onClick={handleBack}   sx={{height:'50px',width:'30px',borderRadius:'50%',backgroundColor:'black',color:'white'}}
          >
          
              <KeyboardArrowLeft  className='right-arrow'/>
            
            
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;