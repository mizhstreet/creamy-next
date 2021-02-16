import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  InputLabel,
  makeStyles,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import { blue, green, grey, pink, red } from "@material-ui/core/colors";
import React from "react";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import WarningTwoToneIcon from "@material-ui/icons/WarningTwoTone";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { SectionTitle } from "../../../components/typography/section-title";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { Page } from "../../../components/page";
import { Field, Form, Formik } from "formik";
import { OutlinedTextfield } from "../../../components/form/outlined-textfield";
import { ProductList } from "../../../components/admin/products/product-list";
import { OptionList } from "../../../components/admin/products/option-list";
import { FlavorList } from "../../../components/admin/products/flavor-list";

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
  newBtn: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    color: blue[800],
    fontWeight: "bold",
    fontSize: 16,
    backgroundColor: blue[100],
    "&:hover": {
      backgroundColor: blue[100],
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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UsersPage: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Page title={"レジ"}>
      <Grid container>
        <Box width={1} pl={5} pr={5}>
          <Box width={1} display="flex" justifyContent="space-between" alignItems="center">
            <SectionTitle component="h2">商品管理</SectionTitle>
            <Button
              disableElevation
              variant="contained"
              className={classes.newBtn}
              startIcon={<AddCircleTwoToneIcon className={classes.icon} />}
            >
              登録
            </Button>
          </Box>
          <Grid item md={12}>
            <ProductList />
          </Grid>
        </Box>
        <Box width={1} pl={5} pr={5}>
          <Box width={1} display="flex" justifyContent="space-between" alignItems="center">
            <SectionTitle component="h2">容器管理</SectionTitle>
            <Button
              disableElevation
              variant="contained"
              className={classes.newBtn}
              startIcon={<AddCircleTwoToneIcon className={classes.icon} />}
            >
              登録
            </Button>
          </Box>
          <Grid item md={12}>
            <OptionList />
          </Grid>
        </Box>
        <Box width={1} pl={5} pr={5}>
          <Box width={1} display="flex" justifyContent="space-between" alignItems="center">
            <SectionTitle component="h2">フレーバー管理</SectionTitle>
            <Button
              disableElevation
              variant="contained"
              className={classes.newBtn}
              startIcon={<AddCircleTwoToneIcon className={classes.icon} />}
            >
              登録
            </Button>
          </Box>
          <Grid item md={12}>
            <FlavorList />
          </Grid>
        </Box>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">本当に削除しますか？</DialogTitle>
          <Button onClick={handleClose} color="secondary">
            削除
          </Button>
        </Dialog>
        {/* <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">発注</DialogTitle>
          <DialogContent>
            <DialogContentText>値段: 230円</DialogContentText>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Box width={1} display="flex" alignItems="center">
                <Box maxWidth={60} bgcolor={pink[100]} borderRadius={10}>
                  <img className={classes.img} src={"/images/4.png"} />
                </Box>
                <Typography className={classes.name}>コーン</Typography>
              </Box>
              <Box>
                <Formik
                  initialValues={{ quantity: 0 }}
                  onSubmit={async (values, { setSubmitting }) => {
                    console.log("something");
                    setSubmitting(true);
                  }}
                >
                  {() => (
                    <Form>
                      <Box width={1}>
                        <Box width={1}>
                          <Field component={OutlinedTextfield} name="quantity" />
                        </Box>
                      </Box>
                    </Form>
                  )}
                </Formik>
              </Box>
              <Box width={1} textAlign="center">
                <Typography className={classes.orderPricing}>6000円</Typography>
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              キャンセル
            </Button>
            <Button onClick={handleClose} color="primary">
              発注
            </Button>
          </DialogActions>
        </Dialog> */}
      </Grid>
    </Page>
  );
};

export default UsersPage;
