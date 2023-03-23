import cls from './Header.module.scss';
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';
import {Text} from '../shared/Text/Text';
import {memo} from 'react';
import {Link} from '../shared/Link/Link';
import {links} from './links/links';


export const Header = memo(() => {
	return (
		<div className={cls.header}>
			<ThemeSwitcher/>
			<Text content={'Калькулятор себестоимости продуктов'} className={cls.header__name}/>
			<nav className={cls.header__navbar}>
				{links.map(item => (
					<Link key={item.to} Icon={item.Icon} to={item.to} title={item.title}/>
				))}
			</nav>
		</div>
	);
});

