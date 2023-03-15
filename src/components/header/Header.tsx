import cls from './Header.module.scss';
import {NavLink} from 'react-router-dom';
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';
import {Text} from '../shared/Text/Text';
import AddIcon from '../../assets/add-item-alt-svgrepo-com.svg';
import Products from '../../assets/list2-svgrepo-com.svg';
import Package from '../../assets/package-svgrepo-com.svg';
import DeleteItem from '../../assets/delete-1-svgrepo-com.svg';
import {memo} from 'react';

export const Header = memo(() => {
	return (
		<div className={cls.header}>
			<ThemeSwitcher/>
			<Text content={'Калькулятор себестоимости продуктов'} className={cls.header__name}/>
			<nav className={cls.header__navbar}>
				<NavLink className={cls.header__navbar_link} to="new-item">
					<AddIcon /> <span className={cls.header__navbar_text}>Добавить новый продукт</span>
				</NavLink>
				<NavLink className={cls.header__navbar_link} to="/">
					<Products /> <span className={cls.header__navbar_text}>Список продуктов</span>
				</NavLink>
				<NavLink className={cls.header__navbar_link} to="package">
					<Package /> <span className={cls.header__navbar_text}>Cписок упаковок</span>
				</NavLink>
				<NavLink className={cls.header__navbar_link} to={'delete-item'}>
					<DeleteItem /> <span className={cls.header__navbar_text}>Удаление продуктов</span>
				</NavLink>
			</nav>
		</div>
	);
});

