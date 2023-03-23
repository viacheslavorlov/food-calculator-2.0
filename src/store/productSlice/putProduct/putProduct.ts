import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {IProduct, ThunkConfig} from '../../types';

export const putProduct = createAsyncThunk<IProduct, IProduct, ThunkConfig<string>>(
	'products/putProduct',
	async (data: IProduct, thunkAPI) => {
		try {
			const response = await axios.put<IProduct>(`http://localhost:3000/products/${data.id}`, data);
			if (response.status < 400) {
				return response.data;
			} else {
				throw new Error();
			}
		} catch (e) {
			return thunkAPI.rejectWithValue('error while changin product');
		}
	}
);