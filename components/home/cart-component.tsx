import { Box, Button, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { grey, pink, red } from "@material-ui/core/colors";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { SectionTitle } from "../typography/section-title";
import { Order } from "./order";
import { SubSectionTitle } from "../typography/sub-section-title";
import { OutlinedTextfield } from "../form/outlined-textfield";
import { Cart } from "../../containers/cart-container";
import { VirtualKeyboard } from "./virtual-keyboard";
import { useRouter } from "next/router";
import { useCreateReceiptMutation } from "../../generated/apolloComponent";

export interface IValues {
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

  const router = useRouter();

  const container = Cart.useContainer();

  const initialValues: IValues = {
    cash: 0,
  };

  const [createReceipt] = useCreateReceiptMutation();
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
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);
                const myData = {
                  cash: parseInt(values.cash as any),
                  total: container.getTotal(),
                  items: container.items.map((i) => ({
                    productid: i.product?.id,
                    price: i.product?.basePrice,
                    optionName: i.option?.name,
                    optionPrice: i.option?.price,
                    sizeName: i.size?.name,
                    sizePrice: i.size?.price,
                    quantity: 1,
                    flavors: i.flavors.map((f) => f.name).toString(),
                  })),
                };
                console.log(container.items);
                const { data, errors } = await createReceipt({
                  variables: {
                    data: myData,
                  },
                });
                if (data?.createReceipt.id) {
                  return router.push(`/receipt?id=${data.createReceipt.id}`);
                }
                if (errors) {
                  console.warn(errors);
                }
              }}
            >
              {({ values }) => (
                <Box>
                  <Form>
                    <Box width={1} display="flex">
                      <Box width={"75%"}>
                        <Field component={OutlinedTextfield} name="cash" />
                      </Box>
                      <Box ml={1} width={"25%"}>
                        <VirtualKeyboard />
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
                            {container.getTotal()}円
                          </Typography>
                        </Box>
                        <Box component="li" pt={1} display="flex" justifyContent="space-between">
                          <Typography className={classes.fee}>受取金額</Typography>
                          <Typography className={classes.fee}>{values.cash}円</Typography>
                        </Box>
                        <Box component="li" pt={1} display="flex" justifyContent="space-between">
                          <Typography className={classes.fee}>お釣り</Typography>
                          <Typography className={classes.fee}>{values.cash - container.getTotal()}円</Typography>
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
