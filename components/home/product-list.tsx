import { Box, Grid } from "@material-ui/core";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { IProduct } from "../../interfaces/product";
import { ProductItem } from "./product-item";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const loadProducts = useCallback(() => {
    axios.get<IProduct[]>("http://localhost/phpmvc/web/api/product/all").then((response) => {
      setProducts(response.data);
    });
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);
  return (
    <Box ml={-4} mr={-4} paddingTop={1}>
      <Grid container>
        {products.map((p) => (
          <ProductItem
            key={p.productid}
            image={"/images/some.png"}
            productid={p.productid}
            productname={p.productname}
            base_price={p.base_price}
            totalflavor={p.totalflavor}
          />
        ))}
      </Grid>
    </Box>
  );
};

export { ProductList };
