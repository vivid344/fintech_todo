import { call, put, takeEvery } from 'redux-saga/effects';
import { searchAnime } from '../apis/Search';
import { animeDataRequest, animeDataSuccess, animeDataFailed} from '../actions/SearchAction'

function* getAnimeData(action) {
  yield put(animeDataRequest());
  const { body, error } = yield call(searchAnime, action.inputValue);
  if (error) {
    yield put(animeDataFailed());
  } else {
    if (body) {
      yield put(animeDataSuccess(body.data));
    }
  }
}

const saga = [
  takeEvery('CHANGE_VALUE', getAnimeData)
];

export default saga;
