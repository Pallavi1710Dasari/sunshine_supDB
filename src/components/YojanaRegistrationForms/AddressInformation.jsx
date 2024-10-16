import React, { useEffect } from "react";
import {
  TextField,
  Checkbox,
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
  Select,
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
      setValue("correspondenceAddress.gram", getValues("address.gram"));
      setValue("correspondenceAddress.post", getValues("address.post"));
      setValue("correspondenceAddress.thana", getValues("address.thana"));
      setValue("correspondenceAddress.tehsil", getValues("address.tehsil"));
      setValue("correspondenceAddress.district", getValues("district"));
      setValue("correspondenceAddress.pinCode", getValues("address.pinCode"));
    } else {
      // Clear temporary address fields if the checkbox is unchecked
      setValue("correspondenceAddress.gram", "");
      setValue("correspondenceAddress.post", "");
      setValue("correspondenceAddress.thana", "");
      setValue("correspondenceAddress.tehsil", "");
      setValue("correspondenceAddress.district", "");
      setValue("correspondenceAddress.pinCode", "");
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

      <Box sx={{ backgroundColor: "#f0e8e3", p: 2, mt: 2, mb: 2 }}>
        <Grid container spacing={2} mb={1}>
          <Grid item xs={12} sm={6} md={5}>
            <FormControl fullWidth sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}>
              <InputLabel>Select State</InputLabel>
              <Select
                defaultValue="State 1"
                {...register("address.state")}
                label="Select State"
                error={!!errors.address?.state}
              >
                <MenuItem value="">
                  <em>Select State</em>
                </MenuItem>
                <MenuItem value="State 1">State 1</MenuItem>
                <MenuItem value="State 2">State 2</MenuItem>
              </Select>
              <Typography variant="caption" color="error">
                {errors.address?.state?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}>
              <InputLabel>Select City</InputLabel>
              <Select
                defaultValue="City 1"
                {...register("address.city")}
                label="Select City"
                error={!!errors.address?.city}
              >
                <MenuItem value="">
                  <em>Select City</em>
                </MenuItem>
                <MenuItem value="City 1">City 1</MenuItem>
                <MenuItem value="City 2">City 2</MenuItem>
              </Select>
              <Typography variant="caption" color="error">
                {errors.address?.city?.message}
              </Typography>
            </FormControl>
          </Grid>
        </Grid>

        <Typography variant="subtitle1">स्थाई पता</Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              {...register("address.gram", { required: "Gram is required" })}
              fullWidth
              label="ग्राम *"
              error={!!errors.address?.gram}
              helperText={errors.address?.gram?.message}
              sx={{ backgroundColor: "#f8f9fa" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              {...register("address.post", { required: "Post is required" })}
              fullWidth
              label="पोस्ट *"
              error={!!errors.address?.post}
              helperText={errors.address?.post?.message}
              sx={{ backgroundColor: "#f8f9fa" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              {...register("address.thana", { required: "Thana is required" })}
              fullWidth
              label="थाना *"
              error={!!errors.address?.thana}
              helperText={errors.address?.thana?.message}
              sx={{ backgroundColor: "#f8f9fa" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              {...register("address.tehsil", { required: "Tehsil is required" })}
              fullWidth
              label="तहसील *"
              error={!!errors.address?.tehsil}
              helperText={errors.address?.tehsil?.message}
              sx={{ backgroundColor: "#f8f9fa" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              {...register("district", { required: "District is required" })}
              fullWidth
              label="जिला *"
              disabled
              sx={{ backgroundColor: "#f8f9fa" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              {...register("address.pinCode", { required: "Pin Code is required" })}
              fullWidth
              label="पिन कोड *"
              error={!!errors.address?.pinCode}
              helperText={errors.address?.pinCode?.message}
              sx={{ backgroundColor: "#f8f9fa" }}
            />
          </Grid>
        </Grid>

        <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
          <Typography variant="subtitle1">पत्र व्यवहार का पता</Typography>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Checkbox {...register("copyAddress")} />
            <Typography>Copy Address</Typography>
          </div>
        </div>

        {/* Correspondence Address Fields */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
          <TextField
              {...register("correspondenceAddress.gram")}
              fullWidth
              slotProps  = {{  inputLabel:  { shrink:true , }, }}
              label="ग्राम *"
              error={!!errors.correspondenceAddress?.gram && !copyAddress} // Only show error when no copy is active
              helperText={copyAddress ? "" : errors.correspondenceAddress?.gram?.message} // Clear helper text if copy is active
              disabled={copyAddress}
              sx={{ backgroundColor: "#f8f9fa" }}
            />

          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              {...register("correspondenceAddress.post")}
              fullWidth
              slotProps  = {{  inputLabel:  { shrink:true , }, }}
              label="पोस्ट *"
              error={!!errors.correspondenceAddress?.post}
              helperText={errors.correspondenceAddress?.post?.message}
              disabled={copyAddress}
              sx={{ backgroundColor: "#f8f9fa" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              {...register("correspondenceAddress.thana")}
              fullWidth
              slotProps  = {{  inputLabel:  { shrink:true , }, }}
              label="थाना *"
              error={!!errors.correspondenceAddress?.thana}
              helperText={errors.correspondenceAddress?.thana?.message}
              disabled={copyAddress}
              sx={{ backgroundColor: "#f8f9fa" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              {...register("correspondenceAddress.tehsil")}
              fullWidth
              slotProps  = {{  inputLabel:  { shrink:true , }, }}
              label="तहसील *"
              error={!!errors.correspondenceAddress?.tehsil}
              helperText={errors.correspondenceAddress?.tehsil?.message}
              disabled={copyAddress}
              sx={{ backgroundColor: "#f8f9fa" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              {...register("correspondenceAddress.district")}
              fullWidth
              slotProps  = {{  inputLabel:  { shrink:true , }, }}
              label="जिला *"
              disabled
              sx={{ backgroundColor: "#f8f9fa" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              {...register("correspondenceAddress.pinCode")}
              fullWidth
              slotProps  = {{  inputLabel:  { shrink:true , }, }}
              label="पिन कोड *"
              error={!!errors.correspondenceAddress?.pinCode}
              helperText={errors.correspondenceAddress?.pinCode?.message}
              disabled={copyAddress}
              sx={{ backgroundColor: "#f8f9fa" }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AddressForm;
