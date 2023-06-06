import {animated, config, useSpring} from '@react-spring/web';
import {memo, ReactNode} from 'react';

interface AppearAnimationProps {
	className?: string;
    children: ReactNode;
	initOnClick?: boolean;
	data?: any[];
}

export const AppearAnimation = memo((props: AppearAnimationProps) => {
	const {
		className, children
	} = props;

	const springs = useSpring({
		delay: 200,
		from: {x: -100, opacity: 0},
		to: {x: 0, opacity: 1},
		config: config.wobbly,
	});


	return (
		<animated.div style={springs} className={className}>
			{children}
		</animated.div>
	);
});