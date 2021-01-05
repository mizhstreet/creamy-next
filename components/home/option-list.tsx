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
});

const OptionList: React.FC = () => {
  const classes = useStyles();
  return (
    <Box ml={-4} mr={-4} paddingTop={1}>
      <Grid container>
        <Grid item md={3}>
          <Box
            style={{ cursor: "pointer" }}
            position="relative"
            padding={4}
            margin="auto"
            width={"75%"}
            borderRadius={10}
            bgcolor={green[100]}
          >
            <Overlay />
            <Box width={1} borderRadius={10} bgcolor={"white"}>
              <img className={classes.img} src={"/images/some.png"} />
            </Box>
            <Typography className={classes.name} align="center">
              カップ
            </Typography>
            <Typography className={classes.price} style={{ color: green[600] }} align="center">
              0円
            </Typography>
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box padding={4} margin="auto" width={"75%"} borderRadius={10} bgcolor={pink[100]}>
            <Box width={1} borderRadius={10} bgcolor={"white"}>
              <img className={classes.img} src={"/images/some.png"} />
            </Box>
            <Typography style={{ color: pink[800] }} className={classes.name} align="center">
              コーン
            </Typography>
            <Typography className={classes.price} style={{ color: pink[600] }} align="center">
              0円
            </Typography>
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box padding={4} margin="auto" width={"75%"} borderRadius={10} bgcolor={blue[100]}>
            <Box width={1} borderRadius={10} bgcolor={"white"}>
              <img className={classes.img} src={"/images/some.png"} />
            </Box>
            <Typography style={{ color: blue[800] }} className={classes.name} align="center">
              ワッフルコーン
            </Typography>
            <Typography className={classes.price} style={{ color: blue[800] }} align="center">
              40円
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export { OptionList };
