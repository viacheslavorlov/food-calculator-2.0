import {RecipeList} from 'features/recipies';
import {memo} from 'react';
import {useLiveQuery} from 'dexie-react-hooks';
import {db} from 'db/db';
import {Page} from 'shared/ui/Page/Page';

const RecipesPage = memo(() => {

	const recipes = useLiveQuery(
		() => db.recipes.toArray()
	);

	return (
		<Page>
			<h1>Рецепты</h1>
			<RecipeList recipes={recipes}/>
		</Page>
	);
});

export default RecipesPage;
