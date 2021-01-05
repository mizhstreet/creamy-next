import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "black",
    opacity: 0.4,
    borderRadius: 10,
    width: "100%",
    height: "100%",
    color: "white",
  },
  checked: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
  },
  checkedIcon: {
    fontSize: 50,
    color: grey[200],
  },
});

const Overlay: React.FC = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.overlay}></Box>
      <Box className={classes.checked}>
        <CheckCircleTwoToneIcon className={classes.checkedIcon} />
      </Box>
    </Box>
  );
};

export { Overlay };
