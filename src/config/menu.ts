export interface IMenuItem {
  external?: boolean;
  openBlank?: boolean;
  link?: string;
  name: string;
  onClick?: () => void;
}

// export const MENU_FOR_USER = [
//   {
//     link: "/applications",
//     name: "IDO Application",
//   },
//   {
//     link: "/pools",
//     name: "Pools",
//   },
// ];

// export const APPLY_APPLICATION_MENU = [
//   {
//     link: "/",
//     name: "IDO Application",
//   },
// ];

export const USER_MENU = [
  {
    link: "/anything",
    name: "My Anything",
  },
  {
    link: "/applications",
    name: "My Applications",
  },
];

export const TOP_MENU = [
  {
    link: "/",
    name: "Dashboard",
  },
];

export const BOTTOM_MENU = [
  {
    external: true,
    openBlank: false,
    link: "/",
    name: "Back to Main",
  },
];
