import cls from './DeleteItems.module.scss';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {getAllProductsSelector} from '../../../entities/Products/model/selectors/getAllProductsSelector';
import {DeleteItemCard} from '../../../entities/DeleteItems/ui/DeleteItemCard/DeleteItemCard';
import {fetchProducts} from '../../../entities/Products/model/services/fetchProducts/fetchProducts';
import {memo, useEffect} from 'react';
import {Search} from '../../../widgets/Search/Search';
import {wordSearch} from '../../../shared/helpers/search/wordSearch';
import {getSearchValue} from '../../../entities/Products/model/selectors/getSerchValue';

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
