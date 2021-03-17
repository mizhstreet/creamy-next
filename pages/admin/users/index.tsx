import {
  Box,
  Button,
  CircularProgress,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { blue, grey, red } from "@material-ui/core/colors";
import React from "react";
import Link from "next/link";
import PersonAddTwoToneIcon from "@material-ui/icons/PersonAddTwoTone";
import { SectionTitle } from "../../../components/typography/section-title";
import { Page } from "../../../components/page";

import { User } from "../../../components/admin/user/user";
import { useUsersQuery } from "../../../generated/apolloComponent";
import { getImage } from "../../../utils/getImage";
import withAuth from "../../../components/hocs/with-auth";

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

const UsersPage: React.FC = () => {
  const classes = useStyles();

  const [result] = useUsersQuery();

  const { data, fetching, error } = result;

  if (fetching) {
    return <CircularProgress />;
  }

  if (error) {
    console.warn(error);
  }
  return (
    <Page title={"ユーザー管理"}>
      <Grid container>
        <Box width={1} pl={5} pr={5}>
          <Box width={1} display="flex" justifyContent="space-between" alignItems="center">
            <SectionTitle component="h2">ユーザー</SectionTitle>
            <Link href="/admin/users/create-user" passHref>
              <Button
                disableElevation
                variant="contained"
                className={classes.newBtn}
                startIcon={<PersonAddTwoToneIcon className={classes.icon} />}
              >
                登録
              </Button>
            </Link>
          </Box>
          <Grid style={{ height: 1000 }} item md={12}>
            <TableContainer className={classes.tableContainer}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell className={classes.tableHeadline}>Id</TableCell>
                    <TableCell className={classes.tableHeadline}>名前</TableCell>
                    <TableCell className={classes.tableHeadline}>役割</TableCell>
                    <TableCell className={classes.tableHeadline}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.users &&
                    data?.users.map((u) => (
                      <User key={u.id} name={u.name} isAdmin={u.isAdmin} id={u.id} image={getImage(u.image)} />
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Box>
      </Grid>
    </Page>
  );
};

export default withAuth(UsersPage);
