import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Modal from "./Modal";
import productImage from "./../../assets/products/1.jpg";
import CardBox from "./CardBox";
import { PRODUCTS } from "../../products";
import ComplexGrid from "../common/ComplexGrid";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1, mt: 14 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{mt: 18}}
      >
          {PRODUCTS.map((product, index) => (
            // <ComplexGrid></ComplexGrid>
            <CardBox image={product.productImage}></CardBox>
          ))}
      </Grid>
    </Box>
  );
}
