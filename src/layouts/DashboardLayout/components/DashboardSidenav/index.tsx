import { makeStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {
  BOTTOM_MENU,
  IMenuItem,
  TOP_MENU,
  USER_MENU,
} from "../../../../config/menu";

interface IProps {
  className?: string;
}

export const DashboardSidenav = (props: IProps) => {
  const location = useLocation();
  const classes = useStyles();

  const renderList = (items: IMenuItem[]) => (
    <>
      {items.map((item) => (
        <>
          {item.link ? (
            <ListItem component={Link} key={item.name} to={item.link}>
              <ListItemText
                className={clsx(
                  classes.item,
                  location.pathname === item.link ? classes.active : ""
                )}
                primary={item.name}
              />
            </ListItem>
          ) : (
            <ListItem key={item.name}>
              <ListItemText
                className={clsx(
                  classes.item,
                  location.pathname === item.link ? classes.active : ""
                )}
                primary={item.name}
              />
            </ListItem>
          )}
        </>
      ))}
    </>
  );

  return (
    <Drawer
      anchor="left"
      className={clsx(classes.root, classes.drawer, props.className)}
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="permanent"
    >
      <div>
        <div className={clsx(classes.toolbar, classes.logoWrapper)}>
          <a href="/">
            <img
              alt="logo"
              className={classes.logo}
              src="/imgs/logo/logo-white.svg"
            />
          </a>
        </div>
        <List>
          {/* {account && renderList(USER_MENU)} */}
          {renderList(TOP_MENU)}
        </List>
      </div>

      <List>
        {BOTTOM_MENU.map((item) => {
          if (item.external) {
            return (
              <a
                className="MuiListItem-root MuiListItem-gutters"
                href={item.link}
                key={item.name}
                rel="noreferrer noopener"
                target={item.openBlank ? "_blank" : "_self"}
              >
                <div className={clsx(classes.item, "MuiListItemText-root")}>
                  {item.name}
                </div>
              </a>
            );
          }
          return (
            <ListItem component={Link} key={item.name} to={item.link}>
              <ListItemText
                className={clsx(
                  classes.item,
                  location.pathname === item.link ? classes.active : ""
                )}
                primary={item.name}
              />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  drawer: {
    width: "240px",
    flexShrink: 0,
  },
  drawerPaper: {
    width: "240px",
    backgroundColor: "#052B48",
    height: "100%",

    justifyContent: "space-between",
  },
  toolbar: theme.mixins.toolbar,
  item: {
    color: "#9FD2F9",
    padding: "8px 10px 8px 13px",
    borderRadius: "6px",

    "&:hover": {
      background: "rgba(213, 237, 255, 0.15)",
    },
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: `calc(240px / 2)`,
  },
  active: {
    background: "#0C71BC !important",

    "& span": {
      color: "white",
    },
  },
}));
