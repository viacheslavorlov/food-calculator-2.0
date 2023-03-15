import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteFrofDB = createAsyncThunk(
	'deleteProducts/deletefromDB',
	async (id: number) => {
		try {
			await axios.delete(`http://localhost:3000/products/${id}`);
		} catch (e) {
			console.log(e);
		}
	}
);