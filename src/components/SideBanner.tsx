import * as React from "react";
import {Grid} from "@mui/material";
import {makeStyles} from "@mui/styles";

const styles = makeStyles(() => ({
  sidebar: {
    width: 345,
    height: 620,
  },
  sidebarBannerImage: {
    width: 345,
    height: 620,
    borderRadius: 10,
  },
}))

export default function SubBanner() {
  const classes = styles()

  return (
    <>
      <Grid className={classes.sidebar}>
        <img src='/images/sidebar_banner_1.png'  className={classes.sidebarBannerImage}/>
      </Grid>
    </>
  )
}