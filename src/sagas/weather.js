import { takeEvery, call, put } from 'redux-saga/effects';
import { weatherActions } from '../actions/actions';
import * as weatherActionType from '../actions/weatherActionType';
import * as weatherApi from '../api/weather';


function* weather({ payload }) {
  const { request } = weatherApi.weather(payload);
  
  try {
    const data = yield call(request);
    yield put(weatherActions.weatherSuccess(data));

  } catch (e) {
    yield put(weatherActions.weatherFailed({ message: e }));
  }
}


function* weatherSagas() {
  yield takeEvery(weatherActionType.WEATHER, weather);
}

export default weatherSagas;