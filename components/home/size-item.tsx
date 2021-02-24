import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { green, pink } from "@material-ui/core/colors";
import React from "react";
import { Selected, TSize } from "../../containers/selected-container";
import { Overlay } from "./overlay";

const useStyles = makeStyles({
  img: {
    maxWidth: "100%",
  },
  sizeName: {
    paddingTop: 10,
    fontSize: 30,
    paddingBottom: 2,
    fontWeight: "bold",
    color: green[800],
  },
  price: {
    fontSize: 16,
  },
  container: {
    position: "relative",
    padding: 32,
    margin: "auto",
    width: "75%",
    borderRadius: 10,
    cursor: "pointer",
    textAlign: "center",
  },
});
const SizeItem: React.FC<TSize> = ({ id, name, price }) => {
  const classes = useStyles();

  const container = Selected.useContainer();

  return (
    <Grid item md={3}>
      <Box
        className={classes.container}
        bgcolor={pink[100]}
        onClick={() => {
          container.setSize({
            id,
            name,
            price,
          });
        }}
      >
        {container.selected.size?.id == id && <Overlay />}
        <Typography style={{ color: pink[800] }} className={classes.sizeName}>
          {name}
        </Typography>
        <Typography style={{ color: pink[800] }} className={classes.sizeName}>
          {price}円
        </Typography>
      </Box>
    </Grid>
  );
};

export { SizeItem };
