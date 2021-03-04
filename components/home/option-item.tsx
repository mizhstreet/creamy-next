import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";
import React, { useMemo } from "react";
import { Selected } from "../../containers/selected-container";
import { Option } from "../../generated/apolloComponent";
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
    color: purple[800],
  },
  price: {
    fontSize: 16,
  },
});

const OptionItem: React.FC<Pick<Option, "id" | "name" | "image" | "price">> = ({ id, name, image, price }) => {
  const classes = useStyles();
  const container = Selected.useContainer();
  return useMemo(
    () => (
      <Grid item md={3}>
        <Box
          style={{ cursor: "pointer" }}
          position="relative"
          padding={4}
          margin="auto"
          width={"75%"}
          borderRadius={10}
          bgcolor={purple[100]}
          onClick={() => {
            container.setOption({ id, name, price });
          }}
        >
          {container.selected.option?.id == id && <Overlay />}
          <Box width={1} borderRadius={10} bgcolor={"white"}>
            <img className={classes.img} src={image} />
          </Box>
          <Typography className={classes.name} align="center">
            {name}
          </Typography>
          <Typography className={classes.price} style={{ color: green[600] }} align="center">
            {price}円
          </Typography>
        </Box>
      </Grid>
    ),
    [container.selected.option],
  );
};

export { OptionItem };
