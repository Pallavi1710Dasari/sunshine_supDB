import React, { useRef, useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Popover, Drawer, Divider, Typography, Box, IconButton, Button } from '@mui/material';
import { FaLongArrowAltRight, FaCamera } from "react-icons/fa";
import AssignmentIcon from '@mui/icons-material/Assignment';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { IoMdHome } from "react-icons/io";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Sidebar = () => {
  const navigate=useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showButtons, setShowButtons] = useState(false);
  const fileInputRef = useRef(null);

  // Detect mobile and tablet views
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:960px)');

  const handleCameraClick = () => {
    fileInputRef.current.click(); // Trigger file input click
  };

  const handleItemClick = () => {
    setShowButtons(!showButtons);
  };

  const handleLogout = async () => {
    try {
      // Send request to logout API
      const token = localStorage.getItem("token"); // Assuming token is stored in localStorage

      await axios.post("/api/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Clear the token from localStorage or cookies
      localStorage.removeItem("token");

      // Redirect to login page
      navigate("/login");
      console.log("login button clicked")

    } catch (error) {
      console.error("Logout failed", error);
      // Optionally display an error message to the user
    }
  };

  const handleDashboard=()=>{
    navigate('/welcome')
  }

  const handleRegistrationFormClick=()=>{
    navigate("/yojanaRegister")
  }

  const handleListForm=()=>{
    navigate("/listpage")
  }

  

  const open = Boolean(anchorEl);
  const id = open ? 'assignment-popover' : undefined;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isMobile || isTablet ? '70px' : '250px', // Adjust width for mobile/tablet
        flexShrink: 0,
      }}
    >
      <Box 
        p={1} 
        sx={{ 
          display: 'flex', 
          flexDirection: isMobile || isTablet ? 'column' : 'row',
          justifyContent: 'center', 
          alignItems: 'center', 
          mt: isMobile ? 2 : 4
        }}
      >
        {/* Image upload section with avatar and camera icon */}
        <Box 
          position="relative"
          sx={{
            width: isMobile ? '50px' : '60px',
            height: isMobile ? '50px' : '60px',
            borderRadius: '50%',
            backgroundColor: '#e0e0e0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight:'5px',
            mb: isMobile || isTablet ? 2 : 3,
          }}
        >
          {/* Avatar image placeholder */}
          <Typography variant="h6" sx={{ fontSize: isMobile ? '12px' : '16px', color: '#fff' }}>
            CT
          </Typography>
          <IconButton
            color="primary"
            sx={{
              position: 'absolute',
              bottom: isMobile ? '-8px' : '-10px',
              right: isMobile ? '-8px' : '-10px',
              width: isMobile ? '24px' : '32px',
              height: isMobile ? '24px' : '32px',
              bgcolor: 'white',
              border: '1px solid #e0e0e0',
              '&:hover': { bgcolor: 'gray.200' },
            }}
            onClick={handleCameraClick}
          >
            <FaCamera size={isMobile ? '12px' : '16px'} />
          </IconButton>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }} // Hide the file input
            ref={fileInputRef}
            onChange={(e) => console.log(e.target.files[0])} // Handle file selection
          />
        </Box>
        {/* User Info - Hide on mobile */}
        {!isMobile && !isTablet && (
          <Box sx={{}}>
            <Typography sx={{ fontSize: '12px' }} variant="h6">Register ID: i726469</Typography>
            <Typography sx={{ fontSize: '10px' }} variant="subtitle1">Name: CHANDRAPRABHA THAKRE</Typography>
            <Typography sx={{ fontSize: '10px' }} variant="subtitle2">User Type: Supervisor</Typography>
            <Typography sx={{ fontSize: '10px' }} variant="subtitle2">BLOCK INCHARGE</Typography>
          </Box>
        )}
      </Box>
      <Divider />
      <List>
        <ListItem  button onClick={handleDashboard} sx={{ color: '#490de0', paddingLeft: '15px', paddingTop: '15px', cursor:'pointer' }}>
          <ListItemIcon sx={{ color: '#490de0', fontSize: '20px', minWidth: '30px' }}>
            <IoMdHome />
          </ListItemIcon>
          {/* Only show text if not mobile or tablet */}
          {!isMobile && !isTablet && <ListItemText primary="Dashboard" />}
        </ListItem>

        <Box>
          <ListItem button onClick={handleItemClick}>
            <ListItemIcon sx={{ color: '#000', fontSize: '20px', minWidth: '30px', '&:hover': { color: '#490de0' }  }}>
              <AssignmentIcon />
            </ListItemIcon>
            {!isMobile && !isTablet && (
              <Button sx={{ color: '#000', '&:hover': { color: '#490de0' } }}>
                Yojana Registration
              </Button>
            )}
            {!isMobile && !isTablet && (showButtons ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />)}
          </ListItem>

          {/* Show buttons only in non-mobile and non-tablet views */}
          {showButtons && (
            <Box sx={{ marginTop: '6px', display: 'flex', flexDirection: 'column' }}>
              <Button onClick={handleRegistrationFormClick} sx={{ color: 'rgb(110, 109, 107)', paddingLeft: '30px', fontSize: '13px', gap: '10px', '&:hover': { color: '#490de0' }  }}>
                <FaLongArrowAltRight /> Registration Form
              </Button>
              <Button  onClick={handleListForm} sx={{ color: 'rgb(110, 109, 107)', paddingLeft: '10px', fontSize: '13px', gap: '10px', '&:hover': { color: '#490de0' }  }}>
                <FaLongArrowAltRight /> Yojana Reg. List
              </Button>
            </Box>
          )}
        </Box>

        <ListItem button onClick={handleLogout}>
          <ListItemIcon sx={{ color: '#000', fontSize: '20px', minWidth: '30px', '&:hover': { color: '#490de0' }  }}>
            <PowerSettingsNewIcon />
          </ListItemIcon>
          {!isMobile && !isTablet && (
            <Button  sx={{ color: '#000', '&:hover': { color: '#490de0' } }}>
              Log-Out
            </Button>
          )}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
