import {classNames} from '../../../../shared/helpers/classNames/classNames';
import cls from './RecipeList.module.scss';
import {memo, ReactNode} from 'react';
import {useGetAllRecipesQuery} from '../../model/service/fetchAllRecipes';
import {Text} from '../../../../shared/ui/Text/Text';
import ProductDetaildCard from '../../../../entities/Products/ui/ProductDetaildCard/ProductDetaildCard';

interface RecipeCardProps {
	className?: string;
}

export const RecipeList = memo((props: RecipeCardProps) => {
	const {
		className
	} = props;
	const {data, isLoading, isError} = useGetAllRecipesQuery();

	let content: ReactNode;

	if (!data) {
		content = <Text title={'Рецепты не найдены'}/>;
	} else {
		content = data.map(recipe => <ProductDetaildCard />);
	}

	return (
		<div className={classNames(cls.RecipeCard, className)}>
			{content}
		</div>
	);
});