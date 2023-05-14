import {IRecipe, RecipeSchema} from '../../../../entities/recipe';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProduct} from '../../../../store/types';
import {fetchRecipes} from '../service/fetchRecipes';

const initialState: RecipeSchema = {
	isLoading: false,
	error: undefined,
	recipes: [],
	currentRecipe: undefined
};

const recipeSlice = createSlice({
	name: 'recipeSlice',
	initialState,
	reducers: {
		setCurrentRecipe: (state, action: PayloadAction<IRecipe>) => {
			state.currentRecipe = action.payload;
		},
		clearCurrentRecipe: (state) => {
			state.currentRecipe = undefined;
		},
		changeIngredient: (state, action: PayloadAction<IProduct>) => {
			if (state.currentRecipe && state.currentRecipe.ingredients) {
				state.currentRecipe.ingredients = state.currentRecipe.ingredients.map((ingredient) => {
					if (ingredient.name === action.payload.name) {
						return {...ingredient, ...action.payload};
					} else {
						return ingredient;
					}
				});
			}
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchRecipes.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchRecipes.fulfilled, (state, action) => {
				state.isLoading = false;
				if (action.payload) {
					state.recipes = action.payload;
				}
			})
			.addCase(fetchRecipes.rejected, (state, action) => {
				state.isLoading = false;
				if (action.payload) {
					state.error = action.payload;
				}
			});
	}
});
export const {
	reducer: recipeReducer,
	actions: recipeActions,
} = recipeSlice;