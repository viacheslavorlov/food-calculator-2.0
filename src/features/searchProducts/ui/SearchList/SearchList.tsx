import {memo, useCallback} from 'react';
import {IProduct} from 'store/types';
import {orderSearchFn} from 'shared/helpers/search/wordSearch';
import {useAppSelector} from 'store/hooks';
import {
	searchOrderSelector,
	searchPropSelector,
	searchValueSelector
} from '../../model/selectors/searchSelectors';
import {ProductCard} from 'entities/Products';
import {GroupTransition} from 'shared/ui/animations/GroupTransition/GroupTransition';

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

	const productsForSearch = products
		.filter(product => !idList.includes(product.id) && product.name.toLowerCase().includes(searchValue.toLowerCase()));

	const content = useCallback(() => orderSearchFn(searchOrder, searchProp, productsForSearch), [productsForSearch, searchOrder, searchProp]);
	const ids = content().map(item => item.id);
	const contentList = content().map((item) => <ProductCard key={item.id} item={item}/>);

	return (
		<GroupTransition data={contentList} keys={ids} className={className}/>
	);
});
