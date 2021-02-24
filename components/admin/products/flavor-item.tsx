import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from "@material-ui/core";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import { blue, green, grey, pink, red } from "@material-ui/core/colors";
import { IFlavor } from "../../../interfaces/flavor";
import WarningTwoToneIcon from "@material-ui/icons/WarningTwoTone";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { OutlinedTextfield } from "../../form/outlined-textfield";
import { getImage } from "../../../utils/getImage";

const useStyles = makeStyles({
  img: {
    maxWidth: "100%",
    borderRadius: "50%",
  },
  name: {
    paddingLeft: 20,
    fontWeight: "bolder",
  },
  icon: {
    fontSize: 22,
  },
  btn: {
    maxWidth: "40px",
    maxHeight: "40px",
    minWidth: "40px",
    minHeight: "40px",
    marginLeft: 4,
    marginRight: 4,
  },
  editBtn: {
    maxWidth: "40px",
    maxHeight: "40px",
    minWidth: "40px",
    minHeight: "40px",
    paddingTop: 10,
    marginLeft: 4,
    marginRight: 4,
    paddingBottom: 10,
    borderRadius: 10,
    color: blue[400],
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    backgroundColor: blue[100],
    "&:hover": {
      backgroundColor: blue[100],
    },
  },
  orderBtn: {
    marginLeft: 4,
    marginRight: 4,
    maxWidth: "40px",
    maxHeight: "40px",
    minWidth: "40px",
    minHeight: "40px",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    color: green[400],
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    backgroundColor: green[100],
    "&:hover": {
      backgroundColor: green[100],
    },
  },
  deleteBtn: {
    marginLeft: 4,
    marginRight: 4,
    maxWidth: "40px",
    maxHeight: "40px",
    minWidth: "40px",
    minHeight: "40px",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    color: red[400],
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    backgroundColor: red[100],
    "&:hover": {
      backgroundColor: red[100],
    },
  },
  orderPricing: {
    fontWeight: "bold",
    color: grey[600],
  },
  tableContainer: {},
  table: {
    borderRadius: 10,
    overflow: "hidden",
  },
  tableHeadline: {
    fontWeight: "bold",
    fontSize: 20,
    color: grey[800],
    backgroundColor: grey[100],
    border: "none",
  },
  tableCell: {
    borderBottom: "1px solid",
    borderBottomColor: grey[200],
    fontSize: 18,
  },
  tableHead: {},
});

const FlavorItem: React.FC<IFlavor> = ({ flavorid, flavorname, stock, stock_price, image }) => {
  const classes = useStyles();

  const [cachedQuantity, setCachedQuantity] = useState<number>(-1);

  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  const [open, setOpen] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleDelete = async () => {
    await axios.post("/web/api/flavor/delete", { flavorid }).then((response) => {
      if (response.data == "ok") {
        setIsDeleted(true);
      }
    });
    handleDeleteClose();
  };

  const handleStock = async (quantity: string) => {
    await axios.post("/web/api/flavor/add-to-stock", { flavorid, quantity }).then((response) => {
      console.log(response.data);
      if (response.data == "ok") {
        if (cachedQuantity == -1) {
          setCachedQuantity(parseInt(stock) + parseInt(quantity));
        } else {
          setCachedQuantity(cachedQuantity + parseInt(quantity));
        }
      }
    });
    handleClose();
  };
  return !isDeleted ? (
    <TableRow>
      <TableCell className={classes.tableCell}>#{flavorid}</TableCell>
      <TableCell className={classes.tableCell}>
        <Box width={1} display="flex" alignItems="center">
          <Box maxWidth={60}>
            <img className={classes.img} src={getImage(image)} />
          </Box>
          <Typography className={classes.name}>{flavorname}</Typography>
        </Box>
      </TableCell>
      <TableCell className={classes.tableCell}>
        <Box width={1} display="flex" alignItems="center">
          {cachedQuantity == -1 ? <Box>{stock}</Box> : cachedQuantity}
          {parseInt(stock) < 10 && cachedQuantity < 10 && (
            <Tooltip title="もうすぐなくなる">
              <WarningTwoToneIcon style={{ color: red[400] }} />
            </Tooltip>
          )}
        </Box>
      </TableCell>
      <TableCell className={classes.tableCell}>
        <Button disableElevation className={classes.editBtn} variant="contained">
          <EditTwoToneIcon className={classes.icon} />
        </Button>
        <Button onClick={handleDeleteOpen} disableElevation className={classes.deleteBtn} variant="contained">
          <DeleteTwoToneIcon className={classes.icon} />
        </Button>
        <Button onClick={handleClickOpen} disableElevation className={classes.orderBtn} variant="contained">
          <AddShoppingCartIcon className={classes.icon} />
        </Button>
      </TableCell>
      <Formik
        initialValues={{ quantity: "0" }}
        onSubmit={async (values, { setSubmitting }) => {
          console.log("something");
          setSubmitting(true);
        }}
      >
        {(props) => (
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">発注</DialogTitle>

            <DialogContent>
              <DialogContentText>値段: {stock_price}円</DialogContentText>
              <Box display="flex" flexDirection="row" alignItems="center">
                <Box width={1} display="flex" alignItems="center">
                  <Box maxWidth={60} bgcolor={pink[100]} borderRadius={10}>
                    <img className={classes.img} src={getImage(image)} />
                  </Box>
                  <Typography className={classes.name}>{flavorname}</Typography>
                </Box>
                <Box>
                  <Form>
                    <Box width={1}>
                      <Box width={1}>
                        <Field component={OutlinedTextfield} name="quantity" />
                      </Box>
                    </Box>
                    <Box width={1} textAlign="center">
                      <Typography className={classes.orderPricing}>
                        {parseInt(props.values.quantity) * parseInt(stock_price)}円
                      </Typography>
                    </Box>
                  </Form>
                </Box>
              </Box>
            </DialogContent>

            <DialogActions>
              <Button onClick={handleClose} color="primary">
                キャンセル
              </Button>
              <Button
                onClick={() => {
                  handleStock(props.values.quantity);
                }}
                color="primary"
              >
                発注
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Formik>
      <Dialog
        open={deleteOpen}
        keepMounted
        onClose={handleDeleteClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">本当に削除しますか？</DialogTitle>
        <Button onClick={handleDelete} color="secondary">
          削除
        </Button>
      </Dialog>
    </TableRow>
  ) : null;
};

export { FlavorItem };
