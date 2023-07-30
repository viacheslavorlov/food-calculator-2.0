import {ChangeEvent, memo, useCallback, useState} from 'react';
import {classNames} from 'shared/helpers/classNames/classNames';
import {Button, ButtonBackground, ButtonVariants} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';
import {Line} from 'shared/ui/Line/Line';
import {HStack, VStack} from 'shared/ui/Stack';
import {Text} from 'shared/ui/Text/Text';
import {IProduct} from 'store/types';
import cls from './ProductDetaildCard.module.scss';

interface ProductDetaildCardProps {
	item: IProduct;
	onDeleteProduct: (id: number) => void,
	onChangeIngredient: (item: IProduct) => void
	className?: string
}

export const ProductDetaildCard = memo(({item, onDeleteProduct, onChangeIngredient}: ProductDetaildCardProps) => {
	const {
		id,
		metric,
		name,
		price,
		amountInOnePack,
		amountCurrent = 0,
	} = item;

	const [productPrice, setProductPrice] = useState<number>(price || 0);
	const [productCurrentAmount, setProductCurrentAmount] = useState<number>(amountCurrent || 0);
	const [productAmountInOnePack, setProductAmountInOnePack] = useState<number>(amountInOnePack || 0);

	const onPriceChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		if (!Number.isNaN(value)) {
			if (value === 0) {
				setProductPrice(0);
			}
			if (value > 0) {
				setProductPrice(value);
			}
			if (onChangeIngredient) {
				onChangeIngredient({
					...item,
					[e.target.name]: value,
					amountCurrent: productCurrentAmount,
					amountInOnePack: productAmountInOnePack,
				});
			}
		}
	}, [onChangeIngredient, item, productAmountInOnePack, productCurrentAmount]);

	const onPackAmountChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		if (!Number.isNaN(value)) {
			if (value === 0) {
				setProductAmountInOnePack(0);
			}
			if (value > 0) {
				setProductAmountInOnePack(value);
			}
			if (onChangeIngredient) {
				onChangeIngredient({
					...item,
					[e.target.name]: value,
					amountCurrent: productCurrentAmount,
					price: productPrice
				});
			}
		}
	}, [onChangeIngredient, item, productCurrentAmount, productPrice]);


	const onCurrentAmountChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		if (!Number.isNaN(value)) {
			if (value === 0) {
				setProductCurrentAmount(0);
			}
			if (value > 0) {
				setProductCurrentAmount(value);
			}
			if (onChangeIngredient) {
				onChangeIngredient({
					...item,
					amountCurrent: value,
					amountInOnePack: productAmountInOnePack,
					price: productPrice
				});
			}
		}
	}, [onChangeIngredient, item, productAmountInOnePack, productPrice]);

	return (
		<VStack max gap={'4'} justify={'center'} align={'center'} className={classNames(cls.ProductDetaildCard)}>
			<div className={cls.inputBlock}>
				<Text className={cls.space} title={name}/>
			</div>
			<HStack gap={'8'} max>
				<Text className={cls.text} content="Цена: "/>
				<Line width={'30vw'}/>
				<Input
					className={cls.input}
					value={productPrice}
					onChange={onPriceChangeHandler} name="price"/>
			</HStack>
			<HStack gap={'8'} max>
				<Text className={cls.text} content="В упаковке: "/>
				<Line width={'30vw'}/>
				<Input
					className={cls.input}
					onChange={onPackAmountChangeHandler}
					value={productAmountInOnePack} name="amountInOnePack"/>
			</HStack>
			<HStack gap={'8'} max>
				<Text content="Израсходовано: "/>
				<Line width={'30vw'}/>
				<Input
					className={cls.input}
					placeholder={`... ${metric} израсходовано`}
					value={productCurrentAmount || ''}
					onChange={onCurrentAmountChangeHandler}
					name="amountCurrent"
				/>
			</HStack>
			<HStack max className={cls.inputBlock}>
				<Button
					className={cls.deleteBtn}
					variant={ButtonVariants.rounded}
					background={ButtonBackground.red}
					onClick={() => onDeleteProduct(id)}
				>
					Удалить
				</Button>
			</HStack>
		</VStack>
	);
});