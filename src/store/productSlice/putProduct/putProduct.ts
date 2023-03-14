import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {IProduct} from '../../types';

export const putProduct = createAsyncThunk(
	'products/putProduct',
	async (data: IProduct, thunkAPI) => {
		try {
			const response = await axios.put<IProduct[]>(`http://localhost:3000/products/${data.id}`, data);
			return response.data;
		} catch (e) {
			console.log(e);
		}
	}
);