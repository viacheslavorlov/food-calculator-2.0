import {memo, useCallback} from 'react';
import {IProduct} from 'store/types';
import ProductDetaildCard from 'entities/Products/ui/ProductDetaildCard/ProductDetaildCard';
import {GroupAnimationCard} from 'shared/ui/GroupAnimation/GroupAnimationCard';
import {VStack} from 'shared/ui/Stack';
import {db} from 'db/db';

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

	return (
		<VStack max justify={'center'} align={'center'} gap={'4'} className={className}>
			<GroupAnimationCard
				functions={{onDeleteProduct, onChangeIngredient}}
				data={activeProducts}
				Component={ProductDetaildCard}/>
			{/*{*/}
			{/*	activeProducts.map((product) => (*/}
			{/*		// <AppearAnimation*/}
			{/*		// 	key={product.id + product.name}>*/}
			{/*		<ProductDetaildCard*/}
			{/*			key={product.id + product.name}*/}
			{/*			onDeleteProduct={onDeleteProduct}*/}
			{/*			product={product}*/}
			{/*			onChangeIngredient={onChangeIngredient}/>*/}
			{/*		// </AppearAnimation>*/}
			{/*	))*/}
			{/*}*/}
		</VStack>
	);
});