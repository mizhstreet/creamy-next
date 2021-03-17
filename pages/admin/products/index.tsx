import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import React from "react";
import Link from "next/link";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import { SectionTitle } from "../../../components/typography/section-title";
import { Page } from "../../../components/page";
import { ProductList } from "../../../components/admin/products/product-list";
import { OptionList } from "../../../components/admin/products/option-list";
import { FlavorList } from "../../../components/admin/products/flavor-list";
import withAuth from "../../../components/hocs/with-auth";

const useStyles = makeStyles({
  icon: {
    fontSize: 22,
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
});

const ProductsPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Page title={"商品管理"}>
      <Grid container>
        <Box width={1} pl={5} pr={5}>
          <Box width={1} display="flex" justifyContent="space-between" alignItems="center">
            <SectionTitle component="h2">商品管理</SectionTitle>
            <Link href="/admin/products/create-product" passHref>
              <Button
                disableElevation
                variant="contained"
                className={classes.newBtn}
                startIcon={<AddCircleTwoToneIcon className={classes.icon} />}
              >
                登録
              </Button>
            </Link>
          </Box>
          <Grid item md={12}>
            <ProductList />
          </Grid>
        </Box>
        <Box width={1} pl={5} pr={5}>
          <Box width={1} display="flex" justifyContent="space-between" alignItems="center">
            <SectionTitle component="h2">容器管理</SectionTitle>
            <Link href="/admin/products/create-option" passHref>
              <Button
                disableElevation
                variant="contained"
                className={classes.newBtn}
                startIcon={<AddCircleTwoToneIcon className={classes.icon} />}
              >
                登録
              </Button>
            </Link>
          </Box>
          <Grid item md={12}>
            <OptionList />
          </Grid>
        </Box>
        <Box width={1} pl={5} pr={5}>
          <Box width={1} display="flex" justifyContent="space-between" alignItems="center">
            <SectionTitle component="h2">フレーバー管理</SectionTitle>
            <Link href="/admin/products/create-flavor" passHref>
              <Button
                disableElevation
                variant="contained"
                className={classes.newBtn}
                startIcon={<AddCircleTwoToneIcon className={classes.icon} />}
              >
                登録
              </Button>
            </Link>
          </Box>
          <Grid item md={12}>
            <FlavorList />
          </Grid>
        </Box>
      </Grid>
    </Page>
  );
};

export default withAuth(ProductsPage);
