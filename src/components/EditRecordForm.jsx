import React from "react";
import { TextField, Button, Paper, Typography, Box, Grid } from "@mui/material";

const EditRecordForm = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", textAlign: { xs: "center", sm: "left" } }}>
        Edit Record
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "auto",
          padding: '10px',
        }}
      >
        <Paper
          elevation={1}
          sx={{
            padding: "20px",
            width: { xs: "100%", sm: "90%", md: "70%", lg: "50%" },
            backgroundColor: "#fff",
          }}
        >
          <Box
            sx={{
              padding: "10px",
              backgroundColor: "#e0e0e0",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Edit Record
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
            {/* Password Field */}
            <Grid item xs={12} sm={4}>
              <Typography>Password</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                defaultValue="337868"
              />
            </Grid>

            {/* Pradhan Name Field */}
            <Grid item xs={12} sm={4}>
              <Typography>Pradhan Name</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                label="Pradhan Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>

            {/* Sanstha Name Field */}
            <Grid item xs={12} sm={4}>
              <Typography>Sanstha Name</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                label="Sanstha Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
          </Grid>

          {/* Update Button */}
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{
              marginTop: "20px",
              fontWeight: "bold",
              backgroundColor: "#4caf50",
            }}
          >
            Update changes
          </Button>
        </Paper>
      </Box>
    </>
  );
};

export default EditRecordForm;
