import * as React from "react";
import {Box, Grid} from "@mui/material";
import {makeStyles} from "@mui/styles";
import ProductCard from "./ProductCard";

const styles = makeStyles(() => ({
  mainShowCase: {
    width: "100%",
    height: "60%",
    display: "block",
    margin: "20px 0px",
    padding: "15px 0px",
  },
  inner: {
    width: "100%",
    height: "auto",
  },
  showCase: {
    width: "100%",
    height: 420,
    padding: "10px 0px",
    borderRadius: 10,
  },
}))

export default function MainShowCase() {
  const classes = styles()

  return (
    <div className={classes.mainShowCase}>
      <Box className={classes.inner}>
        <Grid container className={classes.showCase}>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </Grid>
      </Box>
    </div>
  )
}