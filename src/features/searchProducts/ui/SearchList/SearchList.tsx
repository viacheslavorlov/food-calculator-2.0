import {classNames} from 'shared/helpers/classNames/classNames';
import {memo, useCallback} from 'react';
import {IProduct} from 'store/types';
import {wordSearch} from 'shared/helpers/search/wordSearch';
import {useAppSelector} from 'store/hooks';
import {searchOrderSelector, searchPropSelector, searchValueSelector} from '../../model/selectors/searchSelectors';
import {ProductCard} from 'entities/Products';
import {GroupTransition} from 'shared/ui/animations/GroupTransition/GroupTransition';
import {VStack} from 'shared/ui/Stack';

interface SearchListProps {
	className?: string;
	products: IProduct[];
	idList: number[];
}

export const SearchList = memo((props: SearchListProps) => {
	const {
		className,
		products,
		idList
	} = props;
	const searchValue = useAppSelector(searchValueSelector);
	const searchProp = useAppSelector(searchPropSelector);
	const searchOrder = useAppSelector(searchOrderSelector);

	const content = useCallback(() => {
		let result = products
			.filter(item => idList.indexOf(item.id) < 0)
			.filter(item => wordSearch(searchValue, item.name));

		switch (searchProp) {
		case 'views':
			if (searchOrder === 'desc') {
				result = result.sort((a, b) => b.timesUsed - a.timesUsed);
			} else {
				result = result.sort((a, b) => a.timesUsed - b.timesUsed);
			}
			break;
		case 'price':
			if (searchOrder === 'desc') {
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				result = result.sort((a, b) => b.price! - a.price!);
			} else {
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				result = result.sort((a, b) => a.price! - b.price!);
			}
			break;
		default:
			break;
		}
		return result;
	}, [idList, products, searchOrder, searchProp, searchValue]);
	const ids = content().map(item => item.id);
	const contentList = content().map((item) => <ProductCard key={item.id} item={item}/>);

	return (
		<GroupTransition data={contentList} keys={ids} />
	);
});