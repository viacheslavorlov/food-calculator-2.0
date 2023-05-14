import {RecipeList} from '../../features/recipies/ui/RecipeList/RecipeList';
import cls from './RecipesPage.module.scss';
import {memo, useEffect} from 'react';
import {useAppDispatch} from '../../store/hooks';
import {fetchRecipes} from '../../features/recipies/model/service/fetchRecipes';

const RecipesPage = memo(() => {
	const dispatch = useAppDispatch();

	// useEffect(() => {
	// 	dispatch(fetchRecipes());
	// }, []);
	return (
		<div className={cls.RecipesPage}>
			<h1>Рецепты</h1>
			<RecipeList/>
		</div>
	);
});

export default RecipesPage;
