import {db} from 'db/db';
import {useLiveQuery} from 'dexie-react-hooks';
import {IRecipe} from 'entities/recipe';
import {AddProductToRecipe} from 'features/addProductToRecipe';
import {RecipeCard} from 'features/recipies';
import {memo} from 'react';
import {useParams} from 'react-router-dom';
import {classNames} from 'shared/helpers/classNames/classNames';
import {Page} from 'shared/ui/Page/Page';

interface SingleRecipePageProps {
    className?: string;
}

const SingleRecipePage = memo((props: SingleRecipePageProps) => {
	const {
		className
	} = props;
	const {id} = useParams();

	const recipeByID = useLiveQuery<IRecipe[]>(
		() => db.recipes
			.where('id')
			.equals(Number(id))
			.toArray(),
		[id]
	);

	if (recipeByID && recipeByID[0]) {
		return (
			<Page>
				<RecipeCard recipe={recipeByID[0]} expanded/>
				<AddProductToRecipe currentRecipe={recipeByID[0]}/>
			</Page>
		);
	} else {
		return (
			<Page className={classNames(className)}>
                Загрузка...
			</Page>
		);
	}
});

export default SingleRecipePage;
