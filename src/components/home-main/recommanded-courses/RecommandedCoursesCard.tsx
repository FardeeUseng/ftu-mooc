import React from "react";
// mui and style
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { useRecommandedCoursesCardSyle as classes } from "../HomeMain.style";
// type
import { RecommandedCoursesCardProps } from "../HomeMain.type";

export default function RecommandedCoursesCard(
  props: RecommandedCoursesCardProps
) {
  const { data } = props;
  return (
    <Card sx={classes.card}>
      <CardMedia
        component="img"
        height="180"
        image={require(`../../../${data.course_image}`)}
        alt="green iguana"
      />
      <CardContent>
        <Box sx={classes.cardContent}>
          <Typography>{data.name}</Typography>
          <Typography>{data.description}</Typography>
        </Box>
        <Divider sx={{ my: "20px" }} />
        <Box sx={classes.contentBottom}>
          <Avatar src={require(`../../../${data.category.image}`)} />
          <Typography>{data.category.name}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
