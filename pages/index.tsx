import { Box, Grid } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";
import { ProductList } from "../components/home/product-list";
import { FlavorList } from "../components/home/flavor-list";
import { OptionList } from "../components/home/option-list";
import { Page } from "../components/page";
import { SectionTitle } from "../components/typography/section-title";
import { SizeList } from "../components/home/size-list";
import { Selected } from "../containers/selected-container";
import { Cart } from "../containers/cart-container";
import { CartComponent } from "../components/home/cart-component";
import { AddToCartBtn } from "../components/home/add-to-cart-btn";
import { GetStaticProps } from "next";
import { client, ssrCache } from "../lib/urqlClient";
import { productsQuery } from "../graphql/product/queries/products";
import { FlavorsQuery, OptionsQuery, ProductsQuery } from "../generated/apolloComponent";
import { optionsQuery } from "../graphql/option/queries/options";
import { flavorsQuery } from "../graphql/flavor/queries/flavors";
import withAuth from "../components/hocs/with-auth";

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

export const getStaticProps: GetStaticProps = async () => {
  await client.query<ProductsQuery>(productsQuery).toPromise();
  await client.query<OptionsQuery>(optionsQuery).toPromise();
  await client.query<FlavorsQuery>(flavorsQuery).toPromise();
  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
    revalidate: 10,
  };
};
export default withAuth(Home);
