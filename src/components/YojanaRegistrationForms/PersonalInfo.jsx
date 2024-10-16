import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  TextField,
  MenuItem,
  Typography,
  Box,
  Grid,
  FormControl,
  Select,
} from "@mui/material";

const yojnaOptions = ["Yojna 1", "Yojna 2", "Yojna 3"];

const PersonalInformationForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [selected, setSelected] = useState(false);

  return (
    <Box sx={{ mt: 2, backgroundColor: "#ededed", borderRadius: "10px" }}>
      <Typography
        variant="h6"
        sx={{ backgroundColor: "#040659", p: 1, color: "#ffffff" }}
      >
        Personal Information
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ padding: "20px" }}
      >
        {/* Yojna Selection */}
        <Grid item xs={12} md={7}>
          <FormControl
            fullWidth
            error={!!errors.yojanaName}
            sx={{
              '& .MuiInputLabel-root': {
                display: 'none',
              },
            }}
          >
            <Typography
              component="label"
              sx={{
                fontSize: '16px',
                color: '#000',
                marginBottom: '8px',
                display: 'block',
              }}
            >
              Select Yojna
            </Typography>

            <Select
              {...register('yojanaName', { required: 'Please select a yojna' })}
              displayEmpty
              defaultValue="Yojna 1"
              sx={{
                padding: '12px',
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                height:'40px',
                '&.Mui-focused': {
                  border: '1px solid #000',
                },
              }}
              onChange={(e) => setSelected(true)}
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
        </Grid>

        {/* Full Name and Guardian Name */}
        <Grid container spacing={2}  sx={{ padding: "20px" }}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}
            {...register("fullName", { required: "Full Name is required" })}
            label="Full Name"
            fullWidth
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}  md={4}>
          <TextField
            sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}
            {...register("guardianName", {
              required: "Guardian Name is required",
            })}
            label="Guardian Name"
            fullWidth
            error={!!errors.guardianName}
            helperText={errors.guardianName?.message}
          />
        </Grid>

        {/* Mother Name and Date of Birth */}
        <Grid item xs={12} sm={6}  md={4}>
          <TextField
            sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}
            {...register("motherName", { required: "Mother Name is required" })}
            label="Mother Name"
            fullWidth
            error={!!errors.motherName}
            helperText={errors.motherName?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}  md={4}>
          <TextField
            sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}
            {...register("dateOfBirth", {
              required: "Date of Birth is required",
            })}
            type="date"
            label="Date of Birth"
            fullWidth
            InputLabelProps={{ shrink: true }}
            error={!!errors.dateOfBirth}
            helperText={errors.dateOfBirth?.message}
          />
        </Grid>

        {/* Gender and Category */}
        <Grid item xs={12} sm={6}  md={4}>
          <FormControl fullWidth error={!!errors.gender}>
            <Select
              displayEmpty
              {...register("gender", { required: "Gender is required" })}
              sx={{
                "& .MuiInputBase-input": {
                  backgroundColor: "#f8f9fa",
                },
              }}
              defaultValue="male"
            >
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
        <Grid item xs={12} sm={6}  md={4}>
          <FormControl fullWidth error={!!errors.category}>
            <Select
              displayEmpty
              {...register("category", { required: "Category is required" })}
              defaultValue=""
              sx={{
                "& .MuiInputBase-input": {
                  backgroundColor: "#f8f9fa",
                },
              }}
            >
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

        {/* Mobile Number and Email */}
        <Grid item xs={12} sm={6}  md={4}>
          <TextField
            sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}
            {...register("mobile", { required: "Mobile no. is required" })}
            label="Mobile no."
            fullWidth
            error={!!errors.mobile}
            helperText={errors.mobile?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}  md={4}>
          <TextField
            sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}
            {...register("email", { required: "Email is required" })}
            label="Email Id"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalInformationForm;
