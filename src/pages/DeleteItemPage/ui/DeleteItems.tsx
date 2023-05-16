import cls from './DeleteItems.module.scss';
import {useAppSelector} from '../../../store/hooks';
import {DeleteItemCard} from '../../../features/DeleteItems/ui/DeleteItemCard/DeleteItemCard';
import {memo} from 'react';
import {Search} from '../../../features/searchProducts/ui/Search/Search';
import {wordSearch} from '../../../shared/helpers/search/wordSearch';
import {searchValueSelector} from '../../../features/searchProducts/model/selectors/searchSelectors';
import {useLiveQuery} from 'dexie-react-hooks';
import {db} from '../../../db/db';

const DeleteItems = memo(() => {
	const products = useLiveQuery(
		() => db.products.toArray()
	);
	const searchValue = useAppSelector(searchValueSelector);


	return (
		<div className={cls.DeleteItems}>
			<Search/>
			{products
				?.filter(item => wordSearch(searchValue, item.name))
				.map(item => <DeleteItemCard key={item.id} item={item}/>)}
		</div>
	);
});

export default DeleteItems;
