import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Grid from '@material-ui/core/Grid';
import './App.scss';
import Header from './components/header';
import TeamList from './containers/teams';
import TeamItem from './containers/teams/item';
import PlayerItem from './containers/teams/item/player';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: lightBlue,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header className="App-header"></Header>
          <div className="Main">
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Switch>
                  <Route path="/teams/:id/:playerName" component={PlayerItem} />
                  <Route path="/teams/:id" component={TeamItem} />
                  <Route path="/teams" component={TeamList} />
                  <Redirect to="/teams" />
                </Switch>
              </Grid>
            </Grid>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
