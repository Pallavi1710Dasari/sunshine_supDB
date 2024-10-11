// MainContent.jsx
import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { IoMdHome } from "react-icons/io";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { EditProfileView } from './EditProfileView';

const MainContent = ({toggleNotification, showNotification}) => {
  console.log(showNotification);
  const [editProfileView, setEditProfileView]=useState(false);

  const handleEditProfileClick = () => {
    setEditProfileView(!editProfileView);
  };


  return (
    <Box>
      <Box  sx={{display:'flex', flexDirection:'row', justifyContent:'space-between',}}>
          <Box sx={{display:'flex', flexDirection:'column',}}>
            <Typography sx={{fontSize:'25px',}} variant="h4">Supervisor Dashboard</Typography>
            <Typography sx={{fontSize:'15px', color:'#490de0', }}  variant="h6"><IoMdHome /> Home <span style={{ color:'rgb(110, 109, 107)', }}>/ Dashboard</span></Typography>
          </Box>
          <Box sx={{height:'40px', width:'40px', borderRadius:'7px', backgroundColor:'#490de0', color:'white', display:'flex', justifyContent:'center', alignItems:'center',}} onClick={toggleNotification}>
            {showNotification? <FaArrowRight /> : <FaArrowLeft />}
          </Box>
      </Box>

      <Typography sx={{textAlign:'center', color:'#1a7a32', fontWeight:'bold', fontSize:'22px',}}>अपना वॉलेट रिचार्ज करें। धन्यवाद। </Typography>

      <Button onClick={handleEditProfileClick}  variant="contained" sx={{ height:'35px', width:'135px', borderRadius:'7px', backgroundColor:'#490de0', color:'white', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'10px', }}>Edit Profile View</Button>

      <Box>
       {editProfileView ? <EditProfileView/> : null}
      </Box>
      
      <Box sx={{ display:'flex', flexDirection:'row',}} mt={2.5}>
          <Grid item xs={12} sm={6} md={3} mr={2}>
            <Paper elevation={1} sx={{ p: 2, backgroundColor:'#f0eded', height:'auto', width:'180px', }} >
              <Typography variant="h5">0.00</Typography>
              <Typography>Commission (Rs.)</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}  mr={2}>
            <Paper elevation={1} sx={{ p: 2, backgroundColor:'#f0eded', height:'auto', width:'180px', }}>
              <Typography variant="h5">0.00</Typography>
              <Typography>Earning Commission (Rs.)</Typography>
            </Paper>
          </Grid>
        </Box>

      <Grid container spacing={3} sx={{ mt: 2, display:'flex', justifyContent:'space-around',  }} >
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2, display:'flex', flexDirection:'column', alignItems:'center', backgroundColor: '#616766', color: '#fff',  height:'120px', width:'250px',}}>
            <Typography sx={{color:'#8f8f8f', fontSize:'13px',}}>OLD WALLET CR</Typography>
            <Typography sx={{color:'#8f8f8f', fontSize:'13px',}}>13,000.00</Typography>
            <Typography  sx={{color:'#fff', fontSize:'16px',}} >WALLET CR</Typography>
            <Typography  sx={{color:'#fff', }} variant="h5">0.00</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ p: 2, display:'flex', flexDirection:'column', alignItems:'center', backgroundColor: '#5d4444', color: '#fff',  height:'120px', width:'250px',}}>
            <Typography sx={{color:'#8f8f8f', fontSize:'13px',}}>OLD WALLET CR</Typography>
            <Typography sx={{color:'#8f8f8f', fontSize:'13px',}}>5,990.00</Typography>
            <Typography sx={{color:'#fff', fontSize:'16px',}} >WALLET CR</Typography>
            <Typography sx={{color:'#fff', }} variant="h5">0.00</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2,  display:'flex', flexDirection:'column', alignItems:'center', backgroundColor: '#2d616d', color: '#fff',  height:'120px', width:'250px', }}>
          <Typography sx={{color:'#8f8f8f', fontSize:'13px',}}>Balance</Typography>
            <Typography sx={{color:'#8f8f8f', fontSize:'13px',}}>7,010.00</Typography>
            <Typography sx={{color:'#fff', fontSize:'18px',}} >Balance</Typography>
            <Typography sx={{color:'#fff', }} variant="h5">0.00</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2,  display:'flex', flexDirection:'column', alignItems:'center', backgroundColor: '#82b7ae', color: '#fff',  height:'100px', width:'250px', }}>
            <Typography sx={{color:'#fff', fontSize:'16px',}}>TOTAL NUMBER INTERN REG.</Typography>
            <Typography sx={{color:'#fff'}} variant="h5">0</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2,  display:'flex', flexDirection:'column', alignItems:'center', backgroundColor: '#8F1C1C', color: '#fff',  height:'100px', width:'250px', }}>
            <Typography sx={{color:'#fff', fontSize:'16px',}}>TOTAL NUMBER YOJANA REG.</Typography>
            <Typography sx={{color:'#fff', }} variant="h5">597</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2,  display:'flex', flexDirection:'column', alignItems:'center', backgroundColor: '#efec81', color: '#fff',  height:'100px', width:'250px', }}>
            <Typography sx={{color:'black', fontSize:'16px',}}>TOTAL REG.</Typography>
            <Typography sx={{color:'black', }} variant="h5">597</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
