import { Box, Button, Grid, InputLabel, makeStyles } from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";
import { Field, Form, Formik } from "formik";
import { Switch } from "formik-material-ui";
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
import { useCreateUserMutation } from "../../../generated/apolloComponent";

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

const CreateUserPage: React.FC = () => {
  const classes = useStyles();

  const [file, setFile] = useState<File | undefined>();

  const [result, createUser] = useCreateUserMutation();

  const [openSnack, setOpenSnack] = React.useState<boolean>(false);

  const router = useRouter();

  const initialValues: IFormValues = {
    username: "",
    password: "",
    isAdmin: false,
    name: "",
  };

  return (
    <Page title="ユーザー新規登録">
      <Grid container justify="center">
        <Box width={1} pl={5} pr={5}>
          <SectionTitle component="h2">ユーザー新規登録</SectionTitle>
        </Box>
        <Grid item md={8} lg={6}>
          <AvatarCard file={file} onFileSelect={(e) => setFile(e)} />
          <Box mt={10}>
            <Formik
              validationSchema={DisplayingErrorMessagesSchema}
              initialValues={initialValues}
              onSubmit={async ({ name, username, password, isAdmin }, { setSubmitting }) => {
                setSubmitting(true);
                const { data } = await createUser({
                  data: {
                    name,
                    username,
                    password,
                    isAdmin,
                  },
                  image: file,
                });
                if (data) {
                  setSubmitting(false);
                  setOpenSnack(true);
                  setTimeout(() => {
                    router.push("/admin/users");
                  }, 1000);
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Loading open={isSubmitting} />
                  <Box width={1}>
                    <Box width={1}>
                      <InputLabel className={classes.inputLabel}>名前</InputLabel>
                      <Field component={OutlinedTextfield} name="name" />
                    </Box>
                    <Box>
                      <InputLabel className={classes.inputLabel}>ログインID</InputLabel>
                      <Field component={OutlinedTextfield} name="username" />
                    </Box>
                    <Box width={1}>
                      <InputLabel className={classes.inputLabel}>パスワード</InputLabel>
                      <Field type="password" component={OutlinedTextfield} name="password" />
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Field component={Switch} type="checkbox" name="isAdmin" />
                      <label className={classes.switchLabel}>管理者</label>
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
                  <SnackAlert open={openSnack} message={"ユーザー登録済み！"} />
                </Form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </Page>
  );
};

export default withAuth(CreateUserPage);
