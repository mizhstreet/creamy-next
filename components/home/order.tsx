import { Grid } from "@material-ui/core";
import React from "react";
import { Cart } from "../../containers/cart-container";
import { OrderItem } from "./order-item";

const Order: React.FC = () => {
  const cart = Cart.useContainer();
  console.log(cart.items);
  return (
    <Grid container>
      {cart.items.map((item, i) => (
        <OrderItem key={i} {...item} />
      ))}
    </Grid>
  );
};

export { Order };
