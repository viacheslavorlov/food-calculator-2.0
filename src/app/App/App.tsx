import {FC, Suspense} from 'react';
import {Header} from '../../widgets/header/Header';
import '../style/index.scss';
import {useTheme} from '../../widgets/themeSwitcher/teme/useTheme';
import './app.module.scss';
import {classNames} from '../../shared/helpers/classNames/classNames';
import {AppRouter} from '../AppRouter/AppRouter';
import {LoadingPage} from '../../pages';

const App: FC = () => {
	const {theme} = useTheme();
	return (
		<div className={classNames('app', theme)}>
			<Header/>
			<Suspense fallback={<LoadingPage/>}>
				<AppRouter/>
			</Suspense>
		</div>
	);
};

export default App;
