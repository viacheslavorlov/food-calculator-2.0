import {SearchOrder, SearchProp} from '../../../features/searchProducts/model/type/SearchProductsSchema';
import {IProduct} from '../../../store/types';

export const wordSearch = (str: string, source: string) => {
	return source.toLowerCase().includes(str.toLowerCase());
};

export const orderSearchFn = (order: SearchOrder, searchProp: SearchProp, arr: IProduct[]) => {
	if (order === 'asc') {
		switch (searchProp) {
		case 'none':
			return arr;
		case 'price':
			return arr.sort((a, b) => (a.price || 0) - (b.price || 0));
		case 'views':
			return arr.sort();
		}
	}
};
