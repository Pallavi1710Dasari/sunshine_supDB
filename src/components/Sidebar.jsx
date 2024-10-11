// Sidebar.js
import React, { useRef, useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Divider, Typography, Box,  IconButton, Button } from '@mui/material';
import { FaLongArrowAltRight } from "react-icons/fa";
import AssignmentIcon from '@mui/icons-material/Assignment';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { IoMdHome } from "react-icons/io";
import { FaCamera } from 'react-icons/fa';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";


const Sidebar = () => {
  const [showButtons, setShowButtons] = useState(false);

  const fileInputRef = useRef(null); 

  // Function to trigger file input click
  const handleCameraClick = () => {
    fileInputRef.current.click(); // Simulate click on the hidden file input
  };

    const handleItemClick = () => {
      setShowButtons(!showButtons);
    };

   const handleLogout=()=>{
    console.log("logoutClicked");
   } 

  return (
    <Drawer
      variant="permanent"
    >
      <Box  p={1} sx={{display:'flex', justifyContent:'center' }} >
        
        {/* Image upload section with avatar and camera icon */}
        <Box mt={0} pl={4} ml={1} mr={2} mb={3} position="relative">
          <IconButton
            color="primary"
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              bgcolor: 'white',
              border: '1px solid #e0e0e0',
              '&:hover': { bgcolor: 'gray.200' },
            }}
            onClick={handleCameraClick} // Trigger file input click on icon click
          >
            <FaCamera />
          </IconButton>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }} // Hide the file input
            ref={fileInputRef}
            onChange={(e) => console.log(e.target.files[0])} // Handle file selection
          />
        </Box>
        <Box>
          <Typography sx={{fontSize:'12px'}} variant="h6">Register ID: i726469</Typography>
          <Typography sx={{fontSize:'10px'}} variant="subtitle1">Name: CHANDRAPRABHA THAKRE</Typography>
          <Typography sx={{fontSize:'10px'}} variant="subtitle2">User Type: Supervisor</Typography>
          <Typography sx={{fontSize:'10px'}} variant="subtitle2">BLOCK INCHARGE</Typography>
        </Box>
        
      </Box>
      <Divider />
      <List>
      <ListItem button sx={{color:'#490de0', paddingLeft: '15px', paddingTop:'15px'}}>
        <ListItemIcon sx={{color:'#490de0', fontSize:'20px', minWidth: '30px'}}><IoMdHome /></ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      <Box>
      <ListItem 
        button 
        onClick={handleItemClick} 
      >
        <ListItemIcon  sx={{color:'#000', fontSize:'20px', minWidth: '30px',  '&:hover': { color: '#490de0' },}}>
          <AssignmentIcon />
        </ListItemIcon>
        <Button sx={{ 
          '&:hover': { color: '#490de0' }, // Hover effect
          color: '#000', 
          //padding: '10px',
          borderRadius: '8px',
        }} > Yojana Registration</Button>
         {showButtons ? <MdKeyboardArrowDown />  : <MdKeyboardArrowRight/>}
      </ListItem>

      {/* Show buttons when clicked */}
      {showButtons && (
        <Box sx={{ marginTop: '6px', display: 'flex', flexDirection: 'column' }}>
        <Button sx={{ 
          '&:hover': { color: '#490de0' }, // Hover effect
          color: 'rgb(110, 109, 107)', 
          borderRadius: '8px',
          justifyContent: 'flex-start',
          fontSize:'13px', // Aligns content to the left
          gap: '10px' ,
          paddingLeft:'30px',  
        }}>
          <FaLongArrowAltRight />  Registration Form
        </Button>
      
        <Button sx={{ 
          '&:hover': { color: '#490de0' }, // Hover effect
          color: 'rgb(110, 109, 107)', 
          borderRadius: '8px',
          justifyContent: 'flex-start', // Aligns content to the left
          gap: '10px',
          fontSize:'13px', // Aligns content to the left
          gap: '10px' ,
          paddingLeft:'30px',  // Adds gap between the icon and text
        }}>
         <FaLongArrowAltRight />  Yogana Reg. List
        </Button>
      </Box>      
      )}
    </Box>

    <ListItem 
        button 
        onClick={handleLogout} 
      >
        <ListItemIcon  sx={{color:'#000', fontSize:'20px', minWidth: '30px',  '&:hover': { color: '#490de0' },}}>
        <PowerSettingsNewIcon />
        </ListItemIcon>
        <Button sx={{ 
          '&:hover': { color: '#490de0' }, // Hover effect
          color: '#000', 
          //padding: '10px',
          borderRadius: '8px',
        }} > Log-Out</Button>
      </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
