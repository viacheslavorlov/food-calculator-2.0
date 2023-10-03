import {classNames} from '../../helpers/classNames/classNames';
import cls from './Icon.module.scss';
import React, {memo} from 'react';

interface IconPrors {
	className?: string;
	Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
	height?: number;
	width?: number;
}

export const IconSVG = memo((props: IconPrors) => {
	const {
		className,
		Icon,
		height = 40,
		width = 40
	} = props;

	return (
		<Icon width={width} height={height} className={classNames(cls.Icon, className, cls.picture)}/>
	);
});
