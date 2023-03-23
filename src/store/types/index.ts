import {AppDispatch} from '../store/store';

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
	price: number | undefined;
	amountInOnePack: number | undefined;
	metric: string;
	amountCurrent: number;
	id: number;
}

export interface ProductsSliceInterface {
	isLoading: boolean;
	error: string | undefined;
	allProducts: IProduct[];
	activeProducts: IProduct[];
}

export interface StateSchema {
	products: ProductsSliceInterface;
	newProduct: NewProductSliceSchema;
}


export interface ThunkConfig<T> {
	dispatch: AppDispatch,
	rejectValue: T,
	state: StateSchema
}