import {IProduct} from 'store/types';

export interface IRecipe {
	timesUsed?: number;
	id: number;
	recipeName: string;
	ingredients: IProduct[];
}

export interface RecipeSchema {
	recipes: IRecipe[];
	currentRecipe?: IRecipe;
}
