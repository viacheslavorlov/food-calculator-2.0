import {memo, useLayoutEffect, useState} from 'react';
import Menu from 'shared/assets/menu.svg';
import {Button, ButtonVariants} from 'shared/ui/Button/Button';
import {IconSVG} from 'shared/ui/Icon/Icon';
import {Link} from 'shared/ui/Link/Link';
import {Text} from 'shared/ui/Text/Text';
import {ThemeSwitcher} from 'widgets/themeSwitcher';
import cls from './Header.module.scss';
import {links} from '../links/links';
import {AsyncAnimation} from 'shared/ui/animations/AsyncAnimation/AsyncAnimation';


export const Header = memo(() => {
	const [isMenuOn, setIsMenuOn] = useState<boolean>(false);
	const [showMenuButton, setShowMenuButton] = useState(window.innerWidth <= 600);
	const onMenuHandle = () => {
		setIsMenuOn(prevState => !prevState);
	};
	useLayoutEffect(() => {
		function onResize() {
			if (window.innerWidth <= 600) {
				setShowMenuButton(true);
			} else {
				setShowMenuButton(false);
			}
		}
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);

	return (
		<div className={cls.header}>
			<ThemeSwitcher/>
			<div className={cls.headerWrapper}>
				<Text title={'Рассчет себестоимости продуктов'} className={cls.header__name}/>
				{showMenuButton &&
					<Button variant={ButtonVariants.rectangle} onClick={onMenuHandle} className={cls.btn}>
						<Text content={'Меню'}/>
						<IconSVG Icon={Menu} className={cls.icon}/>
					</Button>}
			</div>

			{(isMenuOn || !showMenuButton) && (
				<nav className={cls.header__navbar}>
					{links.map(item => (
						<AsyncAnimation key={item.to}>
							<Link onClick={onMenuHandle}  Icon={item.Icon} to={item.to} title={item.title}/>
						</AsyncAnimation>
					))}
				</nav>
			)}
		</div>
	);
});

