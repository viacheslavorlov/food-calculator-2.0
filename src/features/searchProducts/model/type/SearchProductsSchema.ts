export type SearchOrder = 'asc' | 'desc';
export type SearchProp = 'name' | 'views' | 'price';

export interface SearchProductsSchema {
	searchValue: string;
	searchOrder: SearchOrder;
	searchProp: SearchProp;
}