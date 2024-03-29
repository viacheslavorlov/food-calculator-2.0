import {lazy, Suspense} from 'react';
import {LoadingPage} from 'pages/LoadingPage';

const DeleteItemsLazy = lazy(() => import('./DeleteItems'));

export const DeleteItemsAsync = () => (
	<Suspense fallback={<LoadingPage/>}>
		<DeleteItemsLazy/>
	</Suspense>
);
