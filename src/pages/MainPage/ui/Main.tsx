import {memo} from 'react';
import cls from './MainPage.module.scss';
import {ResultValue} from 'entities/Products';
import {SearchList} from 'features/searchProducts';
import {useLiveQuery} from 'dexie-react-hooks';
import {db} from 'db/db';
import {CreateRecipeForm} from 'features/createRecipe';
import {ProductList} from 'features/ProductList';
import {ClearActiveProducts} from 'features/clearActiveProducts';
import {Page} from 'shared/ui/Page/Page';
import {SearchWidget} from 'widgets/SearchWiget';
// import { IncomeOutcomePage } from 'pages/IncomeOutcomePage';

const MainPage = memo(() => {
	const products = useLiveQuery(
		() => db.products.toArray()
	) || [];
	const activeProducts = useLiveQuery(() => db.activeProducts.toArray()) || [];

	const activeProductsIDs = activeProducts.map(prod => prod.id);

	return (
		<Page>
			<SearchWidget/>
			<SearchList
				products={products}
				className={cls.SearchList}
				idList={activeProductsIDs}
			/>
			<ClearActiveProducts className={cls.clearBtn}/>
			<ProductList activeProducts={activeProducts}/>
			<ResultValue list={activeProducts} className={cls.result}/>
			<CreateRecipeForm/>
			{/* <IncomeOutcomePage/> */}
		</Page>
	);
});

export default MainPage;
