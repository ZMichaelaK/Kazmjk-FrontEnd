import React from "react";
import { Route, useNavigate } from "react-router-dom";

const Protected = ({ element, isLoggedIn, ...rest }) => {
  return isLoggedIn ? (
    <Route {...rest} element={element} />
  ) : (
    <useNavigate to="/login" replace />
  );
};

export default Protected;
