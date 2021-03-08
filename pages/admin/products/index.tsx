import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import { blue, green, grey, red } from "@material-ui/core/colors";
import React from "react";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import { SectionTitle } from "../../../components/typography/section-title";
import { Page } from "../../../components/page";
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

const UsersPage: React.FC = () => {
  const classes = useStyles();
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
      </Grid>
    </Page>
  );
};

export default UsersPage;
