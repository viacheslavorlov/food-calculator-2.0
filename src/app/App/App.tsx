import {FC, Suspense} from 'react';
import {Header} from 'widgets/header';
import '../style/index.scss';
import {useTheme} from 'widgets/themeSwitcher';
import './app.module.scss';
import {classNames} from 'shared/helpers/classNames/classNames';
import AppRouter from '../AppRouter/AppRouter';
import {LoadingSpinner} from 'shared/ui/Loader/Loader';

const App: FC = () => {
	const {theme} = useTheme();
	return (
		<div className={classNames('app', theme)}>
			<Header/>
			<Suspense fallback={<LoadingSpinner/>}>
				<AppRouter/>
			</Suspense>
		</div>
	);
};

export default App;
