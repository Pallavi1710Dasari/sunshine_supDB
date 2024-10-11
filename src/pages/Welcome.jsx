import React,  { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import { IoMdNotifications } from "react-icons/io";
import './welcome.css'

export const Welcome = () => {
  const [showNotification, setShowNotification] = useState(true);

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: 'auto', 
        backgroundColor: '#fff',
        width:'100%',
      }}
    >
      {/* Sidebar */}
      <Box 
        sx={{ 
          width: { xs: '100%', sm: '250px', md:'20%' }, 
          backgroundColor: '#fff', 
          //borderRight: { xs: 'none', sm: '1px solid #ccc' } 
        }}
      >
        <Sidebar />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          //flexGrow: 1,
          margin: { xs: '10px', sm: '20px' }, 
          boxShadow: 1,
          borderRadius: '10px',
          padding: '5px',
          backgroundColor: '#fff',
          height:'100%',
          width: showNotification ? { md: '73%' } : { md: '80%' },
        }}
      >
        <Box
          sx={{
            backgroundColor: '#f0f0f0',
            //flexGrow: 1,
            borderRadius: '10px',
            padding: { xs: '15px', sm: '25px' }, 
            height: 'auto',
          }}
        >
          <MainContent showNotification={showNotification} toggleNotification={toggleNotification} />
        </Box>
      </Box>
      {/* Main Content */}

      {showNotification && <Box
        sx={{
          backgroundColor: '#fff',
         // flexGrow: 1,
          borderRadius: '10px',
          // padding: { xs: '15px', sm: '15px' },
          paddingTop:'35px', 
          height: 'auto',
          width:{md:'4%'}
        }}
      >
        <IoMdNotifications className='notification-icon' />
      </Box>
    }
    </Box>
  );
};
