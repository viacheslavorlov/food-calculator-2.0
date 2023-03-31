import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IncomeOutcomeSchema, IncomeOutcomeTypes} from '../type/IncomeOutcomeTypes';
import {fetchIncome} from '../services/fetchIncome';

const initialState: IncomeOutcomeSchema = {
	isLoading: false,
	error: undefined,
	income: [],
	outcome: []
};

export const incomeOutcomeSliceSlice = createSlice({
	name: 'incomeOutcome',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchIncome.pending, (state: IncomeOutcomeSchema, action) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(fetchIncome.fulfilled, (state: IncomeOutcomeSchema, action:PayloadAction<IncomeOutcomeTypes[]>) => {
				state.isLoading = false;
				state.income = action.payload;
			})
			.addCase(fetchIncome.rejected, (state: IncomeOutcomeSchema, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const {
	reducer: incomeOutcomeSliceReducer,
	actions: incomeOutcomeSliceActions
} = incomeOutcomeSliceSlice;
