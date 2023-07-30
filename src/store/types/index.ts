import {AppDispatch} from 'app/reduxStore/store';
import {SearchProductsSchema} from 'features/searchProducts';


export enum Metrics {
	gramm = 'г',
	ml = 'мл',
	kilo = 'кг',
	pices = 'шт',
	none = ''
}

export interface NewProductSliceSchema {
	loading: boolean;
	error: string | undefined;
	newProduct: IProduct;
}

export interface IProduct {
	name: string;
	price: number;
	amountInOnePack: number | undefined;
	metric: string;
	amountCurrent: number;
	id: number;
	timesUsed: number
}

export interface StateSchema {
	searchProducts: SearchProductsSchema;
}


export interface ThunkConfig<T> {
	dispatch: AppDispatch,
	rejectValue: T,
	state: StateSchema
}