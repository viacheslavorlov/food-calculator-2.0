import {RecipeList} from '../../features/recipies/ui/RecipeList/RecipeList';
import cls from './RecipesPage.module.scss';
import {memo} from 'react';

const RecipesPage = memo(() => {
	return (
		<div className={cls.RecipesPage}>
			<h1>Рецепты</h1>
			<RecipeList/>
		</div>
	);
});

export default RecipesPage;
