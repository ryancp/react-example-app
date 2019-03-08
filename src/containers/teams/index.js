import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import TeamList from "./list";

class Teams extends Component {
  render() {
    return (
      <Fragment>
        <Grid item xs={12}>
          <TeamList />
        </Grid>
      </Fragment>
    );
  }
}

export default Teams;
