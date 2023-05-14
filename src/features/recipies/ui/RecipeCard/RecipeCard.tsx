import {classNames} from '../../../../shared/helpers/classNames/classNames';
import cls from './RecipeCard.module.scss';
import {memo, useState} from 'react';
import {Text} from '../../../../shared/ui/Text/Text';
import {List} from '../../../../shared/ui/List/List';
import {IProduct} from '../../../../store/types';
import {Button, ButtonVariants} from '../../../../shared/ui/Button/Button';
import ProductDetaildCard from '../../../../entities/Products/ui/ProductDetaildCard/ProductDetaildCard';
import {finalPrice} from '../../../../shared/helpers/resultCalculationFunctions/calculationFunctions';
import {useAppDispatch, useAppSelector} from '../../../../store/hooks';
import {recipeActions} from '../../model/slice/recipeSlice';
import {getCurrentRecipe, getRecipeLoading} from '../../model/selectors/recipeSelectors';
import {IRecipe} from '../../../../entities/recipe';
import {LoadingSpinner} from '../../../../shared/ui/Loader/Loader';

interface RecipeCardProps {
	className?: string;
	recipe: IRecipe;
}

export const RecipeCard = memo((props: RecipeCardProps) => {
	const {
		className, recipe
	} = props;
	const dispatch = useAppDispatch();
	const [expanded, setExpanded] = useState(false);
	const currentRecipe = useAppSelector(getCurrentRecipe);
	const isLoading = useAppSelector(getRecipeLoading);

	const expandRecipe = () => {
		if (!expanded) {
			dispatch(recipeActions.setCurrentRecipe(recipe));
		} else {
			dispatch(recipeActions.clearCurrentRecipe());
		}
		setExpanded(prevState => !prevState);
	};
	const onChangeIngredient = (product: IProduct) => {
		dispatch(recipeActions.changeIngredient(product));
	};

	let expandedIngredients;
	if (currentRecipe && currentRecipe.ingredients) {
		expandedIngredients = currentRecipe.ingredients.map((ingredient) => (
			<ProductDetaildCard
				key={ingredient.id}
				product={ingredient}
				onChangeIngredient={onChangeIngredient}
			/>
		));
	}

	if (isLoading) {
		return <LoadingSpinner/>;
	}
	return (
		<div className={classNames(cls.RecipeCard, className)}>
			<div className={cls.cardHeader}>
				<Text title={recipe.recipeName}/>
				<Text content={finalPrice(currentRecipe?.ingredients || recipe.ingredients).toFixed(2) || ''}/>
				<Button onClick={expandRecipe}
					variant={ButtonVariants.rounded}>{expanded ? 'Свернуть' : 'Развернуть'}
				</Button>
			</div>
			{
				expanded
					? expandedIngredients
					: <List<IProduct> content={recipe.ingredients || []}/>
			}
			<hr className={cls.separator}/>
		</div>
	);
});