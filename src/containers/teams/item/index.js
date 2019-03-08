import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Link } from "react-router-dom";

import { getTeamItem } from '../actions';
import { chosenTeamItem } from '../selectors';
import './index.scss';

class TeamItem extends Component {
  constructor(props) {
    super(props);

    props.getTeamItem(props.match.params.id, props.teamList);
  }

  render() {
    if (this.props.error) {
      return <p className="error">{this.props.error}</p>
    }

    if (
      !_.isEmpty(this.props.itemForDisplay) &&
      !this.props.loading
    ) {
      return (
        <Fragment>
          <Typography variant="h5" color="inherit">
            {this.props.itemForDisplay.fullName} Roster
          </Typography>
          <Typography variant="body1" color="inherit"
            component={Link}
            to='/teams'>
            Back to teams
          </Typography>

          <GridList
            id="team-grid"
            cellHeight={100}
            // TODO: number of columns should be dynamic based on screen width (e.g., 1 if xs or sm)
            cols={3}
            spacing={0}
          >
            {this.props.itemForDisplay.roster.map(player => (
              // TODO: move this into a ListTile component
              <GridListTile
                key={player.person.displayName}
                component={Link}
                to={`${this.props.match.params.id}/${player.person.displayName}`}
              >
                <GridListTileBar
                  title={
                    <Typography variant="body2">
                      <span>{player.person.displayName}</span> - <span>{player.unit}</span>
                      <br/>
                      <span>{player.position}</span>
                    </Typography>
                  }
                  subtitle={
                    player.depthOrder === 1 ?
                    <span>Starter</span>
                    :
                    <span>Backup</span>
                  }
                  className="player-tile"
                />
              </GridListTile>
            ))}
          </GridList>
        </Fragment>
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
    teamList: state.teams.list,
    itemForDisplay: chosenTeamItem(state),
    error: state.teams.error,
    loading: state.teams.loading,
  }),
  { getTeamItem }
)(TeamItem);
