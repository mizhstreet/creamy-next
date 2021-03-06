import {
  CircularProgress,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { grey } from "@material-ui/core/colors";
import { IOption } from "../../../interfaces/option";

import { OptionItem } from "./option-item";
import { getEndpoint } from "../../../utils/getEndpoint";
import { useOptionsQuery } from "../../../generated/apolloComponent";
import { getImage } from "../../../utils/getImage";

const useStyles = makeStyles({
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

const OptionList: React.FC = () => {
  const classes = useStyles();
  const [result] = useOptionsQuery();
  const { fetching, data, error } = result;
  if (fetching) {
    return <CircularProgress />;
  }
  if (error) {
    console.warn(error);
  }
  return (
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.tableHeadline}>ID</TableCell>
            <TableCell className={classes.tableHeadline}>商品名</TableCell>
            <TableCell className={classes.tableHeadline}>値段</TableCell>
            <TableCell className={classes.tableHeadline}>在庫</TableCell>
            <TableCell className={classes.tableHeadline}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.options &&
            data?.options.map((o) => (
              <OptionItem
                key={o.id}
                id={o.id}
                image={getImage(o.image)}
                name={o.name}
                stock={o.stock}
                stockPrice={o.stockPrice}
                price={o.price}
              />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { OptionList };
