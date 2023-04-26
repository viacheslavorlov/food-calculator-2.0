import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ThunkConfig} from '../../../../store/types';

export const deleteFrofDB = createAsyncThunk<number, number, ThunkConfig<string>>(
	'deleteProducts/deletefromDB',
	async (id, thunkAPI) => {
		try {
			if (id) {
				const response = await axios.delete(`http://localhost:3000/products/${id}`);
				return response.data.id;
			} else {
				throw new Error();
			}
		} catch (e) {
			return thunkAPI.rejectWithValue('error while deleting from DB');
		}
	}
);