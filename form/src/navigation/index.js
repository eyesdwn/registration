
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import { SuccessPage } from '../components/SuccessPage';
import { RegisterPage } from '../components/Registration/StepOne';
import { RegisterPageStepTwo } from '../components/Registration/StepTwo';

const Navigation = () =>  (
  <AuthContext.Provider>
    <Router>
      <Switch>
        <Route exact path="/" component={RegisterPage} />
        <Route exact path="/register-second-step" component={RegisterPageStepTwo} />
        <Route exact path="/success" component={SuccessPage} />
      </Switch>
    </Router>
  </AuthContext.Provider>
)

export { Navigation }
