import cls from './DeleteItemCard.module.scss';
import {memo, useState} from 'react';
import {IProduct} from '../../../../store/types';
import {Text} from '../../../../shared/ui/Text/Text';
import {Button, ButtonBackground, ButtonVariants} from '../../../../shared/ui/Button/Button';
import {useAppDispatch} from '../../../../store/hooks';
import {classNames} from '../../../../shared/helpers/classNames/classNames';
import {productsActions} from '../../../../entities/Products/model/slice/productsSlice';
import {deleteFrofDB} from '../../model/deleteFromDB/deleteFrofDB';
import {animated, useTransition} from '@react-spring/web';

interface DeleteItemCardProps {
	item: IProduct;
	className?: string;
}

export const DeleteItemCard = memo((props: DeleteItemCardProps) => {
	const {item, className} = props;
	const {name, price, amountInOnePack, id} = item;
	const [displayed, setDisplayed] = useState(false);

	const transition = useTransition(displayed, {
		from: {opacity: 0, x: -100},
		enter: {opacity: 1, x: 0},
		leave: {opacity: 1, x: 100},
	});

	const onDeleteItem = (itemId: number) => {
		setDisplayed(false);

	};
	return transition((style, item) => (
		<animated.div style={style}>
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
		</animated.div>
	));
});
