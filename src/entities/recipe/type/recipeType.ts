import {IProduct} from '../../../store/types';

export interface IRecipe {
	timesUsed: number;
	id: number;
	recipeName: string;
	ingredients: IProduct[];
}

export interface RecipeSchema {
	isLoading: boolean;
	error: string | undefined;
	recipes: IRecipe[];
	currentRecipe?: IRecipe;
}