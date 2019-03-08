import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

import { getPlayerItem, savePlayerItem } from '../actions';
import { chosenPlayerItem, chosenTeamItem } from '../selectors';
import PlayerForm from './playerForm';
import './index.scss';

class PlayerItem extends Component {
  constructor(props) {
    super(props);
    props.getPlayerItem(props.match.params.id, props.teamList, props.match.params.playerName);
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
            Edit {this.props.itemForDisplay.person.displayName}
          </Typography>
          <Typography variant="body1" color="inherit"
            component={Link}
            to={`/teams/${this.props.match.params.id}`}>
            Back to team
          </Typography>

          <PlayerForm
            teamItem={this.props.teamItem}
            playerItem={this.props.itemForDisplay}
            teamId={this.props.match.params.id}
          />

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
    teamItem: chosenTeamItem(state),
    itemForDisplay: chosenPlayerItem(state),
  }),
  { getPlayerItem, savePlayerItem }
)(PlayerItem);
