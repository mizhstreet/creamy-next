import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { grey, pink, purple } from "@material-ui/core/colors";
import React from "react";

const useStyles = makeStyles({
  container: {
    backgroundColor: grey[100],
    padding: 20,
    borderRadius: 20,
    marginBottom: 30,
  },
  img: {
    maxWidth: "100%",
  },
  name: {
    fontWeight: "bold",
    color: grey[900],
    fontSize: 20,
  },
  price: {
    marginTop: 5,
    fontWeight: "bold",
    color: grey[600],
  },
  flavor: {
    fontWeight: "bold",
    color: purple[800],
    fontSize: 14,
  },
  quantity: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    backgroundColor: purple[50],
    color: purple[500],
    fontWeight: "bolder",
  },
  itemTotal: {
    paddingRight: 20,
    fontSize: 25,
    fontWeight: "bold",
    color: grey[800],
  },
});

const ReceiptItem: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container} container>
      <Grid item md={6}>
        <Box display="flex" width={1}>
          <Box bgcolor={pink[100]} display="block" maxWidth={100} p={1.5} borderRadius={10}>
            <img className={classes.img} src="images/flavors/1.png" alt="" />
          </Box>
          <Box pl={1.5}>
            <Typography className={classes.name}>シングル</Typography>
            <Typography className={classes.flavor}>大納言あずき</Typography>
            <Typography className={classes.price}>100円</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box display="flex" height={1} justifyContent="space-between" alignItems="center">
          <Typography className={classes.quantity}>2</Typography>
          <Typography className={classes.itemTotal}>1000円</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export { ReceiptItem };
