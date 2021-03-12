import { Box, Button, Chip, Dialog, DialogTitle, makeStyles, TableCell, TableRow, Typography } from "@material-ui/core";
import React, { useState } from "react";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import { blue, green, grey, red } from "@material-ui/core/colors";
import { Product, Size, useDeleteProductMutation } from "../../../generated/apolloComponent";

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
    maxWidth: "40px",
    maxHeight: "40px",
    minWidth: "40px",
    minHeight: "40px",
    paddingTop: 10,
    marginLeft: 4,
    marginRight: 4,
    paddingBottom: 10,
    borderRadius: 10,
    color: blue[400],
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    backgroundColor: blue[100],
    "&:hover": {
      backgroundColor: blue[100],
    },
  },
  orderBtn: {
    marginLeft: 4,
    marginRight: 4,
    maxWidth: "40px",
    maxHeight: "40px",
    minWidth: "40px",
    minHeight: "40px",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    color: green[400],
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    backgroundColor: green[100],
    "&:hover": {
      backgroundColor: green[100],
    },
  },
  deleteBtn: {
    marginLeft: 4,
    marginRight: 4,
    maxWidth: "40px",
    maxHeight: "40px",
    minWidth: "40px",
    minHeight: "40px",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    color: red[400],
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    backgroundColor: red[100],
    "&:hover": {
      backgroundColor: red[100],
    },
  },
  orderPricing: {
    fontWeight: "bold",
    color: grey[600],
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

export type TProduct = Omit<Product, "created" | "updated" | "deletedAt" | "sizes">;
type TSize = Omit<Size, "created" | "updated" | "deletedAt">;

const ProductItem: React.FC<TProduct & { sizes: TSize[] }> = ({ id, name, basePrice, sizes, image }) => {
  const classes = useStyles();

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  const [result, deleteProduct] = useDeleteProductMutation();

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleDelete = async () => {
    const { data } = await deleteProduct({
      where: {
        id,
      },
    });

    if (data) {
      setIsDeleted(true);
    }

    handleDeleteClose();
  };

  return !isDeleted ? (
    <TableRow>
      <TableCell className={classes.tableCell}>#{id}</TableCell>
      <TableCell className={classes.tableCell}>
        <Box width={1} display="flex" alignItems="center">
          <Box maxWidth={60} bgcolor={blue[100]} borderRadius={10}>
            <img className={classes.img} src={image} />
          </Box>
          <Typography className={classes.name}>{name}</Typography>
        </Box>
      </TableCell>
      <TableCell className={classes.tableCell}>{basePrice}円</TableCell>
      <TableCell className={classes.tableCell}>
        {sizes.map((s) => {
          return (
            <Chip key={s.id} label={`${s.name} ${s.price != 0 ? `+${s.price}円` : ""}`} clickable color="primary" />
          );
        })}
        {sizes.length == 0 && <Chip label={`なし`} clickable color="secondary" />}
      </TableCell>
      <TableCell className={classes.tableCell}>
        <Button disableElevation className={classes.editBtn} variant="contained">
          <EditTwoToneIcon className={classes.icon} />
        </Button>
        <Button onClick={handleDeleteOpen} disableElevation className={classes.deleteBtn} variant="contained">
          <DeleteTwoToneIcon className={classes.icon} />
        </Button>
      </TableCell>
      <Dialog
        open={deleteOpen}
        keepMounted
        onClose={handleDeleteClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">本当に削除しますか？</DialogTitle>
        <Button onClick={handleDelete} color="secondary">
          削除
        </Button>
      </Dialog>
    </TableRow>
  ) : null;
};

export { ProductItem };
