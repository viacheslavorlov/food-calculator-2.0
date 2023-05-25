import cls from './DeleteItems.module.scss';
import {useAppSelector} from 'store/hooks';
import {DeleteItemCard} from 'features/DeleteItems';
import {memo} from 'react';
import {Search} from 'features/searchProducts';
import {wordSearch} from 'shared/helpers/search/wordSearch';
import {searchValueSelector} from 'features/searchProducts';
import {useLiveQuery} from 'dexie-react-hooks';
import {db} from 'db/db';
import {GroupTransition} from 'shared/ui/animations/GroupTransition/GroupTransition';
import {Text} from 'shared/ui/Text/Text';

const DeleteItems = memo(() => {
	const products = useLiveQuery(
		() => db.products.toArray()
	);
	const searchValue = useAppSelector(searchValueSelector);
	let cards, cardsKeys;
	if (products) {
		cards = products.filter(item => wordSearch(searchValue, item.name))
			.map(item => <DeleteItemCard key={item.id} item={item}/>);
		cardsKeys = products.map((item) => item.id);
		return (
			<div className={cls.DeleteItems}>
				<Search/>
				<GroupTransition data={cards} keys={cardsKeys}/>
			</div>
		);
	}
	return (
		<div className={cls.DeleteItems}>
			<Text title={'Продукты не найддены'}/>
		</div>
	);

});

export default DeleteItems;
