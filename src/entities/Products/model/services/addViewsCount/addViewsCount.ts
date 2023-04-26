import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {IProduct, ThunkConfig} from '../../../../../store/types';
import {getAllProductsSelector} from '../../selectors/getAllProductsSelector';

export const addViewsCount = createAsyncThunk<IProduct | undefined, number, ThunkConfig<string>>(
	'products/putProduct',
	async (id, thunkAPI) => {
		const {rejectWithValue, getState} = thunkAPI;
		const product = getAllProductsSelector(getState()).find(prod => prod.id === id);
		try {
			if (product) {
				const response = await axios.put<IProduct>(
					`http://localhost:3000/products/${id}`,
					{...product, timesUsed: product.timesUsed + 1}
				);
				if (response.status < 400) {
					return response.data;
				} else {
					throw new Error();
				}
			}
		} catch (e) {
			return rejectWithValue('error while adding views');
		}
	}
);