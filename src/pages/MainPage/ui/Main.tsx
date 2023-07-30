import {memo} from 'react';
import cls from './MainPage.module.scss';
import {ResultValue} from 'entities/Products';
import {Search, SearchList} from 'features/searchProducts';
import {useLiveQuery} from 'dexie-react-hooks';
import {db} from 'db/db';
import {VStack} from 'shared/ui/Stack';
import {CreateRecipeForm} from 'features/createRecipe';
import {ProductList} from 'features/ProductList';
import {ClearActiveProducts} from 'features/clearActiveProducts';

const MainPage = memo(() => {
	const products = useLiveQuery(
		() => db.products.toArray()
	) || [];
	const activeProducts = useLiveQuery(() => db.activeProducts.toArray()) || [];

	const activeProductsIDs = activeProducts.map(prod => prod.id);

	return (
		<VStack max justify="center" align="center" className={cls.MainPage}>
			<Search/>
			<SearchList
				products={products}
				className={cls.SearchList}
				idList={activeProductsIDs}
			/>
			<ClearActiveProducts className={cls.clearBtn}/>
			<ProductList
				activeProducts={activeProducts}
			/>
			<CreateRecipeForm/>
			<ResultValue list={activeProducts} className={cls.result}/>
		</VStack>
	);
});

export default MainPage;
