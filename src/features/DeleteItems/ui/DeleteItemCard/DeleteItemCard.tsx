import {db} from 'db/db';
import cls from './DeleteItemCard.module.scss';
import {memo, useState} from 'react';
import {IProduct} from '../../../../store/types';
import {Text} from '../../../../shared/ui/Text/Text';
import {Button, ButtonBackground, ButtonVariants} from '../../../../shared/ui/Button/Button';
import {classNames} from '../../../../shared/helpers/classNames/classNames';
import {animated, useTransition} from '@react-spring/web';
import { AppearAnimation } from 'shared/ui/ApearAnimation/AppearAnimation';

interface DeleteItemCardProps {
	item: IProduct;
	className?: string;
}

export const DeleteItemCard = memo((props: DeleteItemCardProps) => {
	const {item, className} = props;
	const {name, price, amountInOnePack, id} = item;

	const onDeleteItem = (itemId: number) => {
		db.products.bulkDelete([itemId]);
	};
	return (
		<AppearAnimation initOnRender>
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
		</AppearAnimation>
	);
});
