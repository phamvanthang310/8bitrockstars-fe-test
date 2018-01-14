import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import PageNotFound from './src/containers/PageNotFound';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider } from 'material-ui/styles/index';
import { darkBlack } from 'material-ui/styles/colors';
import './assets/styles/index.scss';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './src/reducers';
import Home from './src/containers/Home';
import { epicMiddleware } from './src/middlewares';

const muiTheme = {
  palette: {
    primary1Color: '#4267b2',
    textColor: darkBlack
  }
};

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home}/>
          <Redirect exact from='/' to='/home'/>
          <Route component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
