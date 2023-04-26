import {Text} from '../../../shared/ui/Text/Text';
import {FormEvent, memo, useCallback} from 'react';
import {classNames} from '../../../shared/helpers/classNames/classNames';
import {Input} from '../../../shared/ui/Input/Input';
import cls from './AddNewProductForm.module.scss';
import {Button, ButtonBackground, ButtonVariants} from '../../../shared/ui/Button/Button';
import {newProductNameSelector} from '../model/selectors/newProductNameSelector';
import {newProductPriceSelector} from '../model/selectors/newProductPriceSelector';
import {newProductMetricSelector} from '../model/selectors/newProductMetricSelector';
import {newProductActions} from '../model/slice/newProductSlice';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {IProduct, Metrics} from '../../../store/types';
import {
	newProductPackAmountSelector
} from '../model/selectors/newProductPackAmountSelector';
import {addProductToDB} from '../model/services/addProductToDB';

interface AddNewProductFormProps {
	className?: string;
}

export const AddNewProductForm = memo(({className}: AddNewProductFormProps) => {
	const name = useAppSelector(newProductNameSelector);
	const price = useAppSelector(newProductPriceSelector);
	const metric = useAppSelector(newProductMetricSelector);
	const packAmount = useAppSelector(newProductPackAmountSelector);
	const dispatch = useAppDispatch();


	const onNameChange =  useCallback((e: FormEvent<HTMLInputElement>) => {
		dispatch(newProductActions.setProductName(e.currentTarget.value));
	}, [dispatch]);
	const onPriceChange =  useCallback((e: FormEvent<HTMLInputElement>) => {
		dispatch(newProductActions.setProductPrice(parseInt(e.currentTarget.value)));
	}, [dispatch]);
	const onMetricChange = useCallback((e: FormEvent<HTMLInputElement>) => {
		dispatch(newProductActions.setProductMetric(e.currentTarget.value as Metrics));
	}, [dispatch]);

	const onPackAmountChange = useCallback((e: FormEvent<HTMLInputElement>) => {
		dispatch(newProductActions.setProductAmountInOnePack(parseInt(e.currentTarget.value)));
	}, [dispatch]);

	const onAddNewProduct = useCallback(() => {
		if(name !== '' && price !== null) {
			const product: IProduct = {
				name,
				id: Date.now(),
				price,
				metric,
				amountInOnePack: packAmount,
				amountCurrent: 0,
				timesUsed: 0
			};
			dispatch(addProductToDB(product));
			dispatch(newProductActions.setDefaultValues());
		} else {
			alert('Введите корректные данные!');
		}
	}, [name, price, metric, packAmount, dispatch]);


	return (
		<div className={classNames(cls.AddNewProductForm, className)}>
			<Text title={'Добавить новый продукт'}/>
			<Text content={'Название продукта:'}/>
			<Input
				value={name}
				type="text"
				onChange={onNameChange}
				placeholder="Введите название продукта"
			/>
			<Text content={'Единицы измерения:'}/>
			<Input
				value={metric}
				type="text"
				onChange={onMetricChange}
				placeholder="Введите единицы измерения продукта"
			/>
			<Text content={'Цена за упаковку:'}/>
			<Input
				value={price || ''}
				onInput={onPriceChange}
				type="number"
				placeholder="Введите цену за упаковку"
			/>
			<Text content={'Количество в одной упаковке:'}/>
			<Input
				value={packAmount || ''}
				onChange={onPackAmountChange}
				type="number"
				placeholder="Введите rоличество в упаковке"
			/>
			<Button
				className={cls.button}
				variant={ButtonVariants.rounded}
				onClick={onAddNewProduct}
				background={ButtonBackground.green}>
				Сохранить
			</Button>
		</div>
	);
});
