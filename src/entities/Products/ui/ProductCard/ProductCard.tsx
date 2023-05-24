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
	// const activeProducts = useLiveQuery(() => db.activeProducts.toArray()) || [];
	const newActiveProduct = useLiveQuery(
		() => db.products
			.where('id')
			.equals(item.id)
			.toArray()
	);

	const onAddProduct = useCallback(() => {
		if (newActiveProduct?.length) {
			db.activeProducts.bulkAdd(newActiveProduct)
				.then(() => console.log('добавлен продукт в активный лист', newActiveProduct[0]))
				.catch(() => console.log('Продукт не добавлен!'));
		}
	}, [newActiveProduct]);

	return (
		// <AppearAnimation className={classNames(cls.ProductCard, className)} initOnRender >
		<HStack gap={'8'} max>
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
		// </AppearAnimation>
	);
});

