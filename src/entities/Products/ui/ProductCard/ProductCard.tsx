import cls from './ProductCard.module.scss';
import {memo, useCallback} from 'react';
import {Text} from 'shared/ui/Text/Text';
import {Button, ButtonVariants} from 'shared/ui/Button/Button';
import {useLiveQuery} from 'dexie-react-hooks';
import {db} from 'db/db';
import {Line} from 'shared/ui/Line/Line';
import {HStack} from 'shared/ui/Stack';
import {IProduct} from 'store/types';

interface ProductCardProps {
	className?: string;
	item: IProduct;
}

export const ProductCard = memo((props: ProductCardProps) => {
	const {
		className,
		item
	} = props;
	const newActiveProduct = useLiveQuery(
		() => db.products
			.where('id')
			.equals(item.id)
			.toArray()
	);

	const onAddProduct = useCallback(async () => {
		if (newActiveProduct?.length) {
			const newProduct = newActiveProduct[0];
			newProduct.timesUsed += 1;
			await db.products.put(newProduct);
			await db.activeProducts.add(newProduct)
				.then(() => console.log('добавлен продукт в активный лист', newProduct))
				.catch(() => console.log('Продукт не добавлен!'));
		}
	}, [newActiveProduct]);

	return (
		<HStack gap={'8'} max className={className}>
			<Text content={item.name}/>
			<Line width={'30vw'}/>
			<Button
				className={cls.btn}
				variant={ButtonVariants.rounded}
				onClick={() => onAddProduct()}
			>
				Добавить
			</Button>
		</HStack>
	);
});

