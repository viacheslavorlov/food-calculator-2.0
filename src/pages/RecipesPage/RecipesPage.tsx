import {RecipeList} from 'features/recipies';
import {memo, useEffect, useState} from 'react';
import {useLiveQuery} from 'dexie-react-hooks';
import {db} from 'db/db';
import {Page} from 'shared/ui/Page/Page';
import {LoadingPage} from 'pages/LoadingPage';

const RecipesPage = memo(() => {

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const recipes = useLiveQuery(
		() => db
			.recipes.toArray()
			.then(() => {
				if (recipes) setIsLoading(false);
			})
			.catch(() => setError(true))
	);
	useEffect(() => {
		setIsLoading(true);
	}, []);
	if (isLoading) {
		return <LoadingPage/>;
	}

	return (
		<Page>
			<>
				<h1>Рецепты</h1>
				{!isLoading && !error && recipes && <RecipeList recipes={recipes}/>}
				{error && <h1>Ошибка!</h1>}
			</>
		</Page>
	);
});

export default RecipesPage;
