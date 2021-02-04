import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import PublishTwoToneIcon from "@material-ui/icons/PublishTwoTone";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import React from "react";

interface IProps {
  empty?: boolean;
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
});

const AvatarCard: React.FC<IProps> = ({ empty = true }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container} width={1} p={3} display="flex" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <Box maxWidth={60}>
          {!empty ? (
            <img className={classes.img} src="/images/zayn.jpg" alt="" />
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
      <Button className={classes.btn} startIcon={<PublishTwoToneIcon />}>
        アップロード
      </Button>
    </Box>
  );
};

export { AvatarCard };
