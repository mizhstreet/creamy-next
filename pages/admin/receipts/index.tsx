import {
  Box,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { grey } from "@material-ui/core/colors";
import React, { useState } from "react";
import { SectionTitle } from "../../../components/typography/section-title";
import { Page } from "../../../components/page";
import { ReceiptItem } from "../../../components/admin/receipts/receipt-item";
import { useReceiptsQuery } from "../../../generated/apolloComponent";
import { Paginate } from "../../../components/admin/receipts/paginate";
import { Loading } from "../../../components/loading";
import withAuth from "../../../components/hocs/with-auth";

const useStyles = makeStyles({
  icon: {
    fontSize: 22,
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
});

const ReceiptsPage: React.FC = () => {
  const classes = useStyles();

  const [page, setPage] = useState<number>(1);

  const [result] = useReceiptsQuery({
    variables: {
      take: 10,
      skip: (page - 1) * 10,
    },
  });

  const { data, fetching } = result;

  if (fetching) {
    return <Loading open={true} />;
  }

  function handlePageChange(_: any, page: number) {
    setPage(page);
  }

  return (
    <Page title={"売上管理"}>
      <Grid container justify="center">
        <Box width={1} pl={5} pr={5}>
          <Box width={1} display="flex" justifyContent="space-between" alignItems="center">
            <SectionTitle component="h2">レシート管理</SectionTitle>
          </Box>
          <Grid style={{ height: 1000 }} item md={12}>
            <TableContainer className={classes.tableContainer}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableHeadline}>ID</TableCell>
                    <TableCell className={classes.tableHeadline}>担当者</TableCell>
                    <TableCell className={classes.tableHeadline}>日時</TableCell>
                    <TableCell className={classes.tableHeadline}>合計</TableCell>
                    <TableCell className={classes.tableHeadline}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.receipts &&
                    data?.receipts.map((r) => (
                      <ReceiptItem
                        key={r.id}
                        created={r.created}
                        id={r.id}
                        cash={r.cash}
                        total={r.total}
                        user={r.user as any}
                      />
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Paginate page={page} handlePageChange={handlePageChange} />
          </Grid>
        </Box>
      </Grid>
    </Page>
  );
};

export default withAuth(ReceiptsPage);
