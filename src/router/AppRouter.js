import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { DashboardRoutes } from "./DashboardRoutes";

import { PlubicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { LoginScreen } from "../components/login/LoginScreen";
import { AuthContext } from "../auth/AuthContext";

export const AppRouter = () => {

  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Switch>
          <PlubicRoute
            exact 
            path="/login"
            component={ LoginScreen }
            isAuthenticated={ user.logged }
          />
          <PrivateRoute
            path="/"
            component={ DashboardRoutes }
            isAuthenticated={ user.logged }
          />
        </Switch>
      </div>
    </Router>
  )
}