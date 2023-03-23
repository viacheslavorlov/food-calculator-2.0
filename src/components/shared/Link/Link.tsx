import React, {memo, ReactNode} from 'react';
import {NavLink} from 'react-router-dom';
import {classNames} from '../../../helpers/classNames';
import cls from './Link.module.scss';
import {Text} from '../Text/Text';
import {IconSVG} from '../Icon/Icon';

interface LinkPrors {
	className?: string;
	Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
	to: string;
	title: string;
	children?: ReactNode;
}

export const Link = memo((props: LinkPrors) => {
	const {
		className,
		Icon,
		to,
		title
	} = props;

	return (
		<NavLink
			className={
				({isActive}) => isActive ? classNames(cls.header__navbar_link, 'active')
					: cls.header__navbar_link
			}
			to={to}>
			<IconSVG Icon={Icon}/>
			<Text className={cls.header__navbar_text} content={title}/>
		</NavLink>
	);
});
