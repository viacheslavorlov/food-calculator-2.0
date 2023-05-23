import {AddNewItems, DeleteItems, MainPage, PageNotFound, RecipesPage} from '../../pages';
import {ReactNode} from 'react';
import {SingleRecipePage} from 'pages';

export type Paths = '/' | '/recipes' | '/new-item' | '/delete-item' | '/recipes/:id' | '*';
interface IRouterConfig {
	path: Paths;
	element: ReactNode;
}

export const routerConfig: IRouterConfig[] = [
	{
		path: '/',
		element: <MainPage/>
	},
	{
		path: '/recipes',
		element: <RecipesPage/>
	},
	{
		path: '/recipes/:id',
		element: <SingleRecipePage/>
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
