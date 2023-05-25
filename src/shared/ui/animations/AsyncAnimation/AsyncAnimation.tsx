import {animated, config, useSpring, useSprings, useTransition} from '@react-spring/web';
import {memo, ReactNode} from 'react';

interface AsyncAnimationProps {
	className?: string;
	children: ReactNode;
}

export const AsyncAnimation = memo((props: AsyncAnimationProps) => {
	const {
		className, children
	} = props;

	const transition = useTransition(children,{
		from: {config: config.stiff, x: -100, size: 0, opacity: 0},
		enter: [
			{x: 50, height: 10, config: config.stiff, opacity: 0.5},
			{x: 0, opacity: 1, height: 'auto', config: config.stiff}
		],
		leave: [
			{x: -50, height: 10, config: config.stiff, opacity: 0.5},
			{x: 0, opacity: 0, height: 0, config: config.stiff}
		],
		config: config.wobbly
	});


	return (
		<div>
			{transition((style) => (
				<animated.div style={style} className={className}>
					{children}
				</animated.div>
			))}
		</div>
	);
});