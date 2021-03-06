import { Box, Button, makeStyles, TableCell, TableRow, Typography } from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";
import Link from "next/link";
import React from "react";
import { Receipt, User } from "../../../generated/apolloComponent";
import { getImage } from "../../../utils/getImage";
import { parseDate } from "../../../utils/parseDate";

const useStyles = makeStyles({
  img: {
    maxWidth: "100%",
    borderRadius: "50%",
  },
  name: {
    paddingLeft: 20,
    fontWeight: "bolder",
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
  tableCell: {
    borderBottom: "1px solid",
    borderBottomColor: grey[200],
    fontSize: 18,
  },
});

type TUser = Pick<User, "image" | "name">;

const ReceiptItem: React.FC<
  Pick<Receipt, "created" | "cash" | "id" | "total"> & { user: TUser | null | undefined }
> = ({ created, cash, id, total, user }) => {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell className={classes.tableCell}>#{id}</TableCell>
      <TableCell className={classes.tableCell}>
        <Box width={1} display="flex" alignItems="center">
          <Box maxWidth={60}>
            <img className={classes.img} src={getImage(user ? user.image : "")} />
          </Box>
          <Typography className={classes.name}>{user ? user.name : ""}</Typography>
        </Box>
      </TableCell>
      <TableCell className={classes.tableCell}>{parseDate(created)}</TableCell>
      <TableCell className={classes.tableCell}>{total}円</TableCell>

      <TableCell className={classes.tableCell}>
        <Link href={`/admin/receipt/${id}`} passHref>
          <Button disableElevation className={classes.editBtn} variant="contained">
            詳細を見る
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  );
};

export { ReceiptItem };
