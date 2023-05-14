import {StateSchema} from '../../../../store/types';

export const getAllRecipe = (state: StateSchema) => state.recipe.recipes;
export const getRecipeLoading = (state: StateSchema) => state.recipe.isLoading;
export const getRecipeError = (state: StateSchema) => state.recipe.error;
export const getCurrentRecipe = (state: StateSchema) => state.recipe.currentRecipe;