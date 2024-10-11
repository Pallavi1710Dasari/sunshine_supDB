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
} from "@mui/material";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth";
import bg from "../../assets/images/bg.png";
import { CgProfile } from "react-icons/cg";
import { FaEye } from "react-icons/fa";

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

  return (
    <Box sx={{ height: "100vh", width: "100wv", display: "flex" }}>
      <Paper
        elevation={3}
        sx={{
          width: "30%",
          height: "50%",
          margin: "auto",
          borderRadius: "5px",
          pt: 1,
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
      <img src={bg} alt="bg" style={{ height: "100%", width: "50%" }} />
    </Box>
  );
};

export default LoginForm;
