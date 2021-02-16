import { Box, Button, Chip, Grid, IconButton, InputLabel, makeStyles } from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";
import { Field, Form, Formik } from "formik";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";

import React from "react";
import * as Yup from "yup";
import { ImageCard } from "../../../components/form/image-card";
import { OutlinedTextfield } from "../../../components/form/outlined-textfield";
import { Page } from "../../../components/page";
import { SectionTitle } from "../../../components/typography/section-title";

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
  switchLabel: {
    fontSize: 16,
    color: grey[800],
    fontWeight: "bold",
  },
});

interface IFormValues {
  username: string;
  password: string;
  name: string;
  isAdmin: boolean;
}

const DisplayingErrorMessagesSchema = Yup.object().shape({
  username: Yup.string().min(4, "短すぎる!").max(50, "長すぎる!").required("必ず入力してください"),
  password: Yup.string().min(4, "短すぎる!").max(50, "長すぎる!").required("必ず入力してください"),
  name: Yup.string().max(50, "長すぎる!").required("必ず入力してください"),
});

const EditProductPage: React.FC = () => {
  const classes = useStyles();

  const initialValues: IFormValues = {
    username: "",
    password: "",
    isAdmin: true,
    name: "",
  };

  return (
    <Page title="商品編集">
      <Grid container justify="center">
        <Box width={1} pl={5} pr={5}>
          <SectionTitle component="h2">商品編集</SectionTitle>
        </Box>
        <Grid item md={8} lg={6}>
          <ImageCard />
          <Box mt={10}>
            <Formik
              validationSchema={DisplayingErrorMessagesSchema}
              initialValues={initialValues}
              onSubmit={async (values, { setSubmitting }) => {
                console.log("something");
                setSubmitting(true);
              }}
            >
              {() => (
                <Form>
                  <Box width={1}>
                    <Box width={1}>
                      <InputLabel className={classes.inputLabel} htmlFor="email">
                        商品名
                      </InputLabel>
                      <Field component={OutlinedTextfield} name="name" />
                    </Box>
                    <Box>
                      <InputLabel className={classes.inputLabel} htmlFor="email">
                        ベース値段
                      </InputLabel>
                      <Field component={OutlinedTextfield} name="username" />
                    </Box>
                    <Box width={1}>
                      <InputLabel className={classes.inputLabel} htmlFor="email">
                        フレーバー数
                      </InputLabel>
                      <Field component={OutlinedTextfield} name="password" />
                    </Box>
                    <Box>
                      <InputLabel className={classes.inputLabel} htmlFor="email">
                        サイズ
                      </InputLabel>
                      <Box>
                        <Chip clickable color="primary" label="キング" />
                        <Chip clickable color="primary" label="スモール" />
                        <IconButton aria-label="登録" color="primary">
                          <AddCircleTwoToneIcon />
                        </IconButton>
                      </Box>
                    </Box>
                    <Button disableElevation variant="contained" classes={{ contained: classes.applyBtn }}>
                      保存
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </Page>
  );
};

export default EditProductPage;