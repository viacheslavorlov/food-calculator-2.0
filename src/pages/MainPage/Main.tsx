import {memo, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {fetchProducts} from '../../entities/Products/model/services/fetchProducts/fetchProducts';
import {getAllProductsSelector} from '../../entities/Products/model/selectors/getAllProductsSelector';
import {ProductCard} from '../../entities/Products/ui/ProductCard/ProductCard';
import cls from './MainPage.module.scss';
import {getActiveProductsSelector} from '../../entities/Products/model/selectors/getActiveProductsSelector';
import ProductDetaildCard from '../../entities/Products/ui/ProductDetaildCard/ProductDetaildCard';
import {ResultValue} from '../../entities/Products/ui/ResultValue/ResultValue';
import {wordSearch} from '../../shared/helpers/search/wordSearch';
import {Search} from '../../features/searchProducts/ui/Search';
import {IncomeOutcomePage} from '../IncomeOutcomePage/IncomeOutcomePage';
import {searchValueSelector} from '../../features/searchProducts/model/selectors/searchSelectors';

const MainPage = memo(() => {
	const dispatch = useAppDispatch();
	const products = useAppSelector(getAllProductsSelector);
	const activeProducts = useAppSelector(getActiveProductsSelector);
	const searchValue = useAppSelector(searchValueSelector);
	useEffect(() => {
		dispatch(fetchProducts());
	}, []);
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
					timesUsed={product.timesUsed}
				/>)}
				<ResultValue list={activeProducts} className={cls.result}/>
			</div>
			<IncomeOutcomePage/>
		</>
	);
});

export default MainPage;
