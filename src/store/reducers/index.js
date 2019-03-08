import { combineReducers } from "redux";
import teams from "../../containers/teams/reducer.js";

const rootReducer = combineReducers({
  teams,
});

export default rootReducer;