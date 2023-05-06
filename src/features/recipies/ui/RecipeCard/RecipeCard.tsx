import {classNames} from '../../../../shared/helpers/classNames/classNames';
import cls from './RecipeCard.module.scss';
import {memo, useState} from 'react';
import {Text} from '../../../../shared/ui/Text/Text';
import {List} from '../../../../shared/ui/List/List';
import {IProduct} from '../../../../store/types';
import {Button, ButtonVariants} from '../../../../shared/ui/Button/Button';
import ProductDetaildCard from '../../../../entities/Products/ui/ProductDetaildCard/ProductDetaildCard';
import {finalPrice} from '../../../../shared/helpers/resultCalculationFunctions/calculationFunctions';
import {useGetRecipeByIdQuery} from '../../model/service/recipesApi';
import {IRecipe} from '../../../../entities/recipe/type/recipeType';

interface RecipeCardProps {
	className?: string;
	recipe: IRecipe;
}

export const RecipeCard = memo((props: RecipeCardProps) => {
	const {
		className,
		recipe
	} = props;
	const [expanded, setExpanded] = useState(false);
	const {data, isLoading, isError} = useGetRecipeByIdQuery(recipe.id);

	const expandRecipe = () => {
		setExpanded(prevState => !prevState);
	};

	let expandedIngredients;
	if (data?.ingredients) {
		expandedIngredients = data.ingredients.map((ingredient) => (
			<ProductDetaildCard
				key={ingredient.id}
				name={ingredient.name}
				price={ingredient.price}
				amountInOnePack={ingredient.amountInOnePack}
				metric={ingredient.metric}
				amountCurrent={ingredient.amountCurrent}
				id={ingredient.id}
				timesUsed={ingredient.timesUsed}
			/>
		));
	}

	return (
		<div className={classNames(cls.RecipeCard, className)}>
			<div className={cls.cardHeader}>
				<Text title={recipe.recipeName}/>
				<Text content={finalPrice(data?.ingredients).toFixed(2) || ''}/>
				<Button onClick={expandRecipe}
					variant={ButtonVariants.rounded}>{expanded ? 'Свернуть' : 'Развернуть'}</Button>
			</div>
			{
				expanded
					? expandedIngredients
					: <List<IProduct> content={data?.ingredients || []}/>
			}
			<hr className={cls.separator}/>
		</div>
	);
});