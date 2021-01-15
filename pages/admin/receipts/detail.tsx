import { Avatar, Box, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";
import { Page } from "../../../components/page";
import { ReceiptItem } from "../../../components/receipt/receipt-item";

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

const ReceiptPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Page title="レシート">
      <Grid container>
        <Grid style={{ height: 1000 }} item md={7}>
          <Box width={1} pl={5} pr={5}>
            <Typography component="h2" className={classes.receiptNum}>
              レシート#123386123
            </Typography>
            <Box mt={1} mb={1} display="flex" alignItems="center">
              <Avatar className={classes.avatar} src={"/images/zayn.jpg"} />
              <Box>
                <Typography className={classes.staff}>担当者</Typography>
                <Typography className={classes.staffName}>BUI TUAN MINH</Typography>
              </Box>
            </Box>
            <Box component={"ul"} p={0} pt={2}>
              <ReceiptItem />
              <ReceiptItem />
              <ReceiptItem />
            </Box>
            <Divider />
            <Grid justify="flex-end" container>
              <Grid item md={6}>
                <Typography className={classes.receiptDate}>2020年12月26日</Typography>
              </Grid>
              <Grid item md={6}>
                <Box width={1}>
                  <Box component="ul" p={0} width={1}>
                    <Box component="li" pt={1} display="flex" justifyContent="space-between">
                      <Typography style={{ color: grey[600], fontSize: 30 }} className={classes.fee}>
                        合計
                      </Typography>
                      <Typography style={{ color: grey[600], fontSize: 30 }} className={classes.fee}>
                        1000円
                      </Typography>
                    </Box>
                    <Box component="li" pt={1} display="flex" justifyContent="space-between">
                      <Typography className={classes.fee}>受取金額</Typography>
                      <Typography className={classes.fee}>2000円</Typography>
                    </Box>
                    <Box component="li" pt={1} display="flex" justifyContent="space-between">
                      <Typography className={classes.fee}>お釣り</Typography>
                      <Typography className={classes.fee}>1000円</Typography>
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

export default ReceiptPage;
