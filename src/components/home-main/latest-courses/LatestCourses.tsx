import React from "react";
// mui
import { Box, Grid, Typography } from "@mui/material";
// data and components
import { LatestCoursesData as data } from "../../../assets/data/latestCoursesData";
import LatestCoursesCard from "./LatestCoursesCard";

export default function LatestCourses() {
  return (
    <Box m="50px 0 25px 0">
      <Typography fontSize="26px">รายวิชาล่าสุด</Typography>
      <Box mx="150px" my="25px">
        <Grid container spacing={3}>
          {data.result.data.item.map((item, index) => (
            <Grid key={index} item xs={3}>
              <LatestCoursesCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
