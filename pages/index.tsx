import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { grey, pink, red } from "@material-ui/core/colors";
import React from "react";
import { ProductList } from "../components/home/product-list";
import { FlavorList } from "../components/home/flavor-list";
import { OptionList } from "../components/home/option-list";
import { Order } from "../components/home/order";
import { Page } from "../components/page";
import { SectionTitle } from "../components/typography/section-title";
import { SizeList } from "../components/home/size-list";
import { Selected } from "../containers/selected-container";
import { Cart } from "../containers/cart-container";
import { CartComponent } from "../components/home/cart-component";
import { AddToCartBtn } from "../components/home/add-to-cart-btn";

const Home: React.FC = () => {
  return (
    <Cart.Provider>
      <Selected.Provider>
        <Page title={"レジ"}>
          <Grid container>
            <Grid style={{ backgroundColor: grey[100] }} item md={8}>
              <Box width={1} pl={5} pr={5}>
                <Box justifyContent="space-between" display="flex" alignItems="center">
                  <SectionTitle component={"h2"}>個数</SectionTitle>
                </Box>
                <ProductList />
                <SectionTitle component={"h2"}>サイズ</SectionTitle>
                <SizeList />
                <SectionTitle component={"h2"}>容器</SectionTitle>
                <OptionList />
                <SectionTitle component={"h2"}>フレーバ</SectionTitle>
                <FlavorList />
              </Box>
              <AddToCartBtn />
            </Grid>
            <CartComponent />
          </Grid>
        </Page>
      </Selected.Provider>
    </Cart.Provider>
  );
};
export default Home;
