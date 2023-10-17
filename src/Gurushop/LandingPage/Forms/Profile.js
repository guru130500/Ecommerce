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
        const url=`http://localhost:9000/users`;
        axios.get(url)
        .then((response)=>{
             setUser(response.data)
           
        })
      },[])
    React.useEffect(()=>{
      axios.get(`http://localhost:9000/profile/1`)
      .then((res)=>{
        setProfile(res.data)
      })
    })
   function updateData(){
  
       const data={...formData}
       data["userId"]=sessionStorage.getItem("userId")
      // console.log(data)
        axios.post(`http://localhost:9000/profile`, data)
        .then((response)=>{
          console.log(response)
        })
        .catch((err)=>{
          alert(err)
        })

      console.log(profile)
     
   }
  return (
    <div>
          <Navbar/>

    <Box sx={{ bgcolor: 'background.paper', width: '100%',marginTop:'100px' }}>
      <AppBar position="static" sx={{bgcolor:'#00cccc'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="My account" {...a11yProps(0)} />
          <Tab label="Edit Profile" {...a11yProps(1)} />
       
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'30px',width:'100%',margin:'0 auto'}}>

          <Box
                sx={{
                  width: 300,
                  height: 300,
                  border:'1px solid grey',
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                <img src='https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg' alt='profile-image' height='100%' width='100%'></img>
            </Box>
          
          
              <Box
                sx={{
                  width: '50%',
                  height: 'auto',
                  display:'flex',
                  flexDirection:'column',
                  alignItems:'center',
                  justifyContent:'center',
                  backgroundColor: 'white',
                 border:'2px solid grey'
                }}
              >
              <h2 style={{textAlign:'center'}}> Hello, {profile.firstName}   {profile.lastName} </h2>
              <div className='profile-div'>
                <p className='profile-order-btn' style={{width:'150px'}}> Your orders</p>
                <p className='profile-shopmore-btn' style={{width:'150px'}}>Shop More</p>
              </div>
               </Box>

              </div>


        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
   

               <Box sx={{width:500,height:'auto',padding:'20px'}}>
               <form method='post' onSubmit={(e)=>{
               e.preventDefault();
               updateData()
              }}>
                  <p className='form-heading'>UPDATE DATA</p>
                 <label className='lable1'>
                   First Name <span style={{color:'red'}}>*</span>
                 </label>
                 <br></br>
                 <input className='input-name-profile' name='firstName' type='text' placeholder='Enter First Name' onChange={handleformchange} required ></input>
                 <br></br>
                 <label className='last-name-lable'>Last Name</label>
                 <br></br>
             
                 <input className='input-last-name' name='lastName'  type='text' placeholder='Enter last name' onChange={handleformchange}></input>
                 <br></br>
                 <label className='lable1' >Email</label>
                 <br></br>
                 <input className='input-email-profile' name='email' type='email' placeholder='Enter Email Adress' onChange={handleformchange}></input>
                 <br></br>
                 <label className='lable2'>Country  <span style={{color:'red'}}>*</span></label>
                 <br></br>
             
                 <input type='text' className='input-last-name' name='country' placeholder='Enter your Country' onChange={handleformchange}></input>
                 <br></br>
                 <label className='lable1'>State</label>
                 <br></br>


                 <input type='text' className='input-last-name' name='state' placeholder='Enter your State' onChange={handleformchange}></input>
                 <br></br>

                 <label className='lable1'>city</label>
                 <br></br>
                 <input type='text' className='input-last-name' name='city' placeholder='Enter your city'onChange={handleformchange}></input>
                 <br></br>

                 <label className='lable1'>pinCode</label>
                 <br></br>
                 <input type='text'  className='input-last-name' name='pinCode' placeholder='Enter your Pincode' onChange={handleformchange}></input>
                 <br></br>


                 <input className='input3' type='submit' name='submit' value={'Update'} ></input>

                
               </form>

               </Box>


        </TabPanel>
      
      </SwipeableViews>
    </Box>
    
    </div>
  )
}

export default Profile