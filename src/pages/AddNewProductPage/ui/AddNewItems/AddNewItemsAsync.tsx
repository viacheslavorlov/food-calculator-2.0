import {lazy, Suspense} from 'react';
import {LoadingPage} from 'pages/LoadingPage';

const AddNewItemsLazy = lazy(() => import('./AddNewItems'));

export const AddNewItemsAsync = () => (
	<Suspense fallback={<LoadingPage/>}>
		<AddNewItemsLazy/>
	</Suspense>
);
