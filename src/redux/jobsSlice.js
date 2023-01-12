import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	jobs: null,
	loading: false,
	error: false,
	country: null
};

const jobsSlice = createSlice({
	name: "jobs",
	initialState,
	reducers: {
		loginStart: (state) => {
			state.loading = true;
			state.error = false
		},
	},
});

export const { loginStart, } =
	jobsSlice.actions;
export default jobsSlice.reducer;
