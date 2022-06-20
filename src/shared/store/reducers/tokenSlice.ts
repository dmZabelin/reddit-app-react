import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TokenState {
	token: string;
}

const initialState = { token: '' } as TokenState;

export const tokenSlice = createSlice({
	name: 'SET_TOKEN',
	initialState,
	reducers: {
		setToken(state: TokenState, action: PayloadAction<string>) {
			state.token = action.payload;
		},
	},
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
