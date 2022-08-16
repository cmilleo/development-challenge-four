import { Route, Switch } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
    </Switch>
  );
};
