import * as React from "react";
import {Grid, IconButton, Rating, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {AddShoppingCart, Favorite, FavoriteBorder, Search} from "@mui/icons-material";

const styles = makeStyles(() => ({
  productCard: {
    width: "auto",
    height: "auto",
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    margin: "0px 10px",
    transition: "box-shadow .4s",
    "&:hover": {
      boxShadow: "1px 5px 10px 3px #ddd",
      color: "#90c",
    },
    "&:hover $productName:before": {
      transform: "scale(1)",
    },
  },
  productImageContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  productImage: {
    width: 200,
    height: "auto",
    margin: "0px 10px",
  },
  productInfo: {
    padding: "0px 15px 20px",
  },
  productName: {
    fontSize: 18,
    fontWeight: "lighter",
    position: "relative",
    marginBottom: 5,
    "&:before": {
      content: "''",
      width: "50%",
      height: 2,
      backgroundColor: "#90c",
      position: "absolute",
      left: "25%",
      right: "25%",
      bottom: -2,
      transformOrigin: "left",
      transform: "scale(0)",
      transition: ".25s linear",
    },
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "bolder",
    color: "#666666",
  },
  productFeature: {

  },
  productRating: {

  },
}))

export default function ProductCard() {
  const classes = styles()

  return (
    <div>
      <Grid container className={classes.productCard}>
        <Grid item style={{textAlign: "center"}}>
          <div>
          <img src='/images/product1.jpeg' className={classes.productImage}/>
          </div>
          <div className={classes.productInfo}>
            <Typography className={classes.productName}>Way it is</Typography>
            <Typography className={classes.productPrice}>$753</Typography>
            <div className={classes.productFeature}>
              <IconButton>
                <AddShoppingCart htmlColor={"#2b2b2b"}/>
              </IconButton>
              <IconButton>
                <FavoriteBorder htmlColor={"#2b2b2b"}/>
              </IconButton>
              <IconButton>
                <Search htmlColor={"#2b2b2b"}/>
              </IconButton>
            </div>
            <div className={classes.productRating}>
              <Rating defaultValue={4.5} precision={0.5} readOnly />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}