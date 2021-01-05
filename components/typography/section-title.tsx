import { makeStyles, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";

interface IProps {
  component: any;
}

const useStyles = makeStyles({
  heading: {
    fontSize: 35,
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 20,
    color: grey[800],
  },
});

const SectionTitle: React.FC<IProps> = ({ component, children }) => {
  const classes = useStyles();
  return (
    <Typography component={component} className={classes.heading}>
      {children}
    </Typography>
  );
};

export { SectionTitle };
