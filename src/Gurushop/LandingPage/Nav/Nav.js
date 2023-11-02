import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
/* left drawer*/
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import DehazeIcon from '@mui/icons-material/Dehaze';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PeopleIcon from '@mui/icons-material/People';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import './Nav.css'
import { useNavigate } from 'react-router-dom';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const navigate=useNavigate()
  const[cartlength,setCartength]=React.useState([])
  const[login,setLogin]=React.useState(0)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);



  React.useEffect(()=>{
    axios.get(`http://localhost:9000/cart?userId=${sessionStorage.getItem("userId")}`)
    .then((res)=>{
      setCartength(res.data)
      
    })
 
},[])
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );



  /*  left drawer*/

  const [state, setState] = React.useState({
  
    left: false,
      
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
   
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className='drawer-left-first-div'>
       <div className='drawer-left-first-div1'>
        
       <ArrowBackIosIcon sx={{color:'white',fontSize:'20px',width:'25px',height:'25px',display:'flex',justifyContent:'center'}} onClick={toggleDrawer(anchor, false)}/>
     <p style={{color:'white',fontWeight:'600'}}>Hello {sessionStorage.getItem("userFirstName")}!</p>
       </div>
       <div className='drawer-left-first-div2'>
       <Person2Icon sx={{color:'#004d99'}}/>
       </div>

      </div>
      <List>
        
        <ListItem disablePadding>
        <ListItemButton onClick={()=>{navigate('/')}}>
          <ListItemIcon>
           <HomeIcon  sx={{color:'#004d99'}} />
          </ListItemIcon>
          <ListItemText>
            Home
          </ListItemText>
        </ListItemButton>
        </ListItem>

      
        <ListItem disablePadding>
        <ListItemButton onClick={()=>navigate('shop')}>
          <ListItemIcon>
           <DehazeIcon  sx={{color:'#004d99'}} />
          </ListItemIcon>
          <ListItemText>
            Shop By Category
          </ListItemText>
        </ListItemButton>
        </ListItem>

        <Divider/>

        <h4 style={{paddingLeft:'6%'}}> Account</h4>
       

        <ListItem disablePadding>
        <ListItemButton onClick={gotoProfile}>
          <ListItemIcon>
           < Person2Icon sx={{color:'#004d99'}} />
          </ListItemIcon>
          <ListItemText>
            My Account
          </ListItemText>
        </ListItemButton>
        </ListItem>


        
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
            FAQs/Need Help
          </ListItemText>
        </ListItemButton>
        </ListItem>
       <Divider/>
        
        <ListItem disablePadding>
        <ListItemButton onClick={logOut}>
          <ListItemIcon>
           <LogoutIcon sx={{color:'#004d99'}} />
          </ListItemIcon>
          <ListItemText>
            Sign Out
          </ListItemText>
        </ListItemButton>
        </ListItem>


      </List>
    </Box>
  );




  /* login*/
  function navtoLogin(){
    navigate('/login')
  }



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


  /* go to profile*/
  function gotoProfile(){
    if(sessionStorage.getItem("userName")){
      navigate('/profile')
    }
    else{
      alert('please login first')
      navigate('/login')
    }
}
/* go to cart*/

function gotoCart()
{
  if(sessionStorage.getItem("userName"))
  {
    navigate('/cart')
  }
  else{
    alert("please login to see cart")
    navigate('/login')
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
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:'#0059b3'}}>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ ml: '90px' }}
            className='menu-icon'
          >
   {['left'].map((anchor) => (
  <React.Fragment key={anchor}>
    <span onClick={toggleDrawer(anchor, true)}> <MenuIcon /></span>
    <SwipeableDrawer
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
      onOpen={toggleDrawer(anchor, true)}
    >
      {list(anchor)}
    </SwipeableDrawer>
  </React.Fragment>
))}
           
          </IconButton>
          <Typography
          onClick={()=>{navigate('/')}}
          className='mymart-logo'
            variant="h6"
            noWrap
            component="div"
            sx={{ml:'20px', display: { xs: 'none', sm: 'block' } }}
          >
           MyMart
          </Typography>
       
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'flex' ,marginRight:'250px'},flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

          <Search className='search-in-navbar' sx={{backgroundColor:'white',color:'black',borderRadius:'10px',outline:'none',width:'200px'}}>
            <SearchIconWrapper>
              <SearchIcon fontSize='15px'  sx={{color:'grey'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" className='shopping-icon-btn' onClick={gotoCart}>
              <Badge badgeContent={cartlength.length} color="error">
                <ShoppingCartIcon  />
              </Badge>
            </IconButton>
        
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
            
              className='person-icon-btn'
              color="inherit"
              sx={{display:{xs:'none',md:'flex'}}}
            >
              <Person2Icon  />
              <span className={(sessionStorage.getItem("userName"))?'sign-in2':'sign-in1'} onClick={navtoLogin}>Sign In</span>
             <span style={{fontSize:'20px'}}>     {sessionStorage.getItem("userFirstName")}</span>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>


</>
  );
}