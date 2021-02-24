import { Box, Grid } from "@material-ui/core";
import React from "react";
import { Selected } from "../../containers/selected-container";
import { SectionTitle } from "../typography/section-title";
import { SizeItem } from "./size-item";

const SizeList: React.FC = () => {
  const sizes = Selected.useContainer().selected.product?.sizes;
  if (!sizes || sizes.length == 0) {
    return null;
  }
  return (
    <React.Fragment>
      <SectionTitle component={"h2"}>サイズ</SectionTitle>
      <Box ml={-4} mr={-4} paddingTop={1}>
        <Grid container>
          {sizes.map((s) => (
            <SizeItem key={s.id} id={s.id} name={s.name} price={s.price} />
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export { SizeList };
