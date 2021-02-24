import { Box, CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { OptionItem } from "./option-item";
import { getImage } from "../../utils/getImage";
import { useOptionsQuery } from "../../generated/apolloComponent";

const OptionList: React.FC = () => {
  const { loading, data, error } = useOptionsQuery();
  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    console.warn(error);
  }
  return (
    <Box ml={-4} mr={-4} paddingTop={1}>
      <Grid container>
        {data &&
          data.options &&
          data.options.map((o) => (
            <OptionItem key={o.id} name={o.name} price={o.price} id={o.id} image={getImage(o.image)} />
          ))}
      </Grid>
    </Box>
  );
};

export { OptionList };
