import cls from './Header.module.scss';
import ThemeSwitcher from '../themeSwitcher/ui/ThemeSwitcher/ThemeSwitcher';
import {Text} from '../../shared/ui/Text/Text';
import {memo, useLayoutEffect, useState} from 'react';
import {Link} from '../../shared/ui/Link/Link';
import {links} from './links/links';
import {Button, ButtonVariants} from '../../shared/ui/Button/Button';
import Menu from '../../shared/assets/menu.svg';
import {IconSVG} from '../../shared/ui/Icon/Icon';


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
				{showMenuButton && <Button variant={ButtonVariants.rectangle} onClick={onMenuHandle} className={cls.btn}>
					<IconSVG Icon={Menu} className={cls.icon}/>
				</Button>}
			</div>

			{(isMenuOn || !showMenuButton) && (
				<nav className={cls.header__navbar}>
					{links.map(item => (
						<Link onClick={onMenuHandle} key={item.to} Icon={item.Icon} to={item.to} title={item.title}/>
					))}
				</nav>
			)}

		</div>
	);
});

