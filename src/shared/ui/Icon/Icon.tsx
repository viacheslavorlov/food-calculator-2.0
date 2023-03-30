import {classNames} from '../../helpers/classNames/classNames';
import cls from './Icon.module.scss';
import React, {memo} from 'react';

interface IconPrors {
	className?: string;
	Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const IconSVG = memo((props: IconPrors) => {
	const {
		className,
		Icon
	} = props;

	return (
		<div className={classNames(cls.Icon, className)}>
			<Icon className={cls.picture}/>
		</div>
	);
});