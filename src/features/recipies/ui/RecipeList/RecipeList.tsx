import {classNames} from '../../../../shared/helpers/classNames/classNames';
import cls from './RecipeList.module.scss';
import {memo, ReactNode, useEffect} from 'react';
import {Text} from '../../../../shared/ui/Text/Text';
import {LoadingPage} from '../../../../pages';
import {RecipeCard} from '../RecipeCard/RecipeCard';
import {useAppDispatch, useAppSelector} from '../../../../store/hooks';
import {fetchRecipes} from '../../model/service/fetchRecipes';
import {getAllRecipe, getRecipeError, getRecipeLoading} from '../../model/selectors/recipeSelectors';

interface RecipeCardProps {
	className?: string;
}

export const RecipeList = memo((props: RecipeCardProps) => {
	const {
		className
	} = props;
	const dispatch = useAppDispatch();
	const fetchAllRecipes = () => {
		dispatch(fetchRecipes());
	};
	const allRecipes = useAppSelector(getAllRecipe);
	const isLoading = useAppSelector(getRecipeLoading);
	const isError = useAppSelector(getRecipeError);

	useEffect(() => {
		fetchAllRecipes();
	}, []);
	let content: ReactNode;

	if (isLoading) {
		return (
			<div className={classNames(cls.RecipeList, className)}>
				<LoadingPage/>
			</div>);
	}

	if (!allRecipes) {
		content = <Text title={'Рецепты не найдены'}/>;
	} else if (!isLoading) {
		content = allRecipes.map(recipe => <RecipeCard
			key={recipe.recipeName}
			recipe={recipe}
		/>);
	}
	if (isError) {
		return <Text title={'Ошибка при загрузке рецептов'}/>;
	}

	return (
		<div className={classNames(cls.RecipeList, className)}>
			{content}
		</div>
	);
});