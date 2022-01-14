import * as React from "react";
import {Grid} from "@mui/material";
import {makeStyles} from "@mui/styles";

const styles = makeStyles(() => ({
  subBanner: {
    width: "100%",
    height: "auto",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
  },
  bannerImage: {
    width: "30%",
    height: "auto",
    borderRadius: 10,
    transition: "filter .4s",
    "&:hover": {
      filter: "brightness(0.8)",
    },
  },
}))

export default function SubBanner() {
  const classes = styles()

  return (
    <div>
      <Grid container>
        <Grid item className={classes.subBanner}>
          <img src='/images/sub_banner_1.jpeg' className={classes.bannerImage}/>
          <img src='/images/sub_banner_2.jpeg' className={classes.bannerImage}/>
          <img src='/images/sub_banner_3.jpeg' className={classes.bannerImage}/>
        </Grid>
      </Grid>
    </div>
  )
}