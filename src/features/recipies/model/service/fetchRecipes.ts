import {createAsyncThunk} from '@reduxjs/toolkit';
import {IRecipe} from '../../../../entities/recipe';
import {ThunkConfig} from '../../../../store/types';
import axios from 'axios';

export const fetchRecipes = createAsyncThunk<IRecipe[], void, ThunkConfig<string>>(
	'recipes/fetchRecipes',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<IRecipe[]>('http://localhost:3000/recipes');
			if (response.status < 400) {
				return response.data;
			} else {
				throw new Error();
			}
		}
		catch (e) {
			return thunkAPI.rejectWithValue('error while fetching recipes');
		}
	}
);
