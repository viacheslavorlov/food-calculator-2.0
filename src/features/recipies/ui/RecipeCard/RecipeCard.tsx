import {classNames} from '../../../../shared/helpers/classNames/classNames';
import cls from './RecipeCard.module.scss';
import {memo, Suspense, useState} from 'react';
import {Text} from '../../../../shared/ui/Text/Text';
import {List} from '../../../../shared/ui/List/List';
import {IProduct} from '../../../../store/types';
import {Button, ButtonVariants} from '../../../../shared/ui/Button/Button';
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
	const [expanded, setExpanded] = useState(false);


	const expandRecipe = () => {
		if (!expanded) {

			setExpanded(prevState => !prevState);
		}
	};
	const onChangeIngredient = (product: IProduct) => {
		// dispatch(recipeActions.changeIngredient(product));
	};

	let expandedIngredients;
	// if (currentRecipe && currentRecipe.ingredients) {
	// 	expandedIngredients = currentRecipe.ingredients.map((ingredient) => (
	// 		<ProductDetaildCard
	// 			key={ingredient.id}
	// 			product={ingredient}
	// 			onChangeIngredient={onChangeIngredient}
	// 		/>
	// 	));
	// }
	//
	// if (isLoading) {
	// 	return <LoadingSpinner/>;
	// }
	return (
		<div className={classNames(cls.RecipeCard, className)}>
			<Suspense fallback={<LoadingSpinner/>}>
				<div className={cls.cardHeader}>
					<Text title={recipe.recipeName}/>
					{/*<Text content={finalPrice(currentRecipe?.ingredients || recipe.ingredients).toFixed(2) || ''}/>*/}
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
			</Suspense>
		</div>
	);
});