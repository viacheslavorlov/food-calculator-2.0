import {useTheme} from '../../teme/useTheme';
import cls from './ThemeSwitcher.module.scss';
import Theme from '../../assets/night-mode-svgrepo-com.svg';
import {classNames} from '../../helpers/classNames';

const ThemeSwitcher = () => {
	const {toggleTheme, theme = 'light'} = useTheme();
	return (
		<div>
			<button
				className={classNames(cls.themeButton)}
				onClick={toggleTheme}>
				<div className={cls[theme]}>
					<Theme />
				</div>

			</button>
		</div>
	);
};

export default ThemeSwitcher;
