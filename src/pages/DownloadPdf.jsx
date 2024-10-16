import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import "./downloadPdf.css";
 
export const DownloadPdf = () => {
  return (
    <TableContainer
      sx={{ width: "80%", margin: "auto", border: "1px solid #000" }}
    >
      <div className="header">
        <Typography variant="h6" align="center">
          आवेदन फॉर्म
          <br />
          महिला स्वास्थ्य सुरक्षा योजना
          <br />
          BLOCK INCHARGE
        </Typography>
        <Typography variant="body2" align="center">
          सूर्योदय फाउंडेशन द्वारा संचालित (भारत सरकार द्वारा अनुमोदित)
          <br />
          हेड ऑफिस - जी 0 टी 0 रोड हनुमानगंज, सबेर कम्प्लेक्स तीसरी मंजिल,
          प्रयागराज (उत्तर प्रदेश)
          <br />
          टोल-फ्री नंबर - 1800 – 890 – 9199
        </Typography>
      </div>
 
      <Table className="form-table">
        <TableBody>
          <TableRow>
            <TableCell>Registered ID: i726469</TableCell>
            <TableCell colSpan={4}></TableCell>
            <TableCell>आवेदन शुल्क - 1000 रुपये मात्र</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>आवेदिका का नाम</TableCell>
            <TableCell colSpan={4}>CHANDRPRABHA THAKRE</TableCell>
            <TableCell rowSpan={6}>
              <img
                src="your-placeholder-image-url.png"
                alt="Placeholder"
                className="placeholder-img"
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={2}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>पिता/पति का नाम</TableCell>
            <TableCell colSpan={4}>SANTOSH THAKRE</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>स्थाई पता ग्राम</TableCell>
            <TableCell colSpan={4}>WARD NO.02 CHANDNA</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>राज्य</TableCell>
            <TableCell colSpan={4}>MADHYA PRADESH</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>पोस्ट</TableCell>
            <TableCell>CHANDNA</TableCell>
            <TableCell>थाना</TableCell>
            <TableCell colSpan={2}>PARASWADA</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>पत्र व्यवहार का पता. ग्राम</TableCell>
            <TableCell colSpan={4}>WARD NO.02 CHANDNA</TableCell>
            <TableCell rowSpan={2}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>राज्य</TableCell>
            <TableCell>MADHYA PRADESH</TableCell>
            <TableCell>पिन कोड</TableCell>
            <TableCell>481556</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>जन्म तिथि (अंग्रेजी में)</TableCell>
            <TableCell>25-05-1983</TableCell>
            <TableCell>जाति</TableCell>
            <TableCell>OBC</TableCell>
            <TableCell>पिता/अभिभावक की वार्षिक आय</TableCell>
            <TableCell>N/A</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>संलग्न दस्तावेज</TableCell>
            <TableCell>aadhar</TableCell>
            <TableCell>संलग्न दस्तावेज न°</TableCell>
            <TableCell>372289230523</TableCell>
            <TableCell>मोबाइल न°</TableCell>
            <TableCell>9644280625</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ई-मेल आई.डी°</TableCell>
            <TableCell colSpan={5}>vidhyathakre60@gmail.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>शैक्षणिक योग्यता</TableCell>
            <TableCell>ug</TableCell>
            <TableCell>अनुभव (Years)</TableCell>
            <TableCell>N/A</TableCell>
            <TableCell>Txn-id</TableCell>
            <TableCell>449688244230</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Txn-date</TableCell>
            <TableCell>09-05-2024</TableCell>
            <TableCell>आवेदन शुल्क</TableCell>
            <TableCell>1000 रुपये मात्र</TableCell>
          </TableRow>
        </TableBody>
      </Table>
 
      <Typography variant="caption" className="declaration">
        घोषणा पत्र: <br />
        मैं प्रमाणित करता हूं कि मेरे द्वारा दिए गए विवरण सही हैं। अगर इसमें
        किसी भी प्रकार की त्रुटि पाई जाती है, तो मैं उसके लिए जिम्मेदार हूं।
      </Typography>
 
      <div className="footer">
        <div className="footer-item">
          <Typography>प्रार्थी का हस्ताक्षर</Typography>
          <img
            src="your-signature-placeholder-url.png"
            alt="Signature"
            className="signature-img"
          />
        </div>
        <div className="footer-item">
          <Typography>आवेदिका का नाम: CHANDRPRABHA THAKRE</Typography>
          <Typography>पिता/पति का नाम: SANTOSH THAKRE</Typography>
        </div>
      </div>
    </TableContainer>
  );
};
