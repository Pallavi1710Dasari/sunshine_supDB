import React from "react";
import { useFormContext } from "react-hook-form";
import { TextField, Button, MenuItem, Typography, Box, Avatar } from "@mui/material";

const UploadForm = ({ existingData }) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const handleFileUpload = (e, field) => {
    setValue(field, e.target.files[0]);
  };

  return (
    <Box
      sx={{
        mt: 2,
        backgroundColor: "#ededed",
        borderRadius: "10px",
      //  paddingLeft: "20px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{ backgroundColor: "#040659", p: 1, color: "#ffffff" }}
      >
        Upload Document
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-around", padding:'10px', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
        <div style={{ width: "100%" }}>
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
        </div>

        <div style={{ width: "100%", }}>
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
        </div>

        <div style={{ width: "100%" }}>
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
        </div>
      </Box>

      {/* Display existing uploads */}
      {existingData && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Existing Uploads</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {existingData.personPhoto && (
              <Box>
                <Typography>Person's Photo</Typography>
                <Avatar
                  alt="Person's Photo"
                  src={URL.createObjectURL(existingData.personPhoto)}
                  sx={{ width: 56, height: 56 }}
                />
              </Box>
            )}
            {existingData.signature && (
              <Box>
                <Typography>Signature</Typography>
                <Avatar
                  alt="Signature"
                  src={URL.createObjectURL(existingData.signature)}
                  sx={{ width: 56, height: 56 }}
                />
              </Box>
            )}
            {existingData.documentPhoto && (
              <Box>
                <Typography>Document's Photo</Typography>
                <Avatar
                  alt="Document's Photo"
                  src={URL.createObjectURL(existingData.documentPhoto)}
                  sx={{ width: 56, height: 56 }}
                />
              </Box>
            )}
          </Box>
        </Box>
      )}

      <Box sx={{ display: { xs: 'block', sm: 'flex' }, gap: 2 , padding:'10px',}}>
        <TextField
          select
          label="Identity"
          fullWidth
          {...register("identity", { required: "Identity is required" })}
          error={!!errors.identity}
          helperText={errors.identity ? errors.identity.message : ""}
          sx={{ mb: 2, flexGrow: 1,  "& .MuiInputBase-input": {
            backgroundColor: "#f8f9fa",
          }, }}
        >
          <MenuItem value="">-- Please Select --</MenuItem>
          <MenuItem value="passport">Passport</MenuItem>
          <MenuItem value="idCard">ID Card</MenuItem>
          <MenuItem value="driverLicense">Driver License</MenuItem>
        </TextField>

        <TextField
          sx={{ mb: 2, flexGrow: 1 ,  "& .MuiInputBase-input": {
            backgroundColor: "#f8f9fa",
          },}}
          label="Document No."
          fullWidth
          {...register("documentNo", {
            required: "Document No. is required",
          })}
          error={!!errors.documentNo}
          helperText={errors.documentNo ? errors.documentNo.message : ""}
        />
      </Box>

      {/* Upload Buttons */}
      
    </Box>
  );
};

export default UploadForm;
