import {memo, useEffect} from 'react';
import cls from './MainPage.module.scss';
import ProductDetaildCard from '../../entities/Products/ui/ProductDetaildCard/ProductDetaildCard';
import {ResultValue} from '../../entities/Products/ui/ResultValue/ResultValue';
import {Search} from '../../features/searchProducts/ui/Search/Search';
import {SearchList} from '../../features/searchProducts/ui/SearchList/SearchList';
import {useLiveQuery} from 'dexie-react-hooks';
import {db} from '../../db/db';
import {PRODUCT_SESSIONSTORAGE_KEY} from '../../entities/Products/consts/productConsts';
import {IProduct} from '../../store/types';
import {VStack} from '../../shared/ui/Stack';

const MainPage = memo(() => {
	const products = useLiveQuery(
		() => db.products.toArray()
	) || [];
	const activeProducts = useLiveQuery(() => db.activeProducts.toArray()) || [];

	const activeProductsIDs = activeProducts.map(prod => prod.id);

	const onChangeIngredient = (newProduct: IProduct) => {
		db.activeProducts.put(newProduct);
	};

	useEffect(() => {
		sessionStorage.setItem(PRODUCT_SESSIONSTORAGE_KEY, '[]');
	}, []);
	console.log(activeProducts);
	return (
		<>
			<VStack max justify='center' align='center' className={cls.MainPage}>
				<Search/>
				<SearchList
					products={products}
					className={cls.SearchList}
					idList={activeProductsIDs}
				/>
				{activeProducts.map(product => <ProductDetaildCard
					key={product.id + product.name}
					product={product}
					onChangeIngredient={onChangeIngredient}
				/>)}
				{/*<CreateRecipeForm />*/}
				<ResultValue list={activeProducts} className={cls.result}/>
			</VStack>
		</>
		
	);
});

export default MainPage;
