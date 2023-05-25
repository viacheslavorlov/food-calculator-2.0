import {db} from 'db/db';
import {useLiveQuery} from 'dexie-react-hooks';
import {IRecipe} from 'entities/recipe';
import {AddProductToRecipe} from 'features/addProductToRecipe/AddProductToRecipe';
import {RecipeCard} from 'features/recipies';
import {memo} from 'react';
import {useParams} from 'react-router-dom';
import {classNames} from 'shared/helpers/classNames/classNames';
import cls from './SingleRecipePage.module.scss';

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
	console.log(id);

	console.log(id, recipeByID);
	if (recipeByID && recipeByID[0]) {
		return (
			<>
				<RecipeCard recipe={recipeByID[0]} expanded/>
				<AddProductToRecipe currentRecipe={recipeByID[0]}/>
			</>
		);
	} else {
		return (
			<div className={classNames(cls.SingleRecipePage, className)}>
                Загрузка...
			</div>
		);
	}
});

export default SingleRecipePage;