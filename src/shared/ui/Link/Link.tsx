import React, {memo, ReactNode} from 'react';
import {NavLink} from 'react-router-dom';
import {classNames} from '../../helpers/classNames/classNames';
import {AppearAnimation} from '../ApearAnimation/AppearAnimation';
import {IconSVG} from '../Icon/Icon';
import {Text} from '../Text/Text';
import cls from './Link.module.scss';

interface LinkPrors {
    className?: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    to: string;
    title: string;
    children?: ReactNode;
    onClick?: () => void;
}

export const Link = memo((props: LinkPrors) => {
	const {
		className,
		Icon,
		to,
		title,
		onClick
	} = props;

	return (
		<AppearAnimation initOnRender>
			<NavLink
				onClick={onClick}
				className={
					({isActive}) => isActive ? classNames(cls.header__navbar_link, 'active')
						: classNames(cls.header__navbar_link, 'inactive')
				}
				to={to}>

				<Text className={cls.header__navbar_text} content={title}/>
				<IconSVG className={cls.icon} Icon={Icon}/>
			</NavLink>
		</AppearAnimation>
	);
});
