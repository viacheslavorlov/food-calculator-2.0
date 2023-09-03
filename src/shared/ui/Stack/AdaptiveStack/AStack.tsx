import {FlexProps} from '../Flex/Flex';
import {HStack, VStack} from '..';
import {useLayoutEffect, useState} from 'react';

type AStackProps = Omit<FlexProps, 'direction'>

export const AStack = (props: AStackProps) => {
	const [width, setWidth] = useState(window.innerWidth);
	const [horizontal, setHorizontal] = useState(width > 500);
	const {children} = props;
	useLayoutEffect(() => {
		const setWindowSize = () => {
			setWidth(window.innerWidth);
			setHorizontal(width > 500);
		};
		window.addEventListener('resize', setWindowSize);
		return () => window.removeEventListener('resize', setWindowSize);
	}, [width]);
	if (horizontal) {
		return (
			<HStack {...props}>
				{children}
			</HStack>
		);
	}
	return (
		<VStack {...props}>
			{children}
		</VStack>
	);
};
