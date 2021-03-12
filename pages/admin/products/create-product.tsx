import { Box, Button, Chip, Grid, IconButton, InputLabel, makeStyles } from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";
import { Field, FieldArray, Form, Formik } from "formik";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import React, { useState } from "react";
import * as Yup from "yup";
import { OutlinedTextfield } from "../../../components/form/outlined-textfield";
import { Page } from "../../../components/page";
import { SectionTitle } from "../../../components/typography/section-title";
import DoneOutlineTwoToneIcon from "@material-ui/icons/DoneOutlineTwoTone";
import ClearTwoToneIcon from "@material-ui/icons/ClearTwoTone";
import { Loading } from "../../../components/loading";
import { SnackAlert } from "../../../components/snack-alert";
import { useRouter } from "next/router";
import { AvatarCard } from "../../../components/form/avatar-card";
import { useCreateProductMutation } from "../../../generated/apolloComponent";

const useStyles = makeStyles({
  applyBtn: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    color: blue[800],
    fontWeight: "bold",
    fontSize: 16,
    backgroundColor: blue[100],
    "&:hover": {
      backgroundColor: blue[100],
    },
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: grey[800],
    fontWeight: "bold",
  },
  subInputLabel: {
    fontSize: 14,
    marginBottom: 10,
    color: grey[400],
    fontWeight: "bold",
  },
  switchLabel: {
    fontSize: 16,
    color: grey[800],
    fontWeight: "bold",
  },
});

interface ISize {
  price: number;
  name: string;
  completed: boolean;
}

interface IFormValues {
  basePrice: number;
  totalFlavor: number;
  name: string;
  sizes: ISize[];
}

const DisplayingErrorMessagesSchema = Yup.object().shape({
  basePrice: Yup.number().required("必ず入力してください"),
  totalFlavor: Yup.number().required("必ず入力してください"),
  name: Yup.string().max(50, "長すぎる!").required("必ず入力してください"),
});

const CreateProductPage: React.FC = () => {
  const classes = useStyles();

  const router = useRouter();

  const [file, setFile] = useState<File | undefined>();

  const [openSnack, setOpenSnack] = React.useState<boolean>(false);

  const [result, createProduct] = useCreateProductMutation();

  const initialValues: IFormValues = {
    basePrice: 0,
    totalFlavor: 1,
    sizes: [],
    name: "",
  };

  return (
    <Page title="商品新規登録">
      <Grid container justify="center">
        <Box width={1} pl={5} pr={5}>
          <SectionTitle component="h2">商品新規登録</SectionTitle>
        </Box>
        <Grid item md={8} lg={6}>
          <AvatarCard file={file} onFileSelect={(e) => setFile(e)} />
          <Box mt={10}>
            <Formik
              validationSchema={DisplayingErrorMessagesSchema}
              initialValues={initialValues}
              onSubmit={async ({ basePrice, totalFlavor, name, sizes }, { setSubmitting }) => {
                setSubmitting(true);

                const { data } = await createProduct({
                  data: {
                    name,
                    basePrice,
                    totalFlavor,
                    sizes: sizes.map((s) => ({
                      name: s.name,
                      price: s.price,
                    })),
                  },
                  image: file,
                });

                if (data) {
                  setSubmitting(false);
                  setOpenSnack(true);

                  setTimeout(() => {
                    router.push("/admin/products");
                  }, 1000);
                }
              }}
            >
              {({ values, setFieldValue, isSubmitting }) => (
                <Form>
                  <Loading open={isSubmitting} />
                  <Box width={1}>
                    <Box width={1}>
                      <InputLabel className={classes.inputLabel}>商品名</InputLabel>
                      <Field component={OutlinedTextfield} name="name" />
                    </Box>
                    <Box>
                      <InputLabel className={classes.inputLabel}>ベース値段</InputLabel>
                      <Field type="number" component={OutlinedTextfield} name="basePrice" />
                    </Box>
                    <Box width={1}>
                      <InputLabel className={classes.inputLabel}>フレーバー数</InputLabel>
                      <Field type="number" component={OutlinedTextfield} name="totalFlavor" />
                    </Box>
                    <Box>
                      <InputLabel className={classes.inputLabel}>サイズ</InputLabel>
                      <Box mt={4}></Box>
                      <Box>
                        <FieldArray name="sizes">
                          {({ push, remove }) => (
                            <React.Fragment>
                              {values.sizes.map((_, index) =>
                                values.sizes[index].completed ? (
                                  <Chip
                                    clickable
                                    key={index}
                                    color="primary"
                                    label={`${values.sizes[index].name}　(+${values.sizes[index].price}円)`}
                                    onDelete={() => remove(index)}
                                    onClick={() => {
                                      setFieldValue(`sizes.${index}.completed`, false);
                                    }}
                                  />
                                ) : (
                                  <Grid alignItems={"center"} spacing={3} container key={index}>
                                    <Grid item>
                                      <InputLabel className={classes.subInputLabel}>サイズ名</InputLabel>
                                      <Field component={OutlinedTextfield} name={`sizes.${index}.name`} />
                                    </Grid>
                                    <Grid item>
                                      <InputLabel className={classes.subInputLabel}>追加値段</InputLabel>
                                      <Field
                                        type="number"
                                        component={OutlinedTextfield}
                                        name={`sizes.${index}.price`}
                                      />
                                    </Grid>
                                    <Box>
                                      <IconButton
                                        aria-label="save"
                                        color="primary"
                                        onClick={() => {
                                          setFieldValue(`sizes.${index}.completed`, true);
                                        }}
                                      >
                                        <DoneOutlineTwoToneIcon />
                                      </IconButton>
                                      <IconButton aria-label="remove" color="secondary" onClick={() => remove(index)}>
                                        <ClearTwoToneIcon />
                                      </IconButton>
                                    </Box>
                                  </Grid>
                                ),
                              )}
                              <IconButton
                                aria-label="登録"
                                color="primary"
                                onClick={() =>
                                  push({
                                    price: 0,
                                    name: "",
                                    completed: false,
                                  })
                                }
                              >
                                <AddCircleTwoToneIcon />
                              </IconButton>
                            </React.Fragment>
                          )}
                        </FieldArray>
                      </Box>
                    </Box>
                    <Button
                      type="submit"
                      disableElevation
                      variant="contained"
                      classes={{ contained: classes.applyBtn }}
                    >
                      保存
                    </Button>
                  </Box>
                  <SnackAlert open={openSnack} message={"フレーバー登録済み！"} />
                </Form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </Page>
  );
};

export default CreateProductPage;
