import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import ErrorBoundary from './Components/ErrorBoundary';
import ActivityLog from './Containers/ActivityLog';
import NoPageFound from './Components/PageNotFound';
import Header from './Containers/Header';
import Footer from './Containers/Footer';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/activitylog" />} />
            <Route exact path="/activitylog" component={ActivityLog} />
            <Route component={NoPageFound} />
          </Switch>
        </Router>
        <Footer />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
