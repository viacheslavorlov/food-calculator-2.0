import {classNames} from 'shared/helpers/classNames/classNames';
import cls from './CreateRecipeForm.module.scss';
import {ChangeEvent, memo, useState} from 'react';
import {Input} from 'shared/ui/Input/Input';
import {Text} from 'shared/ui/Text/Text';
import {IRecipe} from 'entities/recipe';
import {Button, ButtonVariants} from 'shared/ui/Button/Button';
import {db} from 'db/db';
import {useLiveQuery} from 'dexie-react-hooks';
import {AStack} from 'shared/ui/Stack/AdaptiveStack/AStack';

interface CreateRecipeFormProps {
	className?: string;
}

export const CreateRecipeForm = memo((props: CreateRecipeFormProps) => {
	const {
		className
	} = props;
	const [recipeName, setRecipeName] = useState('');
	const ingredients =  useLiveQuery(async () => db.activeProducts.toArray());

	const onInputHandler = () => (e: ChangeEvent<HTMLInputElement>) => {
		setRecipeName(e.target.value);
	};
	const newRecipe: IRecipe = {
		id: Date.now(),
		ingredients: ingredients || [],
		recipeName,
		timesUsed: 0
	};

	const createRecipe = async () => {
		try {
			await db.recipes.add(newRecipe);
		} catch (e) {
			alert('Рецепт не был добавлен');
		}
	};

	const onCreateRecipe = () => {
		const unUsedItems = newRecipe
			.ingredients
			.some(ingredient => ingredient.amountCurrent === 0);

		if (!unUsedItems) {
			createRecipe();
			setRecipeName('');
		} else {
			alert('не все включенные в рецепт ингредиенты используются:' +
				' укажите количество каждого используемого продукта и удалите ненужные');
		}
	};

	return (
		<AStack max gap={'8'} className={classNames(cls.CreateRecipeForm, className)}>
			<Text content={'Сохранить рецепт: '}/>
			<Input placeholder={'Название рецепта'} value={recipeName} onChange={onInputHandler()}/>
			<Button variant={ButtonVariants.rounded} onClick={onCreateRecipe}>
				Создать
			</Button>
		</AStack>
	);
});