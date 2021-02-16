import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { grey } from "@material-ui/core/colors";
import { IProduct } from "../../../interfaces/product";
import axios from "axios";
import { ProductItem } from "./product-item";
import { ISize } from "../../../interfaces/size";

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
  const [products, setProducts] = useState<IProduct[]>([]);
  const [sizes, setSizes] = useState<ISize[]>([]);
  const loadProducts = useCallback(() => {
    axios.get<IProduct[]>("http://localhost/phpmvc/web/api/product/all").then((response) => {
      setProducts(response.data);
    });
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const loadSizes = useCallback(() => {
    axios.get<ISize[]>("http://localhost/phpmvc/web/api/size/all").then((response) => {
      setSizes(response.data);
    });
  }, []);

  useEffect(() => {
    loadSizes();
  }, [loadSizes]);

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
          {products.map((p) => (
            <ProductItem
              sizes={sizes}
              key={p.productid}
              image={"/images/some.png"}
              productid={p.productid}
              productname={p.productname}
              base_price={p.base_price}
              totalflavor={p.totalflavor}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { ProductList };
