import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { grey, red } from "@material-ui/core/colors";
import { useFormikContext } from "formik";
import { IValues } from "./cart-component";

const useStyles = makeStyles({
  applyBtn: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    color: red[400],
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    maxWidth: 160,
    minWidth: 80,
    backgroundColor: red[100],
    "&:hover": {
      backgroundColor: red[100],
    },
  },
  inputField: {
    padding: 15,
    fontWeight: "bold",
    color: grey[600],
    backgroundColor: grey[100],
    border: "none",
    borderRadius: 10,
  },
  inputFieldIcon: {
    color: grey[300],
  },
  fieldLabel: {
    fontWeight: "bold",
    fontSize: 20,
    color: grey[700],
    paddingBottom: 10,
  },
  fieldContainer: {
    marginBottom: 25,
    width: "100%",
  },
  root: {
    borderRadius: 10,
    overflow: "hidden",
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "none",
      borderColor: "green",
    },
  },
});

export const VirtualKeyboard: React.FC = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { setFieldValue, setFieldTouched } = useFormikContext<IValues>();

  const [cash, setCash] = useState<string>("");

  const calcDelete = () => {
    setCash((prev) => {
      return prev.slice(0, -1);
    });
  };

  const btnArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div>
      <Button disableElevation onClick={handleClickOpen} variant="contained" classes={{ contained: classes.applyBtn }}>
        入力
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <TextField
            fullWidth={true}
            variant="outlined"
            className={classes.root}
            inputProps={{ className: classes.inputField }}
            value={cash}
            name="cash"
          />
          <Box mb={6}></Box>
          <Grid container>
            {btnArr.map((num) => (
              <Grid key={num} item md={4} container justify="center" style={{ marginTop: 10, marginBottom: 20 }}>
                <Button
                  onClick={() => {
                    setCash(cash + `${num}`);
                  }}
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  {num}
                </Button>
              </Grid>
            ))}
            <Grid item md={4} container justify="center" style={{ marginTop: 10, marginBottom: 20 }}>
              <Button
                onClick={() => {
                  calcDelete();
                }}
                variant="contained"
                color="secondary"
                disableElevation
              >
                X
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          <Button
            onClick={() => {
              setFieldValue("cash", parseInt(cash));
              setFieldTouched("cash");
              handleClose();
            }}
            color="primary"
          >
            確定
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
