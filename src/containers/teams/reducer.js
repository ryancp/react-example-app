import _ from 'lodash';

import {
  GET_TEAM_LIST,
  GET_TEAM_LIST_SUCCESS,
  GET_TEAM_LIST_FAIL,
  GET_TEAM_ITEM,
  GET_TEAM_ITEM_SUCCESS,
  GET_TEAM_ITEM_FAIL,
  GET_PLAYER_ITEM,
  GET_PLAYER_ITEM_SUCCESS,
  GET_PLAYER_ITEM_FAIL,
  SAVE_PLAYER_ITEM,
} from './actionTypes';

const list = [];

const initialState = {
  list,
  loading: false,
  error: '',
  filteredList: list,
  chosenTeamItem: {},
  chosenPlayerItem: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TEAM_LIST:
      return {
        ...state,
        loading: true
      };
    case GET_TEAM_LIST_SUCCESS:
      return {
        ...state,
        list: [ ...action.payload ],
        loading: false,
        error: '',
      };
    case GET_TEAM_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    
    case GET_TEAM_ITEM:
      return {
        ...state,
        loading: true
      };
    case GET_TEAM_ITEM_SUCCESS:
      return {
        ...state,
        chosenTeamItem: action.payload,
        loading: false,
        error: '',
      };
    case GET_TEAM_ITEM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case GET_PLAYER_ITEM:
      return {
        ...state,
        loading: true
      };
    case GET_PLAYER_ITEM_SUCCESS:
      return {
        ...state,
        chosenPlayerItem: action.payload,
        loading: false,
        error: '',
      };
    case GET_PLAYER_ITEM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case SAVE_PLAYER_ITEM:
      // TODO: handle scenario when user initially enters app at the edit player level (eg. via a bookmark)
      if (state.list.length > 0) {
        const teamIndex = _.findIndex(state.list, {id: action.payload.teamId});
        return {
          ...state,
          loading: false,
          error: '',
          list: state.list.map((team, index) => {
            if (index !== teamIndex) {
              return team;
            }

            return {
              ...team,
              roster: team.roster.map((player, playerIndex) => {
                if (playerIndex !== action.payload.playerIndex) {
                  return player;
                }

                return {
                  ...player,
                  ...action.payload.playerDetails,
                };
              })
            };
          })
        }
      }

      return {
        ...state,
        playerDetails: action.payload.playerDetails,
        loading: false,
        error: '',
      };
    default:
      return state;
  }
};
