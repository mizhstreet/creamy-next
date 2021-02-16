import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { grey } from "@material-ui/core/colors";
import { IOption } from "../../../interfaces/option";
import axios from "axios";
import { OptionItem } from "./option-item";

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
  const [options, setOptions] = useState<IOption[]>([]);

  const loadOptions = useCallback(() => {
    axios.get<IOption[]>("http://localhost/phpmvc/web/api/option/all").then((response) => {
      setOptions(response.data);
    });
  }, []);

  useEffect(() => {
    loadOptions();
  }, [loadOptions]);
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
          {options.map((o) => (
            <OptionItem
              key={o.optionid}
              optionid={o.optionid}
              image={"asodknaskd"}
              optionname={o.optionname}
              stock={o.stock}
              stock_price={o.stock_price}
              price={o.price}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { OptionList };
