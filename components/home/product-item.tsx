import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import React, { useMemo } from "react";
import { Selected } from "../../containers/selected-container";
import { Product } from "../../generated/apolloComponent";
import { IProduct } from "../../interfaces/product";
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

export type TProduct = Omit<Product, "created" | "updated" | "deletedAt">;

const ProductItem: React.FC<TProduct> = ({ id, name, basePrice, totalFlavor, sizes, image }) => {
  const classes = useStyles();

  const container = Selected.useContainer();

  return useMemo(
    () => (
      <Grid item md={4}>
        <Box
          position="relative"
          padding={4}
          margin="auto"
          width={"75%"}
          borderRadius={10}
          bgcolor={green[100]}
          onClick={() => {
            container.setProduct({ id, name, basePrice, totalFlavor, sizes, image });
          }}
        >
          {container.selected.product?.id == id && <Overlay />}
          <Box width={1} borderRadius={10} bgcolor={"white"}>
            <img className={classes.img} src={image} />
          </Box>
          <Typography className={classes.name} align="center">
            {name}
          </Typography>
          <Typography className={classes.price} style={{ color: green[800] }} align="center">
            {basePrice}円
          </Typography>
        </Box>
      </Grid>
    ),
    [container.selected.product?.id],
  );
};

export { ProductItem };
