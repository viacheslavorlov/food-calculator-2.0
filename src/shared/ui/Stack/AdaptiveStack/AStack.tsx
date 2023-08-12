import {FlexProps} from '../Flex/Flex';
import {HStack, VStack} from '..';
import {useLayoutEffect, useState} from 'react';

type AStackProps = Omit<FlexProps, 'direction'>

export const AStack = (props: AStackProps) => {
	const [width, setWidth] = useState(window.innerWidth);
	const [horizontal, setHorizontal] = useState(width > 500);
	const {children} = props;
	useLayoutEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth);
			setHorizontal(width > 500);
		});
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
