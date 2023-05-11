import {animated, useSpring} from '@react-spring/web';
import {memo, ReactNode, useCallback, useEffect} from 'react';

interface AppearAnimationProps {
	className?: string;
    children: ReactNode;
	initOnRender?: boolean;
	initOnClick?: boolean;
	data?: any[];
}

export const AppearAnimation = memo((props: AppearAnimationProps) => {
	const {
		className, children, initOnRender
	} = props;

	const [springs, api] = useSpring(() => ({
		from: {x: -100, opacity: 0},
		onDestroyed: {x: 100, opacity: 0}
	}));

	const appear = useCallback(() => {
		api.start({
			from: {
				x: -100,
				opacity: 0
			},
			to: {
				x: 0,
				opacity: 1
			},
		});
	}, []);

	useEffect(() => {
		if (initOnRender) {
			appear();
		}
	}, [initOnRender, appear]);
	
	return (
		<animated.div style={{...springs}} className={className}>
			{children}
		</animated.div>
	);
});