import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useMutation } from "react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Paper,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/auth"; // Import API calls
import bg from "../../assets/images/bg.png";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  role: yup.string().required("Role is required"),
});

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation(registerUser);

  const onSubmit = (data) => {
    mutation.mutate(data, {
      onSuccess: (response) => {
        console.log("User registered successfully:", response);
        navigate("/login");
      },
      onError: (error) => {
        console.error(
          "Error registering user:",
          error.response ? error.response.data : error.message
        );
      },
    });
  };

  // Theme and Media Queries for responsiveness
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: isMobile || isTablet ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f3f4f7",
      }}
    >
      {/* Form Section */}
      <Paper
        elevation={3}
        sx={{
          width: isMobile ? "85%" : isTablet ? "80%" : "30%",
          padding: isMobile ? "10px" : "10px",
          borderRadius: "10px",
          backgroundColor: "#fff",
          opacity: "0.95",
          marginTop: isTablet  &&  '80px'
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            backgroundColor: "#ebedf7",
            borderRadius: "5px",
            padding:'15px'
          }}
        >
          {/* Name Field */}
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ""}
                InputLabelProps={{ shrink: true }} // Fix label overlapping
              />
            )}
          />

          {/* Email Field */}
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                InputLabelProps={{ shrink: true }} // Fix label overlapping
              />
            )}
          />

          {/* Password Field */}
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
                InputLabelProps={{ shrink: true }} // Fix label overlapping
              />
            )}
          />

          {/* Role Field */}
          <Controller
            name="role"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Role"
                select
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.role}
                helperText={errors.role ? errors.role.message : ""}
                InputLabelProps={{ shrink: true }} // Fix label overlapping
              >
                {["supervisor"].map((role) => (
                  <MenuItem key={role} value={role}>
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={mutation.isLoading}
            sx={{ marginTop: "16px", backgroundColor: "#040659" }}
          >
            {mutation.isLoading ? <CircularProgress size={24} /> : "Register"}
          </Button>
        </form>
      </Paper>

      {/* Image Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: isMobile || isTablet ? "100%" : "50%",
          mt: isMobile || isTablet ? 2 : 0, // Margin on top for mobile and tablet view
        }}
      >
        <img
          src={bg}
          alt="bg"
          style={{
            width: isMobile || isTablet ? "90%" : "100%",
            height: isMobile || isTablet ? "auto" : "100vh",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default RegisterForm;
