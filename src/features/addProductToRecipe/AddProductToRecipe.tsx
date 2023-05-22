import {classNames} from 'shared/helpers/classNames/classNames';
import {memo} from 'react';
import {IRecipe} from 'entities/recipe';
import {useLiveQuery} from 'dexie-react-hooks';
import {db} from 'db/db';
import {IProduct} from 'store/types';

interface AddProductToRecipeProps {
	className?: string;
	currentRecipe: IRecipe;
}

export const AddProductToRecipe = memo((props: AddProductToRecipeProps) => {
	const {
		className, currentRecipe
	} = props;
	const {ingredients, id} = currentRecipe;
	const allProducts = useLiveQuery(() => db.products.toArray());
	const notUsedProducts = allProducts?.filter(ing => !ingredients.some(elem => elem.name === ing.name));

	const addToRecipe = async (product: IProduct) => {
		db.recipes.update(currentRecipe, {ingredients: [...currentRecipe.ingredients, product]});
	};

	return (
		<div className={classNames(className)}>
			{notUsedProducts?.map(item => <div onClick={() => addToRecipe(item)} key={item.id}>{item.name}</div>)}
		</div>
	);
});