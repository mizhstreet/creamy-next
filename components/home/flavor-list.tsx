import { Box, CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { useFlavorsQuery } from "../../generated/apolloComponent";
import { getImage } from "../../utils/getImage";
import { FlavorItem } from "./flavor-item";

const FlavorList: React.FC = () => {
  const [result] = useFlavorsQuery();

  const { data, fetching, error } = result;

  if (fetching) {
    return <CircularProgress />;
  }

  if (error) {
    console.warn(error);
  }
  return (
    <Box paddingTop={1}>
      <Grid container>
        {data &&
          data.flavors &&
          data.flavors.map((f) => <FlavorItem key={f.id} id={f.id} name={f.name} image={getImage(f.image)} />)}
      </Grid>
    </Box>
  );
};

export { FlavorList };
