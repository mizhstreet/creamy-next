import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { brown, green, orange, purple, yellow } from "@material-ui/core/colors";
import React from "react";
import { Overlay } from "./overlay";

const useStyles = makeStyles({
  img: {
    maxWidth: "100%",
  },
  name: {
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "bold",
    color: green[800],
    minHeight: 70,
  },
  item: {},
});

const FlavorList: React.FC = () => {
  const classes = useStyles();
  return (
    <Box paddingTop={1}>
      <Grid container>
        <Grid item md={2}>
          <Box padding={1} margin="auto" width={"75%"} borderRadius={10} bgcolor={green[200]}>
            <Box width={1} borderRadius={10}>
              <img className={classes.img} src={"/images/flavors/2.png"} />
            </Box>
            <Typography className={classes.name} align="center">
              抹茶
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box position="relative" padding={1} margin="auto" width={"75%"} borderRadius={10} bgcolor={brown[200]}>
            <Overlay />
            <Box width={1} borderRadius={10}>
              <img className={classes.img} src={"/images/flavors/1.png"} />
            </Box>
            <Typography style={{ color: brown[800] }} className={classes.name} align="center">
              ショコラモンブラン
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box padding={1} margin="auto" width={"75%"} borderRadius={10} bgcolor={purple[200]}>
            <Box width={1} borderRadius={10}>
              <img className={classes.img} src={"/images/flavors/3.png"} />
            </Box>
            <Typography style={{ color: purple[800] }} className={classes.name} align="center">
              大納言あずき
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box padding={1} margin="auto" width={"75%"} borderRadius={10} bgcolor={yellow[200]}>
            <Box width={1} borderRadius={10}>
              <img className={classes.img} src={"/images/flavors/6.png"} />
            </Box>
            <Typography style={{ color: yellow[800] }} className={classes.name} align="center">
              大納言あずき
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box padding={1} margin="auto" width={"75%"} borderRadius={10} bgcolor={orange[200]}>
            <Box width={1} borderRadius={10}>
              <img className={classes.img} src={"/images/flavors/4.png"} />
            </Box>
            <Typography style={{ color: orange[800] }} className={classes.name} align="center">
              大納言あずき
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box padding={1} margin="auto" width={"75%"} borderRadius={10} bgcolor={brown[200]}>
            <Box width={1} borderRadius={10}>
              <img className={classes.img} src={"/images/flavors/5.png"} />
            </Box>
            <Typography style={{ color: brown[800] }} className={classes.name} align="center">
              大納言あずき
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <br />
      <Grid container>
        <Grid item md={2}>
          <Box padding={1} margin="auto" width={"75%"} borderRadius={10} bgcolor={yellow[200]}>
            <Box width={1} borderRadius={10}>
              <img className={classes.img} src={"/images/flavors/6.png"} />
            </Box>
            <Typography style={{ color: yellow[800] }} className={classes.name} align="center">
              大納言あずき
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box padding={1} margin="auto" width={"75%"} borderRadius={10} bgcolor={orange[200]}>
            <Box width={1} borderRadius={10}>
              <img className={classes.img} src={"/images/flavors/4.png"} />
            </Box>
            <Typography style={{ color: orange[800] }} className={classes.name} align="center">
              大納言あずき
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box padding={1} margin="auto" width={"75%"} borderRadius={10} bgcolor={green[200]}>
            <Box width={1} borderRadius={10}>
              <img className={classes.img} src={"/images/flavors/2.png"} />
            </Box>
            <Typography className={classes.name} align="center">
              抹茶
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box padding={1} margin="auto" width={"75%"} borderRadius={10} bgcolor={brown[200]}>
            <Box width={1} borderRadius={10}>
              <img className={classes.img} src={"/images/flavors/1.png"} />
            </Box>
            <Typography style={{ color: brown[800] }} className={classes.name} align="center">
              ショコラモンブラン
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box padding={1} margin="auto" width={"75%"} borderRadius={10} bgcolor={purple[200]}>
            <Box width={1} borderRadius={10}>
              <img className={classes.img} src={"/images/flavors/3.png"} />
            </Box>
            <Typography style={{ color: purple[800] }} className={classes.name} align="center">
              大納言あずき
            </Typography>
          </Box>
        </Grid>

        <Grid item md={2}>
          <Box padding={1} margin="auto" width={"75%"} borderRadius={10} bgcolor={brown[200]}>
            <Box width={1} borderRadius={10}>
              <img className={classes.img} src={"/images/flavors/5.png"} />
            </Box>
            <Typography style={{ color: brown[800] }} className={classes.name} align="center">
              大納言あずき
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export { FlavorList };
