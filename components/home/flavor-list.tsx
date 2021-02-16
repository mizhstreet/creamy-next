import { Box, Grid } from "@material-ui/core";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { IFlavor } from "../../interfaces/flavor";
import { FlavorItem } from "./flavor-item";
import { Overlay } from "./overlay";

const FlavorList: React.FC = () => {
  const [flavors, setFlavors] = useState<IFlavor[]>([]);

  const loadFlavors = useCallback(() => {
    axios.get<IFlavor[]>("http://localhost/phpmvc/web/api/flavor/all").then((response) => {
      setFlavors(response.data);
    });
  }, []);

  useEffect(() => {
    loadFlavors();
  }, [loadFlavors]);

  return (
    <Box paddingTop={1}>
      <Grid container>
        {flavors.map((f) => (
          <FlavorItem key={f.flavorid} {...f} />
        ))}
      </Grid>
    </Box>
  );
};

export { FlavorList };
