import { Route, Switch } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { LoginPage } from "../pages/LoginPage";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
    </Switch>
  );
};
