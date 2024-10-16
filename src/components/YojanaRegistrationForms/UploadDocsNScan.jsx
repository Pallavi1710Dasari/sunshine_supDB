import React from "react";
import { useFormContext } from "react-hook-form";
import { TextField, Button, MenuItem, Typography, Box, Grid } from "@mui/material";

const UploadForm = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const handleFileUpload = (e, field) => {
    // Set the selected file to the respective field
    const file = e.target.files[0];
    setValue(field, file);
  };

  return (
    <Box sx={{ mt: 2, backgroundColor: "#ededed", borderRadius: "10px" }}>
      <Typography
        variant="h6"
        sx={{ backgroundColor: "#040659", p: 1, color: "#ffffff", fontSize:'18px' }}
      >
         UPLOAD DOCUMENT SCAN COPY (JPG|JPEG FORMAT MAX SIZE 100 KB)
      </Typography>
      <Box sx={{ padding: "20px" }}>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          {/* Button for Person's Photo */}
          <Grid item xs={12} sm={4}>
            <Button variant="contained" component="label" fullWidth>
              Upload Person's Photo
              <input
                type="file"
                hidden
                {...register("personPhoto", { required: "Photo is required" })}
                onChange={(e) => handleFileUpload(e, "personPhoto")}
              />
            </Button>
            {errors.personPhoto && (
              <Typography variant="body2" color="error">
                {errors.personPhoto.message}
              </Typography>
            )}
          </Grid>

          {/* Button for Signature */}
          <Grid item xs={12} sm={4}>
            <Button variant="contained" component="label" fullWidth>
              Upload Signature
              <input
                type="file"
                hidden
                {...register("signature", {
                  required: "Signature is required",
                })}
                onChange={(e) => handleFileUpload(e, "signature")}
              />
            </Button>
            {errors.signature && (
              <Typography variant="body2" color="error">
                {errors.signature.message}
              </Typography>
            )}
          </Grid>

          {/* Button for Document's Photo */}
          <Grid item xs={12} sm={4}>
            <Button variant="contained" component="label" fullWidth>
              Upload Document's Photo
              <input
                type="file"
                hidden
                {...register("documentPhoto", {
                  required: "Document photo is required",
                })}
                onChange={(e) => handleFileUpload(e, "documentPhoto")}
              />
            </Button>
            {errors.documentPhoto && (
              <Typography variant="body2" color="error">
                {errors.documentPhoto.message}
              </Typography>
            )}
          </Grid>
        </Grid>

        {/* Identity Selection and Document Number */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
            sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}
              select
              defaultValue=""
              label="Identity"
              fullWidth
              {...register("identity", { required: "Identity is required" })}
              error={!!errors.identity}
              helperText={errors.identity ? errors.identity.message : ""}
            >
              <MenuItem value="">-- Please Select --</MenuItem>
              <MenuItem value="passport">Passport</MenuItem>
              <MenuItem value="idCard">ID Card</MenuItem>
              <MenuItem value="driverLicense">Driver License</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
            sx={{ "& .MuiInputBase-input": { backgroundColor: "#f8f9fa" } }}
              label="Document No."
              fullWidth
              {...register("documentNo", {
                required: "Document No. is required",
              })}
              error={!!errors.documentNo}
              helperText={errors.documentNo ? errors.documentNo.message : ""}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UploadForm;
