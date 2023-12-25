import {ReactNode} from 'react';
import {AddNewItems} from 'pages/AddNewProductPage';
import {DeleteItems} from 'pages/DeleteItemPage';
import {MainPage} from 'pages/MainPage';
import {PageNotFound} from 'pages/PageNotFound';
import { RecipesPage } from 'pages/RecipesPage';
import {SingleRecipePage} from 'pages/SingleRecipePage';
// import { IncomeOutcomePage } from 'pages/IncomeOutcomePage';


export type Paths = '/' | '/recipes' | '/new-item' | '/delete-item' | '/recipes/:id' | '/income-outcome' | '*';
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
	// {
	// 	path: '/income-outcome',
	// 	element: <IncomeOutcomePage/>
	// },
	{
		path: '*',
		element: <PageNotFound/>
	},
];
