import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Home from './scenes/Home';
import Summoner from './scenes/Summoner';
import store from './store';

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/summoner/:id" component={Summoner} />
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;
