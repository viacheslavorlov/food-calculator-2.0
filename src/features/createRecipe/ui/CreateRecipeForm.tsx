import {classNames} from 'shared/helpers/classNames/classNames';
import cls from './CreateRecipeForm.module.scss';
import {ChangeEvent, memo, useCallback, useState} from 'react';
import {Input} from 'shared/ui/Input/Input';
import {Text} from 'shared/ui/Text/Text';
import {IRecipe} from 'entities/recipe';
import {Button, ButtonVariants} from 'shared/ui/Button/Button';
import {db} from 'db/db';
import {useLiveQuery} from 'dexie-react-hooks';
import {AStack} from 'shared/ui/Stack/AdaptiveStack/AStack';
import {Modal} from 'shared/ui/Modal/ui/Modal';

interface CreateRecipeFormProps {
	className?: string;
}

export const CreateRecipeForm = memo((props: CreateRecipeFormProps) => {
	const {
		className
	} = props;
	const [recipeName, setRecipeName] = useState('');
	const [isModal, setIsModal] = useState(false);
	const [message, setMessage] = useState('');
	const ingredients = useLiveQuery(async () => db.activeProducts.toArray());

	const recipes = useLiveQuery(() => db.recipes.toArray());
	const recipeExistsAlready = recipes?.some(recipe => recipe.recipeName === recipeName);

	const onInputHandler = useCallback(() => (e: ChangeEvent<HTMLInputElement>) => {
		setRecipeName(e.target.value);
	}, []);
	const newRecipe: IRecipe = {
		id: Date.now(),
		ingredients: ingredients || [],
		recipeName,
		timesUsed: 0
	};

	const onCloseModal = useCallback(() => {
		setIsModal(false);
	}, []);

	const createRecipe = async () => {
		try {
			await db.recipes.add(newRecipe);
			setMessage('Рецепт добавлен!');
			setIsModal(true);
		} catch (e) {
			setMessage('Рецепт не был добавлен');
			setIsModal(true);
		}
	};

	const onCreateRecipe = () => {
		if (!ingredients || !ingredients.length) {
			setMessage('Не выбрано ни одного продукта для рецепта');
			setIsModal(true);
			return;
		}
		const unUsedItems = newRecipe
			.ingredients
			.some(ingredient => ingredient.amountCurrent === 0);

		if (!unUsedItems && recipeName && !recipeExistsAlready) {
			setMessage('Рецепт добавлен');
			createRecipe();
			setRecipeName('');
		} else if (!recipeName) {
			setMessage('Не выбрано название рецепта');
			setIsModal(true);
			return;
		} else if (recipeExistsAlready) {
			setMessage('');
			setIsModal(true);
			return;
		} else {
			setMessage(
				'Рецепт не был добавлен!' +
				' Не все включенные в рецепт ингредиенты используются: укажите количество каждого используемого продукта и удалите ненужные'
			);
			setIsModal(true);
		}
	};

	return (
		<AStack max gap={'8'} className={classNames(cls.CreateRecipeForm, className)}>
			{isModal && <Modal closeModal={onCloseModal} autoCloseTimer={2000} autoClose visible={isModal}>{message}</Modal>}
			<Text content={'Сохранить рецепт: '}/>
			<Input placeholder={'Название рецепта'} value={recipeName} onChange={onInputHandler()}/>
			<Button variant={ButtonVariants.rounded} onClick={onCreateRecipe}>
				Создать
			</Button>
		</AStack>
	);
});
