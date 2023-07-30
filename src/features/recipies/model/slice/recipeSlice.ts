import {IRecipe, RecipeSchema} from 'entities/recipe';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProduct} from 'store/types';

const initialState: RecipeSchema = {

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
	}
});
export const {
	reducer: recipeReducer,
	actions: recipeActions,
} = recipeSlice;