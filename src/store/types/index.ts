export enum Metrics {
	gramm = 'г',
	ml = 'мл',
	kilo = 'кг',
	pices = 'шт',
	none = ''
}

export interface IProduct {
	name: string;
	price: number | null;
	amountInOnePack: number | null;
	metric: string;
	amountCurrent: number | null;
	id: number | null;
}

export interface ProductsSliceInterface {
	isLoading: boolean;
	error: string | undefined;
	allProducts: IProduct[];
	activeProducts: IProduct[];
}

export interface StateShema {
	products: ProductsSliceInterface;
	newProduct: IProduct;
}