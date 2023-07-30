import {RecipeList} from 'features/recipies';
import cls from './RecipesPage.module.scss';
import {memo} from 'react';
import {useLiveQuery} from 'dexie-react-hooks';
import {db} from 'db/db';
import {VStack} from 'shared/ui/Stack';

const RecipesPage = memo(() => {

	const recipes = useLiveQuery(
		() => db.recipes.toArray()
	);

	return (
		<VStack max gap={'8'} justify={'center'} align={'center'}>
			<h1>Рецепты</h1>
			<RecipeList className={cls.RecipesPage} recipes={recipes}/>
		</VStack>
	);
});

export default RecipesPage;
