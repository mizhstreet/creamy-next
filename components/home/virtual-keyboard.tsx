import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { OutlinedTextfield } from "../form/outlined-textfield";
import { Box, Grid } from "@material-ui/core";

export const VirtualKeyboard: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <TextField fullWidth name="email" />
          <Box mb={6}></Box>
          <Grid container>
            <Grid item md={4} container justify="center" style={{ marginTop: 10, marginBottom: 20 }}>
              <Button variant="contained" color="primary" disableElevation>
                1
              </Button>
            </Grid>
            <Grid item md={4} container justify="center" style={{ marginTop: 10, marginBottom: 20 }}>
              <Button variant="contained" color="primary" disableElevation>
                2
              </Button>
            </Grid>
            <Grid item md={4} container justify="center" style={{ marginTop: 10, marginBottom: 20 }}>
              <Button variant="contained" color="primary" disableElevation>
                3
              </Button>
            </Grid>
            <Grid item md={4} container justify="center" style={{ marginTop: 10, marginBottom: 20 }}>
              <Button variant="contained" color="primary" disableElevation>
                4
              </Button>
            </Grid>
            <Grid item md={4} container justify="center" style={{ marginTop: 10, marginBottom: 20 }}>
              <Button variant="contained" color="primary" disableElevation>
                5
              </Button>
            </Grid>
            <Grid item md={4} container justify="center" style={{ marginTop: 10, marginBottom: 20 }}>
              <Button variant="contained" color="primary" disableElevation>
                6
              </Button>
            </Grid>
            <Grid item md={4} container justify="center" style={{ marginTop: 10, marginBottom: 20 }}>
              <Button variant="contained" color="primary" disableElevation>
                7
              </Button>
            </Grid>
            <Grid item md={4} container justify="center" style={{ marginTop: 10, marginBottom: 20 }}>
              <Button variant="contained" color="primary" disableElevation>
                8
              </Button>
            </Grid>
            <Grid item md={4} container justify="center" style={{ marginTop: 10, marginBottom: 20 }}>
              <Button variant="contained" color="primary" disableElevation>
                9
              </Button>
            </Grid>
            <Grid item md={4} container justify="center" style={{ marginTop: 10, marginBottom: 20 }}>
              <Button variant="contained" color="primary" disableElevation>
                0
              </Button>
            </Grid>
            <Grid item md={4} container justify="center" style={{ marginTop: 10, marginBottom: 20 }}>
              <Button variant="contained" color="secondary" disableElevation>
                X
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={handleClose} color="primary">
            確定
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
