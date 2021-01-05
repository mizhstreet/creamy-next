import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import PublishTwoToneIcon from "@material-ui/icons/PublishTwoTone";
import React from "react";

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
  btn: {
    fontWeight: "bolder",
  },
});

const AvatarCard: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container} width={1} p={3} display="flex" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <Box maxWidth={60}>
          <img className={classes.img} src="/images/zayn.jpg" alt="" />
        </Box>
        <Box ml={2}>
          <Typography className={classes.name}>Minh Biu</Typography>
          <Typography className={classes.description} component="span">
            写真を載せてください
          </Typography>
        </Box>
      </Box>
      <Button className={classes.btn} startIcon={<PublishTwoToneIcon />}>
        アップロード
      </Button>
    </Box>
  );
};

export { AvatarCard };
