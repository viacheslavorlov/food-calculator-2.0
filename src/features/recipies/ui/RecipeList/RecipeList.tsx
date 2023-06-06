import {IRecipe} from 'entities/recipe';
import {memo,} from 'react';
import {classNames} from 'shared/helpers/classNames/classNames';
import {Text} from 'shared/ui/Text/Text';
import {RecipeCard} from '../RecipeCard/RecipeCard';
import cls from './RecipeList.module.scss';
import {GroupTransition} from 'shared/ui/GroupTransition/GroupTransition';

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
			<GroupTransition
				data={recipes.map((recipe) => <RecipeCard key={recipe.id} expanded={false} recipe={recipe}/>)}
				keys={recipes.map((recipe) => recipe.id)}
			/>
		</div>
	);
});