import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useQuery, useMutation } from "react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  TextField,
  Button,
  MenuItem,
  CircularProgress,
  Box,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/auth"; // Import API calls
import bg from "../../assets/images/bg.png";
import { CgProfile } from "react-icons/cg";
import { FaEye } from "react-icons/fa";

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

  return (
    <Box sx={{ height: "100vh", width: "100wv", display: "flex" }}>
      <Paper
        elevation={3}
        sx={{
          width: "30%",
          height: "60%",
          margin: "auto",
          borderRadius: "5px",
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            width: "92%",
            height: "92%",
            margin: "auto",
            backgroundColor: "#ebedf7",
            padding: "10px",
            borderRadius: "5px",
            marginTop: "5px",
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
            sx={{ backgroundColor: "#040659" }}
          >
            Register
          </Button>
        </form>
      </Paper>
      <img src={bg} alt="bg" style={{ height: "100%", width: "50%" }} />
    </Box>
  );
};

export default RegisterForm;
