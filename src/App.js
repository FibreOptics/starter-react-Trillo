import React from "react";
import { Switch, Route } from "react-router-dom";

import FirstPage from "react/pages/FirstPage";

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={FirstPage} />
      <Route exact path='/hotel' component={FirstPage} />
      <Route exact path='/flight' component={FirstPage} />
      <Route exact path='/carRental' component={FirstPage} />
      <Route exact path='/tours' component={FirstPage} />
    </Switch>
  );
};

export default App;
