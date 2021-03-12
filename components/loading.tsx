import { Box, makeStyles } from "@material-ui/core";
import { HashLoader } from "react-spinners";
import React from "react";

interface IProps {
  open: boolean;
}

const useStyles = makeStyles({
  centered: {
    position: "fixed",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "red",
    zIndex: 9999,
  },
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9998,
  },
});

const Loading: React.FC<IProps> = ({ open }) => {
  const classes = useStyles();
  return open ? (
    <Box className={classes.container}>
      <Box className={classes.centered}>
        <Box position="relative">
          <HashLoader size={70} color="white" />
        </Box>
      </Box>
    </Box>
  ) : null;
};

export { Loading };
