import cls from './ProductCard.module.scss';
import {classNames} from '../../../../shared/helpers/classNames/classNames';
import {memo, useCallback} from 'react';
import {Text} from '../../../../shared/ui/Text/Text';
import {Button, ButtonVariants} from '../../../../shared/ui/Button/Button';
import {AppearAnimation} from '../../../../shared/ui/ApearAnimation/AppearAnimation';
import {PRODUCT_SESSIONSTORAGE_KEY} from '../../consts/productConsts';
import {useLiveQuery} from 'dexie-react-hooks';
import {db} from '../../../../db/db';
import {Line} from '../../../../shared/ui/Line/Line';
import {HStack, VStack} from '../../../../shared/ui/Stack';

interface ProductCardProps {
	className?: string;
	name: string;
	id: number;
}

export const ProductCard = memo((props: ProductCardProps) => {
	const {
		className,
		name,
		id
	} = props;
	// const activeProducts = useLiveQuery(() => db.activeProducts.toArray()) || [];
	const newActiveProduct = useLiveQuery(
		() => db.products
			.where('id')
			.equals(id)
			.toArray()
	);

	const onAddProduct = useCallback(() => {
		if (newActiveProduct?.length) {
			db.activeProducts.add(newActiveProduct[0])
				.then(() => console.log('добавлен продукт в активный лист', newActiveProduct[0]))
				.catch(() => console.log('Продукт не добавлен!'));
		}
	}, [newActiveProduct]);

	return (
		<AppearAnimation className={classNames(cls.ProductCard, className)} initOnRender >
			<HStack gap={'8'} max>
				<Text content={name}/>
				<Line width={'30vw'}/>
				<Button
					className={cls.btn}
					variant={ButtonVariants.rounded}
					onClick={() => onAddProduct()}
				>
				Добавить
				</Button>
			</HStack>
		</AppearAnimation>
	);
});

