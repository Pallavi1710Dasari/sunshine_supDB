import React from 'react';
import { Grid, Paper, Typography, Box, Button, Avatar, IconButton, Divider } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

export const EditProfileView = () => {
  return (
    <Box p={2}>
      <Grid container spacing={2} >
        {/* Profile Card */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', backgroundColor:'#ededede0' }}>
            <Avatar style={{ width: '100px', height: '100px', margin: '0 auto' }}>
              {/* Profile Picture */}
              <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
              </IconButton>
            </Avatar>
            <Typography variant="h6" gutterBottom>CHANDRPRABHA THAKRE</Typography>
            <Typography variant="body2">Register id:</Typography>
            <Typography variant="body2"> i726469</Typography>
            <Typography variant="body2">Mobile Number: </Typography>
            <Typography variant="body2">9644280625</Typography>
            <Typography variant="body2">Email: </Typography>
            <Typography variant="body2">vidhyathakre60@gmail.com</Typography>
            {/* <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>Edit Profile View</Button> */}
          </Paper>
        </Grid>

        {/* Personal Info */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '25px',  backgroundColor:'#ededede0' }}>
            <Typography variant="h6" gutterBottom>Personal Info</Typography>
            <Typography sx={{padding:'5px'}} variant="body2">Name: </Typography>
            <Typography sx={{padding:'5px'}} variant="body2">CHANDRPRABHA THAKRE </Typography>
            <Divider />
            <Typography  sx={{padding:'5px'}} variant="body2">Father Name: </Typography>
            <Typography  sx={{padding:'5px'}} variant="body2">SANTOSH THAKRE </Typography>
            <Divider />
            <Typography  sx={{padding:'5px'}} variant="body2">Mother Name: </Typography>
            <Typography sx={{padding:'5px'}} variant="body2">DWARKA BAI CHOUDHRY </Typography>
            <Divider />
            <Typography sx={{padding:'5px'}} variant="body2">State: </Typography>
            <Typography sx={{padding:'5px'}} variant="body2">Madhya Pradesh </Typography>
            <Divider />
            <Typography sx={{padding:'5px'}} variant="body2">City: </Typography>
            <Typography sx={{padding:'5px'}} variant="body2">Balaghat </Typography>
          </Paper>
        </Grid>

        {/* Professional Info */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor:'#ededede0'  }}>
            <Typography variant="h6" gutterBottom>Professional Info</Typography>
            <Typography variant="body2">Mandal Name: </Typography>
            <Typography sx={{padding:'5px'}} variant="body2">MAHILA SVAASTHY SURAKSHA YOJANA </Typography>
            <Divider />
            <Typography variant="body2">Department Name: </Typography>
            <Typography sx={{padding:'5px'}} variant="body2">BLOCK INCHARGE </Typography>
            <Divider />
            <Typography variant="body2">Register id: </Typography>
            <Typography sx={{padding:'5px'}} variant="body2">i726469 </Typography>
            <Divider />
            <Typography variant="body2">Working Area: </Typography>
            <Typography sx={{padding:'5px'}} variant="body2">Madhya Pradesh </Typography>
            <Divider />
            <Typography variant="body2">Working City: </Typography>
            <Typography sx={{padding:'5px'}} variant="body2">Balaghat </Typography>
            <Divider />
            <Box sx={{display:'flex', justifyContent:'space-between'}} >
                <Button variant="contained" sx={{ marginTop: '10px', height:'35px', width:'50px', backgroundColor:'#490de0',  fontSize:'12px',  }}>Edit</Button>
                <Button variant="contained" sx={{ marginTop: '10px',height:'35px', width:'150px', backgroundColor:'#04Be5B',  fontSize:'10px',  }}>Download Application</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
 
