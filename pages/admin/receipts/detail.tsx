import { Avatar, Box, CircularProgress, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState, useCallback, useEffect } from "react";
import { Page } from "../../../components/page";
import { ReceiptItem } from "../../../components/receipt/receipt-item";
import { useReceiptQuery } from "../../../generated/apolloComponent";
import { IReceipt } from "../../../interfaces/receipt";
import { getEndpoint } from "../../../utils/getEndpoint";
import { getImage } from "../../../utils/getImage";

const useStyles = makeStyles({
  avatar: {
    width: 50,
    height: 50,
  },
  staff: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    color: grey[600],
  },
  staffName: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    color: grey[800],
  },
  receiptNum: {
    fontSize: 40,
    fontWeight: "bold",
    color: grey[800],
    marginTop: 20,
  },
  receiptDate: {
    fontWeight: "bold",
    fontSize: 20,
    color: grey[600],
    paddingTop: 10,
  },
  fee: {
    fontSize: 20,
    fontWeight: "bold",
    color: grey[500],
  },
});

const ReceiptPage: NextPage = () => {
  const classes = useStyles();
  const router = useRouter();
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
      <Grid container>
        <Grid style={{ height: 1000 }} item md={7}>
          <Box width={1} pl={5} pr={5}>
            <Typography component="h2" className={classes.receiptNum}>
              レシート#{receipt?.id}
            </Typography>
            {/* <Box mt={1} mb={1} display="flex" alignItems="center">
              <Avatar className={classes.avatar} src={receipt?.user.image ? getImage(receipt?.user.image) : ""} />
              <Box>
                <Typography className={classes.staff}>担当者</Typography>
                <Typography className={classes.staffName}>{receipt?.user.name}</Typography>
              </Box>
            </Box> */}
            <Box component={"ul"} p={0} pt={2}>
              {receipt &&
                receipt.items &&
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
                <Typography className={classes.receiptDate}>{receipt?.created}</Typography>
              </Grid>
              <Grid item md={6}>
                <Box width={1}>
                  <Box component="ul" p={0} width={1}>
                    <Box component="li" pt={1} display="flex" justifyContent="space-between">
                      <Typography style={{ color: grey[600], fontSize: 30 }} className={classes.fee}>
                        合計
                      </Typography>
                      <Typography style={{ color: grey[600], fontSize: 30 }} className={classes.fee}>
                        {receipt?.total}円
                      </Typography>
                    </Box>
                    <Box component="li" pt={1} display="flex" justifyContent="space-between">
                      <Typography className={classes.fee}>受取金額</Typography>
                      <Typography className={classes.fee}>{receipt?.cash}</Typography>
                    </Box>
                    <Box component="li" pt={1} display="flex" justifyContent="space-between">
                      <Typography className={classes.fee}>お釣り</Typography>
                      <Typography className={classes.fee}>
                        {parseInt(receipt?.cash as any) - parseInt(receipt?.total as any)}円
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Page>
  );
};

ReceiptPage.getInitialProps = async () => {
  return {};
};

export default ReceiptPage;
