import { Button, Hidden, makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import React, { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
// import { AccountInfo, ConnectWalletButton, MobileMenu } from "components";
import { Link, Route, Switch, useParams } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import { BOTTOM_MENU, TOP_MENU } from "../../../../config/menu";

interface IProps {
  className?: string;
}

export const DashboardHeader = (props: IProps) => {
  const classes = useStyles();
  // const { account, library, rawWeb3Context } = useConnectedWeb3Context();
  // const { toggleWalletConnectModal } = useGlobal();
  // const [balance, setBalance] = useState("");
  // const connector = localStorage.getItem(STORAGE_KEY_CONNECTOR);

  // useEffect(() => {
  //   library
  //     ?.getBalance(account ?? "")
  //     .then((value) => setBalance(value.toString()));
  // }, [account, library]);

  // const onDisconnect = () => {
  //   rawWeb3Context.deactivate();
  //   localStorage.removeItem(STORAGE_KEY_CONNECTOR);
  // };

  // const infoElem = account ? (
  //   <AccountInfo
  //     address={account}
  //     balance={balance}
  //     icon={connector || ""}
  //     onDisconnect={onDisconnect}
  //   />
  // ) : (
  //   <ConnectWalletButton onClick={toggleWalletConnectModal} />
  // );

  // const { id } = useParams<{ id: string }>();
  // const { state } = useAppContext();
  // const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  // const backElem = useMemo(() => {
  //   if (isMobile && id && id.length > 0)
  //     return (
  //       <div className={classes.backDiv}>
  //         <Link className={classes.backLink} to="/pool">
  //           <Button>
  //             <ChevronLeftIcon fontSize="large" />
  //             <img
  //               alt="pool"
  //               className={classes.poolImage}
  //               src={`/imgs/pool/${state.pools[id]?.symbolPath}`}
  //             />
  //             <span className={classes.mobileBackLinkText}>
  //               {state.pools[id]?.name}
  //             </span>
  //           </Button>
  //         </Link>
  //       </div>
  //     );
  //   return (
  //     <div className={classes.backDiv}>
  //       <Link className={classes.backLink} to="/pool">
  //         <Button>
  //           <ChevronLeftIcon />
  //           <span className={classes.backLinkText}>Back to List</span>
  //         </Button>
  //       </Link>
  //     </div>
  //   );
  // }, [isMobile, id, state.pools]);

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <AppBar
      className={clsx(classes.appBar, props.className)}
      elevation={0}
      position="fixed"
    >
      {/* {menuOpen && (
        <MobileMenu
          items={TOP_MENU}
          onMenuClose={handleMenuClose}
          secondaryItems={BOTTOM_MENU}
        >
          {infoElem}
        </MobileMenu>
      )} */}
      <Toolbar className={classes.toolbar}>
        <div className={classes.leftDiv}>
          <Hidden smUp>
            <div className={classes.burger} onClick={handleMenuOpen}>
              <MenuIcon />
            </div>
          </Hidden>
          <Switch>
            <Route
              exact={true}
              path="/apply"
              render={() => <span>IDO Application</span>}
            />
            <Route
              exact={true}
              path="/pool"
              render={() => <span>Pools List</span>}
            />
            {/* <Route exact={true} path="/pool/:id" render={() => backElem} /> */}
          </Switch>
        </div>
        {/* <Hidden xsDown>{infoElem}</Hidden> */}
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    width: `calc(100% - 240px)`,
    marginLeft: "240px",
    backgroundColor: "white",

    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      width: "100%",
    },
  },
  toolbar: {
    color: "#1C2535",
    fontFamily: "Rubik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "32px",
    boxShadow: "inset 0px -1px 0px #E8EBED",

    justifyContent: "space-between",

    [theme.breakpoints.down("xs")]: {
      height: "72px",
    },
  },
  backDiv: {
    display: "flex",
    alignItems: "center",
  },
  backLink: {
    textDecoration: "none",
  },
  backLinkText: {
    color: "#1C2535",
    fontSize: "16px",
    lineHeight: "24px",
  },
  mobileBackLinkText: {
    color: "#1C2535",
    fontSize: "24px",
    lineHeight: "32px",
  },
  burger: {
    marginRight: "27px",

    display: "flex",
    alignItems: "center",
  },
  leftDiv: {
    display: "flex",
  },
  poolImage: {
    width: "32px",
    height: "auto",
    marginRight: "16px",
  },
}));
