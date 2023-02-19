import {useTheme} from '../../teme/useTheme';
import cls from './ThemeSwitcher.module.scss';
import Theme from '../../assets/night-mode-svgrepo-com.svg';

const ThemeSwitcher = () => {
	const {toggleTheme} = useTheme();
	return (
		<div>
			<button
				className={cls.themeButton}
				onClick={toggleTheme}>
				<Theme />
			</button>
		</div>
	);
};

export default ThemeSwitcher;
