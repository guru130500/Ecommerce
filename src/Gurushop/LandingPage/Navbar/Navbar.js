import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
/*    Dashboard*/


import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';




import './Navbar.css'
import KeyboardArrowDownOutlined from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Link, useNavigate } from 'react-router-dom';
import Landing1 from '../Landing1';
import Shop from '../Shop/Shop';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];


// Dashboar part




//......................................




function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

let navigate= useNavigate();
    
const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    navigate('/shop')
  
  };






  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 ,display:{sm:'block',xs:'block'}}}>
       <div className='search-div'><input type='text' placeholder='Search for products' className='search-input'></input> <Button sx={{color:'grey'}}><SearchOutlinedIcon/></Button></div>
      </Typography>
      {/* <div className='nav-header-mobileview'>
            <p className='menuAndCategories'>MENU</p>
            <p className='menuAndCategories'>CATEGORIES</p>
      </div> */}
      <Divider />
      <List sx={{display:'flex',flexDirection:'column'}}>
        <Button className='navbtns' sx={{color:'black'}}>HOME</Button>
        <Button className='navbtns' sx={{color:'black'}} onClick={()=>navigate('/shop')} >SHOP</Button>
            
         <Button
         className='navbtns'
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        
        sx={{color:'black'}}
      >
        Dashboard
        <span className='dashboard-span'><KeyboardArrowDownOutlined  sx={{fontSize:'19px'}}/></span>
      </Button>
      {/* <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
       <MenuItem onClick={handleClose}>Jeans</MenuItem>
        <MenuItem onClick={handleClose}>T-shirts</MenuItem>
        <MenuItem onClick={handleClose}>Electronics</MenuItem>
        <MenuItem onClick={handleClose}>Jewelery</MenuItem>
      </Menu> */}
            <Button className='navbtns' sx={{color:'black'}}>ABOUT US</Button>
            <Button className='navbtns' sx={{color:'black'}}>CONTACT US</Button>
            
            <Button className='navbtns2' sx={{color:'black',m:'2px'}}><PersonOutlinedIcon/></Button>
            <Button className='navbtns2' sx={{color:'black',m:'2px'}}><ShoppingCartOutlinedIcon/></Button>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;



  return (
    <Box>
      <CssBaseline />
      <AppBar component="nav" >
        <Toolbar className='navitems' >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' },ml:'180px',fontSize:'40px' }}
         className='navbar-typography' >
           
            <img className='logo-image' onClick={()=>navigate('/')} src='https://lootlere.com/wp-content/uploads/2023/02/Lootlere-Logo-04-1.png' height='80px' width='200px'></img>
            {/* <Button className='nav-shopping-cart' sx={{color:'black',display:{xs:'block',sm:'none'}}}><ShoppingCartOutlinedIcon/></Button> */}

          </Typography>
          <Box className='navlist1' sx={{ display: { xs: 'none', sm: 'block' },ml:'40px', }}>
                 <Button className='navbtns' sx={{color:'black'}} onClick={()=>navigate('/')} >HOME</Button>
                <Button className='navbtns' sx={{color:'black'}} onClick={()=>navigate('/shop')}  >SHOP</Button>
            {/* <Button className='navbtns' sx={{color:'black'}}> */}

         <Button
         className='navbtns'
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
       
        sx={{color:'black'}}
      >
        Dashboard
        <span className='dashboard-span'><KeyboardArrowDownOutlined  sx={{fontSize:'19px'}}/></span>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Mens</MenuItem>
        <MenuItem onClick={handleClose}>Womens</MenuItem>
        <MenuItem onClick={handleClose}>Electronics</MenuItem>
        <MenuItem onClick={handleClose}>Jewelery</MenuItem>
      </Menu>
            {/* </Button> */}
            <Button className='navbtns' sx={{color:'black'} } onClick={()=>navigate('/card')}>ABOUT US</Button>
            <Button className='navbtns' sx={{color:'black'}}>CONTACT US</Button>
          </Box>

          <Box className='navlist2' sx={{display:{xs:'none',sm:'block'}}}>
              <Button className='navbtns2' sx={{color:'black',m:'2px'}}><SearchOutlinedIcon/></Button>
              <Button className='navbtns2' sx={{color:'black',m:'2px'}}onClick={()=>navigate('/login')} ><PersonOutlinedIcon/></Button>
              <Button className='navbtns2' sx={{color:'black',m:'2px'}}><ShoppingCartOutlinedIcon/></Button>
          </Box>
         </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;