import { combineReducers } from 'redux';
import fishReducer from './FishReducer';
export default combineReducers({
  fish: fishReducer,
});
