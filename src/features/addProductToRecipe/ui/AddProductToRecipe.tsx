import {db} from 'db/db';
import {useLiveQuery} from 'dexie-react-hooks';
import {IRecipe} from 'entities/recipe';
import {memo, useState} from 'react';
import {classNames} from 'shared/helpers/classNames/classNames';
import {IProduct} from 'store/types';
import cls from './AddProductsToRecipe.module.scss';
import {HStack} from 'shared/ui/Stack';

interface AddProductToRecipeProps {
	className?: string;
	currentRecipe: IRecipe;
}

export const AddProductToRecipe = memo((props: AddProductToRecipeProps) => {
	const {
		className, currentRecipe
	} = props;
	const [isModal, setIsModal] = useState<boolean>(false);
	const {ingredients} = currentRecipe;
	const ingredientsIds = ingredients.map(ingredient => ingredient.id);
	const allProducts = useLiveQuery(() => db.products.toArray());
	const notUsedProducts = allProducts?.filter(item => !ingredientsIds.includes(item.id));

	const addToRecipe = async (product: IProduct) => {
		db.recipes.update(currentRecipe, {ingredients: [...currentRecipe.ingredients, product]});
	};

	return (
		<HStack className={classNames(className, cls.AddProductsToRecipe)}>
			{notUsedProducts?.map(item => (
				<div
					className={cls.card}
					onClick={() => addToRecipe(item)}
					key={item.id}
				>
					{item.name}
				</div>
			))}
		</HStack>
	);
});