import { Hidden, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { Redirect } from "react-router";
import useCommonStyles from "../../styles/common";

import { DashboardHeader, DashboardSidenav } from "./components";
export * from "./components";

interface IProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

export const DashboardLayout = (props: IProps) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  //   const { state } = useAppContext();

  //   if (
  //     !state ||
  //     state.user.token === undefined ||
  //     state.user.user === undefined ||
  //     state.user.token.length === 0
  //   ) {
  //     return <Redirect to="/admin/login" />;
  //   }

  // if (state.user.user.role === "user") {
  //   return <Redirect to="/" />;
  // }
  return (
    <div className={classes.root}>
      <DashboardHeader />
      <Hidden xsDown>
        <DashboardSidenav />
      </Hidden>
      <main className={clsx(classes.content, commonClasses.scroll)}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: { display: "flex" },
  content: {
    flexGrow: 1,
    backgroundColor: "#F4F8FA",
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("xs")]: {
      minHeight: "72px",
    },
  },
}));
