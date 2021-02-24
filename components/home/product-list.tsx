import { Box, CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { useProductsQuery } from "../../generated/apolloComponent";
import { getImage } from "../../utils/getImage";
import { ProductItem } from "./product-item";

const ProductList: React.FC = () => {
  const { loading, data, error } = useProductsQuery();

  if (loading) {
    if (data?.products) {
      const a = data?.products[0];
      console.log(a);
    }
    return <CircularProgress />;
  }
  if (error) {
    console.warn(error);
  }
  return (
    <Box ml={-4} mr={-4} paddingTop={1}>
      <Grid container>
        {data &&
          data.products &&
          data.products.map((p) => (
            <ProductItem
              key={p.id}
              image={getImage(p.image)}
              id={p.id}
              name={p.name}
              basePrice={p.basePrice}
              totalFlavor={p.totalFlavor}
              sizes={p.sizes as any}
            />
          ))}
      </Grid>
    </Box>
  );
};

export { ProductList };
