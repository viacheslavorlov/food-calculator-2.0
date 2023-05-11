import {classNames} from '../../../../shared/helpers/classNames/classNames';
import cls from './RecipeList.module.scss';
import {memo, ReactNode} from 'react';
import {useGetAllRecipesQuery} from '../../model/service/recipesApi';
import {Text} from '../../../../shared/ui/Text/Text';
import {RecipeCard} from '../RecipeCard/RecipeCard';
import {LoadingPage} from '../../../../pages';

interface RecipeCardProps {
	className?: string;
}

export const RecipeList = memo((props: RecipeCardProps) => {
	const {
		className
	} = props;
	const {data, isLoading, isError} = useGetAllRecipesQuery();

	let content: ReactNode;

	if (isLoading) {
		return (
			<div className={classNames(cls.RecipeList, className)}>
				<LoadingPage/>
			</div>);
	}

	if (!data) {
		content = <Text title={'Рецепты не найдены'}/>;
	} else {
		content = data.map(recipe => <RecipeCard key={recipe.recipeName} recipe={recipe}/>);
	}
	if (isError) {
		return <Text title={'Ошибка при загрузке рецептов'} />;
	}

	return (
		<div className={classNames(cls.RecipeList, className)}>
			{content}
		</div>
	);
});