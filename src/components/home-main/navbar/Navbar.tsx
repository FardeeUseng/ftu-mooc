import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { useNavbarStyle as classes } from "../HomeMain.style";

export default function Navbar() {
  return (
    <Box sx={classes.navCon}>
      <Typography>FTU MOOC</Typography>
      <Box sx={classes.profile}>
        <Avatar />
        <Typography>Fardee Tat</Typography>
      </Box>
    </Box>
  );
}
