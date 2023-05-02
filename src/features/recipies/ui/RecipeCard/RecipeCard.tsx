import {classNames} from '../../../../shared/helpers/classNames/classNames';
import cls from './RecipeCard.module.scss';
import {memo} from 'react';
import {IRecipe} from '../../model/type/RecipeShema';
import {Text} from '../../../../shared/ui/Text/Text';

interface RecipeCardProps {
	className?: string;
	recipe: IRecipe;
}

export const RecipeCard = memo((props: RecipeCardProps) => {
	const {
		className,
		recipe
	} = props;
	const {recipeName, id, ingredients} = recipe;

	return (
		<div className={classNames(cls.RecipeCard, className)}>
			<Text title={recipeName} />

		</div>
	);
});