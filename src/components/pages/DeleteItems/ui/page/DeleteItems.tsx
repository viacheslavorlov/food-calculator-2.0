import cls from './DeleteItems.module.scss';
import {useAppDispatch, useAppSelector} from '../../../../../store/hooks';
import {getAllProductsSelector} from '../../../../../store/productSlice/selectors/getAllProductsSelector';
import {DeleteItemCard} from '../DeleteItemCard/DeleteItemCard';
import {fetchProducts} from '../../../../../store/productSlice/fetchProducts/fetchProducts';
import {memo, useEffect} from 'react';

const DeleteItems = memo(() => {
	const products = useAppSelector(getAllProductsSelector);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (!products.length) {
			dispatch(fetchProducts());
		}
	}, []);

	return (
		<div className={cls.DeleteItems}>
			{products.map(item => <DeleteItemCard key={item.id} item={item}/>)}
		</div>
	);
});

export default DeleteItems;
