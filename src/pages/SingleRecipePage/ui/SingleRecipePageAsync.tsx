import {lazy, Suspense} from 'react';
import {LoadingPage} from 'pages/LoadingPage';

const SingleRecipePageLazy = lazy(() => import('./SingleRecipePage'));

export const SingleRecipePageAsync = () => (
	<Suspense fallback={<LoadingPage/>}>
		<SingleRecipePageLazy/>
	</Suspense>
);
