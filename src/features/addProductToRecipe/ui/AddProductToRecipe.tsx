import {db} from 'db/db';
import {useLiveQuery} from 'dexie-react-hooks';
import {IRecipe} from 'entities/recipe';
import {memo} from 'react';
import {classNames} from 'shared/helpers/classNames/classNames';
import {IProduct} from 'store/types';

interface AddProductToRecipeProps {
	className?: string;
	currentRecipe: IRecipe;
}

export const AddProductToRecipe = memo((props: AddProductToRecipeProps) => {
	const {
		className, currentRecipe
	} = props;
	const {ingredients} = currentRecipe;
	const ingredientsIds = ingredients.map(ingredient => ingredient.id);
	const allProducts = useLiveQuery(() => db.products.toArray());
	const notUsedProducts = allProducts?.filter(item => !ingredientsIds.includes(item.id));

	const addToRecipe = async (product: IProduct) => {
		db.recipes.update(currentRecipe, {ingredients: [...currentRecipe.ingredients, product]});
	};

	return (
		<div className={classNames(className)}>
			{notUsedProducts?.map(item => <div onClick={() => addToRecipe(item)} key={item.id}>{item.name}</div>)}
		</div>
	);
});