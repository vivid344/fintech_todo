import { all } from 'redux-saga/effects';
import InputSaga from './SearchSaga';

export default function* rootSaga() {
  yield all([
    ...InputSaga,
  ]);
}
