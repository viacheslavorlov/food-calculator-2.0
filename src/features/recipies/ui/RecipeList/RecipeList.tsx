import {classNames} from '../../../../shared/helpers/classNames/classNames';
import cls from './RecipeList.module.scss';
import {memo, ReactNode} from 'react';

interface RecipeCardProps {
	className?: string;
}

export const RecipeList = memo((props: RecipeCardProps) => {
	const {
		className
	} = props;
	
	let content: ReactNode;

	// if (isLoading) {
	// 	return (
	// 		<div className={classNames(cls.RecipeList, className)}>
	// 			<LoadingPage/>
	// 		</div>);
	// }
	//
	// if (!allRecipes) {
	// 	content = <Text title={'Рецепты не найдены'}/>;
	// } else if (!isLoading) {
	// 	content = allRecipes.map(recipe => <RecipeCard
	// 		key={recipe.recipeName}
	// 		recipe={recipe}
	// 	/>);
	// }
	// if (isError) {
	// 	return <Text title={'Ошибка при загрузке рецептов'}/>;
	// }

	return (
		<div className={classNames(cls.RecipeList, className)}>
			{content}
		</div>
	);
});