import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { blue, grey, pink, purple } from "@material-ui/core/colors";
import React from "react";
import { Product, ReceiptItem as ReceiptItemType } from "../../generated/apolloComponent";
import { IReceiptItem } from "../../interfaces/receipt-items";
import { getImage } from "../../utils/getImage";

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

const ReceiptItem: React.FC<
  Pick<ReceiptItemType, "flavors" | "price" | "sizeName" | "optionName" | "optionPrice" | "sizePrice" | "quantity"> & {
    product: Pick<Product, "id" | "name" | "image"> | undefined | null;
  }
> = ({ flavors, price, sizeName, optionName, optionPrice, sizePrice, product, quantity }) => {
  function renderFlavors(flavors: string) {
    const flavorsArr = flavors.slice(0, -1).split(",");
    return flavorsArr.map((f, i) => (
      <Typography key={i} className={classes.flavor}>
        {f}
      </Typography>
    ));
  }
  const classes = useStyles();
  return (
    <Grid className={classes.container} container>
      <Grid item md={6}>
        <Box display="flex" width={1}>
          <Box
            textAlign="center"
            bgcolor={blue[100]}
            display="flex"
            alignItems="center"
            maxWidth={90}
            p={1}
            borderRadius={10}
          >
            <img className={classes.img} src={getImage(product ? product.image : "")} alt="" />
          </Box>
          <Box pl={1.5}>
            <Typography className={classes.name}>
              {product?.name}　{sizeName}+{sizePrice}円
            </Typography>
            {renderFlavors(flavors)}
            <Typography className={classes.price}>
              {optionName}
              {optionPrice != 0 && `+${optionPrice}円`}
            </Typography>
            <Typography className={classes.price}>{price}円</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box display="flex" height={1} justifyContent="space-between" alignItems="center">
          <Typography className={classes.quantity}>{quantity}</Typography>
          <Typography className={classes.itemTotal}>{((sizePrice || 0) + price + optionPrice) * quantity}円</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export { ReceiptItem };
