export interface ProductsSliceInterface {
	allProducts: IProduct[];
	activeProducts: IProduct[];
}


export enum Metrics {
	gramm = 'г',
	ml = 'мл',
	kilo = 'кг',
	pices = 'шт',
	none = ''
}

export interface IProduct {
	name: string;
	price: number;
	amountInOnePack: number;
	metric: Metrics;
	amountCurrent: number;
	id: string;
}