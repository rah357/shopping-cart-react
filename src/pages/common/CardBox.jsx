import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import I1 from "./../../assets/products/1.jpg";
import Modal from "./Modal";
import "./CardBox.css"

export default function MultiActionAreaCard({image}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100px"
          wid
          image={image}
          alt="green iguana"
        />
        <Grid></Grid>
      </CardActionArea>
      <CardActions>
        <Modal></Modal>
      </CardActions>
    </Card>
  );
}
