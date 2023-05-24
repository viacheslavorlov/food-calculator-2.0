import cls from './GroupAnimation.module.scss';
import {memo, MemoExoticComponent} from 'react';
import {animated, config, useTransition} from '@react-spring/web';
import {VStack} from 'shared/ui/Stack';
import {IProduct} from 'store/types';

interface GroupAnimationCardProps {
	className?: string;
	data: any[];
	functions?: {
		onDeleteProduct: (id: number) => void,
		onChangeIngredient: (item: IProduct) => void
	}
	Component: MemoExoticComponent<(props: any) => JSX.Element>;
}

export const GroupAnimationCard = memo((props: GroupAnimationCardProps) => {
	const {
		className, data, Component, functions
	} = props;
	const transition = useTransition(data, {
		keys: item => item.id,
		from: {x: -300, opacity: 0},
		enter: {x: 0, opacity: 1},
		leave: {x: 300, opacity: 0},
		config: config.stiff
	});

	return (
		<VStack
			gap={'8'}
			max
			justify="center"
			align="center"
			className={className}>
			{transition((style, item) => (
				<animated.div
					className={cls.item}
					style={style}
					key={item.id}
				>
					<Component {...functions ?? null} item={item}/>
				</animated.div>
			))}
		</VStack>
	);
});