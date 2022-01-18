import Layouts from "layouts";
import * as React from "react";
import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import Home from "views/Home";
import Page1 from "views/Page1";
import Page2 from "views/Page2";
import ProductList from "views/ProductList";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layouts />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/page1",
        element: <Page1 />,
      },
      {
        path: "/page2",
        element: <Page2 />,
      },
      {
        path: "/product-list",
        element: <ProductList />,
      },
    ],
  },
];

const Routers = () => {
  const element = useRoutes(routes);
  return element;
};

export default Routers;
