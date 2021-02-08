import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { grey, pink } from "@material-ui/core/colors";
import findIndex from "lodash.findindex";
import filter from "lodash.filter";
import React from "react";
import { Selected } from "../../containers/selected-container";
import { IFlavor } from "../../interfaces/flavor";
import { Overlay } from "./overlay";

const useStyles = makeStyles({
  img: {
    maxWidth: "100%",
  },
  name: {
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "bold",
    color: grey[800],
    minHeight: 70,
  },
  item: {},
});

const Quantity: React.FC<{ quantity: number }> = ({ quantity }) => {
  return (
    <Box>
      <Box position="absolute" right={10} top={5} color={"white"} fontSize={30}>
        +{quantity}
      </Box>
    </Box>
  );
};

const FlavorItem: React.FC<IFlavor> = ({ flavorname, flavorid, image = "/images/flavors/2.png" }) => {
  const classes = useStyles();
  const container = Selected.useContainer();
  return (
    <Grid item md={2}>
      <Box
        onClick={() => {
          container.addFlavor({ flavorid, flavorname });
        }}
        padding={1}
        position={"relative"}
        margin="auto"
        width={"75%"}
        borderRadius={10}
        bgcolor={grey[300]}
      >
        {container.countFlavors(flavorid) != -1 && (
          <Box>
            <Overlay />
            <Quantity quantity={container.countFlavors(flavorid)} />
          </Box>
        )}
        <Box width={1} borderRadius={10}>
          <img className={classes.img} src={image} />
        </Box>
        <Typography className={classes.name} align="center">
          {flavorname}
        </Typography>
      </Box>
    </Grid>
  );
};

export { FlavorItem };
