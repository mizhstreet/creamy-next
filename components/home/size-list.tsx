import { Box, Grid } from "@material-ui/core";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Selected } from "../../containers/selected-container";
import { ISize } from "../../interfaces/size";
import { SizeItem } from "./size-item";

const SizeList: React.FC = () => {
  const productid = Selected.useContainer().selected.product?.productid;
  const [sizes, setSizes] = useState<ISize[]>([]);

  const loadSizes = useCallback(() => {
    axios
      .get<ISize[]>("http://localhost/phpmvc/web/api/product-size", {
        params: {
          productid,
        },
      })
      .then((response) => {
        setSizes(response.data);
      });
  }, [productid]);

  useEffect(() => {
    loadSizes();
  }, [productid]);

  return (
    <Box ml={-4} mr={-4} paddingTop={1}>
      <Grid container>
        {sizes.map((s) => (
          <SizeItem
            key={s.product_sizeid}
            product_sizeid={s.product_sizeid}
            product_sizename={s.product_sizename}
            additionalprice={s.additionalprice}
          />
        ))}
      </Grid>
    </Box>
  );
};

export { SizeList };
