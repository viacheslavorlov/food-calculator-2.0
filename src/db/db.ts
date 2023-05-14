import {IProduct} from '../store/types';
import Dexie, { Table } from 'dexie';

export class FoodCalculatorDexie extends Dexie {
	// 'friends' is added by dexie when declaring the stores()
	// We just tell the typing system this is the case
	products!: Table<IProduct>;

	constructor() {
		super('foodPriceCalculator');
		this.version(1).stores({
			products: '&id, &name, price, metric, amountInOnePack, currentAmount, timesUsed', // Primary key and indexed props
			// recipes: 'recipes, selectedRecipe',
			// newProduct: 'id, name, price, amountInOnePack, amountCurrent, timesUsed, metric',
			// searchProducts: 'searchValue, searchOrder, searchProp'
		});
	}
}

export const db = new FoodCalculatorDexie();