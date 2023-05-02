import {AddNewItems, DeleteItems, MainPage, PageNotFound, RecipesPage} from '../../pages';
import {ReactNode} from 'react';

export type Paths = '/' | '/recipes' | '/new-item' | '/delete-item' | '*';

export const routerConfig: {path: Paths, element: ReactNode}[] = [
	{
		path: '/',
		element: <MainPage/>
	},
	{
		path: '/recipes',
		element: <RecipesPage/>
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
