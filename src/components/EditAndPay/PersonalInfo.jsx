import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  TextField,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { useQuery } from "react-query";

const fetchYojnaOptions = async () => {
  return ["Yojna 1", "Yojna 2", "Yojna 3"];
};

const PersonalInformationForm = () => {
  const { data: yojnaOptions = [] } = useQuery("yojnaOptions", fetchYojnaOptions);

  const [selected, setSelected] = useState(false);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Box sx={{ mt: 2, backgroundColor: "#ededed", borderRadius: "10px" }}>
      <Typography variant="h6" sx={{ backgroundColor: "#040659", p: 1, color: "#ffffff" }}>
        Personal Information
      </Typography>
      <div
        style={{
          padding: "20px",
        }}
      >
        {/* Grid layout for responsive cards */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
          <FormControl
  fullWidth
  error={!!errors.yojanaName}
  sx={{
    width: '90%', // Half width
    marginBottom: '16px', // Adjust as needed
    '& .MuiInputLabel-root': {
      display: 'none', // Hide the default floating label inside the Select
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ccc', // Default border color
      },
      '&:hover fieldset': {
        borderColor: '#000', // Border color on hover
      },
    },
  }}
>
  {/* Manually placing the label before the Select */}
  <Typography
    component="label"
    sx={{
      fontSize: '16px',
      color: '#000',
      marginBottom: '8px',
      display: 'block', // Make sure the label is block-level to sit above the field
    }}
  >
    Select Yojna
  </Typography>

  <Select
    {...register('yojanaName', { required: 'Please select a yojna' })}
    displayEmpty
    defaultValue=""
    sx={{
      transition: 'all 0.3s ease', // Smooth transition when state changes
      padding: '12px', // Adjust padding for better spacing
      border: '1px solid #ccc', // Default border style
      borderRadius: '4px',
      backgroundColor: '#fff',
      height: selected ? '40px' : '45px',
      '&.Mui-focused': {
        border: '1px solid #000', // Border when focused
      },
    }}
    onChange={(e) => setSelected(true)} // Update state when item is selected
  >
    <MenuItem value="">
      <em>Select Yojna</em>
    </MenuItem>
    {yojnaOptions.map((yojna, index) => (
      <MenuItem key={index} value={yojna}>
        {yojna}
      </MenuItem>
    ))}
  </Select>

  <Typography sx={{ fontSize: '12px', color: 'red', marginTop: '3px' }}>
    {errors.yojanaName?.message}
  </Typography>
</FormControl>
          </Grid>

          <Grid item xs={12} md={6} mb={3}>
            <Typography sx={{color:'rgb(110, 109, 107)', fontSize:'15px'}} >Member Fees</Typography>
            <Box
              sx={{
                width: "85%",
                height: "40px",
                border: "1px solid #ced4da",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                padding: "0 12px",
                fontSize: "14px",
                backgroundColor: "#e9ecef",
              }}
            >
              {/* Static content */}
              30.00
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} mb={2}>
            <TextField
              sx={{ "& .MuiInputBase-input": {
                    backgroundColor: "#f8f9fa",
                  },}}
              {...register("fullName", { required: "Full Name is required" })}
              label="Full Name"
              fullWidth
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              sx={{ "& .MuiInputBase-input": {
                    backgroundColor: "#f8f9fa",
                  }, }}
              {...register("guardianName", { required: "Guardian Name is required" })}
              label="Guardian Name"
              fullWidth
              error={!!errors.guardianName}
              helperText={errors.guardianName?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              sx={{ "& .MuiInputBase-input": {
                    backgroundColor: "#f8f9fa",
                  },}}
              {...register("motherName", { required: "Mother Name is required" })}
              label="Mother Name"
              fullWidth
              error={!!errors.motherName}
              helperText={errors.motherName?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} mt={1} mb={1}>
            <TextField
              sx={{ "& .MuiInputBase-input": {
                    backgroundColor: "#f8f9fa",
                  }, }}
              {...register("dateOfBirth", { required: "Date of Birth is required" })}
              type="date"
              label="Date of Birth"
              fullWidth
              InputLabelProps={{ shrink: true }}
              error={!!errors.dateOfBirth}
              helperText={errors.dateOfBirth?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth error={!!errors.gender}>
  <Select
    displayEmpty
    {...register("gender", { required: "Gender is required" })}
    sx={{
      "& .MuiInputBase-input": {
        backgroundColor: "#f8f9fa",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#ccc", // Default border color
        },
        "&:hover fieldset": {
          borderColor: "#000", // Border color on hover
        },
        "&.Mui-focused fieldset": {
          borderColor: "#000", // Border color when focused
        },
      },
    }}
    defaultValue="" // Default value as empty
  >
    {/* Placeholder inside the select */}
    <MenuItem value="" disabled>
      <em>Select Gender</em>
    </MenuItem>
    <MenuItem value="male">Male</MenuItem>
    <MenuItem value="female">Female</MenuItem>
  </Select>
  <Typography sx={{ fontSize: '12px', color: 'red', marginTop: '3px' }}>
    {errors.gender?.message}
  </Typography>
</FormControl>

          </Grid>

          <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth error={!!errors.category}>
  <Select
    displayEmpty
    {...register("category", { required: "Category is required" })}
    defaultValue="" // Placeholder as default value
    sx={{
      marginBottom:'10px',
      "& .MuiInputBase-input": {
        backgroundColor: "#f8f9fa",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#ccc", // Default border color
        },
        "&:hover fieldset": {
          borderColor: "#000", // Border color on hover
        },
       
      },
    }}
  >
    {/* Placeholder inside the select */}
    <MenuItem value="" disabled>
      <em>Select Category</em>
    </MenuItem>
    <MenuItem value="general">General</MenuItem>
    <MenuItem value="sc">SC</MenuItem>
    <MenuItem value="st">ST</MenuItem>
    <MenuItem value="obc">OBC</MenuItem>
  </Select>
  <Typography sx={{ fontSize: '12px', color: 'red', marginTop: '3px' }}>
    {errors.category?.message}
  </Typography>
</FormControl>

          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              sx={{ "& .MuiInputBase-input": {
                    backgroundColor: "#f8f9fa",
                  },}}
              {...register("mobile", { required: "Mobile no. is required" })}
              label="Mobile no."
              fullWidth
              error={!!errors.mobile}
              helperText={errors.mobile?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              sx={{ "& .MuiInputBase-input": {
                    backgroundColor: "#f8f9fa",
                  }, }}
              {...register("email", { required: "Email is required" })}
              label="Email Id"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          </Grid>

      </div>
    </Box>
  );
};

export default PersonalInformationForm;
