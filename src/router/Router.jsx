import React from "react";
import { useRoutes } from "react-router-dom";

const Router = ({ allRoutes }) => {
  const routes = useRoutes(allRoutes); // Use useRoutes within the Router context
  return routes;
};

export default Router;
