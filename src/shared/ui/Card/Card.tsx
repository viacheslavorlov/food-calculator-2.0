import cls from './Card.module.scss';
import {memo, ReactNode} from 'react';
import {classNames} from 'shared/helpers/classNames/classNames';
import {VStack} from '../Stack';

interface CardProps {
	className?: string;
	children: ReactNode;
	onClick?: any;
}

export const Card = memo((props: CardProps) => {
	const {
		className, children, onClick
	} = props;

	return (
		<VStack
			onClick={onClick}
			gap={'8'}
			className={classNames(cls.Card, className)}
		>
			{children}
		</VStack>
	);
});
