import { handleActions } from 'redux-actions';
import * as weatherActionType from '../actions/weatherActionType';

const initialState = {
  processing: false,
  error: null,
  success: false,
  data: '',
};

const weatherReducer = handleActions(
  {
    [ weatherActionType.SET_WEATHER_PARAMS ](state, { payload }) {
      return { ...state, ...payload };
    },
    [ weatherActionType.WEATHER ](state, { payload }) {
      return { ...state, processing: true };
    },
    [ weatherActionType.WEATHER_SUCCESS ](state, { payload }) {
      return { ...state, processing: false, success: true, data: payload };
    },
    [ weatherActionType.WEATHER_FAILED ](state, { payload }) {
      return { ...state, processing: false, error: payload };
    },

  },
  initialState,
);

export default weatherReducer;
