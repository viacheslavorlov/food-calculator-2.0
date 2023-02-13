import {lazy} from 'react';

export const AddNewItemsAsync = lazy(() => new Promise((resolve) => {
	//! так делать не стоит это только для показательности длительной загрузки
	// @ts-ignore
	setTimeout(() => resolve(import('./AddNewItems')), 10500);
}));