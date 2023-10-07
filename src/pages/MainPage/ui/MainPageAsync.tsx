import {lazy, Suspense} from 'react';
import {LoadingPage} from 'pages/LoadingPage';

const MainPageLazy = lazy(() => import('./Main'));

export const MainPageAsync = () => (
	<Suspense fallback={<LoadingPage/>}>
		<MainPageLazy/>
	</Suspense>
);
