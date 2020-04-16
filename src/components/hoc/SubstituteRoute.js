import React from "react";
import { Route } from "react-router-dom";

const SubstituteRoute = (Component, pathName) => ({ ...props }) => {
  return (
    <Route path={`/substitute/${pathName}`}>
      <Component {...props} />
    </Route>
  );
};

export default SubstituteRoute;
