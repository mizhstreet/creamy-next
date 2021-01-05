import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Grid,
  makeStyles,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import { blue, grey, red } from "@material-ui/core/colors";
import React from "react";
import PersonAddTwoToneIcon from "@material-ui/icons/PersonAddTwoTone";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import { SectionTitle } from "../../../components/typography/section-title";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { Page } from "../../../components/page";

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
            <SectionTitle component="h2">Users</SectionTitle>
            <Button
              disableElevation
              variant="contained"
              className={classes.newBtn}
              startIcon={<PersonAddTwoToneIcon className={classes.icon} />}
            >
              登録
            </Button>
          </Box>
          <Grid style={{ height: 1000 }} item md={12}>
            <TableContainer className={classes.tableContainer}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell className={classes.tableHeadline}>Id</TableCell>
                    <TableCell className={classes.tableHeadline}>名前</TableCell>
                    <TableCell className={classes.tableHeadline}>入社日</TableCell>
                    <TableCell className={classes.tableHeadline}>役割</TableCell>
                    <TableCell className={classes.tableHeadline}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableCell}>#12312</TableCell>
                    <TableCell className={classes.tableCell}>
                      <Box width={1} display="flex" alignItems="center">
                        <Box maxWidth={60}>
                          <img className={classes.img} src={"/images/matthew-mather.jpg"} />
                        </Box>
                        <Typography className={classes.name}>大平　岳将</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.tableCell}>2011/18/20</TableCell>
                    <TableCell className={classes.tableCell}>管理者</TableCell>
                    <TableCell className={classes.tableCell}>
                      <Button disableElevation className={classes.editBtn} variant="contained">
                        <EditTwoToneIcon className={classes.icon} />
                      </Button>
                      <Button
                        disableElevation
                        className={classes.deleteBtn}
                        onClick={handleClickOpen}
                        variant="contained"
                      >
                        <DeleteTwoToneIcon className={classes.icon} />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableCell}>#82362</TableCell>
                    <TableCell className={classes.tableCell}>
                      <Box width={1} display="flex" alignItems="center">
                        <Box maxWidth={60}>
                          <img className={classes.img} src={"/images/zayn.jpg"} />
                        </Box>
                        <Typography className={classes.name}>BUI TUAN MINH</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.tableCell}>2013/2/20</TableCell>
                    <TableCell className={classes.tableCell}>スタッフ</TableCell>
                    <TableCell className={classes.tableCell}>
                      <Button disableElevation className={classes.editBtn} variant="contained">
                        <EditTwoToneIcon className={classes.icon} />
                      </Button>
                      <Button disableElevation className={classes.deleteBtn} variant="contained">
                        <DeleteTwoToneIcon className={classes.icon} />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableCell}>#82362</TableCell>
                    <TableCell className={classes.tableCell}>
                      <Box width={1} display="flex" alignItems="center">
                        <Box maxWidth={60}>
                          <img className={classes.img} src={"/images/andrea.jpg"} />
                        </Box>
                        <Typography className={classes.name}>野間　亜希子</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.tableCell}>2012/12/1</TableCell>
                    <TableCell className={classes.tableCell}>管理者</TableCell>
                    <TableCell className={classes.tableCell}>
                      <Button disableElevation className={classes.editBtn} variant="contained">
                        <EditTwoToneIcon className={classes.icon} />
                      </Button>
                      <Button disableElevation className={classes.deleteBtn} variant="contained">
                        <DeleteTwoToneIcon className={classes.icon} />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Box width={1} display="flex" justifyContent="center" mt={4}>
              <Pagination count={3} color="primary" />
            </Box>
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
      </Grid>
    </Page>
  );
};

export default UsersPage;
