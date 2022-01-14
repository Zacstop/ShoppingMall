import * as React from "react";
import {Grid} from "@mui/material";
import {makeStyles} from "@mui/styles";

const styles = makeStyles(() => ({
  sidebar: {
    width: "100%",
    height: "auto",
  },
  sidebarBannerImage: {
    width: "100%",
    height: "auto",
    borderRadius: 10,
  },
}))

export default function SideBanner() {
  const classes = styles()

  return (
    <>
      <Grid className={classes.sidebar}>
        <img src='/images/sidebar_banner_1.png'  className={classes.sidebarBannerImage}/>
      </Grid>
    </>
  )
}