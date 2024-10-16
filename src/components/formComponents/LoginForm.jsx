import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  TextField,
  Button,
  CircularProgress,
  Alert,
  Box,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth";
import bg from "../../assets/images/bg.png";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const [serverError, setServerError] = React.useState(null);

  const mutation = useMutation(loginUser, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      navigate("/");
    },
    onError: (error) => {
      if (error.response && error.response.status === 400) {
        setError("email", { type: "manual", message: "Invalid credentials" });
        setError("password", {
          type: "manual",
          message: "Invalid credentials",
        });
      } else {
        setServerError("Something went wrong. Please try again.");
      }
    },
  });

  const onSubmit = async (data) => {
    setServerError(null);
    mutation.mutate(data);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{backgroundColor: "#f3f4f7",}}>
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: isMobile || isTablet ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        
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
          zIndex: 2,
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            backgroundColor: "#ebedf7",
            borderRadius: "5px",
            padding:'15px',
          }}
        >
          {/* Display server error if any */}
          {serverError && <Alert severity="error">{serverError}</Alert>}
          {mutation.isError && (
            <Alert severity="error">{mutation.error.message}</Alert>
          )}

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
                InputLabelProps={{ shrink: true }} // Fix label overlapping issue
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
                InputLabelProps={{ shrink: true }} // Fix label overlapping issue
              />
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
            {mutation.isLoading ? <CircularProgress size={24} /> : "Login"}
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
          alt="Login Illustration"
          style={{
            width: isMobile || isTablet ? "90%" : "100%",
            height: isMobile || isTablet ? "auto" : "100vh",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
    {/* Footer Section */}
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        mt: 2, // Adds some space above the footer
        color: "red", // Text color red
        fontSize: "0.875rem", // Adjust font size if needed
      }}
    >
      @Copyright 2024 Suryoday Foundation. All Rights Reserved
    </Box>
    </Box>
  );
};

export default LoginForm;
