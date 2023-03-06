import cls from './ProductCard.module.scss';
import {classNames} from '../../../../../helpers/classNames';
import {memo, useCallback} from 'react';
import {Text} from '../../../../shared/Text/Text';
import {Button, ButtonVariants} from '../../../../shared/Button/Button';
import {useAppDispatch} from '../../../../../store/hooks';
import {productsActions} from '../../../../../store/productSlice/productsSlice';

interface ProductCardProps {
	className?: string;
	name: string;
	id: number;
}

export const ProductCard = memo((props: ProductCardProps) => {
	const dispatch = useAppDispatch();
	const {
		className,
		name,
		id
	} = props;

	const onAddProduct = useCallback((id: number) => {
		dispatch(productsActions.addProductToActive(id));
		dispatch(productsActions.deleteFromActiveList(id));
	}, [dispatch]);

	return (
		<div className={classNames(cls.ProductCard, className)}>
			<Text content={name}/>
			<hr className={cls.line}/>
			<Button
				className={cls.btn}
				variant={ButtonVariants.rounded}
				onClick={() => onAddProduct(id)}
			>
				Добавить
			</Button>
		</div>
	);
});

