import type {NextPage} from 'next'
import {Grid} from "@mui/material";
import {makeStyles} from "@mui/styles";

const styles = makeStyles(() => ({
  wrapper: {
    height: "90vh",
    backgroundColor: "whitesmoke",
  },
  contents: {
    width: "100%",
    height: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    // fontSize: 50,
    // opacity: 0.5,
    // fontWeight: "lighter",
    // alignItems: "center",
    // justifyContent: "center",
  }
}))

const Home: NextPage = () => {
  const classes = styles()

  return (
    <div className={classes.wrapper}>
      <Grid container className={classes.contents}>
        <Grid item>
          {/*CONTENTS*/}
        </Grid>
      </Grid>
    </div>
  )
}

export default Home