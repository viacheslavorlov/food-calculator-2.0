import cls from './ProductCard.module.scss';
import {classNames} from '../../../../shared/helpers/classNames/classNames';
import {memo, useCallback} from 'react';
import {Text} from '../../../../shared/ui/Text/Text';
import {Button, ButtonVariants} from '../../../../shared/ui/Button/Button';
import {useAppDispatch} from '../../../../store/hooks';
import {productsActions} from '../../model/slice/productsSlice';
import {addViewsCount} from '../../model/services/addViewsCount/addViewsCount';

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
		dispatch(addViewsCount(id));
		dispatch(productsActions.addProductToActive(id));

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

