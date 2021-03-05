import { Box, CircularProgress, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Page } from "../components/page";
import { ReceiptItem } from "../components/receipt/receipt-item";
import { useReceiptQuery } from "../generated/apolloComponent";
import { parseDate } from "../utils/parseDate";

const useStyles = makeStyles({
  receiptNum: {
    fontSize: 40,
    fontWeight: "bold",
    color: grey[800],
    marginTop: 20,
  },
  receiptDate: {
    fontWeight: "bold",
    fontSize: 20,
    color: grey[400],
    paddingTop: 10,
  },
  fee: {
    fontSize: 20,
    fontWeight: "bold",
    color: grey[500],
  },
  img: {
    maxWidth: "100%",
  },
  img2: {
    marginTop: "-50%",
    maxWidth: "100%",
  },
});

const ReceiptPage: NextPage = () => {
  const classes = useStyles();

  // const router = useRouter();
  const [result] = useReceiptQuery({
    variables: {
      where: {
        id: "6",
      },
    },
  });
  const { fetching, data, error } = result;

  if (fetching) {
    return <CircularProgress />;
  }

  if (error) {
    console.warn(error);
  }

  const receipt = data?.receipt;

  return (
    <Page title="レシート">
      {receipt && (
        <Grid container>
          <Grid style={{ height: 1000 }} item md={7}>
            <Box width={1} pl={5} pr={5}>
              <Typography component="h2" className={classes.receiptNum}>
                レシート#{receipt.id}
              </Typography>
              <Typography className={classes.receiptDate}>日時:{parseDate(receipt.created)}</Typography>
              <Box component={"ul"} p={0} pt={5}>
                {receipt.items &&
                  receipt.items.map((i) => (
                    <ReceiptItem
                      key={i.id}
                      price={i.price}
                      sizeName={i.sizeName}
                      sizePrice={i.sizePrice}
                      optionName={i.optionName}
                      optionPrice={i.optionPrice}
                      flavors={i.flavors}
                      quantity={i.quantity}
                      product={i.product}
                    />
                  ))}
              </Box>
              <Divider />
              <Grid justify="flex-end" container>
                <Grid item md={6}>
                  <Box width={1}>
                    <Box component="ul" p={0} width={1}>
                      <Box component="li" pt={1} display="flex" justifyContent="space-between">
                        <Typography style={{ color: grey[600], fontSize: 30 }} className={classes.fee}>
                          合計
                        </Typography>
                        <Typography style={{ color: grey[600], fontSize: 30 }} className={classes.fee}>
                          {receipt.total}円
                        </Typography>
                      </Box>
                      <Box component="li" pt={1} display="flex" justifyContent="space-between">
                        <Typography className={classes.fee}>受取金額</Typography>
                        <Typography className={classes.fee}>{receipt.cash}円</Typography>
                      </Box>
                      <Box component="li" pt={1} display="flex" justifyContent="space-between">
                        <Typography className={classes.fee}>お釣り</Typography>
                        <Typography className={classes.fee}>
                          {parseInt(receipt.cash as any) - parseInt(receipt.total as any)}円
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid style={{ height: 1000 }} item md={5}>
            <Box width={1} pl={5} pr={5}>
              <img className={classes.img} src="images/thanks1.png" />
            </Box>
            <Box width={1} pl={5} pr={5}>
              <img className={classes.img2} src="images/thank2.png" />
            </Box>
          </Grid>
        </Grid>
      )}
    </Page>
  );
};

export default ReceiptPage;
