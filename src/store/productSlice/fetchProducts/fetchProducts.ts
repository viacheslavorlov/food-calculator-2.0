import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {IProduct} from '../../types';

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		const response = await axios.get<IProduct[]>('http://localhost:3000/products');
		return response.data;
	}
);