import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {IProduct} from '../../types';

export const addProductToDB = createAsyncThunk(
	'newProducts/addProductToDB',
	async (data: IProduct) => {
		try {
			if (data) {
				const response = await axios.post('http://localhost:3000/products', data);
				return response.data;
			}
		} catch (e) {
			console.log(e);
		}
	}
);
