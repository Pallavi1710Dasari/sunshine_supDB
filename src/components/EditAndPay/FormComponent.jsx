import React from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdHome } from "react-icons/io";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useMediaQuery } from '@mui/material';
import * as yup from "yup";
import {
  Checkbox,
  Button,
  FormControlLabel,
  Typography,
  Box,
  Divider,
  Paper,
} from "@mui/material";
import { useMutation } from "react-query";
import axios from "axios";
import AddressForm from "./AddressInfo";
import PersonalInformationForm from "./PersonalInfo";
import UploadDocsfrom from "./UploadDocs";
import OtherInfo from "./OtherInfo";
 
// Validation schema
const schema = yup
  .object({
    yojna: yup.string().required("This field is necessary"),
    fullName: yup.string().required("Full Name is required"),
    guardianName: yup.string().required("Guardian Name is required"),
    motherName: yup.string().required("Mother Name is required"),
    dateOfBirth: yup.date().required("Date of Birth is required"),
    gender: yup.string().required("Select your gender"),
    category: yup.string().required("Select your category"),
    mobile: yup
      .string()
      .matches(/^[0-9]{10}$/, "Enter a valid 10 digit mobile number")
      .required("Mobile no. is required"),
    email: yup.string().email("Enter a valid email"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
    gram: yup.string().required("Gram is required"),
    post: yup.string().required("Post is required"),
    thana: yup.string().required("Thana is required"),
    pinCode: yup
      .string()
      .matches(/^\d{6}$/, "Pincode must be 6 digits")
      .required("Pincode is required"),
    tehsil: yup.string().required("Tehsil is required"),
    district: yup.string(),
    copyAddress: yup.boolean(),
    identity: yup.string().required("Identity is required"),
    documentNo: yup.string().required("Document No. is required"),
    personPhoto: yup.mixed().required("Person's photo is required"),
    signature: yup.mixed().required("Signature is required"),
    documentPhoto: yup.mixed().required("Document's photo is required"),
    agreeTerms: yup
      .bool()
      .oneOf([true], "You must agree to the terms to continue"),
    agreeFoundation: yup
      .bool()
      .oneOf([true], "You must agree to the foundation terms"),
  })
  .required();
 
export const FormComponent = ({ toggleNotification, showNotification }) => {

  const isMobile = useMediaQuery('(max-width:600px)');

  const methods = useForm({
    resolver: yupResolver(schema),
  });
 
  const {
    control,
    formState: { errors },
  } = methods;
 
  const mutation = useMutation((data) => {
    return axios.post("/submit-form", data); // API endpoint
  });
 
  const onSubmit = (data) => {
    console.log("hiii ajsdhfj")
    mutation.mutate(data);
  };
 
  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ fontSize: '25px' }} variant="h4">Provide Information</Typography>
            <Typography sx={{ fontSize: '15px', color: '#490de0' }} variant="h6">
            <IoMdHome /> Dashboard <span style={{ color: 'rgb(110, 109, 107)' }}>/ Registration Form / </span> 
            </Typography>
        </Box>
    
        {!isMobile  &&  <Box sx={{
            height: '40px',
            width: '40px',
            borderRadius: '7px',
            backgroundColor: '#490de0',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }} onClick={toggleNotification}>
            {showNotification ? <FaArrowRight /> : <FaArrowLeft />}
        </Box>}
     </Box>


    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <PersonalInformationForm />
        <AddressForm />
        <OtherInfo/>
        <UploadDocsfrom />
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: "10px",
          }}
        >
          <FormControlLabel
            control={
              <Controller
                name="agreeTerms"
                control={control}
                defaultValue={false}
                render={({ field }) => <Checkbox {...field} sx={{ mb: 9 }} />}
              />
            }
            label="में प्रमाणित करता हूँ / करती हूँ कि मेरे द्वारा दिए गए विवरण सही है , इसमे किसी भी प्रकार का कोई तथ्य छिपाया नहीं गया है , अगर इसमे किसी भी प्रकार कि कोई भी त्रुटि पाई जाती है तथा मेरे द्वारा संस्था को दी गई सदस्यता शुल्क को भविष्य में किसी भी परिस्थिति में वापस लेने का दावा नहीं करुगा / करुगी यह मेरा स्वयं का निरणय है , अगर में भविष्य में संस्था के खिलाफ किसी भी तरह कि कारवाही करता हूँ / करती हूँ तो संस्था मेरे ऊपर कोई भी कानूनी कारवाही कर सकती है , इसके लिए में किसी भी प्रशासनिक या न्यायालय का सहारा नहीं  लूँगा / लूँगी ।"
          />
          {errors.agreeTerms && (
            <Typography color="error">{errors.agreeTerms.message}</Typography>
          )}
 
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={mutation.isLoading}
            sx={{ width: "20%",  color:"#fff",
              backgroundColor:"#1CBFD0", fontSize:'12px', }}
          >
            Pay Fees & Submit
          </Button>
        </Box>
      </form>
    </FormProvider>
    </>
  );
};
 
