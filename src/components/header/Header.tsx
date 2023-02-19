import cls from './Header.module.scss';
import {NavLink} from 'react-router-dom';
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';
import AddIcon from '../../assets/add-item-alt-svgrepo-com.svg';
import Products from '../../assets/list2-svgrepo-com.svg';
import Package from '../../assets/package-svgrepo-com.svg';
import DeleteItem from '../../assets/delete-1-svgrepo-com.svg';

export const Header = () => {
	return (
		<div className={cls.header}>
			<ThemeSwitcher/>
			<h1 className={cls.header__name}>Калькулятор себестоимости продуктов</h1>
			<nav className={cls.header__navbar}>
				<NavLink className={cls.header__navbar_link} to="new-item">
					<AddIcon /> Добавить новый продукт
				</NavLink>
				<NavLink className={cls.header__navbar_link} to="/">
					<Products /> Список продуктов
				</NavLink>
				<NavLink className={cls.header__navbar_link} to="package">
					<Package/>Список упаковок
				</NavLink>
				<NavLink className={cls.header__navbar_link} to={'delete-item'}>
					<DeleteItem/>Удаление продуктов
				</NavLink>
			</nav>
		</div>
	);
};

