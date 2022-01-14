import * as React from "react";
import {makeStyles} from "@mui/styles";
import {Grid, Typography} from "@mui/material";

const styles = makeStyles(() => ({
  wrapper: {
    width: "100%",
    height: "auto",
    backgroundColor: "#fff",
    "@media (max-width:600px)": {
      height: "auto",
    },
  },
  inner: {
    width: "100%",
    height: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    padding: "10px 0px 10px",
    alignItems: "center",
    justifyContent: "space-between",
    "@media (max-width:600px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  advantages: {
    maxWidth: "30%",
    display: "flex",
    padding: 20,
    alignItems: "center",
    "@media (max-width:600px)": {
      maxWidth: "100%",
    },
  },
  advantagesIcon: {
    width: "30%",
    height: "auto",
    marginRight: 20,
    "@media (max-width:600px)": {
      height: 80,
    },
  },
  advantagesText: {
    color: "#666666",
    fontSize: 15,
    opacity: .8,
  },
}))

export default function MainBanner() {
  const classes = styles()

  return (
    <div className={classes.wrapper}>
      <Grid container className={classes.inner}>
        <Grid item className={classes.advantages}>
          <img src='/images/delivery_icon.png' className={classes.advantagesIcon}/>
          <div>
            <Typography variant="body2">FREE SHIPPING & RETURN</Typography>
            <Typography className={classes.advantagesText}>Free shipping for orders over $9</Typography>
          </div>
        </Grid>
        <Grid item className={classes.advantages}>
          <img src='/images/wallet_icon.png' className={classes.advantagesIcon}/>
          <div>
            <Typography variant="body2">MONEY BACK GUARANTEE</Typography>
            <Typography className={classes.advantagesText}>100% money back guarantee</Typography>
          </div>
        </Grid>
        <Grid item className={classes.advantages}>
          <img src='/images/headphone_icon.png' className={classes.advantagesIcon}/>
          <div>
            <Typography variant="body2">ONLINE SUPPORT 24/7</Typography>
            <Typography className={classes.advantagesText}>24/7 online support</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}