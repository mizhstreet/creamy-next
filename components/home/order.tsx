import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { grey, pink, purple } from "@material-ui/core/colors";
import React from "react";

const useStyles = makeStyles({
  img: {
    maxWidth: "100%",
  },
  name: {
    fontWeight: "bold",
    color: grey[900],
    fontSize: 18,
  },
  flavor: {
    fontWeight: "bold",
    color: purple[800],
    fontSize: 14,
  },
  quantity: {
    color: grey[400],
  },
  itemTotal: {
    fontWeight: "bold",
    color: grey[600],
  },
});

const Order: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={12}>
        <Box width={1} pb={3} display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <Box bgcolor={pink[100]} display="block" maxWidth={80} p={1.5} borderRadius={10}>
              <img className={classes.img} src="images/flavors/1.png" alt="" />
            </Box>
            <Box pl={2}>
              <Typography className={classes.name}>シングル</Typography>
              <Typography className={classes.flavor}>大納言あずき</Typography>
              <Typography style={{ color: grey[400] }} className={classes.flavor}>
                100円
              </Typography>
            </Box>
          </Box>
          <Typography className={classes.quantity}>x2</Typography>
          <Typography className={classes.itemTotal}>1000円</Typography>
        </Box>
      </Grid>
      <Grid item md={12}>
        <Box width={1} pb={3} display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <Box bgcolor={pink[100]} display="block" maxWidth={80} p={1.5} borderRadius={10}>
              <img className={classes.img} src="images/flavors/1.png" alt="" />
            </Box>
            <Box pl={2}>
              <Typography className={classes.name}>トリプル</Typography>
              <Typography className={classes.flavor}>大納言あずき</Typography>
              <Typography style={{ color: pink[400] }} className={classes.flavor}>
                大納言あずき
              </Typography>
              <Typography className={classes.flavor}>大納言あずき</Typography>
              <Typography className={classes.flavor}>ショコラモンブラン</Typography>
              <Typography style={{ color: grey[400] }} className={classes.flavor}>
                100円
              </Typography>
            </Box>
          </Box>
          <Typography className={classes.quantity}>x2</Typography>
          <Typography className={classes.itemTotal}>1000円</Typography>
        </Box>
      </Grid>
      <Grid item md={12}>
        <Box width={1} pb={3} display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <Box bgcolor={pink[100]} display="block" maxWidth={80} p={1.5} borderRadius={10}>
              <img className={classes.img} src="images/flavors/1.png" alt="" />
            </Box>
            <Box pl={2}>
              <Typography className={classes.name}>シングル</Typography>
              <Typography className={classes.flavor}>大納言あずき</Typography>
              <Typography style={{ color: grey[400] }} className={classes.flavor}>
                100円
              </Typography>
            </Box>
          </Box>
          <Typography className={classes.quantity}>x2</Typography>
          <Typography className={classes.itemTotal}>1000円</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export { Order };
