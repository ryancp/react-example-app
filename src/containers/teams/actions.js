import {
  GET_TEAM_LIST,
  GET_TEAM_ITEM,
  GET_PLAYER_ITEM,
  SAVE_PLAYER_ITEM,
} from './actionTypes';

const getTeamList = (teamList) => {
  return {
      type: GET_TEAM_LIST,
      payload: teamList,
  }
};

const getTeamItem = (id, teamList) => {
  return {
    type: GET_TEAM_ITEM,
    payload: {
      id,
      teamList,
    },
  }
};

const getPlayerItem = (teamId, teamList, playerName) => {
  return {
    type: GET_PLAYER_ITEM,
    payload: {
      teamId,
      teamList,
      playerName
    },
  }
};

const savePlayerItem = (teamId, playerIndex, playerDetails) => {
  return {
    type: SAVE_PLAYER_ITEM,
    payload: {
      teamId,
      playerIndex,
      playerDetails,
    },
  }
};

export {
  getTeamList,
  getTeamItem,
  getPlayerItem,
  savePlayerItem,
};