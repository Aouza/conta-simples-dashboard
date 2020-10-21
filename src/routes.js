import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Cards from "./pages/Cards";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/transacoes" component={Transactions} />
      <Route path="/cartoes" component={Cards} />
    </Switch>
  );
};

export default Routes;
