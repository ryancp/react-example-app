import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';

import { getTeamList } from './actions';
import { filteredTeamList } from './selectors';
import './list.scss';

class TeamList extends Component {
  constructor(props) {
    super(props);
    props.getTeamList(props.listForDisplay);
  }

  render() {
    if (this.props.error) {
      return <p className="error">{this.props.error}</p>
    }

    if (
      !_.isEmpty(this.props.listForDisplay) &&
      !this.props.loading
    ) {
      return (
        <GridList
          id="team-grid"
          cellHeight={100}
          // TODO: number of columns should be dynamic based on screen width (e.g., 1 if xs or sm)
          cols={3}
          spacing={0}
        >
          {this.props.listForDisplay.map(team => (
            // TODO: move this into a ListTile component
            <GridListTile
              key={team.id}
              component={Link}
              to={`/teams/${team.id}`}
            >
              <GridListTileBar
                title={
                  <Typography variant="h6">
                    <span>{team.fullName}
                    </span>
                  </Typography>
                }
                className="team-tile"
              />
            </GridListTile>
          ))}
        </GridList>
      );
    }

    return (
      <Fragment>
        Loading...
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    listForDisplay: filteredTeamList(state),
    error: state.teams.error,
    loading: state.teams.loading,
    searched: state.teams.searched,
  }),
  { getTeamList }
)(TeamList);
