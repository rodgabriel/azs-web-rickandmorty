import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "pages/Home";
import Episode from "pages/Episode";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/episode/:id">
          <Episode />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
