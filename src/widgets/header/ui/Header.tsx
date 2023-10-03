import {memo, useLayoutEffect, useState} from 'react';
import Menu from 'shared/assets/menu.svg';
import {Button, ButtonVariants} from 'shared/ui/Button/Button';
import {IconSVG} from 'shared/ui/Icon/Icon';
import {Link} from 'shared/ui/Link/Link';
import {Text} from 'shared/ui/Text/Text';
import {ThemeSwitcher} from 'widgets/themeSwitcher';
import cls from './Header.module.scss';
import {links} from '../links/links';
import {AppearAnimation} from 'shared/ui/animations/ApearAnimation/AppearAnimation';


export const Header = memo(() => {
	const [isMenuOn, setIsMenuOn] = useState<boolean>(false);
	const [showMenuButton, setShowMenuButton] = useState(window.innerWidth <= 600);
	const onMenuHandle = () => {
		setIsMenuOn(prevState => !prevState);
	};
	useLayoutEffect(() => {
		function onResize() {
			if (window.innerWidth <= 500) {
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
				<h1 className={cls.header__name}>Расчет себестоимости продуктов </h1>
				{showMenuButton &&
					<Button variant={ButtonVariants.rectangle} onClick={onMenuHandle} className={cls.btn}>
						<IconSVG Icon={Menu} className={cls.icon}/>
					</Button>}
			</div>

			{(isMenuOn || !showMenuButton) && (
				<nav className={cls.header__navbar}>
					{links.map(item => (
						<AppearAnimation key={item.to}>
							<Link
								className={cls.header__navbar_link}
								onClick={onMenuHandle}
								Icon={item.Icon}
								to={item.to}
								title={item.title}
							/>
						</AppearAnimation>
					))}
				</nav>
			)}
		</div>
	);
});

