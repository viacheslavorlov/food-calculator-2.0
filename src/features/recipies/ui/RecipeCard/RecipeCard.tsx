import {db} from 'db/db';
import ProductDetaildCard from 'entities/Products/ui/ProductDetaildCard/ProductDetaildCard';
import {IRecipe} from 'entities/recipe';
import {memo, Suspense, useCallback} from 'react';
import {Link} from 'react-router-dom';
import {classNames} from 'shared/helpers/classNames/classNames';
import {finalPrice} from 'shared/helpers/resultCalculationFunctions/calculationFunctions';
import {Button, ButtonVariants} from 'shared/ui/Button/Button';
import {List} from 'shared/ui/List/List';
import {LoadingSpinner} from 'shared/ui/Loader/Loader';
import {HStack} from 'shared/ui/Stack';
import {Text} from 'shared/ui/Text/Text';
import {IProduct} from 'store/types';
import cls from './RecipeCard.module.scss';

interface RecipeCardProps {
    className?: string;
    recipe: IRecipe;
    expanded: boolean;
}

export const RecipeCard = memo((props: RecipeCardProps) => {
	const {
		className, recipe, expanded = false
	} = props;

	const onChangeIngredient = useCallback(async (product: IProduct) => {
		await db.recipes.update(recipe.id, {
			ingredients: recipe.ingredients.map(ing => {
				if (ing.id !== product.id) {
					return ing;
				} else {
					return product;
				}
			})
		});
	}, [recipe]);

	const onDeleteProduct = useCallback(async (id: number) => {
		const newRecipeIngredients = recipe.ingredients.filter(ingr => ingr.id !== id);
		const newRecipe = {...recipe, ingredients: newRecipeIngredients};
		await db.recipes
			.put(newRecipe as IRecipe);
	}, [recipe]);

	let expandedIngredients;
	if (recipe.ingredients) {
		expandedIngredients = recipe.ingredients.map((ingredient) => (
			<ProductDetaildCard
				functions={{onDeleteProduct, onChangeIngredient}}
				key={ingredient.id}
				item={ingredient}
			/>
		));
	}

	return (
		<div className={classNames(cls.RecipeCard, className)}>
			<Suspense fallback={<LoadingSpinner/>}>
				<HStack max justify="center" align="center" className={cls.cardHeader}>
					<Text title={recipe.recipeName}/>
					<Text content={`Стоимость ${finalPrice(recipe.ingredients).toFixed(2)}` || ''}/>
					<Link to={expanded ? '/recipes' : `/recipes/${recipe.id}`}>
						<Button
							variant={ButtonVariants.rounded}>{expanded ? 'Назад' : 'Открыть'}
						</Button>
					</Link>
				</HStack>
				{
					expanded
						? expandedIngredients
						: <List<IProduct> content={recipe.ingredients || []}/>
				}
				<hr className={cls.separator}/>
			</Suspense>
		</div>
	);
});