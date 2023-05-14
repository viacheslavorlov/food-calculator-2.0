import {classNames} from '../../../shared/helpers/classNames/classNames';
import cls from './CreateRecipeForm.module.scss';
import {ChangeEvent, memo, useState} from 'react';
import {useAppSelector} from '../../../store/hooks';
import {getActiveProductsSelector} from '../../../entities/Products/model/selectors/getActiveProductsSelector';
import {HStack} from '../../../shared/ui/Stack';
import {Input} from '../../../shared/ui/Input/Input';
import {Text} from '../../../shared/ui/Text/Text';
import {useCreateRecipeMutation} from '../model/createRecipeApi';
import {IRecipe} from '../../../entities/recipe';
import {Button, ButtonVariants} from '../../../shared/ui/Button/Button';

interface CreateRecipeFormProps {
	className?: string;
}

export const CreateRecipeForm = memo((props: CreateRecipeFormProps) => {
	const {
		className
	} = props;
	const [recipeName, setRecipeName] = useState('');

	const onInputHandler = () => (e: ChangeEvent<HTMLInputElement>) => {
		setRecipeName(e.target.value);
	};
	const newRecipe: IRecipe = {
		id: Date.now(),
		ingredients: [],
		recipeName,
		timesUsed: 0
	};

	const onCreateRecipe = () => {
		const unUsedItems = newRecipe
			.ingredients
			.some(ingredient => ingredient.amountCurrent === 0);

		if (!unUsedItems) {
			// createRecipe(newRecipe);
			setRecipeName('');
		} else {
			alert('не все включенные в рецепт ингредиенты используются:' +
				' укажите количество каждого используемого продукта и удалите ненужные');
		}
	};

	return (
		<HStack className={classNames(cls.CreateRecipeForm, className)}>
			<Text content={'Сохранить рецепт: '}/>
			<Input placeholder={'Название рецепта'} value={recipeName} onChange={onInputHandler()}/>
			<Button variant={ButtonVariants.rounded} onClick={onCreateRecipe}>
				Создать
			</Button>
		</HStack>
	);
});