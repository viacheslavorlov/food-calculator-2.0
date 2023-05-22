import {classNames} from 'shared/helpers/classNames/classNames';
import cls from './RecipeCard.module.scss';
import {memo, Suspense, useCallback, useMemo, useState} from 'react';
import {Text} from 'shared/ui/Text/Text';
import {List} from 'shared/ui/List/List';
import {IProduct} from 'store/types';
import {Button, ButtonVariants} from 'shared/ui/Button/Button';
import {IRecipe} from 'entities/recipe';
import {LoadingSpinner} from 'shared/ui/Loader/Loader';
import ProductDetaildCard from 'entities/Products/ui/ProductDetaildCard/ProductDetaildCard';
import {finalPrice} from 'shared/helpers/resultCalculationFunctions/calculationFunctions';
import {db} from 'db/db';
import {Link, useNavigate} from 'react-router-dom';
import {useLiveQuery} from 'dexie-react-hooks';

interface RecipeCardProps {
	className?: string;
	recipe?: IRecipe;
	expanded: boolean;
}

export const RecipeCard = memo((props: RecipeCardProps) => {
	const {
		className, recipe, expanded = false
	} = props;

	const memoizedRecipe = useMemo(() => recipe, [recipe]);

	const onChangeIngredient = useCallback(async (product: IProduct) => {
		await db.recipes.update(memoizedRecipe?.id || 0, {ingredients: memoizedRecipe?.ingredients.map(ing => {
			if (ing.id !== product.id) {
				return ing;
			} else {
				return product;
			}
		})});
	}, [memoizedRecipe]);

	let expandedIngredients;
	if (memoizedRecipe?.ingredients) {
		expandedIngredients = memoizedRecipe.ingredients.map((ingredient) => (
			<ProductDetaildCard
				key={ingredient.id}
				product={ingredient}
				onChangeIngredient={onChangeIngredient}
			/>
		));
	}

	return (
		<div className={classNames(cls.RecipeCard, className)}>
			<Suspense fallback={<LoadingSpinner/>}>
				<div className={cls.cardHeader}>
					<Text title={memoizedRecipe?.recipeName}/>
					<Text content={finalPrice(memoizedRecipe?.ingredients).toFixed(2) || ''}/>
					<Link to={expanded ? '/recipes' : `/recipes/${memoizedRecipe?.id}`}>
						<Button
							variant={ButtonVariants.rounded}>{expanded ? 'Назад' : 'Открыть'}
						</Button>
					</Link>
				</div>
				{
					expanded
						? expandedIngredients
						: <List<IProduct> content={memoizedRecipe?.ingredients || []}/>
				}
				<hr className={cls.separator}/>
			</Suspense>
		</div>
	);
});