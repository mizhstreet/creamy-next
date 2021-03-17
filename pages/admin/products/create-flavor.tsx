import { Box, Button, Grid, InputLabel, makeStyles } from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import * as Yup from "yup";
import { AvatarCard } from "../../../components/form/avatar-card";
import { OutlinedTextfield } from "../../../components/form/outlined-textfield";
import withAuth from "../../../components/hocs/with-auth";
import { Loading } from "../../../components/loading";
import { Page } from "../../../components/page";
import { SnackAlert } from "../../../components/snack-alert";
import { SectionTitle } from "../../../components/typography/section-title";
import { useCreateFlavorMutation } from "../../../generated/apolloComponent";

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
  name: string;
  stockPrice: number;
}

const DisplayingErrorMessagesSchema = Yup.object().shape({
  name: Yup.string().max(50, "長すぎる!").required("必ず入力してください"),
  stockPrice: Yup.number().required("必ず入力してください"),
});

const CreateFlavorPage: React.FC = () => {
  const classes = useStyles();

  const router = useRouter();

  const [file, setFile] = useState<File | undefined>();

  const [openSnack, setOpenSnack] = React.useState<boolean>(false);

  const [result, createFlavor] = useCreateFlavorMutation();

  const initialValues: IFormValues = {
    name: "",
    stockPrice: 0,
  };

  return (
    <Page title="フレーバー新規登録">
      <Grid container justify="center">
        <Box width={1} pl={5} pr={5}>
          <SectionTitle component="h2">フレーバー新規登録</SectionTitle>
        </Box>
        <Grid item md={8} lg={6}>
          <AvatarCard file={file} onFileSelect={(e) => setFile(e)} />
          <Box mt={10}>
            <Formik
              validationSchema={DisplayingErrorMessagesSchema}
              initialValues={initialValues}
              onSubmit={async ({ name, stockPrice }, { setSubmitting }) => {
                setSubmitting(true);
                console.log(stockPrice);

                const { data } = await createFlavor({
                  data: {
                    name,
                    stockPrice,
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
              {({ isSubmitting }) => (
                <Form>
                  <Loading open={isSubmitting} />
                  <Box width={1}>
                    <Box width={1}>
                      <InputLabel className={classes.inputLabel}>フレーバー名</InputLabel>
                      <Field component={OutlinedTextfield} name="name" />
                    </Box>
                    <Box width={1}>
                      <InputLabel className={classes.inputLabel}>入庫値段</InputLabel>
                      <Field type="number" component={OutlinedTextfield} name="stockPrice" />
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

export default withAuth(CreateFlavorPage);
