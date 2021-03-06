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
import React from "react";
import { grey } from "@material-ui/core/colors";
import { ProductItem } from "./product-item";
import { useProductsQuery } from "../../../generated/apolloComponent";
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

const ProductList: React.FC = () => {
  const classes = useStyles();
  const [result] = useProductsQuery();

  const { data, fetching, error } = result;

  if (fetching) {
    if (data?.products) {
      const a = data?.products[0];
      console.log(a);
    }
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
            <TableCell className={classes.tableHeadline}>サイズ</TableCell>
            <TableCell className={classes.tableHeadline}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.products &&
            data?.products.map((p) => (
              <ProductItem
                sizes={p.sizes}
                key={p.id}
                image={getImage(p.image)}
                id={p.id}
                name={p.name}
                basePrice={p.basePrice}
                totalFlavor={p.totalFlavor}
              />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { ProductList };
