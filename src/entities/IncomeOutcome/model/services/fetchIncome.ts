import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {IncomeOutcomeTypes} from '../type/IncomeOutcomeTypes';
import {ThunkConfig} from '../../../../store/types';

export const fetchIncome = createAsyncThunk<IncomeOutcomeTypes[], void, ThunkConfig<string>>(
	'incomeOutcome/fetchIncome',
	async (_, thunkAPI) => {
		const {rejectWithValue, } = thunkAPI;
		try {
			const response = await axios.get('http://localhost:3000/income');
			if (!response.data) {
				return rejectWithValue('error while fetching income');
			}
			return response.data;
		} catch (e) {
			return rejectWithValue('error while fetching income');
		}
	}
);