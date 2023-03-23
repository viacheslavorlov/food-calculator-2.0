import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {IProduct, ThunkConfig} from '../../types';

export const fetchProducts = createAsyncThunk<IProduct[], void, ThunkConfig<string>>(
	'products/fetchProducts',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<IProduct[]>('http://localhost:3000/products');
			if (response.status < 400) {
				return response.data;
			} else {
				throw new Error();
			}

		} catch (e) {
			return thunkAPI.rejectWithValue('error while loading products from server');
		}
	}
);