import {
  Box,
  Button,
  Chip,
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
  Tooltip,
  Typography,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import { blue, grey, pink, red } from "@material-ui/core/colors";
import React from "react";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import WarningTwoToneIcon from "@material-ui/icons/WarningTwoTone";
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
            <TableContainer className={classes.tableContainer}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell className={classes.tableHeadline}>ID</TableCell>
                    <TableCell className={classes.tableHeadline}>商品名</TableCell>
                    <TableCell className={classes.tableHeadline}>値段</TableCell>
                    <TableCell className={classes.tableHeadline}>サイズ</TableCell>
                    <TableCell className={classes.tableHeadline}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableCell}>#82362</TableCell>
                    <TableCell className={classes.tableCell}>
                      <Box width={1} display="flex" alignItems="center">
                        <Box maxWidth={60} bgcolor={pink[100]} borderRadius={10}>
                          <img className={classes.img} src={"/images/4.png"} />
                        </Box>
                        <Typography className={classes.name}>シングル</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.tableCell}>280円</TableCell>
                    <TableCell className={classes.tableCell}>
                      <Chip label="キッズ" clickable color="primary" />
                      <Chip label="レギュラー" clickable color="primary" />
                      <Chip label="キング" clickable color="primary" />
                    </TableCell>
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
                        <Box maxWidth={60} bgcolor={pink[100]} borderRadius={10}>
                          <img className={classes.img} src={"/images/dou.png"} />
                        </Box>
                        <Typography className={classes.name}>ダブル</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.tableCell}>280円</TableCell>
                    <TableCell className={classes.tableCell}>
                      <Chip label="スモール" clickable color="primary" />
                      <Chip label="レギュラー" clickable color="primary" />
                    </TableCell>
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
                        <Box maxWidth={60} bgcolor={pink[100]} borderRadius={10}>
                          <img className={classes.img} src={"/images/4.png"} />
                        </Box>
                        <Typography className={classes.name}>トリプルポップ</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.tableCell}>280円</TableCell>
                    <TableCell className={classes.tableCell}>
                      <Chip label="なし" clickable color="secondary" />
                    </TableCell>
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
            <TableContainer className={classes.tableContainer}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell className={classes.tableHeadline}>ID</TableCell>
                    <TableCell className={classes.tableHeadline}>容器名</TableCell>
                    <TableCell className={classes.tableHeadline}>値段</TableCell>
                    <TableCell className={classes.tableHeadline}>在庫</TableCell>
                    <TableCell className={classes.tableHeadline}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableCell}>#12312</TableCell>
                    <TableCell className={classes.tableCell}>
                      <Box width={1} display="flex" alignItems="center">
                        <Box maxWidth={60}>
                          <img className={classes.img} src={"/images/cone.jpg"} />
                        </Box>
                        <Typography className={classes.name}>コーン</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Chip label="なし" clickable color="secondary" />
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Box width={1} display="flex" alignItems="center">
                        1
                        <Tooltip title="もうすぐなくなる">
                          <WarningTwoToneIcon style={{ color: red[400] }} />
                        </Tooltip>
                      </Box>
                    </TableCell>
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
                    <TableCell className={classes.tableCell}>#12312</TableCell>
                    <TableCell className={classes.tableCell}>
                      <Box width={1} display="flex" alignItems="center">
                        <Box maxWidth={60}>
                          <img className={classes.img} src={"/images/cone.jpg"} />
                        </Box>
                        <Typography className={classes.name}>ワッフルコーン</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.tableCell}>40円</TableCell>
                    <TableCell className={classes.tableCell}>25</TableCell>
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
                    <TableCell className={classes.tableCell}>#12312</TableCell>
                    <TableCell className={classes.tableCell}>
                      <Box width={1} display="flex" alignItems="center">
                        <Box maxWidth={60}>
                          <img className={classes.img} src={"/images/cup.png"} />
                        </Box>
                        <Typography className={classes.name}>カップ</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Chip label="なし" clickable color="secondary" />
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Box width={1} display="flex" alignItems="center">
                        3
                        <Tooltip title="もうすぐなくなる">
                          <WarningTwoToneIcon style={{ color: red[400] }} />
                        </Tooltip>
                      </Box>
                    </TableCell>
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
                </TableBody>
              </Table>
            </TableContainer>
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
            <TableContainer className={classes.tableContainer}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell className={classes.tableHeadline}>ID</TableCell>
                    <TableCell className={classes.tableHeadline}>フレーバー名</TableCell>
                    <TableCell className={classes.tableHeadline}>在庫</TableCell>
                    <TableCell className={classes.tableHeadline}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableCell}>#12312</TableCell>
                    <TableCell className={classes.tableCell}>
                      <Box width={1} display="flex" alignItems="center">
                        <Box maxWidth={60}>
                          <img className={classes.img} src={"/images/flavors/1.png"} />
                        </Box>
                        <Typography className={classes.name}>チョコ</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Box width={1} display="flex" alignItems="center">
                        3
                        <Tooltip title="もうすぐなくなる">
                          <WarningTwoToneIcon style={{ color: red[400] }} />
                        </Tooltip>
                      </Box>
                    </TableCell>
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
                    <TableCell className={classes.tableCell}>#12312</TableCell>
                    <TableCell className={classes.tableCell}>
                      <Box width={1} display="flex" alignItems="center">
                        <Box maxWidth={60}>
                          <img className={classes.img} src={"/images/flavors/2.png"} />
                        </Box>
                        <Typography className={classes.name}>チョコ</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Box width={1} display="flex" alignItems="center">
                        25
                      </Box>
                    </TableCell>
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
                    <TableCell className={classes.tableCell}>#12312</TableCell>
                    <TableCell className={classes.tableCell}>
                      <Box width={1} display="flex" alignItems="center">
                        <Box maxWidth={60}>
                          <img className={classes.img} src={"/images/flavors/3.png"} />
                        </Box>
                        <Typography className={classes.name}>チョコ</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Box width={1} display="flex" alignItems="center">
                        8
                        <Tooltip title="もうすぐなくなる">
                          <WarningTwoToneIcon style={{ color: red[400] }} />
                        </Tooltip>
                      </Box>
                    </TableCell>
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
                    <TableCell className={classes.tableCell}>#12312</TableCell>
                    <TableCell className={classes.tableCell}>
                      <Box width={1} display="flex" alignItems="center">
                        <Box maxWidth={60}>
                          <img className={classes.img} src={"/images/flavors/4.png"} />
                        </Box>
                        <Typography className={classes.name}>チョコ</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Box width={1} display="flex" alignItems="center">
                        29
                      </Box>
                    </TableCell>
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
                    <TableCell className={classes.tableCell}>#12312</TableCell>
                    <TableCell className={classes.tableCell}>
                      <Box width={1} display="flex" alignItems="center">
                        <Box maxWidth={60}>
                          <img className={classes.img} src={"/images/flavors/5.png"} />
                        </Box>
                        <Typography className={classes.name}>チョコ</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Box width={1} display="flex" alignItems="center">
                        20
                      </Box>
                    </TableCell>
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
                </TableBody>
              </Table>
            </TableContainer>
            <Box width={1} display="flex" justifyContent="center" mt={4} pb={6}>
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
