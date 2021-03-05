import {
  Box,
  Button,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import { blue, grey } from "@material-ui/core/colors";
import React, { useState, useEffect, useCallback } from "react";
import { SectionTitle } from "../../../components/typography/section-title";
import { Page } from "../../../components/page";
import { IReceipt } from "../../../interfaces/receipt";

import { IUser } from "../../../interfaces/user";
import { ReceiptItem } from "../../../components/admin/receipts/receipt-item";
import { getEndpoint } from "../../../utils/getEndpoint";

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
    maxWidth: "120px",
    paddingTop: 10,
    marginLeft: 4,
    marginRight: 4,
    paddingBottom: 10,
    borderRadius: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    backgroundColor: blue[800],
    "&:hover": {
      backgroundColor: blue[400],
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

const ReceiptsPage: React.FC = () => {
  const classes = useStyles();

  const [receipts, setReceipts] = useState<(IUser & IReceipt)[]>([]);

  const [count, setCount] = useState<number>(0);

  const [page, setPage] = useState<number>(1);

  const loadReceipts = useCallback(() => {
    axios.get<(IUser & IReceipt)[]>(getEndpoint(`/api/receipt/all?page=${page}`)).then((response) => {
      setReceipts(response.data);
    });
  }, [page]);

  const loadCount = useCallback(() => {
    axios.get<{ count: number }>(getEndpoint(`/api/receipt/count`)).then((response) => {
      setCount(response.data.count);
    });
  }, []);

  function handlePageChange(_: any, page: number) {
    console.log(page);
    setPage(page);
  }

  useEffect(() => {
    loadCount();
  }, [loadCount]);

  useEffect(() => {
    loadReceipts();
  }, [page]);

  return (
    <Page title={"売上管理"}>
      {/* <SectionTitle component="h2">グラーフ</SectionTitle> */}
      <Grid container justify="center">
        {/* <Grid item md={8}>
          <LineChart />
        </Grid> */}
        <Box width={1} pl={5} pr={5}>
          <Box width={1} display="flex" justifyContent="space-between" alignItems="center">
            <SectionTitle component="h2">レシート管理</SectionTitle>
            {/* <Button
              disableElevation
              variant="contained"
              className={classes.newBtn}
              startIcon={<PersonAddTwoToneIcon className={classes.icon} />}
            >
              登録
            </Button> */}
          </Box>
          <Grid style={{ height: 1000 }} item md={12}>
            <TableContainer className={classes.tableContainer}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell className={classes.tableHeadline}>ID</TableCell>
                    <TableCell className={classes.tableHeadline}>担当者</TableCell>
                    <TableCell className={classes.tableHeadline}>日時</TableCell>
                    <TableCell className={classes.tableHeadline}>合計</TableCell>
                    <TableCell className={classes.tableHeadline}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {receipts.map((r) => (
                    <ReceiptItem key={r.receiptid} {...r} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box width={1} display="flex" justifyContent="center" mt={4}>
              <Pagination page={page} onChange={handlePageChange} count={Math.floor(count / 10)} color="primary" />
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Page>
  );
};

export default ReceiptsPage;
