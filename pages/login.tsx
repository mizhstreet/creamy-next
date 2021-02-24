import { Box, Button, Grid, InputLabel, makeStyles, Typography } from "@material-ui/core";
import { blue, grey, pink } from "@material-ui/core/colors";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { CheckboxWithLabel } from "formik-material-ui";
import { OutlinedTextfield } from "../components/form/outlined-textfield";
import axios from "axios";
import { useRouter } from "next/router";
import { Alert, AlertTitle } from "@material-ui/lab";
import { getEndpoint } from "../utils/getEndpoint";

interface IValues {
  username: string;
  password: string;
}

const useStyles = makeStyles({
  logo: {
    maxWidth: 150,
    alignSelf: "center",
  },
  greeting: {
    fontSize: 30,
    fontWeight: "bolder",
    textAlign: "center",
    marginTop: 30,
    color: pink[300],
    marginBottom: 60,
  },
  coloredGreeting: {
    color: blue[800],
  },
  applyBtn: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    backgroundColor: blue[800],
    "&:hover": {
      backgroundColor: blue[800],
    },
  },
  fee: {
    fontSize: 20,
    fontWeight: "bold",
    color: grey[500],
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: grey[800],
    fontWeight: "bold",
  },
});

const DisplayingErrorMessagesSchema = Yup.object().shape({
  username: Yup.string().min(4, "短すぎる!").max(50, "長すぎる!").required("必ず入力してください"),
  password: Yup.string().min(4, "短すぎる!").max(50, "長すぎる!").required("必ず入力してください"),
});

const Login: React.FC = () => {
  const [errMsg, setErrMsg] = useState<string>("");
  const classes = useStyles();
  const router = useRouter();

  const initialValues: IValues = {
    username: "",
    password: "",
  };
  return (
    <Grid container justify="center">
      <Grid item md={5}>
        <Box height={1} width={1} pl={5} pr={5}>
          <Box display="flex" width={1} justifyContent="center" pt={"20%"}>
            <img className={classes.logo} src="images/logo1.png" />
          </Box>
          <Typography className={classes.greeting}>
            <span className={classes.coloredGreeting}>こん</span>に<span className={classes.coloredGreeting}>ちは</span>
          </Typography>
          {errMsg !== "" ? (
            <Box mb={5}>
              <Alert severity="error">
                <AlertTitle>
                  <strong>エラー</strong>
                </AlertTitle>
                ログインIDかパスワードか間違っている
              </Alert>
            </Box>
          ) : null}
          <Formik
            validationSchema={DisplayingErrorMessagesSchema}
            initialValues={initialValues}
            onSubmit={async ({ username, password }, { setSubmitting }) => {
              setSubmitting(true);
              axios
                .post(
                  getEndpoint("/api/auth/login"),
                  { username, password },
                  {
                    withCredentials: true,
                  },
                )
                .then((response) => {
                  if (response.data) {
                    router.push("/");
                  } else {
                    setErrMsg("saodnaskd");
                  }
                });
            }}
          >
            {() => (
              <Form>
                <Box width={1}>
                  <Box width={1}>
                    <InputLabel className={classes.inputLabel} htmlFor="username">
                      Username
                    </InputLabel>
                    <Field placeholder="IDを入力してください" component={OutlinedTextfield} name="username" />
                  </Box>
                  <Box width={1}>
                    <InputLabel className={classes.inputLabel} htmlFor="username">
                      パスワード
                    </InputLabel>
                    <Field
                      type="password"
                      placeholder="パスワードを入力してください"
                      component={OutlinedTextfield}
                      name="password"
                    />
                  </Box>
                  <Box width={1}>
                    <Button type="submit" variant="contained" classes={{ contained: classes.applyBtn }}>
                      ログイン
                    </Button>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
