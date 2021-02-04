import { Box, Button, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { grey, pink, red } from "@material-ui/core/colors";
import { Field, Form, Formik } from "formik";
import React from "react";
import axios from "axios";
import * as Yup from "yup";
import { SectionTitle } from "../typography/section-title";
import { Order } from "./order";
import { SubSectionTitle } from "../typography/sub-section-title";
import { OutlinedTextfield } from "../form/outlined-textfield";
import { Cart } from "../../containers/cart-container";

interface IValues {
  cash: number;
}

const useStyles = makeStyles({
  emptyImg: {
    maxWidth: "60%",
    margin: "0 auto",
    display: "block",
  },
  emptyText: {
    fontWeight: "bold",
    fontSize: 40,
    color: grey[400],
    textAlign: "center",
  },
  checkoutBtn: {
    marginTop: 60,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 30,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: red[300],
    "&:hover": {
      backgroundColor: red[300],
    },
  },
  icon: {
    fontSize: 22,
  },
  applyBtn: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    color: red[400],
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    maxWidth: 160,
    minWidth: 80,
    backgroundColor: red[100],
    "&:hover": {
      backgroundColor: red[100],
    },
  },
  fee: {
    fontSize: 20,
    fontWeight: "bold",
    color: grey[500],
  },
  cartBtn: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 10,
    color: pink[800],
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: pink[100],
    "&:hover": {
      backgroundColor: pink[100],
    },
  },
});

const DisplayingErrorMessagesSchema = Yup.object().shape({
  cash: Yup.number().min(1000, "たりないです"),
});

const CartComponent: React.FC = () => {
  const classes = useStyles();

  const container = Cart.useContainer();

  const initialValues: IValues = {
    cash: 0,
  };
  return (
    <Grid item md={4}>
      <Box width={1} pl={5} pr={5}>
        <SectionTitle component={"h2"}>注文</SectionTitle>
        {container.isCartEmpty() ? (
          <Box>
            <Box>
              <img className={classes.emptyImg} src="images/no.png" />
            </Box>
            <Typography className={classes.emptyText}>何も入っていない</Typography>
          </Box>
        ) : (
          <Box>
            <Order />
            <Divider />
            <SubSectionTitle>受取金額</SubSectionTitle>
            <Formik
              initialValues={initialValues}
              validationSchema={DisplayingErrorMessagesSchema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                axios
                  .post("http://localhost/phpmvc/web/api/receipt/create", { data: container.items, cash: values.cash })
                  .then((response) => {
                    console.log(response.data);
                  });
              }}
            >
              {(props) => (
                <Box>
                  <Form>
                    <Box width={1} display="flex">
                      <Box width={"75%"}>
                        <Field component={OutlinedTextfield} name="cash" />
                      </Box>
                      <Box ml={1} width={"25%"}>
                        <Button disableElevation variant="contained" classes={{ contained: classes.applyBtn }}>
                          入力
                        </Button>
                      </Box>
                    </Box>
                    <Divider />
                    <Box width={1}>
                      <Box component="ul" p={0} width={1}>
                        <Box component="li" pt={1} display="flex" justifyContent="space-between">
                          <Typography style={{ color: grey[600], fontSize: 30 }} className={classes.fee}>
                            合計
                          </Typography>
                          <Typography style={{ color: grey[600], fontSize: 30 }} className={classes.fee}>
                            {container.getTotal()}
                          </Typography>
                        </Box>
                        <Box component="li" pt={1} display="flex" justifyContent="space-between">
                          <Typography className={classes.fee}>受取金額</Typography>
                          <Typography className={classes.fee}>{props.values.cash}</Typography>
                        </Box>
                        <Box component="li" pt={1} display="flex" justifyContent="space-between">
                          <Typography className={classes.fee}>お釣り</Typography>
                          <Typography className={classes.fee}>{props.values.cash - container.getTotal()}</Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth={true}
                      classes={{ contained: classes.checkoutBtn }}
                    >
                      レシートへ
                    </Button>
                  </Form>
                </Box>
              )}
            </Formik>
          </Box>
        )}
      </Box>
    </Grid>
  );
};

export { CartComponent };
