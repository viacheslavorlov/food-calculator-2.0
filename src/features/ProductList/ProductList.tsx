import {memo, useCallback} from 'react';
import {IProduct} from 'store/types';
import ProductDetaildCard from 'entities/Products/ui/ProductDetaildCard/ProductDetaildCard';
import {VStack} from 'shared/ui/Stack';
import {db} from 'db/db';
import {GroupTransition} from 'shared/ui/GroupTransition/GroupTransition';
import cls from './ProductList.module.scss';

interface ProductListProps {
	className?: string;
	activeProducts: IProduct[];
}

export const ProductList = memo((props: ProductListProps) => {
	const {
		className, activeProducts,
	} = props;
	const onDeleteProduct = useCallback(async (id: number) => {
		await db.activeProducts
			.where('id')
			.equals(id)
			.delete();
	}, []);

	const onChangeIngredient = useCallback((newProduct: IProduct) => {
		db.activeProducts.put(newProduct);
	}, []);

	const content = activeProducts.map((product) => (
		<ProductDetaildCard
			className={cls.card}
			key={product.id + product.name}
			onDeleteProduct={onDeleteProduct}
			item={product}
			onChangeIngredient={onChangeIngredient}/>
	));
	const ids = activeProducts.map(el => el.id);

	return (
		<VStack max justify={'center'} align={'center'} gap={'4'} className={className}>
			<GroupTransition data={content} keys={ids}/>
		</VStack>
	);
});