import * as React from "react";
import {makeStyles} from "@mui/styles";
import {Button, Grid, TextField, Typography} from "@mui/material";

const styles = makeStyles(() => ({
  footer: {
    height: "100%",
    background: "linear-gradient(150deg, #1c004a 10%, #320030 90%)",
  },
  inner: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0px 15px",
    alignItems: "center",
    justifyContent: "center",
    display: "block",
    color: "#fff",
  },
  footerSubs: {
    padding: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "1px solid",
    "@media (max-width:600px)": {
      flexDirection: "column",
    },
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
    display: "block",
    "@media (max-width:600px)": {
      margin: "20px 0px 0px",
    },
  },
  subsInputGroup: {
    display: "flex",
  },
  subsInputBase: {
    width: 200,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: "10px 0px 0px 10px",
  },
  subsBtn: {
    backgroundColor: "#9900cc",
    color: "#fff",
    height: 40,
    borderRadius: "0px 10px 10px 0px",
  },
  footerInfo: {
    display: "flex",
    listStyle: "none",
    maxWidth: 900,
    margin: "0px auto",
    padding: "30px 0px",
    alignItems: "start",
    justifyContent: "space-between",
    "@media (max-width:600px)": {
      maxWidth: 225,
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    },
  },
  coInformation: {
    display: "block",
    "@media (max-width:600px)": {
      marginBottom: 10,
    },
  },
  infoTitle: {
    fontSize: 25,
    marginBottom: 20,
    "@media (max-width:600px)": {
      fontSize: 20,
    },
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
            <div className={classes.subsInputGroup}>
              <TextField variant="outlined" size="small" focused={false} className={classes.subsInputBase}/>
              <Button className={classes.subsBtn}>SUBSCRIBE!</Button>
            </div>
          </div>
        </Grid>
        <Grid item className={classes.footerInfo}>
          <div className={classes.coInformation}>
            <Typography className={classes.infoTitle}>Contact Information</Typography>
            <Typography variant={"body1"}>Address</Typography>
            <Typography className={classes.infoContent}>Baker Street 201</Typography>
            <Typography variant={"body1"}>Phone</Typography>
            <Typography className={classes.infoContent}>+82 4296-1214</Typography>
            <Typography variant={"body1"}>Email</Typography>
            <Typography className={classes.infoContent}>zaca3392@gmail.com</Typography>
          </div>
          <div className={classes.coInformation}>
            <Typography className={classes.infoTitle}>Support</Typography>
            <Typography className={classes.infoContent}>Shipping and Delivery</Typography>
            <Typography className={classes.infoContent}>Returns</Typography>
            <Typography className={classes.infoContent}>Gift cards</Typography>
          </div>
          <div className={classes.coInformation}>
            <Typography className={classes.infoTitle}>About Us</Typography>
            <Typography className={classes.infoContent}>Blog</Typography>
            <Typography className={classes.infoContent}>News</Typography>
            <Typography className={classes.infoContent}>Attribution</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}