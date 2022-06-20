import { combineReducers } from '@reduxjs/toolkit';
import tokenSlice from './reducers/tokenSlice';

const rootReducer = combineReducers({
	token: tokenSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
