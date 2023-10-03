import React, {memo, ReactNode} from 'react';
import {NavLink} from 'react-router-dom';
import {classNames} from '../../helpers/classNames/classNames';
import {IconSVG} from '../Icon/Icon';
import {Text} from '../Text/Text';
import cls from './Link.module.scss';

interface LinkPrors {
	className?: string;
	Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
	to: string;
	title?: string;
	children?: ReactNode;
	onClick?: () => void;
}

export const Link = memo((props: LinkPrors) => {
	const {
		className,
		Icon,
		to,
		title,
		onClick,
		children
	} = props;

	const activeClass = (isActive: boolean) => isActive
		? classNames(cls.header__navbar_link, className, 'active')
		: classNames(cls.header__navbar_link, className, 'inactive');

	return (
		<NavLink
			onClick={onClick}
			className={({isActive}) => activeClass(isActive)}
			to={to}
		>
			{children}
			<Text className={cls.header__navbar_text} content={title}/>
			{Icon && <IconSVG className={cls.icon} Icon={Icon}/>}
		</NavLink>
	);
});
