import React from "react";
// mui and icons
import { Box, Grid, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import ContactMailIcon from "@mui/icons-material/ContactMail";
// style
import { useFooterStyle as classes } from "../HomeMain.style";

export default function Footer() {
  return (
    <Grid container sx={classes.footer}>
      <Grid item xs={6}>
        <Box sx={classes.footerLeft}>
          <Typography>FTU MOOC</Typography>
          <Typography>FTU Massive Open Online Course Platform </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={classes.footerRight}>
          <Typography>ข้อมูลการติดต่อ</Typography>
          {[
            {
              label: "เบอร์โทรศัพท์",
              subLabel: "065-3334-332",
              icon: <LocalPhoneIcon />,
            },
            {
              label: "ที่อยู่ติดต่อ",
              subLabel: "หมู่ 3 135/8 ตำบล เขาตูม อำเภอ ยะรัง ปัตตานี 94160",
              icon: <ImportContactsIcon />,
            },
            {
              label: "E-Mail",
              subLabel: "ftu.65@gmail.com",
              icon: <ContactMailIcon />,
            },
          ].map((item, index) => (
            <Box key={index} ml={5}>
              <Box sx={classes.label}>
                {item.icon}
                <Typography>{item.label}</Typography>
              </Box>
              <Typography sx={classes.subLabel}>{item.subLabel}</Typography>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}
