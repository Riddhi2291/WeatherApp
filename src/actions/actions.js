import { createActions } from 'redux-actions';
import * as weatherActionType from './weatherActionType';

export const weatherActions = createActions({}, ...Object.values(weatherActionType));
