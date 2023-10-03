import {db} from 'db/db';
import {ProductDetaildCard, ResultValue} from 'entities/Products';
import {IRecipe} from 'entities/recipe';
import {memo, Suspense, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {classNames} from 'shared/helpers/classNames/classNames';
import {Button, ButtonBackground, ButtonVariants} from 'shared/ui/Button/Button';
import {List} from 'shared/ui/List/List';
import {LoadingSpinner} from 'shared/ui/Loader/Loader';
import {Text} from 'shared/ui/Text/Text';
import {IProduct} from 'store/types';
import cls from './RecipeCard.module.scss';
import {GroupTransition} from 'shared/ui/animations/GroupTransition/GroupTransition';
import {AStack} from 'shared/ui/Stack/AdaptiveStack/AStack';
import {HStack, VStack} from 'shared/ui/Stack';
import {Link} from 'shared/ui/Link/Link';

interface RecipeCardProps {
	className?: string;
	recipe: IRecipe;
	expanded: boolean;
}

export const RecipeCard = memo((props: RecipeCardProps) => {
	const {
		className, recipe, expanded = false
	} = props;

	const navigate = useNavigate();

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

	const onDeleteRecipe = (id: number) => {
		db.recipes.delete(id);
		navigate(-1);
	};

	let expandedIngredients;
	if (recipe.ingredients) {
		expandedIngredients = recipe.ingredients.map((ingredient) => (
			<ProductDetaildCard
				onDeleteProduct={onDeleteProduct}
				onChangeIngredient={onChangeIngredient}
				key={ingredient.id}
				item={ingredient}
			/>
		));
	}

	return (
		<Suspense fallback={<LoadingSpinner/>}>
			<VStack className={classNames(cls.RecipeCard, className)}>
				<Text title={`Рецепт: ${recipe.recipeName}`} className={cls.recipeName}/>
				<AStack gap={'8'} max justify="center" align="center" className={cls.cardHeader}>
					<ResultValue list={recipe.ingredients}/>
					<HStack gap={'4'}>
						{
							expanded && <Button
								onClick={() => onDeleteRecipe(recipe.id)}
								variant={ButtonVariants.rounded}
								background={ButtonBackground.red}
							>
								Удалить
							</Button>
						}
						<Link className={cls.linkTransparent} to={expanded ? '/recipes' : `/recipes/${recipe.id}`}>
							<Button
								className={cls.backButton}
								variant={ButtonVariants.rounded}>{expanded ? 'Назад' : 'Открыть'}
							</Button>
						</Link>
					</HStack>
				</AStack>
				{expanded
					? <GroupTransition keys={recipe.ingredients.map(el => el.id)} data={expandedIngredients}/>
					: <List<IProduct> content={recipe.ingredients || []}/>}
				<hr className={cls.separator}/>
			</VStack>
		</Suspense>
	);
});
