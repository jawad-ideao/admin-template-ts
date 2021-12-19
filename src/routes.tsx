import { LoadingScreen } from "./components";

import React, { Fragment, Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { DashboardLayout } from "./layouts/DashboardLayout";

const routes = [
  // Direct routes without layout, mostly used for login/registration
  {
    exact: true,
    path: "/admin/login",
    // layout: AuthLayout,
    // component: lazy(() => import("pages/admin/Login")),
  },
  {
    exact: true,
    path: "/admin/register",
    // layout: AuthLayout,
    // component: lazy(() => import("pages/admin/Register")),
  },
  // With layouts(Header/sidebar) routes
  // {
  //   path: "/admin",
  //   layout: AdminLayout,
  //   routes: [
  //     {
  //       exact: true,
  //       path: "/admin/applications",
  //       // component: lazy(() => import("pages/admin/Applications")),
  //     },
  //   ],
  // },
  {
    path: "/",
    layout: DashboardLayout,
    routes: [
      {
        exact: true,
        path: "/page1",
        component: lazy(() => import("./pages/dashboard/page1")),
      },
      {
        exact: true,
        path: "/page2",
        component: lazy(() => import("./pages/dashboard/page2")),
      },
      // This is for same route wrong input like
      // if route is /user and someone put
      // user/xyz it will re route to /user
      {
        path: "*",
        // eslint-disable-next-line
        component: () => <Redirect to="/page1" />,
      },
    ],
  },
  // For re routing to home if user input some wrong routes
  {
    path: "*",
    // eslint-disable-next-line
    component: () => <Redirect to="/" />,
  },
];

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route: any, i) => {
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            exact={route.exact}
            key={i}
            path={route.path}
            render={(props) => (
              <Layout>
                {route.routes ? (
                  renderRoutes(route.routes)
                ) : (
                  <Component {...props} />
                )}
              </Layout>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

export default routes;
