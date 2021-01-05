import React from "react";
import MuiTextField from "@material-ui/core/TextField";
import { fieldToTextField, TextFieldProps } from "formik-material-ui";
import { FormControl, makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  inputField: {
    padding: 15,
    fontWeight: "bold",
    color: grey[600],
    backgroundColor: grey[100],
    border: "none",
  },
  inputFieldIcon: {
    color: grey[300],
  },
  fieldLabel: {
    fontWeight: "bold",
    fontSize: 20,
    color: grey[700],
    paddingBottom: 10,
  },
  fieldContainer: {
    marginBottom: 25,
    width: "100%",
  },
  root: {
    borderRadius: 10,
    overflow: "hidden",
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "none",
      borderColor: "green",
    },
  },
});

const OutlinedTextfield: React.FC<TextFieldProps> = (props) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.fieldContainer}>
      <MuiTextField
        {...fieldToTextField(props)}
        fullWidth={true}
        variant="outlined"
        className={classes.root}
        inputProps={{ className: classes.inputField }}
      />
    </FormControl>
  );
};

export { OutlinedTextfield };
