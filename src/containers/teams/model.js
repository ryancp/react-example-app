import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import _ from 'lodash';

import {
  GET_TEAM_LIST_SUCCESS,
  GET_TEAM_LIST_FAIL,
  GET_TEAM_ITEM_SUCCESS,
  GET_TEAM_ITEM_FAIL,
  GET_PLAYER_ITEM_SUCCESS,
  GET_PLAYER_ITEM_FAIL,
} from './actionTypes';

const apiUrl = 'http://localhost:3000/api/';

const getListData = (teamList, filter) => {
  let url = `${apiUrl}data.json`;

  if (filter) {
    url = `${url}?filter=${filter}`;
  }

  // fetch team list data only if it's not already in the store
  if (teamList.length === 0) {
    return axios.get(
      url,
    );
  }

  return new Promise((resolve) => {
    return resolve({
      data: {
        teams: teamList
      }
    });
  });
};

export function* getList(data) {
  try {
    const response = yield call(getListData, data.payload);

    if (response.data.teams.length) {
      yield put({ type: GET_TEAM_LIST_SUCCESS, payload: response.data.teams });
    }
  } catch (e) {
    yield put({ type: GET_TEAM_LIST_FAIL, payload: e });
  }
};

export function* getItem(data) {
  try {
    const response = yield call(getListData, data.payload.teamList, data.payload.id);

    if (response.data.teams.length) {
      const chosenTeamItem = _.find(response.data.teams, {id: data.payload.id});
      // Sort players by position then depthOrder
      chosenTeamItem.roster = _.orderBy(chosenTeamItem.roster, ['position', 'depthOrder'], ['asc', 'asc']);
      yield put({ type: GET_TEAM_ITEM_SUCCESS, payload: chosenTeamItem });
    }
  } catch(e) {
    yield put({ type: GET_TEAM_ITEM_FAIL, payload: e.message });
  }
};

export function* getPlayerItem(data) {
  try {
    const response = yield call(getListData, data.payload.teamList, `${data.payload.teamId}&playerName=${data.payload.playerName}`);

    if (response.data.teams.length) {
      const teamData = _.find(data.payload.teamList, {id: data.payload.teamId});
      const foundPlayer = _.find(teamData.roster, {person: {displayName: data.payload.playerName}});
      yield put({ type: GET_PLAYER_ITEM_SUCCESS, payload: foundPlayer });
    }
  } catch(e) {
    yield put({ type: GET_PLAYER_ITEM_FAIL, payload: e.message });
  }
};
