import * as React from "react";
import {makeStyles} from "@mui/styles";
import {
  Badge,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import {ArrowDropDown, Favorite, Visibility} from "@mui/icons-material";
import {useRouter} from "next/router";

const styles = makeStyles(() => ({
  header: {
    height: 45,
    backgroundColor: "white",
    display: "flex",
  },
  inner: {
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contChoose: {
    width: 60,
    height: 20,
    marginRight: 40,
    padding: 5,
  },
  headerNavL: {
    marginLeft: 20,
    marginRight: 30,
    fontWeight: 100,
    fontSize: 12,
  },
  headerNavR: {
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 100,
    fontSize: 12,
    "&:hover": {
      borderBottom: "2px solid purple",
    },
  },
  searchHeader: {
    height: 90,
    backgroundColor: "white",
    display: "flex",
  },
  mainLogo: {
    height: 70,
  },
  search: {
    width: 600,
  },
  cart: {
    borderRadius: 13,
  },
  cartImg: {
    height: 50,
  },
  categoryHeader: {
    height: 45,
    backgroundColor: "white",
    display: "flex",
  },
  headerItems: {
    display: "flex",
  },
  category: {
    marginLeft: 20,
    display: "flex",
    textAlign: "center",
  },
  categorys: {
    width: 110,
    height: 45,
    paddingTop: 10,
    borderRadius: "6px 6px 0px 0px",
    position: "relative",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f0f0f0",
      boxShadow: "inset .2px .2px rgba(5, 5, 5, .10)",
      transition: "0.5s",
    },
    "&:hover $dropDown": {
      visibility: "visible",
      opacity: 1,
    },
  },
  dropDown: {
    visibility: "hidden",
    opacity: 0,
    top: 45,
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: "0px 6px 6px 6px",
    boxShadow: "3px 3px 3px rgba(20, 20, 20, .2)",
    transition: "all .5s ease",
  },
  dropItem: {
    height: 45,
    width: 130,
    paddingTop: 10,
    borderRadius: 4,
    textAlign: "center",
    listStyle: "none",
    "&:hover": {
      backgroundColor: "#ddd",
      transition: "0.3s",
    },
  },
}))

export default function Header() {
  const classes = styles()
  const router = useRouter()

  return (
    <>
      <div className={classes.header}>
        <Grid container className={classes.inner}>
          <Grid item>
            <FormControl variant={"standard"} className={classes.contChoose}>
              <Select label="KR" color={"secondary"} defaultValue={10}>
                <MenuItem value={10}>KR</MenuItem>
                <MenuItem value={20}>JP</MenuItem>
                <MenuItem value={30}>CH</MenuItem>
              </Select>
            </FormControl>
            <IconButton onClick={() => {router.push('/')}}>
              <Visibility htmlColor={"#2b2b2b"}/>
            </IconButton>
            <IconButton onClick={() => {router.push('/')}}>
              <Favorite htmlColor={"#2b2b2b"}/>
            </IconButton>
          </Grid>
          <Grid item className={classes.headerItems}>
            <div className={classes.headerItems}>
              <Typography className={classes.headerNavL}>Welcome message</Typography>
            </div>
            <div className={classes.headerItems}>
              <Typography className={classes.headerNavR}>Contact Us</Typography>
              <Typography className={classes.headerNavR}>Sign in</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
      <Divider/>
      <div className={classes.searchHeader}>
        <Grid container className={classes.inner}>
          <img src="/images/MainLogo.png" className={classes.mainLogo}/>
          <TextField variant="filled" placeholder="search..." color="secondary" size="small" className={classes.search}/>
          <Button className={classes.cart}>
            <Badge badgeContent={4} color="error">
              <img src="/images/Cart.png" className={classes.cartImg}/>
            </Badge>
            <ArrowDropDown/>
          </Button>
        </Grid>
      </div>
      <Divider/>
      <div className={classes.categoryHeader}>
        <Grid container className={classes.inner}>
          <Grid item>
            <Grid className={classes.category}>
              <div className={classes.categorys}>
                <div onClick={() => {router.push('/')}}>Home</div>
              </div>
              <div className={classes.categorys}>
                <div>Category</div>
                <div className={classes.dropDown}>
                  <li className={classes.dropItem}>ca 1</li>
                  <li className={classes.dropItem}>ca 2</li>
                  <li className={classes.dropItem}>ca 3</li>
                </div>
              </div>
              <div className={classes.categorys}>
                <div>Special price</div>
                <div className={classes.dropDown}>
                  <li className={classes.dropItem}>ca 1</li>
                  <li className={classes.dropItem}>ca 2</li>
                  <li className={classes.dropItem}>ca 3</li>
                </div>
              </div>
              <div className={classes.categorys}>
                <div>Ranking</div>
                <div className={classes.dropDown}>
                  <li className={classes.dropItem}>ca 1</li>
                  <li className={classes.dropItem}>ca 2</li>
                  <li className={classes.dropItem}>ca 3</li>
                </div>
              </div>
              <div className={classes.categorys}>
                <div>New product</div>
                <div className={classes.dropDown}>
                  <li className={classes.dropItem}>ca 1</li>
                  <li className={classes.dropItem}>ca 2</li>
                  <li className={classes.dropItem}>ca 3</li>
                </div>
              </div>
              <div className={classes.categorys}>
                <div>Sales</div>
                <div className={classes.dropDown}>
                  <li className={classes.dropItem}>ca 1</li>
                  <li className={classes.dropItem}>ca 2</li>
                  <li className={classes.dropItem}>ca 3</li>
                </div>
              </div>
              <div className={classes.categorys}>
                <div>Membership</div>
                <div className={classes.dropDown}>
                  <li className={classes.dropItem}>ca 1</li>
                  <li className={classes.dropItem}>ca 2</li>
                  <li className={classes.dropItem}>ca 3</li>
                </div>
              </div>
              <div className={classes.categorys}>
                <div>Events</div>
                <div className={classes.dropDown}>
                  <li className={classes.dropItem}>ca 1</li>
                  <li className={classes.dropItem}>ca 2</li>
                  <li className={classes.dropItem}>ca 3</li>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  )
}