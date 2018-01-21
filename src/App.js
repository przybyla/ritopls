import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './scenes/Home';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact patch="/" component={Home} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
