import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { grey, pink, purple } from "@material-ui/core/colors";
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
  if (product?.base_price) {
    total += parseInt(product.base_price as any);
  }
  if (option?.price && option.price != 0) {
    total += parseInt(option?.price as any);
  }
  if (size?.additionalprice && size.additionalprice != 0) {
    total += parseInt(size.additionalprice as any);
  }
  console.log(total);
  return (
    <Grid item md={12}>
      <Box width={1} pb={3} display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Box bgcolor={pink[100]} display="block" maxWidth={80} p={1.5} borderRadius={10}>
            <img className={classes.img} src="images/flavors/1.png" alt="" />
          </Box>
          <Box pl={2}>
            <Typography className={classes.name}>
              {product?.productname}　{size && size?.product_sizename}
              {size && size?.additionalprice != 0 && `+${size?.additionalprice}円`}
            </Typography>
            {flavors.map((f, i) => (
              <Typography key={i} className={classes.flavor}>
                {f.flavorname}
              </Typography>
            ))}
            <Typography style={{ color: grey[400] }} className={classes.flavor}>
              {product?.base_price} 円
            </Typography>
          </Box>
        </Box>
        <Typography className={classes.quantity}>x1</Typography>
        <Typography className={classes.itemTotal}>{total}</Typography>
      </Box>
    </Grid>
  );
};

export { OrderItem };
