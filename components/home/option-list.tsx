import { Box, Grid } from "@material-ui/core";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { IOption } from "../../interfaces/option";
import { OptionItem } from "./option-item";

const OptionList: React.FC = () => {
  const [options, setOptions] = useState<IOption[]>([]);

  const loadOptions = useCallback(() => {
    axios.get<IOption[]>("http://localhost/phpmvc/web/api/option/all").then((response) => {
      setOptions(response.data);
    });
  }, []);

  useEffect(() => {
    loadOptions();
  }, [loadOptions]);

  return (
    <Box ml={-4} mr={-4} paddingTop={1}>
      <Grid container>
        {options.map((o) => (
          <OptionItem key={o.optionid} {...o} />
        ))}
      </Grid>
    </Box>
  );
};

export { OptionList };
