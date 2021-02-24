import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { grey, pink } from "@material-ui/core/colors";
import React from "react";
import { Selected, TFlavor } from "../../containers/selected-container";
import { Overlay } from "./overlay";
import { Flavor } from "../../generated/apolloComponent";

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

const FlavorItem: React.FC<TFlavor> = ({ name, id, image }) => {
  const classes = useStyles();
  const container = Selected.useContainer();
  return (
    <Grid item md={2}>
      <Box
        onClick={() => {
          container.addFlavor({ id, name, image });
        }}
        padding={1}
        position={"relative"}
        margin="auto"
        width={"75%"}
        borderRadius={10}
        bgcolor={grey[300]}
        mb={2}
      >
        {container.countFlavors(id) != -1 && (
          <Box>
            <Overlay />
            <Quantity quantity={container.countFlavors(id)} />
          </Box>
        )}
        <Box width={1} borderRadius={10}>
          <img className={classes.img} src={image} />
        </Box>
        <Typography className={classes.name} align="center">
          {name}
        </Typography>
      </Box>
    </Grid>
  );
};

export { FlavorItem };
