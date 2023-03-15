import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {IProduct} from '../../types';

export const addProductToDB = createAsyncThunk(
	'newProducts/addProductToDB',
	async (data: IProduct) => {
		try {
			const listOfProducts = await axios.get<IProduct[]>('http://localhost:3000/products');
			const indexOfNewProduct = listOfProducts.data.findIndex(item => item.name === data.name);
			console.log('indexOfNewProduct', indexOfNewProduct);
			if (data && indexOfNewProduct < 0) {
				const response = await axios.post<IProduct>('http://localhost:3000/products', data);
				return response.data;
			} else {
				alert('такой продукт уже сучествует');
			}
		} catch (e) {
			console.log(e);
		}
	}
);
