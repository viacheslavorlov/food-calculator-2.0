import {SearchOrder, SearchProp} from 'features/searchProducts';
import {IProduct} from 'store/types';

export const wordSearch = (str: string, source: string) => {
	return source.toLowerCase().includes(str.toLowerCase());
};

export const orderSearchFn = (order: SearchOrder, searchProp: SearchProp, arr: IProduct[]) => {
	switch (searchProp) {
	case 'name':
		// eslint-disable-next-line no-case-declarations
		const result = arr.sort((a, b) => {
			if (a.name.toLowerCase() > b.name.toLowerCase()) {
				return 1;
			}
			if (a.name.toLowerCase() < b.name.toLowerCase()) {
				return -1;
			}
			return 0;
		});
		if (order === 'asc') {
			return result;
		} else {
			return result.reverse();
		}
	case 'views':
		if (order === 'desc') {
			return arr.sort((a, b) => b.timesUsed - a.timesUsed);
		} else {
			return arr.sort((a, b) => a.timesUsed - b.timesUsed);
		}

	case 'price':
		if (order === 'desc') {
			return arr.sort((a, b) => b.price - a.price);
		} else {
			return arr.sort((a, b) => a.price - b.price);
		}
	default:
		return arr;
	}

};
