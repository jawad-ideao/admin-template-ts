import { makeStyles } from "@material-ui/core";

const useCommonStyles = makeStyles(
  (theme) => ({
    scroll: {
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        width: theme.spacing(0.5),
      },
      "&::-webkit-scrollbar-track": {},
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#0C71BC", // theme.colors.primary,
      },
    },
    transparentButton: {
      // backgroundColor: opacify(-0.9, theme.colors.white),
      borderRadius: theme.spacing(0.75),
      color: "#fff", //theme.colors.white,
      // "&:hover": {
      //   backgroundColor: opacify(-0.5, theme.colors.white),
      // },
    },
    textAlignRight: {
      textAlign: "right",
    },
    row: {
      display: "flex",
      alignItems: "center",
    },
    rowCenter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    center: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    fadeAnimation: {
      transition: "all 1s",
      opacity: 0,
      "&.visible": {
        opacity: 1,
      },
    },
    hideBelowWide: {
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
    },
    showBelowWide: {
      [theme.breakpoints.up("md")]: {
        display: "none !important",
      },
    },
    maxHeightTransition: {
      overflow: "hidden",
      maxHeight: 0,
      transition: "max-height 0.5s cubic-bezier(0, 1, 0, 1)",
      "&.visible": {
        maxHeight: 2000,
        transition: "max-height 1s ease-in-out",
      },
    },
    noDecoration: {
      textDecoration: "none !important",
    },
    cardShadow: {
      boxShadow: "0px 6px 8px -4px rgba(127, 144, 159, 0.16)",
    },
    border: {
      border: "1px solid #E8EBED",
    },
    separator: {
      height: 0,
      width: "100%",
      border: "1px dashed #C5CDD3",
      marginTop: "16px",
      marginBottom: "16px",
    },
    lineSeparator: {
      height: 0,
      width: "100%",
      border: "1px solid #E8EBED",
      marginTop: "40px",
      marginBottom: "40px",
    },
    button: {
      height: "40px",
    },
    containerShadow: {
      boxShadow: "0px 12px 20px -8px rgba(5, 43, 72, 0.12)",
    },
    borderRadius12: {
      borderRadius: "12px",
    },
    borderRadius6: {
      borderRadius: "6px",
    },
    borderRadius3: {
      borderRadius: "3px",
    },
    borderRadius16: {
      borderRadius: "16px",
    },
    textBig: {
      fontSize: "32px",
      lineHeight: "40px",
    },
    textMid: {
      fontSize: "24px",
      lineHeight: "32px",
    },
    textSmall: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    textMobile: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    pin: {
      position: "relative",

      "&::after": {
        content: "''",
        width: "32px",
        height: "4px",
        background: "#0C71BC",

        position: "absolute",
        bottom: "-4px",
        left: "0px",
      },
    },
    spread: {
      display: "flex",
      justifyContent: "space-between",
    },
    clearFix: {
      overflow: "auto",

      "&::after": {
        content: "''",
        clear: "both",
        display: "table",
      },
    },
    modalShadow: {
      boxShadow: "0px 16px 24px -12px rgba(28, 37, 53, 0.24)",
    },
    textBold: {
      fontWeight: "bold",
    },
    grey: {
      color: "#7F909F", //theme.colors.grey,
    },
    trim: {
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },
  }),
  { index: 1 }
);

export default useCommonStyles;
