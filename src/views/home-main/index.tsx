import React from "react";
// mui
import { Box } from "@mui/material";
// components
import Navbar from "../../components/home-main/navbar/Navbar";
import SideBar from "../../components/home-main/sidebar/SideBar";
import Category from "../../components/home-main/category/Category";
import LatestCourses from "../../components/home-main/latest-courses/LatestCourses";
import Footer from "../../components/home-main/footer/Footer";
import RecommandedCourses from "../../components/home-main/recommanded-courses/RecommandedCourses";

export default function HomeMain() {
  return (
    <Box position="relative">
      <Navbar />
      <SideBar />
      <Box ml="70px">
        <Category />
        <RecommandedCourses />
        <LatestCourses />
        <Footer />
      </Box>
    </Box>
  );
}
