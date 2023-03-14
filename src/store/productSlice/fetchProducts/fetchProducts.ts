import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {IProduct} from '../../types';

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		try {
			const response = await axios.get<IProduct[]>('http://localhost:3000/products');
			if (response.status < 400) {
				return response.data;
			}

		} catch (e) {
			console.log(e);
		}
	}
);