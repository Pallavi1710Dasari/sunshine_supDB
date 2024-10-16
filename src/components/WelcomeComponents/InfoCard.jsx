// InfoCard.jsx
import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Box } from '@mui/material';

const InfoCard = ({ title, oldValue, currentValue, color }) => {
  return (
    <Paper elevation={3} sx={{ 
        p: 2, 
        backgroundColor: color, 
        color: '#fff', 
        width: '90%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
    }}>
      {/* List-like structure */}
      <List sx={{ width: '100%', maxWidth: 360, }}>
        {oldValue && (
          <ListItem>
            <ListItemText
              primary={`OLD ${title}`}
              secondary={oldValue}
              sx={{ color: '#8f8f8f', textAlign:'center'  }}
            />
          </ListItem>
        )}
        <ListItem>
          <ListItemText
            primary={title}
            sx={{ color: '#fff', fontSize: '16px', textAlign: 'center' }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={currentValue}
            sx={{ color: '#fff', fontSize: '22px', textAlign: 'center' }}
            primaryTypographyProps={{ variant: 'h5', component: 'div' }}
          />
        </ListItem>
      </List>
    </Paper>
  );
};

export default InfoCard;
