import * as React from "react";
import {makeStyles} from "@mui/styles";
import {Button, Grid, TextField, Typography} from "@mui/material";

const styles = makeStyles(() => ({
  footer: {
    height: 400,
    background: "linear-gradient(150deg, #1c004a 10%, #320030 90%)",
  },
  inner: {
    width: "100%",
    height: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "center",
    display: "block",
    color: "white",
  },
  footerSubs: {
    padding: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  subsTitle: {
    fontSize: 29,
    fontWeight: 100,
  },
  subsContent: {
    fontSize: 15,
    fontWeight: 100,
  },
  subsInput: {
    marginLeft: 50,
  },
  subsInputBase: {
    width: 200,
    height: 40,
    backgroundColor: "white",
    borderRadius: "10px 0px 0px 10px",
  },
  subsBtn: {
    backgroundColor: "#9900cc",
    color: "white",
    height: 40,
    borderRadius: "0px 10px 10px 0px",
  },
  footerInfo: {
    display: "flex",
    listStyle: "none",
    maxWidth: 900,
    margin: "0px 135px",
    padding: "30px 0px",
    alignItems: "start",
    justifyContent: "space-between",
  },
  coInformation: {
    display: "block",
  },
  infoTitle: {
    marginBottom: 20,
  },
  infoContent: {
    marginBottom: 10,
    opacity: 0.7,
    fontSize: 13,
  },
}))

export default function Footer() {
  const classes = styles()

  return (
    <div className={classes.footer}>
      <Grid container className={classes.inner}>
        <Grid item className={classes.footerSubs}>
          <div>
            <Typography className={classes.subsTitle}>Subscribe newsletter</Typography>
            <Typography className={classes.subsContent}>Don't miss our special offers and sales!</Typography>
          </div>
          <div className={classes.subsInput}>
            <div>
            <TextField variant="outlined" size="small" focused={false} className={classes.subsInputBase}/>
            <Button className={classes.subsBtn}>SUBSCRIBE!</Button>
            </div>
          </div>
        </Grid>
        <Grid item className={classes.footerInfo}>
          <div className={classes.coInformation}>
            <Typography variant={"h5"} className={classes.infoTitle}>Contact Information</Typography>
            <Typography variant={"body1"}>Address</Typography>
            <Typography className={classes.infoContent}>Baker Street 201</Typography>
            <Typography variant={"body1"}>Phone</Typography>
            <Typography className={classes.infoContent}>+82 4296-1214</Typography>
            <Typography variant={"body1"}>Email</Typography>
            <Typography className={classes.infoContent}>zaca3392@gmail.com</Typography>
          </div>
          <div className={classes.coInformation}>
            <Typography variant={"h5"} className={classes.infoTitle}>Support</Typography>
            <Typography className={classes.infoContent}>Shipping and Delivery</Typography>
            <Typography className={classes.infoContent}>Returns</Typography>
            <Typography className={classes.infoContent}>Gift cards</Typography>
          </div>
          <div className={classes.coInformation}>
            <Typography variant={"h5"} className={classes.infoTitle}>About Us</Typography>
            <Typography className={classes.infoContent}>Blog</Typography>
            <Typography className={classes.infoContent}>News</Typography>
            <Typography className={classes.infoContent}>Attribution</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}