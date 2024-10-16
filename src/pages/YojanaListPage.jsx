import React, { useState } from "react";
import { Box, IconButton, Drawer, Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";
import {YojanaRegListTable} from "../components/YojanaRegListTable";
import { IoMdNotifications, IoMdMenu } from "react-icons/io";
import { useMediaQuery } from "@mui/material";
 
export const YojanaListPage = () => {
  const [showNotification, setShowNotification] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 
  const isMobile = useMediaQuery("(max-width:600px)"); // Detect mobile screen
 
  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };
 
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 
  return (
    <Box
      sx={{
        display: "flex",
        height: "auto",
        backgroundColor: "#fff",
        width: "100%",
      }}
    >
      {isMobile ? (
        <>
          <Box>
            <IconButton
              sx={{
                position: "fixed",
                top: "30px",
                right: "30px",
                zIndex: 1000,
                backgroundColor: "#490de0",
                color: "#fff", // Add background color for better visibility
                borderRadius: "15%", // Make it circular
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
                "&:hover": {
                  backgroundColor: "#e0e0e0", // Change color on hover
                },
              }}
              onClick={toggleSidebar}
            >
              <IoMdMenu size={28} />
            </IconButton>
          </Box>
          <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
            <Box sx={{ width: "100px" }}>
              {" "}
              <Sidebar />
            </Box>
          </Drawer>
        </>
      ) : (
        <Box
          sx={{
            width: { xs: "100%", sm: "250px", md: "20%" },
            backgroundColor: "#fff",
          }}
        >
          <Sidebar />
        </Box>
      )}
 
      <Box
        sx={{
          margin: { xs: "10px", sm: "20px" },
          boxShadow: 1,
          borderRadius: "10px",
          padding: "5px",
          backgroundColor: "#fff",
          height: "100%",
          width: showNotification ? { md: "73%" } : { md: "80%" },
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#f0f0f0",
            borderRadius: "10px",
            padding: { xs: "15px", sm: "25px" },
            height: "auto",
          }}
        >
          <YojanaRegListTable
            showNotification={showNotification}
            toggleNotification={toggleNotification}
          />
        </Box>
      </Box>
 
      {!isMobile && showNotification && (
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            paddingTop: "35px",
            height: "auto",
            width: { md: "4%" },
          }}
        >
          <IoMdNotifications className="notification-icon" />
        </Box>
      )}
    </Box>
  );
};
