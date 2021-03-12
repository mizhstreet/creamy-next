import { Snackbar } from "@material-ui/core";
import { Alert, AlertProps } from "@material-ui/lab";
import React from "react";

interface IProps {
  open: boolean;
  message: string;
  variant?: AlertProps["severity"];
}

const SnackAlert: React.FC<IProps> = ({ open, message, variant = "success" }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000}>
      <Alert severity={variant}>{message}</Alert>
    </Snackbar>
  );
};

export { SnackAlert };
