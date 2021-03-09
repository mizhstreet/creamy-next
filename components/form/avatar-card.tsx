import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import PublishTwoToneIcon from "@material-ui/icons/PublishTwoTone";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import React, { useState } from "react";

interface IProps {
  empty?: boolean;
  onFileSelect: (e: File | undefined) => void;
}

const useStyles = makeStyles({
  container: {
    backgroundColor: grey[100],
    borderRadius: 10,
  },
  img: {
    maxWidth: "100%",
    borderRadius: "50%",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: grey[600],
    fontSize: 14,
  },
  descriptionEmpty: {
    color: grey[800],
    fontSize: 16,
    fontWeight: "bold",
  },
  btn: {
    fontWeight: "bolder",
  },
  input: {
    display: "none",
  },
  labelCtn: {
    display: "flex",
    alignItems: "center",
  },
});

const AvatarCard: React.FC<IProps> = ({ empty = false, onFileSelect }) => {
  const classes = useStyles();

  const [file, setFile] = useState<File | undefined>();
  return (
    <Box className={classes.container} width={1} p={3} display="flex" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <Box maxWidth={60}>
          {!empty ? (
            <img className={classes.img} src={file ? URL.createObjectURL(file) : undefined} alt="" />
          ) : (
            <AccountCircleTwoToneIcon style={{ fontSize: 50 }} />
          )}
        </Box>
        <Box ml={2}>
          {!empty ? (
            <Box>
              <Typography className={classes.name}>Minh Biu</Typography>
              <Typography className={classes.description} component="span">
                写真を載せてください
              </Typography>
            </Box>
          ) : (
            <Box>
              <Typography className={classes.descriptionEmpty} component="span">
                写真を載せてください
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <input
        onChange={(e) => {
          if (e.target.files) {
            onFileSelect(e.target.files[0]);
          }
        }}
        accept="image/*"
        className={classes.input}
        id="imageme"
        multiple
        type="file"
      />
      <label className={classes.labelCtn} htmlFor="imageme">
        <Button component="span" className={classes.btn} startIcon={<PublishTwoToneIcon />}>
          アップロード
        </Button>
      </label>
    </Box>
  );
};

export { AvatarCard };
