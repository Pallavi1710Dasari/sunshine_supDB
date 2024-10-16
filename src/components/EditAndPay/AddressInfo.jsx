import React, { useEffect } from "react";
import {
  TextField,
  Checkbox,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { useFormContext } from "react-hook-form";

const AddressForm = () => {
  const {
    register,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  // Watch for the 'copyAddress' field to handle copying functionality
  const copyAddress = watch("copyAddress");

  // Use effect to update fields when copyAddress is checked
  useEffect(() => {
    if (copyAddress) {
      setValue("tempGram", getValues("gram"));
      setValue("tempPost", getValues("post"));
      setValue("tempThana", getValues("thana"));
      setValue("tempTehsil", getValues("tehsil"));
      setValue("tempDistrict", getValues("district"));
      setValue("tempPinCode", getValues("pinCode"));
    } else {
      // Clear temporary address fields if the checkbox is unchecked
      setValue("tempGram", "");
      setValue("tempPost", "");
      setValue("tempThana", "");
      setValue("tempTehsil", "");
      setValue("tempDistrict", "");
      setValue("tempPinCode", "");
    }
  }, [copyAddress, getValues, setValue]);

  return (
    <Box sx={{ mt: 2, backgroundColor: "#ededed", borderRadius: "10px" }}>
      <Typography
        variant="h6"
        sx={{ backgroundColor: "#040659", p: 1, color: "#ffffff" }}
      >
        Address Information
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "20px",
        }}
      >
        <Box sx={{ backgroundColor: "#f0e8e3", p: 1, }}>
          <Typography sx={{marginBottom:'10px'}} variant="subtitle1">स्थाई पता</Typography>
          <Grid container spacing={2} sx={{ marginBottom: '25px' }}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                {...register("gram", { required: "Gram is required" })}
                fullWidth
                label="ग्राम *"
                error={!!errors.gram}
                helperText={errors.gram?.message}
                sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                {...register("post", { required: "Post is required" })}
                fullWidth
                label="पोस्ट *"
                error={!!errors.post}
                helperText={errors.post?.message}
                sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                {...register("thana", { required: "Thana is required" })}
                fullWidth
                label="थाना *"
                error={!!errors.thana}
                helperText={errors.thana?.message}
                sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                {...register("tehsil", { required: "Tehsil is required" })}
                fullWidth
                label="तहसील *"
                error={!!errors.tehsil}
                helperText={errors.tehsil?.message}
                sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                {...register("district", { required: "District is required" })}
                fullWidth
                label="जिला *"
                error={!!errors.district}
                helperText={errors.district?.message}
                sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                {...register("pinCode", { required: "Pin Code is required" })}
                fullWidth
                label="पिन कोड *"
                error={!!errors.pinCode}
                helperText={errors.pinCode?.message}
                sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}
              />
            </Grid>
          </Grid>

          <div style={{ display: "flex", alignItems: "center", marginBottom: '20px' }}>
            <Typography variant="subtitle1">पत्र व्यवहार का पता</Typography>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <Checkbox {...register("copyAddress")} />
              <Typography>Copy Address</Typography>
            </div>
          </div>

          {/* Temporary Address Fields */}
          {/* {copyAddress && ( */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  {...register("tempGram")}
                  fullWidth
                  label={getValues("tempGram")==null ? "ग्राम *" : ""}
                  sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  {...register("tempPost")}
                  fullWidth
                  label={getValues("tempPost")==null ? "पोस्ट *" : ""}
                  sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  {...register("tempThana")}
                  fullWidth
                  label={getValues("tempThana")==null ? "थाना *" : ""}
                  sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  {...register("tempTehsil")}
                  fullWidth
                  label={getValues("tempTehsil")==null ? "तहसील *" : ""}
                  sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  {...register("tempDistrict")}
                  fullWidth
                  label={getValues("tempDistrict")==null ? "जिला *" : ""}
                  sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  {...register("tempPinCode")}
                  fullWidth
                  label={getValues("tempPinCode")==null ? "पिन कोड *" : ""}
                  sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}
                />
              </Grid>
            </Grid>
           {/* )} */}
        </Box>
      </Box>
    </Box>
  );
};

export default AddressForm;
