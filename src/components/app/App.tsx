import {FC} from 'react';
import {Header} from '../header/Header';
import '../../style/index.scss';
import {useTheme} from '../../teme/useTheme';
import './app.module.scss';
import {AppRouter} from '../AppRouter/AppRouter';
import {classNames} from '../../helpers/classNames';

const App: FC = () => {
	const {theme} = useTheme();
	return (
		<div className={classNames('app', theme)}>
			<Header/>
			<AppRouter/>
		</div>
	);
};

export default App;
