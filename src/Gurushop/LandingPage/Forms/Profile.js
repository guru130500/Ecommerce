import * as React from 'react';
import axios from 'axios'
import { Box } from '@mui/material'

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import './profile.css'


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom';
import PublicIcon from '@mui/icons-material/Public';
/*table from material ui*/

const headings=['FirstName','LastName','Email','Country','State','City','PinCode']



/* Tab code from material*/
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}




const Profile = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    country: 'India',
    state: 'Maharashtra',
    city: '',
    pinCode: '',
  
  
  });

    const[user,setUser]=React.useState([])
    const[profile,setProfile]=React.useState([])
    const[userupdate,SetUserupdate]=React.useState('')
    const[userEmail,setUserEmail]=React.useState('')
    const[userpass,SetUserpass]=React.useState('')
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
     const compareData=[formData]
    
   

    const handleformchange = (e) => {
      console.log(e)
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
    React.useEffect(()=>{
        const url=`http://localhost:9000/users/${sessionStorage.getItem("userId")}`;
        axios.get(url)
        .then((response)=>{
             setUser(response.data)
             console.log(response.data)
        })
      },[])
      React.useEffect(()=>{
        axios.get(`http://localhost:9000/users?id=${sessionStorage.getItem("userId")}`)
        .then((res)=>{
          setProfile(res.data)
          console.log(profile)
        })
     
    },[])
   function updateData(){
  
       const data={...formData}
       data["userId"]=sessionStorage.getItem("userId")
      // console.log(data)
      if(compareData==data)
      {
        alert("profile alerady created")

      }
      else
      {
        axios.post(`http://localhost:9000/address?userId=${sessionStorage.getItem("userId")}`, data)
        .then((response)=>{
          console.log(response)
          alert("successfuly created profile")
        })
        .catch((err)=>{
          alert(err)
        })
      }
        

      
     
   }
  return (
    <div>
       

    <Box sx={{  width: '100%'}}>
      <AppBar position="static" sx={{bgcolor:'#00cccc',display:'flex',justifyContent:'center',height:'80px'}}>
    
            <h2 style={{margin:'0 auto'}}>Hello,{user.userfirstName} {user.userlastName}</h2>
       
       
      </AppBar>
  
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'30px',width:'100%',margin:'0 auto'}}>

          
          
              <Box
                sx={{
                  width: '70%',
                  height: 'auto',
                  display:'flex',
                  flexDirection:'column',
                  alignItems:'center',
                  justifyContent:'center',
                  backgroundColor: 'white',
                  marginTop:'20px'
                
                }}
              >
           
               
                      {/* <h2 style={{textAlign:'center'}}> Hello, {profile[0].firstName}   {profile[0].lastName} </h2> */}
                 
              
              <div className='profile-div'>
                <p className='profile-order-btn' style={{width:'150px'}} onClick={()=>navigate('/order')}> Your orders</p>
                
                <p className='address-list' onClick={()=>navigate('/adress')}>Your Addresses </p>
                <p className='profile-shopmore-btn' style={{width:'150px'}} onClick={()=>navigate('/cart')}>Your Cart</p>
                <p className='profile-shopmore-btn' style={{width:'150px'}} onClick={()=>navigate('/')}>Go to Home</p>
              </div>
               </Box>

              </div>
              {/* <div className='adress-head'>
               <PublicIcon/> Your Addresses
              </div> */}
              {/* <div className='address-class'>
              <div class="adress-card">
               Click me
              </div>

              </div> */}

    </Box>
    
    </div>
  )
}

export default Profile