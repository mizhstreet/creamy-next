import { Box, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";
import { ReceiptItem } from "../components/receipt/receipt-item";

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

const ReceiptPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid style={{ height: 1000 }} item md={7}>
        <Box width={1} pl={5} pr={5}>
          <Typography component="h2" className={classes.receiptNum}>
            注文#123386123
          </Typography>
          <Typography className={classes.receiptDate}>注文日時:2020年12月26日</Typography>
          <Box component={"ul"} p={0} pt={5}>
            <ReceiptItem />
            <ReceiptItem />
            <ReceiptItem />
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
      <Grid style={{ height: 1000 }} item md={5}>
        <Box width={1} pl={5} pr={5}>
          <img className={classes.img} src="images/thanks1.png" />
        </Box>
        <Box width={1} pl={5} pr={5}>
          <img className={classes.img2} src="images/thank2.png" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ReceiptPage;
