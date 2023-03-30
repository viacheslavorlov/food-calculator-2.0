import {useTheme} from '../../teme/useTheme';
import cls from './ThemeSwitcher.module.scss';
// import Theme from '../../assets/night-mode-svgrepo-com.svg';
import Day from '../../../../shared/assets/sun-black-shape-of-a-circle-with-triangles-svgrepo-com.svg';
import Night from '../../../../shared/assets/night-moon-and-star-shapes-svgrepo-com.svg';
import {classNames} from '../../../../shared/helpers/classNames/classNames';

const ThemeSwitcher = () => {
	const {toggleTheme, theme = 'light'} = useTheme();
	const fill = theme === 'light' ? '#ffae69' : '';
	const day = theme === 'light';
	return (
		<div>
			<button
				className={classNames(cls.themeButton)}
				onClick={toggleTheme}>
				<div className={cls[theme]}>
					{day ? <Night fill={fill}/> : <Day fill={fill}/>}
				</div>
			</button>
		</div>
	);
};

export default ThemeSwitcher;
