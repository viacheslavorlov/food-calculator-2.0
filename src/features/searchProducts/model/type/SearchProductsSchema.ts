export type SearchOrder = 'asc' | 'desc';
export type SearchProp = 'none' | 'views' | 'price';

export interface SearchProductsSchema {
	searchValue: string;
	searchOrder: SearchOrder;
	searchProp: SearchProp;
}