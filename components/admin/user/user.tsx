import { Box, Button, Dialog, DialogTitle, makeStyles, TableCell, TableRow, Typography } from "@material-ui/core";
import React, { useState } from "react";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import { blue, grey, red } from "@material-ui/core/colors";

import { getImage } from "../../../utils/getImage";

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

interface IProps {
  userid: string;
  name: string;
  isAdmin: boolean;
  image: string;
}

const User: React.FC<IProps> = ({ userid, name, isAdmin, image }) => {
  const classes = useStyles();

  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  const [open, setOpen] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    await axios.post("/web/api/user/delete", { userid }).then((response) => {
      if (response.data == "ok") {
        setIsDeleted(true);
      }
    });
    handleClose();
  };

  return !isDeleted ? (
    <TableRow>
      <TableCell className={classes.tableCell}>#{userid}</TableCell>
      <TableCell className={classes.tableCell}>
        <Box width={1} display="flex" alignItems="center">
          <Box maxWidth={60}>
            <img className={classes.img} src={getImage(image)} />
          </Box>
          <Typography className={classes.name}>{name}</Typography>
        </Box>
      </TableCell>
      <TableCell className={classes.tableCell}>{(isAdmin as any) == "1" ? "管理者" : "スタッフ"}</TableCell>
      <TableCell className={classes.tableCell}>
        <Button disableElevation className={classes.editBtn} variant="contained">
          <EditTwoToneIcon className={classes.icon} />
        </Button>
        <Button disableElevation onClick={handleClickOpen} className={classes.deleteBtn} variant="contained">
          <DeleteTwoToneIcon className={classes.icon} />
        </Button>
      </TableCell>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
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

export { User };
