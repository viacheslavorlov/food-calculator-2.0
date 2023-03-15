import {Text} from '../../../../shared/Text/Text';
import {FormEvent, memo, useCallback} from 'react';
import {classNames} from '../../../../../helpers/classNames';
import {Input} from '../../../../shared/Input/Input';
import cls from './AddNewProductForm.module.scss';
import {Button, ButtonBackground, ButtonVariants} from '../../../../shared/Button/Button';
import {newProductNameSelector} from '../../../../../store/newProductSlice/selectors/newProductNameSelector';
import {newProductPriceSelector} from '../../../../../store/newProductSlice/selectors/newProductPriceSelector';
import {newProductMetricSelector} from '../../../../../store/newProductSlice/selectors/newProductMetricSelector';
import {newProductActions} from '../../../../../store/newProductSlice/newProductSlice';
import {useAppDispatch, useAppSelector} from '../../../../../store/hooks';
import {IProduct, Metrics} from '../../../../../store/types';
import {
	newProductPackAmountSelector
} from '../../../../../store/newProductSlice/selectors/newProductPackAmountSelector';
import {addProductToDB} from '../../../../../store/newProductSlice/services/addProductToDB';

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
				amountCurrent: 0
			};
			// dispatch(productsActions.addNewProduct(product));
			dispatch(newProductActions.setDefaultValues());
			dispatch(addProductToDB(product));
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
