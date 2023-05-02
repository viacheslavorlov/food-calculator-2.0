import cls from './DeleteItemCard.module.scss';
import {memo} from 'react';
import {IProduct} from '../../../../store/types';
import {Text} from '../../../../shared/ui/Text/Text';
import {Button, ButtonBackground, ButtonVariants} from '../../../../shared/ui/Button/Button';
import {useAppDispatch} from '../../../../store/hooks';
import {classNames} from '../../../../shared/helpers/classNames/classNames';
import {productsActions} from '../../../../entities/Products/model/slice/productsSlice';
import {deleteFrofDB} from '../../model/deleteFromDB/deleteFrofDB';

interface DeleteItemCardProps {
	item: IProduct;
	className?: string;
}

export const DeleteItemCard = memo(({item, className}: DeleteItemCardProps) => {
	const {name, price, amountInOnePack, id} = item;
	const dispatch = useAppDispatch();

	const onDeleteItem = (itemId: number) => {
		dispatch(deleteFrofDB(itemId));
		dispatch(productsActions.deleteProduct(id));
	};
	return (
		<div className={classNames(cls.DeleteItemCard, className)}>
			<Text
				className={cls.text}
				title={name}
				content={`цена: ${price}, в упаковке: ${amountInOnePack}`}
			/>
			<hr className={cls.line}/>
			<Button
				className={cls.btn}
				variant={ButtonVariants.rounded}
				background={ButtonBackground.red}
				onClick={() => onDeleteItem(id)}
			>
				Удалить
			</Button>
		</div>
	);
});