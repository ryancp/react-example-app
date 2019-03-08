import { createSelector } from 'reselect';

const teamListSelector = state => state.teams;

export const filteredTeamList = createSelector(
  [teamListSelector],
  (teams) => {
    if (teams.filteredList.length > 0) {
      return teams.filteredList;
    }

    return teams.list;
  }
);

export const chosenTeamItem = createSelector(
  [teamListSelector],
  (teams) => {
    return teams.chosenTeamItem;
  }
);

export const chosenPlayerItem = createSelector(
  [teamListSelector],
  (teams) => {
    return teams.chosenPlayerItem;
  }
);
