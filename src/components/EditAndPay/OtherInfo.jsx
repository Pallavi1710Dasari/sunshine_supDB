import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  Typography,
  Box,
} from "@mui/material";
import { useQuery } from "react-query";

const fetchYojnaOptions = async () => {
  return ["Yojna 1", "Yojna 2", "Yojna 3"];
};

const OtherInfo = () => {
  const { data: yojnaOptions = [] } = useQuery("yojnaOptions", fetchYojnaOptions);
  const [selected, setSelected] = useState(false);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Box sx={{ mt: 2, backgroundColor: "#ededed", borderRadius: "10px", }}>
      <Typography variant="h6" sx={{ backgroundColor: "#040659", p: 1, color: "#ffffff" }}>
        Other Information
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          padding: { xs: "10px", sm: "15px", md: "20px" },
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" }, // Stack fields on smaller screens
        }}
      >
        {/* Post Field */}
        <Box sx={{ flex: "1 1 30%", minWidth: "250px", maxWidth: { xs: "100%", sm: "40%", md: "30%" } }}>
          <TextField
            {...register("post", { required: "Post is required" })}
            sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" }, width: "100%" }}
            label="अभिभावक की वार्षिक आय *"
            error={!!errors.post}
            helperText={errors.post?.message}
          />
        </Box>

        {/* Yojna Select Field */}
        <Box sx={{ flex: "1 1 30%", minWidth: "250px", maxWidth: { xs: "100%", sm: "40%", md: "30%" } }}>
          <FormControl
            fullWidth
            error={!!errors.yojna}
            sx={{
              '& .MuiSelect-select': { padding: '12px 10px' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#ccc' },
                '&:hover fieldset': { borderColor: '#000' },
              },
            }}
          >
            <Select
              displayEmpty
              {...register("yojna", { required: "Please select a yojna" })}
              sx={{
                width: '100%',
                borderRadius: '4px',
                backgroundColor: '#fff',
                height: '55px',
                '&:hover': { borderColor: '#000' },
                '&.Mui-focused': { borderColor: '#000' },
              }}
              onChange={() => setSelected(true)}
              defaultValue=""
            >
              <MenuItem value="" disabled>
                राशन कार्ड - *
              </MenuItem>
              {yojnaOptions.map((yojna, index) => (
                <MenuItem key={index} value={yojna}>
                  {yojna}
                </MenuItem>
              ))}
            </Select>
            <Typography sx={{ fontSize: '12px', color: 'red', marginTop: '3px' }}>
              {errors.yojna?.message}
            </Typography>
          </FormControl>
        </Box>

        {/* Full Name Field */}
        <Box sx={{ flex: "1 1 30%", minWidth: "250px", maxWidth: { xs: "100%", sm: "40%", md: "30%" } }}>
          <TextField
            {...register("fullName", { required: "Full Name is required" })}
            sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" }, width: "100%" }}
            label="ग्राम प्रधान का नाम *"
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
          />
        </Box>

        {/* Guardian Name Field */}
        <Box sx={{ flex: "1 1 30%", minWidth: "250px", maxWidth: { xs: "100%", sm: "40%", md: "30%" } }}>
          <TextField
            {...register("guardianName", { required: "Guardian Name is required" })}
            sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" }, width: "100%" }}
            label="यदि अगर पहले कही सिलाई मशीन प्रशिक्षण कार्य किया है तो संस्था का नाम *"
            error={!!errors.guardianName}
            helperText={errors.guardianName?.message}
          />
        </Box>

        {/* Mother Name Field */}
        <Box sx={{ flex: "1 1 30%", minWidth: "250px", maxWidth: { xs: "100%", sm: "40%", md: "30%" } }}>
          <TextField
            {...register("motherName", { required: "Mother Name is required" })}
            sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" }, width: "100%" }}
            label="कार्य अवधि *"
            error={!!errors.motherName}
            helperText={errors.motherName?.message}
          />
        </Box>

        {/* Email Field */}
        <Box sx={{ flex: "1 1 30%", minWidth: "250px", maxWidth: { xs: "100%", sm: "40%", md: "30%" } }}>
          <TextField
            {...register("email", { required: "Email is required" })}
            sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" }, width: "100%" }}
            label="आप किस पंचायत में कार्य करना चाहते हैं| *"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default OtherInfo;
