import teamsReducer from './reducer';
import {
  GET_TEAM_LIST,
  GET_TEAM_ITEM,
} from './actionTypes';

describe('teams reducer', () => {
  test('initial state is correct', () => {
    const action = { type: 'test_action' };
    const initialState = {
      list: [],
      loading: false,
      error: '',
      filteredList: [],
      chosenTeamItem: {},
      chosenPlayerItem: {},
    };

    expect(teamsReducer(undefined, action)).toEqual(initialState);
  });

  describe('GET_TEAM_LIST', () => {
    test('returns the correct state', () => {
      // TODO: mock store and http request to test GET_TEAM_LIST's state
      const action = { type: GET_TEAM_LIST };
      const expectedState = {
        list: [],
        loading: true,
        error: '',
        filteredList: [],
        chosenTeamItem: {},
        chosenPlayerItem: {},
      };

      expect(teamsReducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('GET_TEAM_ITEM', () => {
    test('returns the correct state', () => {
      // TODO: mock store and http request to test GET_TEAM_ITEM's state
      const action = { type: GET_TEAM_ITEM };
      const expectedState = {
        list: [],
        loading: true,
        error: '',
        filteredList: [],
        chosenTeamItem: {},
        chosenPlayerItem: {},
      };

      expect(teamsReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
