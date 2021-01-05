import { Box, makeStyles, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";

const useStyles = makeStyles({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: grey[600],
  },
});

const SubSectionTitle: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Box pt={2} pb={2}>
      <Typography className={classes.text}>{children}</Typography>
    </Box>
  );
};

export { SubSectionTitle };
