import { all, takeLatest } from "redux-saga/effects";

import {
    GET_TEAM_LIST,
    GET_TEAM_ITEM,
    GET_PLAYER_ITEM,
} from "./actionTypes";

import {
    getList,
    getItem,
    getPlayerItem,
} from "./model";

export default function* rootSaga() {
    yield all([
        takeLatest(GET_TEAM_LIST, getList),
        takeLatest(GET_TEAM_ITEM, getItem),
        takeLatest(GET_PLAYER_ITEM, getPlayerItem),
    ]);
};
