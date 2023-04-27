import {classNames} from '../../../../shared/helpers/classNames/classNames';
import {memo} from 'react';
import {IProduct} from '../../../../store/types';
import {wordSearch} from '../../../../shared/helpers/search/wordSearch';
import {ProductCard} from '../../../../entities/Products/ui/ProductCard/ProductCard';
import {useAppSelector} from '../../../../store/hooks';
import {searchOrderSelector, searchPropSelector, searchValueSelector} from '../../model/selectors/searchSelectors';

interface SearchListPrors {
	className?: string;
	products: IProduct[];
	idList: number[];
}

export const SearchList = memo((props: SearchListPrors) => {
	const {
		className,
		products,
		idList
	} = props;
	const searchValue = useAppSelector(searchValueSelector);
	const searchOrder = useAppSelector(searchOrderSelector);
	const searchProp = useAppSelector(searchPropSelector);

	const content = () => {
		let result = products
			.filter(item => idList.indexOf(item.id) < 0)
			.filter(item => wordSearch(searchValue, item.name));

		switch (searchProp) {
		case 'views':
			if (searchOrder === 'desc') {
				result =result.sort((a, b) => b.timesUsed - a.timesUsed);
			} else {
				result = result.sort((a, b) => a.timesUsed - b.timesUsed);
			}
			break;
		case 'price':
			if (searchOrder === 'desc') {
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				result =result.sort((a, b) => b.price! - a.price!);
			} else {
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				result = result.sort((a, b) => a.price! - b.price!);
			}
			break;
		default:
			break;
		}
		return result.map(item => <ProductCard key={item.id} name={item.name} id={item.id}/>);
	};

	return (
		<div className={classNames(className)}>
			{content()}
		</div>
	);
});