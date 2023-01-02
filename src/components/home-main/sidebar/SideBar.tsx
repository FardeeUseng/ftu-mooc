import React from "react";
// mui and style
import { Avatar, Box, Typography } from "@mui/material";
import { useSidebarStyle as classes } from "../HomeMain.style";
// images
import ftuIcon from "../../../assets/icons/sidebar-icon/Ftu_logo.png";
import category from "../../../assets/icons/sidebar-icon/category.png";
import recommandedCourses from "../../../assets/icons/sidebar-icon/education.png";
import latestCourses from "../../../assets/icons/sidebar-icon/online-learning.png";

export default function SideBar() {
  const sidebar = [
    {
      label: "หมวดหมู่",
      icon: category,
    },
    {
      label: "รายวิชาแนะนำ",
      icon: recommandedCourses,
    },
    {
      label: "รายวิชาล่าสุด",
      icon: latestCourses,
    },
  ];
  return (
    <Box sx={classes.sidebarCon}>
      <Avatar sx={{ my: "10px" }} src={ftuIcon} />
      {sidebar.map((item, index) => (
        <Box key={index} sx={classes.sidebarItemBox}>
          <Box sx={classes.sidebarIcon}>
            <Avatar src={item.icon} />
          </Box>
          <Typography sx={classes.sidebarLabel}>{item.label}</Typography>
        </Box>
      ))}
    </Box>
  );
}
