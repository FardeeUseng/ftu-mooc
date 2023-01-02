import React from "react";
// mui
import { Box } from "@mui/material";
// components
import Navbar from "../../components/home-main/navbar/Navbar";
import SideBar from "../../components/home-main/sidebar/SideBar";

export default function HomeMain() {
  return (
    <Box position="relative">
      <Navbar />
      <SideBar />
    </Box>
  );
}
