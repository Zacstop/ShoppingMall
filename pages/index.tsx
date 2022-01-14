import type {NextPage} from 'next'
import {Grid} from "@mui/material";
import {makeStyles} from "@mui/styles";
import MainBanner from "../src/components/MainBanner";
import AdvantageItem from "../src/components/AdvantageItem"
import SideBanner from "../src/components/SideBanner";
import SubBanner from "../src/components/SubBanner";
import MainShowCase from "../src/components/MainShowCase";

const styles = makeStyles((theme) => ({
  wrapper: {
    height: "80vh",
    backgroundColor: "whitesmoke",
  },
  contents: {
    width: "100%",
    height: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0px 10px"
  },
  sidebarBanner: {
    width: "30%",
    padding: "20px 10px 20px 0px",
    "@media (max-width:600px)": {
      display: "none",
    },
  },
  mainProductList: {
    width: "70%",
    padding: "20px 0px 20px 20px",
    "@media (max-width:600px)": {
      width: "100%",
      padding: "20px 0px",
    },
  },
}))

const Home: NextPage = () => {
  const classes = styles()

  return (
    <>
      <MainBanner/>
      <AdvantageItem/>
      <div className={classes.wrapper}>
        <Grid container className={classes.contents}>
          <Grid item className={classes.sidebarBanner}>
            <SideBanner/>
          </Grid>
          <Grid item className={classes.mainProductList}>
            <SubBanner/>
            <MainShowCase/>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Home