import {RecipeList} from 'features/recipies';
import cls from './RecipesPage.module.scss';
import {memo, useMemo} from 'react';
import {useLiveQuery} from 'dexie-react-hooks';
import {db} from 'db/db';

const RecipesPage = memo(() => {

	const recipes = useLiveQuery(
		() => db.recipes.toArray()
	);

	return (
		<div className={cls.RecipesPage}>
			<h1>Рецепты</h1>
			<RecipeList recipes={recipes}/>
		</div>
	);
});

export default RecipesPage;
