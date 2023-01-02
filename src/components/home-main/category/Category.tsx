import React from "react";
// mui and style
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useCategoryStyle as classes } from "../HomeMain.style";
// images
import scienceIcon from "../../../assets/icons/category-icon/science.png";
import computerIcon from "../../../assets/icons/category-icon/technical-support.png";
import islamicIcon from "../../../assets/icons/category-icon/ramadan.png";
import businessIcon from "../../../assets/icons/category-icon/business.png";
import cultereIcon from "../../../assets/icons/category-icon/culture.png";
import societyIcon from "../../../assets/icons/category-icon/overpopulation.png";
import langugeIcon from "../../../assets/icons/category-icon/translate.png";
import othersIcon from "../../../assets/icons/category-icon/more.png";

export default function Category() {
  const categoryList = [
    {
      label: "วิทยาศาสตร์",
      icon: scienceIcon,
    },
    {
      label: "คอมพิวเตอ์และเทคโนโลยี",
      icon: computerIcon,
    },
    {
      label: "อิสลามศึกษา",
      icon: islamicIcon,
    },
    {
      label: "ธุรกิจและการจัดการบริหาร",
      icon: businessIcon,
    },
    {
      label: "ศิลปวัฒนธรรมและศาสนา",
      icon: cultereIcon,
    },
    {
      label: "สังคม การเมืองการปกครอง",
      icon: societyIcon,
    },
    {
      label: "ภาษาและการศึกษา",
      icon: langugeIcon,
    },
    {
      label: "อื่น ๆ",
      icon: othersIcon,
    },
  ];
  return (
    <Box my="25px">
      <Typography fontSize="26px">หมวดหมู่รายวิชา</Typography>
      <Box mx="150px" my="25px">
        <Grid container>
          {categoryList.map((item, index) => (
            <Grid item key={index} xs={2.4}>
              <Box sx={classes.catItem}>
                <Avatar sx={classes.cateIcon} src={item.icon} />
                <Typography>{item.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
