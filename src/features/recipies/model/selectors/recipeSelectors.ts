import {StateSchema} from '../../../../store/types';

export const getAllRecipe = (state: StateSchema) => state.recipes.recipes;
export const getCurrentRecipe = (state: StateSchema) => state.recipes.currentRecipe;