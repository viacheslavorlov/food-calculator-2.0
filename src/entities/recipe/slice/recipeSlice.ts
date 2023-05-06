import {IRecipe, RecipeSchema} from '../type/recipeType';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: RecipeSchema = {
	isLoading: false,
	error: undefined,
	recipes: [],
	currentRecipe: {
		recipeName: '',
		id: Date.now(),
		ingredients: [],
		timesUsed: 0
	}
};
const recipeSlice = createSlice({
	name: 'recipeSlice',
	initialState,
	reducers: {
		setRecipe: (state, action) => {
			state.currentRecipe = action.payload;
		},
		addRecipe: (state, action: PayloadAction<IRecipe>) => {
			state.recipes.push(action.payload);
		},
		deleteRecipe: (state, action) => {
			state.recipes = state.recipes.filter(recipe => recipe.id !== action.payload);
		}
	}
});