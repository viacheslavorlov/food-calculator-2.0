import {IProduct} from 'store/types';
import Dexie, { Table } from 'dexie';
import {IRecipe} from 'entities/recipe';

export class FoodCalculatorDexie extends Dexie {
	// 'friends' is added by dexie when declaring the stores()
	// We just tell the typing system this is the case
	products!: Table<IProduct>;
	activeProducts!: Table<IProduct>;
	recipes!: Table<IRecipe>;


	constructor() {
		super('foodPriceCalculator');
		this.version(4).stores({
			products: '&id, &name, price, metric, amountInOnePack, currentAmount, timesUsed', // Primary key and indexed props
			activeProducts: '&id, &name, price, metric, amountInOnePack, currentAmount, timesUsed',
			recipes: '&id, recipeName, ingredients, timesUsed',
		});
	}
}

export const db = new FoodCalculatorDexie();