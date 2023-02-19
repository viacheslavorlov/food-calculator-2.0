import {AddNewItems, DeleteItems, MainPage, Packages, PageNotFound} from '../pages';
import {ReactNode} from 'react';

export type Paths = '/' | '/package' | '/new-item' | '/delete-item' | '*';

export const routerConfig: {path: Paths, element: ReactNode}[] = [
	{
		path: '/',
		element: <MainPage/>
	},
	{
		path: '/package',
		element: <Packages/>
	},
	{
		path: '/new-item',
		element: <AddNewItems/>
	},
	{
		path: '/delete-item',
		element: <DeleteItems/>
	},
	{
		path: '*',
		element: <PageNotFound/>
	},
];
