import {lazy, Suspense} from 'react';
import {LoadingPage} from 'pages/LoadingPage';

const RecipesPageLazy = lazy(() => import('./RecipesPage'));

export const RecipesPageAsync = () => (
	<Suspense fallback={<LoadingPage/>}>
		<RecipesPageLazy/>
	</Suspense>
);
