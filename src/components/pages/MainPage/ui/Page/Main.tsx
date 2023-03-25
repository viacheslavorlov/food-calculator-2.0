import {memo, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../../../store/hooks';
import {fetchProducts} from '../../../../../store/productSlice/fetchProducts/fetchProducts';
import {getAllProductsSelector} from '../../../../../store/productSlice/selectors/getAllProductsSelector';
import {ProductCard} from '../ProductCard/ProductCard';
import cls from './MainPage.module.scss';
import {getActiveProductsSelector} from '../../../../../store/productSlice/selectors/getActiveProductsSelector';
import ProductDetaildCard from '../ProductDetaildCard/ProductDetaildCard';
import ResultValue from '../ResultValue/ResultValue';
import {getSearchValue} from '../../../../../store/productSlice/selectors/getSerchValue';
import {wordSearch} from '../../../../../helpers/search/wordSearch';
import {Search} from '../../../../Search/Search';

const MainPage = memo(() => {
	const dispatch = useAppDispatch();
	const products = useAppSelector(getAllProductsSelector);
	const activeProducts = useAppSelector(getActiveProductsSelector);
	const searchValue = useAppSelector(getSearchValue);
	useEffect(() => {
		dispatch(fetchProducts());
	}, []);
	// const productsIDs = products.map(prod => prod.id);
	const activeProductsIDs = activeProducts.map(prod => prod.id);

	return (
		<>
			<div className={cls.MainPage}>
				<Search/>
				{products
					.filter(item => activeProductsIDs.indexOf(item.id) < 0)
					.filter(item => wordSearch(searchValue, item.name))
					.map(item => <ProductCard key={item.id} name={item.name} id={item.id}/>)}
				{activeProducts.map(product => <ProductDetaildCard
					key={product.id + product.name}
					name={product.name}
					price={product?.price}
					amountInOnePack={product.amountInOnePack}
					metric={product.metric}
					amountCurrent={product.amountCurrent}
					id={product.id}
				/>)}
				<ResultValue list={activeProducts} className={cls.result}/>
			</div>
		</>

	);
});

export default MainPage;
