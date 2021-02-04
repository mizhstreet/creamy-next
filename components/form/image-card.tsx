import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import PublishTwoToneIcon from "@material-ui/icons/PublishTwoTone";
import ImageTwoToneIcon from "@material-ui/icons/ImageTwoTone";
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
  description: {
    color: grey[800],
    fontSize: 16,
    fontWeight: "bold",
  },
  btn: {
    fontWeight: "bolder",
  },
});

const ImageCard: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container} width={1} p={3} display="flex" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <Box maxWidth={60}>
          {/* <ImageTwoToneIcon style={{ fontSize: 50 }} /> */}

          <img className={classes.img} src="/images/flavors/1.png" alt="" />
        </Box>
        <Box ml={2}>
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

export { ImageCard };
