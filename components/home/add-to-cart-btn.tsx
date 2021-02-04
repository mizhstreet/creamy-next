import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
import AddShoppingCartTwoToneIcon from "@material-ui/icons/AddShoppingCartTwoTone";
import { Cart } from "../../containers/cart-container";
import { pink } from "@material-ui/core/colors";
import { Selected } from "../../containers/selected-container";

const useStyles = makeStyles({
  icon: {
    fontSize: 22,
  },
  cartBtn: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 10,
    color: pink[800],
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: pink[100],
    "&:hover": {
      backgroundColor: pink[100],
    },
  },
});

const AddToCartBtn: React.FC = () => {
  const selected = Selected.useContainer();
  const cart = Cart.useContainer();
  const classes = useStyles();
  return (
    <Box mt={8} mb={8} textAlign="center">
      <Button
        disableElevation
        variant="contained"
        className={classes.cartBtn}
        startIcon={<AddShoppingCartTwoToneIcon className={classes.icon} />}
        onClick={() => {
          const arr = [...selected.selected.flavors];
          const item1 = { ...selected.selected, flavors: arr, quantity: 1 };
          cart.addToCart(item1);
        }}
      >
        追加
      </Button>
    </Box>
  );
};

export { AddToCartBtn };
