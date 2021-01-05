import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CreditCardTwoToneIcon from "@material-ui/icons/CreditCardTwoTone";
import GroupTwoToneIcon from "@material-ui/icons/GroupTwoTone";
import ListAltTwoToneIcon from "@material-ui/icons/ListAltTwoTone";
import ExitToAppTwoToneIcon from "@material-ui/icons/ExitToAppTwoTone";
import KitchenTwoToneIcon from "@material-ui/icons/KitchenTwoTone";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme, Theme, createStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Link from "next/link";
import { Box, Divider } from "@material-ui/core";
import { blue, red } from "@material-ui/core/colors";
import Head from "next/head";

// import logo from "../../../public/images/logo.png";

const drawerWidth = 120;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: "100%",
      display: "block",
    },
    active: {
      backgroundColor: blue[100],
      color: blue[800],
    },
    root: {
      display: "flex",
    },
    drawer: {
      border: "none",
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    icon: {
      fontSize: 30,
      // marginBottom: 10,
      // color: red[500],
    },
    logo: {
      width: "70%",
      marginLeft: 20,
      maxWidth: 100,
    },
    navListItem: {
      margin: "0 auto",
      padding: 0,
      maxWidth: 80,
      marginTop: 20,
      marginBottom: 10,
      borderRadius: 15,
      overflow: "hidden",
    },
    navItemText: {
      fontSize: 14,
      marginTop: 5,
      fontWeight: "bold",
      textAlign: "center",
      // color: red[800],
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      border: "none",
    },
    content: {
      flexGrow: 1,
    },
  }),
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  title: string;
}

export const Page: React.FC<Props> = (props) => {
  const { window, children, title } = props;
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box pt={2} pb={3}>
        <img className={classes.logo} src={"/images/logo1.png"} alt="some" />
      </Box>
      <List>
        <ListItem className={classes.navListItem} button>
          <Box
            width={1}
            display="flex"
            pt={2}
            pb={2}
            flexDirection="column"
            alignItems="center"
            className={router.pathname == "/" ? `${classes.active}` : ""}
          >
            <CreditCardTwoToneIcon className={classes.icon} />
            <Typography className={classes.navItemText}>レジ</Typography>
          </Box>
        </ListItem>
        <ListItem className={classes.navListItem} button>
          <Link href="/admin/users">
            <Box
              width={1}
              display="flex"
              pt={2}
              pb={2}
              flexDirection="column"
              alignItems="center"
              className={router.pathname.includes("users") ? `${classes.active}` : ""}
            >
              <GroupTwoToneIcon className={classes.icon} />
              <Typography className={classes.navItemText}>ユーザー管理</Typography>
            </Box>
          </Link>
        </ListItem>
        <ListItem className={classes.navListItem} button>
          <Link href="/admin/products">
            <Box
              width={1}
              display="flex"
              pt={2}
              pb={2}
              flexDirection="column"
              alignItems="center"
              className={router.pathname.includes("products") ? `${classes.active}` : ""}
            >
              <KitchenTwoToneIcon className={classes.icon} />
              <Typography className={classes.navItemText}>商品管理</Typography>
            </Box>
          </Link>
        </ListItem>
        <ListItem className={classes.navListItem} button>
          <Box
            width={1}
            display="flex"
            pt={2}
            pb={2}
            flexDirection="column"
            alignItems="center"
            className={router.pathname.includes("receipts") ? `${classes.active}` : ""}
          >
            <ListAltTwoToneIcon className={classes.icon} />
            <Typography className={classes.navItemText}>売上</Typography>
          </Box>
        </ListItem>
        <Box height={"100%"}></Box>
        <Divider />
        <ListItem className={classes.navListItem} button>
          <Box width={1} display="flex" pt={2} flexDirection="column" alignItems="center">
            <Box maxWidth={60} borderRadius={50} overflow={"hidden"}>
              <img className={classes.avatar} src="/images/zayn.jpg" alt="" />
            </Box>
            <Typography className={classes.navItemText}>mizhB</Typography>
          </Box>
        </ListItem>
        <ListItem className={classes.navListItem} button>
          <Box width={1} display="flex" pt={2} pb={2} flexDirection="column" alignItems="center">
            <ExitToAppTwoToneIcon style={{ color: red[800] }} className={classes.icon} />
            <Typography style={{ color: red[800] }} className={classes.navItemText}>
              ログアウト
            </Typography>
          </Box>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>{children}</main>
      </div>
    </>
  );
};
