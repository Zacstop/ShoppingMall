import * as React from "react";
import {makeStyles} from "@mui/styles";

const styles = makeStyles(() => ({
  wrapper: {
    width: "100%",
    height: "auto",
  },
  mainBanner: {
    width: "100%",
    height: "auto",
    margin: "0 auto"
  },
}))

export default function MainBanner() {
  const classes = styles()

  return (
    <div className={classes.wrapper}>
      <img src='/images/main_banner_1.png' className={classes.mainBanner}/>
    </div>
  )
}