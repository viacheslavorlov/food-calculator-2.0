import {lazy, Suspense} from 'react';
import {LoadingPage} from 'pages/LoadingPage';

const PageNotFoundLazy = lazy(() => import('./PageNotFound'));

export const PageNotFoundAsync = () => (
	<Suspense fallback={<LoadingPage/>}>
		<PageNotFoundLazy/>
	</Suspense>
);
