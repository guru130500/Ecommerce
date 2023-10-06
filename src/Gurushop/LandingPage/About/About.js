import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function SwipeableTemporaryDrawer() {

  const[user,setUser]=React.useState([])
  const[userName,setUsername]=React.useState('')
  const[pass,setPas]=React.useState('');
   React.useEffect(()=>{
     const url="http://localhost:9000/users";
     axios.get(url)
     .then((response)=>{
          setUser(response.data)
        
     })
   },[])
    let navigate=useNavigate()
  function validateUser(userInput,passInput){
      let status=false;
      user.map((e)=>{
        // console.log("ApiData : " + e.userName + " "+ e.password);
        // console.log("userData : " + userInput + " "+ passInput);

        if(e.userName===userInput&&e.password===passInput)
        {
          status=true;
          sessionStorage.setItem("userName", userInput)
          sessionStorage.setItem("userId", e.userId)
        }
      })
      if(status){
        console.log("login successful");
        navigate('/')
        
      }
      else{
        console.log("Invalid username")
      }
  }

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
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
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className='form-div'>
     <form method='post' onSubmit={(e)=>{
      e.preventDefault();
      validateUser(userName,pass);
     }}>
        <label>
          uSerId
        </label>
        <input type='text' placeholder='Enter user name' onChange={(e)=>setUsername(e.target.value)} ></input>
        <br></br>
        <label>Password</label>
        <input type='password' onChange={(e)=>setPas(e.target.value)}></input>
        <br></br>
        <input type='submit' name='submit' value={'submit'}></input>
      </form>
     </div>
    </Box>
  );

  return (
    <div>
      {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
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
    </div>
  );
}