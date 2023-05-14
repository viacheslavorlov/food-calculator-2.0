import {memo, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {fetchProducts} from '../../entities/Products/model/services/fetchProducts/fetchProducts';
import {getAllProductsSelector} from '../../entities/Products/model/selectors/getAllProductsSelector';
import cls from './MainPage.module.scss';
import {getActiveProductsSelector} from '../../entities/Products/model/selectors/getActiveProductsSelector';
import ProductDetaildCard from '../../entities/Products/ui/ProductDetaildCard/ProductDetaildCard';
import {ResultValue} from '../../entities/Products/ui/ResultValue/ResultValue';
import {Search} from '../../features/searchProducts/ui/Search/Search';
import {SearchList} from '../../features/searchProducts/ui/SearchList/SearchList';
import {CreateRecipeForm} from '../../features/createRecipe/ui/CreateRecipeForm';

const MainPage = memo(() => {
	// const dispatch = useAppDispatch();
	// const products = useAppSelector(getAllProductsSelector);
	// const activeProducts = useAppSelector(getActiveProductsSelector);

	useEffect(() => {
		// dispatch(fetchProducts());
	}, []);
	// const activeProductsIDs = activeProducts.map(prod => prod.id);

	return (
		<>
			<div className={cls.MainPage}>
				главная страница
				<Search/>
				{/*<SearchList*/}
				{/*	products={products}*/}
				{/*	className={cls.SearchList}*/}
				{/*	idList={activeProductsIDs}*/}
				{/*/>*/}
				{/*{activeProducts.map(product => <ProductDetaildCard*/}
				{/*	key={product.id + product.name}*/}
				{/*	product={product}*/}
				{/*/>)}*/}
				{/*<CreateRecipeForm />*/}
				{/*<ResultValue list={activeProducts} className={cls.result}/>*/}
			</div>
		</>
		
	);
});

export default MainPage;
