import { all } from 'redux-saga/effects';
import { fetchDummyDataSaga } from "../store/Home/Home.sagas";

export default function* rootSaga() {
    yield all(
        [
            fetchDummyDataSaga(),
        ]
    )
}