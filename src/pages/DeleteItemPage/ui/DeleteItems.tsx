import cls from './DeleteItems.module.scss';
import {useAppSelector} from 'store/hooks';
import {DeleteItemCard} from 'features/DeleteItems';
import {memo} from 'react';
import {Search} from 'features/searchProducts';
import {wordSearch} from 'shared/helpers/search/wordSearch';
import {searchValueSelector} from 'features/searchProducts';
import {useLiveQuery} from 'dexie-react-hooks';
import {db} from 'db/db';
import {GroupTransition} from 'shared/ui/GroupTransition/GroupTransition';

const DeleteItems = memo(() => {
	const products = useLiveQuery(
		() => db.products.toArray()
	);
	const searchValue = useAppSelector(searchValueSelector);

	const cards = products?.filter(item => wordSearch(searchValue, item.name))
		.map(item => <DeleteItemCard key={item.id} item={item}/>);
	const cardsKeys = products!.map((item) => item.id);

	return (
		<div className={cls.DeleteItems}>
			<Search/>
			<GroupTransition data={cards} keys={cardsKeys}/>
		</div>
	);
});

export default DeleteItems;
