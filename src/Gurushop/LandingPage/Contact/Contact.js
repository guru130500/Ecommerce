import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import PeopleIcon from '@mui/icons-material/People';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Nav from '../Nav/Nav'
import Nav2 from '../Nav/Nav2'
import './Contact.css'
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
const Contact = () => {
  return (
    <div>
      <Nav/>
      <Nav2/>
      <div className='accordian-div' style={{width:'75%',margin:'0 auto'}}>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <ListItemIcon>
          <img src='https://www.jiomart.com/images/cms/section/category-url/147/3.png?v=1697181679' height='100px' width='90px'></img>
        </ListItemIcon>
        <ListItemText>
          <p style={{fontSize:'22px',fontWeight:'800',marginLeft:'20px',marginBottom:'0px'}}>Fashion</p>
          <p style={{marginLeft:'20px',marginTop:'0px',fontSize:'13px',fontWeight:'600',color:'#476b6b'}}>Men, Women, Boys, Girls, Junior Boys, Infants, Home & Kitchen...</p>
        </ListItemText>
        </AccordionSummary>
        <AccordionDetails>
          <List>
                 
          <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/496/thumb/men-20230607.png?im=Resize=(200,200)' height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p style={{fontSize:'14px',fontWeight:'800'}}>Men</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>

     <Divider/>

        <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/493/thumb/women-20230607.png?im=Resize=(200,200)' height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p style={{fontSize:'14px',fontWeight:'800'}}>Women</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>
          

          <Divider/>

          
        <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/499/thumb/boys-20230607.png?im=Resize=(200,200)'  height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p  style={{fontSize:'14px',fontWeight:'800'}}>Boys</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>

        <Divider/>



           
        <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/563/thumb/girls-20230607.png?im=Resize=(200,200)' height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p  style={{fontSize:'14px',fontWeight:'800'}}>Girls</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>
      
        <Divider/>



            
        <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon  sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/519/thumb/junior-boys-20230607.png?im=Resize=(200,200)' height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p style={{fontSize:'14px',fontWeight:'800'}}>Junior Boys</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>
      
      <Divider/>

          
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon  sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/550/thumb/infants-20230607.png?im=Resize=(200,200)'  height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p style={{fontSize:'14px',fontWeight:'800'}}>Infants</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>
      


       
          </List>
        </AccordionDetails>
      </Accordion>
     


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <ListItemIcon>
          <img src='https://www.jiomart.com/images/cms/section/category-url/147/4.png?v=1697181679' height='100px' width='90px'></img>
        </ListItemIcon>
        <ListItemText>
          <p style={{fontSize:'22px',fontWeight:'800',marginLeft:'20px',marginBottom:'0px'}}>Electronics</p>
          <p style={{marginLeft:'20px',marginTop:'0px',fontSize:'13px',fontWeight:'600',color:'#476b6b'}}>Mobiles & Tablets, TV & Speaker, Home Appliances, Computers, Cameras, Kitchen Appliances, Personal Care & Grooming, Smart Devices, Gaming......</p>
        </ListItemText>
        </AccordionSummary>
        <AccordionDetails>
          <List>
                 
          <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/757/thumb/mobiles-tablets-20230607.png?im=Resize=(200,200)' height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p style={{fontSize:'14px',fontWeight:'800'}}>Mobiles & Tablets</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>

     <Divider/>

        <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/746/thumb/tv-speaker-20230607.png?im=Resize=(200,200)' height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p style={{fontSize:'14px',fontWeight:'800'}}>TV & Speaker</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>
          

          <Divider/>

          
        <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/724/thumb/home-appliances-20230607.png?im=Resize=(200,200)'  height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p  style={{fontSize:'14px',fontWeight:'800'}}>Home Appliances</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>

        <Divider/>



           
        <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/719/thumb/computers-20230607.png?im=Resize=(200,200)' height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p  style={{fontSize:'14px',fontWeight:'800'}}>Computers</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>
      
        <Divider/>



            
        <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon  sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/736/thumb/cameras-20230607.png?im=Resize=(200,200)' height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p style={{fontSize:'14px',fontWeight:'800'}}>Cameras</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>
      
      <Divider/>

       


       
          </List>
        </AccordionDetails>
      </Accordion>
    





      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <ListItemIcon>
          <img src='https://www.jiomart.com/images/cms/section/category-url/147/1524.png?v=1697181679' height='100px' width='90px'></img>
        </ListItemIcon>
        <ListItemText>
          <p style={{fontSize:'22px',fontWeight:'800',marginLeft:'20px',marginBottom:'0px'}}>Jewelery</p>
          <p style={{marginLeft:'20px',marginTop:'0px',fontSize:'13px',fontWeight:'600',color:'#476b6b'}}>Fine Jewelery</p>
        </ListItemText>
        </AccordionSummary>
        <AccordionDetails>
          <List>
                 
          <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/1531/thumb/fine-jewellery-20230607.png?im=Resize=(200,200)' height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p style={{fontSize:'14px',fontWeight:'800'}}>Fine Jewelery</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>

  


       
          </List>
        </AccordionDetails>
      </Accordion>
    




      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <ListItemIcon>
          <img src='https://www.jiomart.com/images/cms/section/category-url/147/8584.png?v=1697181679' height='100px' width='90px'></img>
        </ListItemIcon>
        <ListItemText>
          <p style={{fontSize:'22px',fontWeight:'800',marginLeft:'20px',marginBottom:'0px'}}>Sports, Toys & Luggage</p>
          <p style={{marginLeft:'20px',marginTop:'0px',fontSize:'13px',fontWeight:'600',color:'#476b6b'}}>Toys & Games, Bags & Travel Luggage, Sporting Goods & Fitness Equipment......</p>
        </ListItemText>
        </AccordionSummary>
        <AccordionDetails>
          <List>
                 
          <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/8848/thumb/toys-games-20231025.png?im=Resize=(200,200)' height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p style={{fontSize:'14px',fontWeight:'800'}}>Toys & Games</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>

     <Divider/>

        <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/9242/thumb/bags-travel-luggage-20231025.png?im=Resize=(200,200)' height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p style={{fontSize:'14px',fontWeight:'800'}}>Bags & Travel Luggage</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>
          

          <Divider/>

          
        <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/9279/thumb/sporting-goods-fitness-equipment-20231025.png?im=Resize=(200,200)'  height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p  style={{fontSize:'14px',fontWeight:'800'}}>Sporting Goods & Fitness Equipment</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>

        <Divider/>



       
          </List>
        </AccordionDetails>
      </Accordion>
    





      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <ListItemIcon>
          <img src='https://www.jiomart.com/images/cms/section/category-url/147/6047.png?v=1697181679' height='100px' width='90px'></img>
        </ListItemIcon>
        <ListItemText>
          <p style={{fontSize:'22px',fontWeight:'800',marginLeft:'20px',marginBottom:'0px'}}>Premium Fruits</p>
          <p style={{marginLeft:'20px',marginTop:'0px',fontSize:'13px',fontWeight:'600',color:'#476b6b'}}>Apples & Pears, Avocado, Peach, Plum, Banana, Melons & Coconut, Cherries, Berries & Exotic Fruits, Citrus, Mango & Grapes, Dates, Gift, Assorted & XL....</p>
        </ListItemText>
        </AccordionSummary>
        <AccordionDetails>
          <List>
                 
          <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/7470/thumb/apples-pears-20230607.png?im=Resize=(200,200)' height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p style={{fontSize:'14px',fontWeight:'800'}}>Apples & Pears</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>

     <Divider/>

        <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/7473/thumb/avocado-peach-plum-20230607.png?im=Resize=(200,200)' height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p style={{fontSize:'14px',fontWeight:'800'}}>Avocado,Peach,Plum</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>
          

          <Divider/>

          
        <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/7479/thumb/banana-melons-coconut-20230607.png?im=Resize=(200,200)'  height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p  style={{fontSize:'14px',fontWeight:'800'}}>Banana & Melons</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>

        <Divider/>



           
        <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/7483/thumb/cherries-berries-exotic-fruits-20230607.png?im=Resize=(200,200)' height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p  style={{fontSize:'14px',fontWeight:'800'}}>Cherries, Berries & Exotic Fruits</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>
      
        <Divider/>


          </List>
        </AccordionDetails>
      </Accordion>
    





      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <ListItemIcon>
          <img src='https://www.jiomart.com/images/cms/section/category-url/147/2.png?v=1697181679' height='100px' width='90px'></img>
        </ListItemIcon>
        <ListItemText>
          <p style={{fontSize:'22px',fontWeight:'800',marginLeft:'20px',marginBottom:'0px'}}>Groceries</p>
          <p style={{marginLeft:'20px',marginTop:'0px',fontSize:'13px',fontWeight:'600',color:'#476b6b'}}>Fruits & Vegetables, Dairy & Bakery, Staples, Snacks & Branded Foods, Beverages, Personal Care, Home Care, Apparel, Home & Kitchen......</p>
        </ListItemText>
        </AccordionSummary>
        <AccordionDetails>
          <List>
                 
          <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/219/thumb/fruits-vegetables-20230607.png?im=Resize=(200,200)' height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p style={{fontSize:'14px',fontWeight:'800'}}>Fruits And Vegetables</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>

     <Divider/>

        <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/61/thumb/dairy-bakery-20230607.png?im=Resize=(200,200)' height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p style={{fontSize:'14px',fontWeight:'800'}}>Dairy & Bakery</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>
          

          <Divider/>

          
        <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/1687/thumb/home-kitchen-20230913.jpeg?im=Resize=(200,200)'  height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p  style={{fontSize:'14px',fontWeight:'800'}}>Home & Kitchen</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>

        <Divider/>



           
        <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/13/thumb/staples-20230607.png?im=Resize=(200,200)' height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p  style={{fontSize:'14px',fontWeight:'800'}}>Staples</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>
      
        <Divider/>



            
        <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon  sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/10/thumb/snacks-branded-foods-20230607.png?im=Resize=(200,200)' height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p style={{fontSize:'14px',fontWeight:'800'}}>Snacks & Branded Foods</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>
      
      <Divider/>

          
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon  sx={{marginRight:'20px'}}>
           <img src='https://www.jiomart.com/images/category/33/thumb/beverages-20230607.png?im=Resize=(200,200)'  height='95px' width='70px'></img>
          </ListItemIcon>
          <ListItemText>
           <p style={{fontSize:'14px',fontWeight:'800'}}>Beverages</p>
      
          </ListItemText>
        </ListItemButton>
        </ListItem>
      


       
          </List>
        </AccordionDetails>
      </Accordion>
    




      </div>
    </div>
  )
}

export default Contact