import cls from './DeleteItems.module.scss';
import {useAppDispatch, useAppSelector} from '../../../../../store/hooks';
import {getAllProductsSelector} from '../../../../../store/productSlice/selectors/getAllProductsSelector';
import {DeleteItemCard} from '../DeleteItemCard/DeleteItemCard';
import {fetchProducts} from '../../../../../store/productSlice/fetchProducts/fetchProducts';
import {memo, useEffect} from 'react';
import {Search} from '../../../../Search/Search';
import {wordSearch} from '../../../../../helpers/search/wordSearch';
import {getSearchValue} from '../../../../../store/productSlice/selectors/getSerchValue';

const DeleteItems = memo(() => {
	const products = useAppSelector(getAllProductsSelector);
	const searchValue = useAppSelector(getSearchValue);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (!products.length) {
			dispatch(fetchProducts());
		}
	}, []);

	return (
		<div className={cls.DeleteItems}>
			<Search/>
			{products
				.filter(item => wordSearch(searchValue, item.name))
				.map(item => <DeleteItemCard key={item.id} item={item}/>)}
		</div>
	);
});

export default DeleteItems;
