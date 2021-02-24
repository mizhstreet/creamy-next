import { Avatar, Box, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState, useCallback, useEffect } from "react";
import { Page } from "../../../components/page";
import { ReceiptItem } from "../../../components/receipt/receipt-item";
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

  const [receipt, setReceipts] = useState<IReceipt>();

  const loadReceipts = useCallback(() => {
    axios.get<IReceipt>(getEndpoint(`/api/receipt?id=${router.query.id}`)).then((response) => {
      setReceipts(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    loadReceipts();
  }, [loadReceipts]);

  if (!receipt) {
    return <div></div>;
  }
  return (
    <Page title="レシート">
      <Grid container>
        <Grid style={{ height: 1000 }} item md={7}>
          <Box width={1} pl={5} pr={5}>
            <Typography component="h2" className={classes.receiptNum}>
              レシート#{receipt?.receiptid}
            </Typography>
            <Box mt={1} mb={1} display="flex" alignItems="center">
              <Avatar className={classes.avatar} src={receipt?.user.image ? getImage(receipt?.user.image) : ""} />
              <Box>
                <Typography className={classes.staff}>担当者</Typography>
                <Typography className={classes.staffName}>{receipt?.user.name}</Typography>
              </Box>
            </Box>
            <Box component={"ul"} p={0} pt={2}>
              {receipt?.items.map((i) => (
                <ReceiptItem key={i.receipt_itemid} {...i} />
              ))}
            </Box>
            <Divider />
            <Grid justify="flex-end" container>
              <Grid item md={6}>
                <Typography className={classes.receiptDate}>{receipt?.created_at}</Typography>
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
