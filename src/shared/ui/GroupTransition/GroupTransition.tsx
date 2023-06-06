import {memo} from 'react';
import {animated, useTransition} from '@react-spring/web';
import {classNames} from 'shared/helpers/classNames/classNames';
import cls from './GroupTransition.module.scss';
import {FlexAlign, FlexDirection, FlexGap, FlexJustify} from '../Stack/Flex/Flex';

interface GroupTransitionProps {
	className?: string;
	data: any;
	keys: Array<number | string>;
	justify?: FlexJustify;
	align?: FlexAlign;
	gap?: FlexGap;
	direction?: FlexDirection;
}

export const GroupTransition = memo((props: GroupTransitionProps) => {
	const {
		className, data, keys
	} = props;
	const transitions = useTransition(data, {
		keys,
		config: {tension: 290, friction: 40, frequency: .2},
		from: {
			opacity: 0,
			x: -200,
		},
		enter: {
			opacity: 1,
			x: 0,
		},
		leave: {
			opacity: 0,
			x: 200,
			height: 0
		},
		trail: 150
	});

	return transitions((style, item) => (
		<animated.div style={style} className={classNames(className, cls.fullWidth)}>
			{item}
		</animated.div>
	));
});