import {IProduct} from '../../../../store/types';

export interface IRecipe {
	id: number;
	recipeName: string;
	ingredients: IProduct[];
}
export interface RecipeSchema {
	recipes: IRecipe[];
	isLoading: boolean;
	error: undefined | string;
}