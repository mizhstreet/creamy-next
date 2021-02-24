import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { blue, grey, pink, purple } from "@material-ui/core/colors";
import React from "react";
import { IItem } from "../../containers/selected-container";

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

const OrderItem: React.FC<IItem> = ({ product, option, flavors, size }) => {
  const classes = useStyles();
  let total = 0;
  if (product?.basePrice) {
    total += product.basePrice;
  }
  if (option?.price && option.price != 0) {
    total += option.price;
  }
  if (size?.price && size.price != 0) {
    total += size.price;
  }
  return (
    <Grid item md={12}>
      <Box width={1} pb={3} display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Box bgcolor={blue[100]} display="block" maxWidth={80} p={1.5} borderRadius={10}>
            <img className={classes.img} src={product?.image} alt="" />
          </Box>
          <Box pl={2}>
            <Typography className={classes.name}>
              {product?.name}　{size && size?.name}
              {size && size?.price != 0 && `+${size?.price}円`}
            </Typography>
            {flavors.map((f, i) => (
              <Typography key={i} className={classes.flavor}>
                {f.name}
              </Typography>
            ))}
            <Typography style={{ color: grey[400] }} className={classes.flavor}>
              {product?.basePrice} 円
            </Typography>
          </Box>
        </Box>
        <Typography className={classes.quantity}>x1</Typography>
        <Typography className={classes.itemTotal}>{total}円</Typography>
      </Box>
    </Grid>
  );
};

export { OrderItem };
