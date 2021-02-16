import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { grey } from "@material-ui/core/colors";
import { IFlavor } from "../../../interfaces/flavor";
import axios from "axios";
import { FlavorItem } from "./flavor-item";

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

const FlavorList: React.FC = () => {
  const classes = useStyles();
  const [flavors, setFlavors] = useState<IFlavor[]>([]);

  const loadFlavors = useCallback(() => {
    axios.get<IFlavor[]>("http://localhost/phpmvc/web/api/flavor/all").then((response) => {
      setFlavors(response.data);
    });
  }, []);

  useEffect(() => {
    loadFlavors();
  }, [loadFlavors]);
  return (
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.tableHeadline}>ID</TableCell>
            <TableCell className={classes.tableHeadline}>フレーバー名</TableCell>
            <TableCell className={classes.tableHeadline}>在庫</TableCell>
            <TableCell className={classes.tableHeadline}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flavors.map((f) => (
            <FlavorItem key={f.flavorid} {...f} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { FlavorList };
