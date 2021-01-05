import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { blue, green, pink } from "@material-ui/core/colors";
import React from "react";
import { Overlay } from "./overlay";

const useStyles = makeStyles({
  img: {
    maxWidth: "100%",
  },
  name: {
    paddingTop: 10,
    fontSize: 18,
    paddingBottom: 2,
    fontWeight: "bold",
    color: green[800],
  },
  price: {
    fontSize: 16,
  },
  item: {},
});

const CategoryList: React.FC = () => {
  const classes = useStyles();
  return (
    <Box ml={-4} mr={-4} paddingTop={1}>
      <Grid container>
        <Grid item md={4}>
          <Box position="relative" padding={4} margin="auto" width={"75%"} borderRadius={10} bgcolor={green[100]}>
            <Box width={1} borderRadius={10} bgcolor={"white"}>
              <img className={classes.img} src={"/images/some.png"} />
            </Box>
            <Typography className={classes.name} align="center">
              シングル
            </Typography>
            <Typography className={classes.price} style={{ color: green[800] }} align="center">
              200円
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box position="relative" padding={4} margin="auto" width={"75%"} borderRadius={10} bgcolor={pink[100]}>
            <Overlay />
            <Box width={1} borderRadius={10} bgcolor={"white"}>
              <img className={classes.img} src={"/images/some.png"} />
            </Box>
            <Typography style={{ color: pink[800] }} className={classes.name} align="center">
              ダブル
            </Typography>
            <Typography className={classes.price} style={{ color: pink[800] }} align="center">
              380円
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box padding={4} margin="auto" width={"75%"} borderRadius={10} bgcolor={blue[100]}>
            <Box width={1} borderRadius={10} bgcolor={"white"}>
              <img className={classes.img} src={"/images/some.png"} />
            </Box>
            <Typography style={{ color: blue[800] }} className={classes.name} align="center">
              Triple
            </Typography>
            <Typography className={classes.price} style={{ color: blue[800] }} align="center">
              500円
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export { CategoryList };
