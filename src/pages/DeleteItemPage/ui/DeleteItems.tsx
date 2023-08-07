import {useAppSelector} from 'store/hooks';
import {DeleteItemCard} from 'features/DeleteItems';
import {memo} from 'react';
import {searchValueSelector} from 'features/searchProducts';
import {wordSearch} from 'shared/helpers/search/wordSearch';
import {useLiveQuery} from 'dexie-react-hooks';
import {db} from 'db/db';
import {Text} from 'shared/ui/Text/Text';
import {GroupTransition} from 'shared/ui/animations/GroupTransition/GroupTransition';
import {Page} from 'shared/ui/Page/Page';
import {SearchWidget} from 'widgets/SearchWiget';

const DeleteItems = memo(() => {
	const products = useLiveQuery(
		() => db.products.toArray()
	);
	const searchValue = useAppSelector(searchValueSelector);

	const cards = products?.filter(item => wordSearch(searchValue, item.name))
		.map(item => <DeleteItemCard key={item.id} item={item}/>) || [];
	const cardsKeys = products?.filter(item => wordSearch(searchValue, item.name)).map((item) => item.id);

	return (
		<Page>
			<h2>Удалить ингредиенты</h2>
			<SearchWidget />
			{
				cards?.length > 0 ? <GroupTransition data={cards} keys={cardsKeys || []}/>
					:
					<Text title={'Продукты не найддены'}/>
			}
		</Page>
	);
});

export default DeleteItems;
