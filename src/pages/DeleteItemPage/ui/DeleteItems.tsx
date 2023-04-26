import cls from './DeleteItems.module.scss';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {getAllProductsSelector} from '../../../entities/Products/model/selectors/getAllProductsSelector';
import {DeleteItemCard} from '../../../entities/DeleteItems/ui/DeleteItemCard/DeleteItemCard';
import {fetchProducts} from '../../../entities/Products/model/services/fetchProducts/fetchProducts';
import {memo, useEffect} from 'react';
import {Search} from '../../../features/searchProducts/ui/Search';
import {wordSearch} from '../../../shared/helpers/search/wordSearch';
import {searchValueSelector} from '../../../features/searchProducts/model/selectors/searchSelectors';

const DeleteItems = memo(() => {
	const products = useAppSelector(getAllProductsSelector);
	const searchValue = useAppSelector(searchValueSelector);
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
