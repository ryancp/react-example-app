import configureStore from 'redux-mock-store';

import { getTeamList, getTeamItem } from './actions';

const mockStore = configureStore();
const store = mockStore();

describe('team actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('getTeamList', () => {
    test('Dispatches the correct action', () => {
      const expectedActions = [
        {
          type: 'GET_TEAM_LIST',
        },
      ];

      store.dispatch(getTeamList());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('getTeamItem', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          payload: {
            id: '1',
            teamList: [],
          },
          type: 'GET_TEAM_ITEM',
        },
      ];

      store.dispatch(getTeamItem('1', []));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
