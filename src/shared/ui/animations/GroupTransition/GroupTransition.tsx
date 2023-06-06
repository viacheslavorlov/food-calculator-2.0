import {memo} from 'react';
import {animated, useTransition} from '@react-spring/web';
import {classNames} from 'shared/helpers/classNames/classNames';
import cls from './GroupTransition.module.scss';

interface GroupTransitionProps {
	className?: string;
	data: any;
	keys: Array<number | string>;
	trail?: number
}

export const GroupTransition = memo((props: GroupTransitionProps) => {
	const {
		className, data, keys, trail = 150
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
		trail
	});

	return transitions((style, item) => (
		<animated.div style={style} className={classNames(className, cls.fullWidth)}>
			{item}
		</animated.div>
	));
});