import {Text} from '../../../shared/ui/Text/Text';
import {FormEvent, memo, useState} from 'react';
import {classNames} from '../../../shared/helpers/classNames/classNames';
import {Input} from '../../../shared/ui/Input/Input';
import cls from './AddNewProductForm.module.scss';
import {db} from '../../../db/db';
import {Button, ButtonBackground, ButtonVariants} from '../../../shared/ui/Button/Button';
import {IProduct, Metrics} from '../../../store/types';
import {HStack} from '../../../shared/ui/Stack';
import {GetProductsDexieTest} from './GetProductsDexieTest/GetProductsDexieTest';

interface AddNewProductFormProps {
	className?: string;
}

export const AddNewProductForm = memo(({className}: AddNewProductFormProps) => {
	const [name, setName] = useState('');
	const [metric, setMetric] = useState('');
	const [price, setPrice] = useState(0);
	const [amountInOnePack, setAmountInOnePack] = useState(0);

	const onNameChange = (e: FormEvent<HTMLInputElement>) => {
		setName(e.currentTarget.value);
	};
	const onPriceChange = (e: FormEvent<HTMLInputElement>) => {
		setPrice(parseInt(e.currentTarget.value));
	};
	const onMetricChange = (e: FormEvent<HTMLInputElement>) => {
		setMetric(e.currentTarget.value as Metrics);
	};

	const onPackAmountChange = (e: FormEvent<HTMLInputElement>) => {
		setAmountInOnePack(parseInt(e.currentTarget.value));
	};

	async function onAddNewProduct() {
		try {
			if (name && price && metric && amountInOnePack) {
				const product: IProduct = {
					name,
					id: Date.now(),
					price,
					metric,
					amountInOnePack,
					amountCurrent: 0,
					timesUsed: 0
				};

				const response = await db.products.add(product);
			} else {
				alert('Введите корректные данные!');
			}
		} catch (e) {
			console.log(e);
		}

	}


	return (
		<div className={classNames(cls.AddNewProductForm, className)}>
			<Text className={cls.text} title={'Добавить новый продукт'}/>
			<HStack max justify={'between'} className={cls.wrap}>
				<Text className={cls.text} content={'Название продукта:'}/>
				<Input
					className={cls.input}
					value={name}
					type="text"
					onChange={onNameChange}
					placeholder="Введите название продукта"
				/>
			</HStack>

			<Text className={cls.text} content={'Единицы измерения:'}/>
			<Input
				className={cls.input}
				value={metric}
				type="text"
				onChange={onMetricChange}
				placeholder="Введите единицы измерения продукта"
			/>
			<Text className={cls.text} content={'Цена за упаковку:'}/>
			<Input
				className={cls.input}
				value={price || ''}
				onInput={onPriceChange}
				type="number"
				placeholder="Введите цену за упаковку"
			/>
			<Text className={cls.text} content={'Количество в одной упаковке:'}/>
			<Input
				className={cls.input}
				value={amountInOnePack || ''}
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

			<GetProductsDexieTest/>
		</div>
	);
});
