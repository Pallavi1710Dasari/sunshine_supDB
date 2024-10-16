import React from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
import AddressForm from "./AddressInformation";
import PersonalInformationForm from "./PersonalInfo";
import UploadForm from "./UploadDocsNScan";
import { registerYojana } from "../../services/yojanaRegistration";
import { IoMdHome } from "react-icons/io";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useMediaQuery } from '@mui/material';
 
// Validation schema
const schema = yup
  .object({
    yojanaName: yup.string().required("This field is necessary"),
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
    address: yup.object().shape({
      state: yup.string().required("State is required"),
      gram: yup.string().required("Gram is required"),
      post: yup.string().required("Post is required"),
      thana: yup.string().required("Thana is required"),
      city: yup.string().required("City is required"),
      pinCode: yup
        .string()
        .matches(/^\d{6}$/, "Pincode must be 6 digits")
        .required("Pincode is required"),
      tehsil: yup.string().required("Tehsil is required"),
      district: yup.string(),
    }),
    correspondenceAddress: yup.object().shape({
      gram: yup.string().required("Gram is required"),
      post: yup.string().required("Post is required"),
      thana: yup.string().required("Thana is required"),
      pinCode: yup
        .string()
        .matches(/^\d{6}$/, "Pincode must be 6 digits")
        .required("Pincode is required"),
      tehsil: yup.string().required("Tehsil is required"),
      district: yup.string(),
    }),
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
 
  const mutation = useMutation(registerYojana);
 
  const onSubmit = (data) => {
    console.log("submit button clicked");
    console.log(data);
    mutation.mutate(data, {
      onSuccess: (response) => {
        console.log("User registered successfully:", response);
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
    <>

    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ fontSize: '25px' }} variant="h4">Yojana Registration</Typography>
            <Typography sx={{ fontSize: '15px', color: '#490de0' }} variant="h6">
            <IoMdHome /> Dashboard <span style={{ color: 'rgb(110, 109, 107)' }}>/ Registration Form </span> <span style={{ color: 'red' }}>/ Yojana Registration</span>
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
        <UploadForm />
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            paddingTop:'25px',
            paddingLeft: "10px",
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
 
          <FormControlLabel
            control={
              <Controller
                name="agreeFoundation"
                control={control}
                defaultValue={false}
                render={({ field }) => <Checkbox {...field} />}
              />
            }
            label="मैं संस्थान फाउंडेशन अनुबंध-पत्र से सहमत हूँ।"
          />
          {errors.agreeFoundation && (
            <Typography color="error">
              {errors.agreeFoundation.message}
            </Typography>
          )}
 
          {/* Disclaimer Note */}
          <Box
            sx={{
              border: "1px dashed gray",
              padding: 2,
              maxHeight: "300px",
              overflow: "scroll",
              backgroundColor: "#ffffff",
            }}
          >
            <Paper elevation={4} sx={{ p: 4 }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "34px",
                  textAlign: "center",
                  fontWeight: 800,
                  m: 2,
                }}
              >
                सूर्योदय फाउंडेशन अनुबंध-पत्र
              </Typography>
              <Typography>
                मै सूर्योदय फाउंडेशन संस्था में महिला मित्र के पद पर संस्था के
                मानक एवं शर्तों के अनुरूप कार्य करने की इच्छुक हूँ और अपनी
                स्वेच्छा से सदस्यता शुल्क (प्रशिक्षण एवं किट बैग, डायरी आदि) के
                लिए जमा कर रही हूँ। संस्था द्वारा संचालित कार्यक्रम को सफल बनाने
                हेतु मुझे निम्नलिखित शर्ते मान्य हैं:
              </Typography>
              <ol>
                <li style={{ margin: "10px" }}>
                  धारा 1: हमारा यह कर्तव्य बनता है कि संस्था के द्वारा संचालित
                  विभागीय योजनाओं का नि:शुल्क प्रचार-प्रसार जन जागरूकता एवं
                  सर्वे के माध्यम से निर्धारित शुल्क के आधार पर साप्ताहिक/मासिक
                  प्रगति रिपोर्ट से अधोहस्ताक्षरी संस्था के प्रशासनिक कार्यालय
                  में उपलब्ध कराना अनिवार्य होगा।
                </li>
                <li style={{ margin: "10px" }}>
                  धारा 2: हमारा यह कर्तव्य बनता है कि संस्था द्वारा चलाई जा रही
                  विभागीय योजनाओं को समस्त पंचायतों में संस्था द्वारा निर्धारित
                  लक्ष्य को महिला स्वास्थ्य कार्ड शुल्क के आधार पर पूर्ण कराने
                  में सहयोग करूंगी।
                </li>
                <li style={{ margin: "10px" }}>
                  धारा 3: संस्था द्वारा संचालित विभागीय योजनाओं को सुचारू रूप से
                  चलाने हेतु हमारा यह कर्तव्य बनता है कि संस्था द्वारा निर्धारित
                  पावन लक्ष्य महिला स्वास्थ्य कार्ड का शुल्क 180 रु0 प्रति
                  कार्ड, 10-15 महिला स्वास्थ्य कार्ड प्रतिदिन तथा 350 स्वास्थ्य
                  कार्ड प्रति माह प्रगति रिपोर्ट से अधोहस्ताक्षरी अवगत कराऊँगी,
                  ताकि मानदेय और कार्यक्रम में सुचारु रूप से संचालन संबंधी कोई
                  व्यवधान न हो।
                </li>
                <li style={{ margin: "10px" }}>
                  धारा 4: संस्था द्वारा दिए गए महिला स्वास्थ्य कार्ड का मासिक
                  लक्ष्य 350 स्वास्थ्य कार्ड अगर पूर्ण नहीं होता है तो संस्था
                  द्वारा सत्यापित मानदेय प्रत्येक महिला मित्र - 22 रु0 प्रति
                  कार्ड पर मान्य होगा। संस्था के मानक व शर्तों के अनुरूप कार्य न
                  करने पर संस्था अपनी स्वेच्छा से साप्ताहिक/मासिक प्रगति रिपोर्ट
                  के द्वारा जो मानदेय देगी वह हमे मान्य होगा। संस्था के इस
                  निर्णय में हम सहयोग करेंगे।
                </li>
                <li style={{ margin: "10px" }}>
                  धारा 5: समस्त कानूनी कार्यवाही रजिस्टर्ड हेड ऑफिस प्रयागराज
                  (उत्तर प्रदेश) से ही मान्य होगी, अन्य किसी राज्य व जिले से की
                  गई कोई भी कार्यवाही मान्य नहीं होगी।
                </li>
              </ol>
              <Typography>
                नोट: संस्था द्वारा संचालित विभागीय योजनाओं का प्रशिक्षण कार्य
                रिपोर्ट तीन दिन के अंदर देना अनिवार्य होगा तथा प्रशिक्षण कार्य
                रिपोर्ट न देने पर आवेदन स्थगित कर दिया जाएगा। मै यह अनुबंध-पत्र
                व शपथ-पत्र बिना किसी जोर दबाव के अपनी स्वेच्छा से स्वीकार कर रही
                हूँ। संस्था व उसके किसी भी कर्मचारी के विरुद्ध दिवानी व न्यायालय
                में वा भविष्य में दांडिक व सिविलवाद नहीं करुँगी क्योंकि यह मेरा
                स्वयं का निर्णय है। यदि मेरे द्वारा निष्ठापूर्ण ढंग से कार्य का
                निष्पादन व वित्तीय लेन-देन अथवा सशुल्क साप्ताहिक/मासिक प्रगति
                रिपोर्ट में लापरवाही व शिथिलता पाई जाती है तो मेरी कार्यक्रम
                सदस्यता समाप्त कर दी जाएगी और मुझे संस्था से निष्कासित कर उचित
                कार्यवाही की जाएगी।
              </Typography>
              <Typography sx={{ mt: 2 }}>दिनांक: 11-10-2024</Typography>
            </Paper>
          </Box>
          <Button
            type="submit"
            variant="contained"
            disabled={mutation.isLoading}
            sx={{ width: "20%",  color:"#fff",
              backgroundColor:"#1CBFD0", fontSize:'12px', }}
          >
            {mutation.isLoading ? "Submitting..." : "Pay Fees & Submit"}
          </Button>
        </Box>
      </form>
    </FormProvider>
    </>
  );
};
 
 
 