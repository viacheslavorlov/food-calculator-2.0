import {classNames} from 'shared/helpers/classNames/classNames';
import cls from './RecipeList.module.scss';
import {memo,} from 'react';
import {Text} from 'shared/ui/Text/Text';
import {RecipeCard} from '../RecipeCard/RecipeCard';
import {IRecipe} from 'entities/recipe';

interface RecipeCardProps {
	className?: string;
	recipes?: IRecipe[];
}

export const RecipeList = memo((props: RecipeCardProps) => {
	const {
		className, recipes
	} = props;


	if (!recipes) {
		return <Text title={'Рецепты не найдены'}/>;
	}

	return (
		<div className={classNames(cls.RecipeList, className)}>
			{recipes.map((recipe) => <RecipeCard expanded={false} key={recipe.id} recipe={recipe} />)}
		</div>
	);
});