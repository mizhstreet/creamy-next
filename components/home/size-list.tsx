import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { blue, green, pink } from "@material-ui/core/colors";
import React from "react";
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

const SizeList: React.FC = () => {
  const classes = useStyles();
  return (
    <Box ml={-4} mr={-4} paddingTop={1}>
      <Grid container>
        <Grid item md={3}>
          <Box className={classes.container} bgcolor={green[100]}>
            <Overlay />
            <Typography className={classes.sizeName}>キッズ</Typography>
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box className={classes.container} bgcolor={pink[100]}>
            <Typography style={{ color: pink[800] }} className={classes.sizeName}>
              レギュラー
            </Typography>
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box className={classes.container} bgcolor={blue[100]}>
            <Typography style={{ color: blue[800] }} className={classes.sizeName}>
              キング
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export { SizeList };
