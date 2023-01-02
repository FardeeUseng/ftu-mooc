import React from "react";
// mui
import { Box, Grid, Typography } from "@mui/material";
// data and components
import { RecommandedCoursesData as data } from "../../../assets/data/recommandedCoursesData";
import RecommandedCoursesCard from "./RecommandedCoursesCard";

export default function RecommandedCourses() {
  return (
    <Box my="25px">
      <Typography fontSize="26px">รายวิชาแนะนำ</Typography>
      <Box mx="150px" my="25px">
        <Grid container spacing={3}>
          {data.result.data.item.map((item, index) => (
            <Grid key={index} item xs={3}>
              <RecommandedCoursesCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
