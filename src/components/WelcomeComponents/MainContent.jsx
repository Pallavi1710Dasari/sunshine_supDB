// MainContent.jsx
import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { IoMdHome } from "react-icons/io";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { EditProfileView } from './EditProfileView';
import { useMediaQuery } from '@mui/material';
import InfoCard from './InfoCard';

const MainContent = ({ toggleNotification, showNotification }) => {
  const [editProfileView, setEditProfileView] = useState(false);

  const isMobile = useMediaQuery('(max-width:600px)');

  const handleEditProfileClick = () => {
    setEditProfileView(!editProfileView);
  };

  // Card data for the InfoCard component
  const cardData = [
    { title: 'WALLET CR', oldValue: '13,000.00', currentValue: '0.00', color: '#616766' },
    { title: 'WALLET CR', oldValue: '5,990.00', currentValue: '0.00', color: '#5d4444' },
    { title: 'Balance', oldValue: '7,010.00', currentValue: '0.00', color: '#2d616d' },
    { title: 'TOTAL NUMBER INTERN REG.', currentValue: '0', color: '#82b7ae' },
    { title: 'TOTAL NUMBER YOJANA REG.', currentValue: '597', color: '#8F1C1C' },
    { title: 'TOTAL REG.', currentValue: '597', color: '#efec81', textColor: 'black' }
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontSize: '25px' }} variant="h4">Supervisor Dashboard</Typography>
          <Typography sx={{ fontSize: '15px', color: '#490de0' }} variant="h6">
            <IoMdHome /> Home <span style={{ color: 'rgb(110, 109, 107)' }}>/ Dashboard</span>
          </Typography>
        </Box>
        
        {!isMobile  &&  <Box sx={{
          height: '40px',
          width: '40px',
          borderRadius: '7px',
          backgroundColor: '#490de0',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }} onClick={toggleNotification}>
          {showNotification ? <FaArrowRight /> : <FaArrowLeft />}
        </Box>}
      </Box>

      <Typography sx={{ textAlign: 'center', color: '#1a7a32', fontWeight: 'bold', fontSize: '22px' }}>
        अपना वॉलेट रिचार्ज करें। धन्यवाद।
      </Typography>

      <Button onClick={handleEditProfileClick}
        variant="contained"
        sx={{ height: '35px', width: '135px', borderRadius: '7px', backgroundColor: '#490de0', color: 'white', fontSize: '10px' }}>
        Edit Profile View
      </Button>

      <Box>
        {editProfileView && <EditProfileView />}
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

      {/* Render InfoCard components dynamically from cardData */}
      <Grid container spacing={3} sx={{ mt: 2, display: 'flex', justifyContent: 'space-around' }}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <InfoCard
              title={card.title}
              oldValue={card.oldValue}
              currentValue={card.currentValue}
              color={card.color}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MainContent;
