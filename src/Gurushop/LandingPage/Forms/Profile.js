import * as React from 'react';
import axios from 'axios'
import { Box } from '@mui/material'
import Nav from '../Nav/Nav'
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



/* List Items*/
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import DehazeIcon from '@mui/icons-material/Dehaze';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PeopleIcon from '@mui/icons-material/People';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import LogoutIcon from '@mui/icons-material/Logout';
import Person2Icon from '@mui/icons-material/Person2';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

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
  const[login,setLogin]=React.useState(0)
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
        axios.get(`http://localhost:9000/users/${sessionStorage.getItem("userId")}`)
        .then((res)=>{
          setProfile(res.data)
          
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


   /*functions*/
   

  /* logout*/
  function logOut(){
    sessionStorage.clear();
     if(login==0)
     {
      navigate('/login')
     }
     else{
      navigate('/')
     }
    
  
  }




/*gotoOrder*/
function gotoOrder(){
  
  if(sessionStorage.getItem("userName"))
  {
    navigate('/order')
  }
  else{
    alert("please login to see Your Order")
    navigate('/login')
  }
}

/* go to Adress*/
function gotoAddress(){
  if(sessionStorage.getItem("userName"))
  {
    navigate('/adress')
  }
  else{
    alert("please login to see Adress")
    navigate('/login')
  }
}

  return (
    <div>
       
  <Nav/>
    <Box sx={{marginTop:'20px', marginLeft:'10%', width: '70%',display:'flex',justifyContent:'flex-start',alignItems:'center',justifyContent:'space-around',flexWrap:'wrap'}}>
       <div className='profile-main-div'>

       <h3 style={{fontSize:'25px'}}>My Account</h3>





       <div className='profile-div1'>
      <div className='profile-div-head'>
      <div className='drawer-left-first-div2'>
       <Person2Icon sx={{color:'#004d99'}}/>
       </div>
       <div className='profile-div-head2'>
        <div className='profile-heading'>{profile.userfirstName}</div>
        <div className='profile-email'>{profile.userEmail}</div>
       </div>
      </div>
      <Divider/>
     <List>
        
        <ListItem disablePadding>
        <ListItemButton onClick={()=>{gotoOrder()}}>
          <ListItemIcon>
           <FilterHdrIcon  sx={{color:'#004d99'}} />
          </ListItemIcon>
          <ListItemText>
            My Orders
          </ListItemText>
        </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
        <ListItemButton onClick={()=>{gotoAddress()}}>
          <ListItemIcon>
           <FmdGoodIcon  sx={{color:'#004d99'}} />
          </ListItemIcon>
          <ListItemText>
            My Addresses
          </ListItemText>
        </ListItemButton>
        </ListItem>

       <Divider/>

         
        <h4 style={{paddingLeft:'6%'}}> Help and Support</h4>
        
        <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
           < PeopleIcon sx={{color:'#004d99'}} />
          </ListItemIcon>
          <ListItemText>
            About us
          </ListItemText>
        </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
        <ListItemButton onClick={()=>navigate('/slider1')}>
          <ListItemIcon>
           <PermPhoneMsgIcon sx={{color:'#004d99'}} />
          </ListItemIcon>
          <ListItemText>
            Contact Us
          </ListItemText>
        </ListItemButton>
        </ListItem>
        

        <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
           <LiveHelpIcon sx={{color:'#004d99'}} />
          </ListItemIcon>
          <ListItemText>
            Need Help
          </ListItemText>
        </ListItemButton>
        </ListItem>
       
       

        <ListItem disablePadding>
        <ListItemButton >
          <ListItemIcon>
           < Person2Icon sx={{color:'#004d99'}} />
          </ListItemIcon>
          <ListItemText>
          Legal Information
          </ListItemText>
        </ListItemButton>
        </ListItem> 

        <Divider/>

        <ListItem disablePadding>
        <ListItemButton onClick={logOut}>
          <ListItemIcon>
           <PowerSettingsNewIcon sx={{color:'#004d99'}} />
          </ListItemIcon>
          <ListItemText>
            Sign Out
          </ListItemText>
        </ListItemButton>
        </ListItem>


      </List>
     </div>
       </div>
   <div>
    <h3 style={{fontSize:'20px'}}>Account Information</h3>
   <div className='profile-div2'>
        <p className='profile-div2-para1'>Full Name</p>
        <p className='profile-div2-para2'>{profile.userfirstName}  {profile.userlastName}</p>

        <Divider/>
        <p className='profile-div2-para1'>EmailID</p>
        <p  className='profile-div2-para2'>{profile.userEmail}</p>
     </div>
   </div>
  
    </Box>
    
    </div>
  )
}

export default Profile