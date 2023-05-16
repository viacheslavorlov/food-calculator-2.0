import {ChangeEvent, memo, useState} from 'react';
import cls from './ProductDetaildCard.module.scss';
import {Text} from '../../../../shared/ui/Text/Text';
import {Input} from '../../../../shared/ui/Input/Input';
import {calculatePriceOfProduct} from '../../../../shared/helpers/resultCalculationFunctions/calculationFunctions';
import {Button, ButtonBackground, ButtonVariants} from '../../../../shared/ui/Button/Button';
import {IProduct} from '../../../../store/types';
import {classNames} from '../../../../shared/helpers/classNames/classNames';
import {AppearAnimation} from '../../../../shared/ui/ApearAnimation/AppearAnimation';
import {db} from '../../../../db/db';
import {HStack, VStack} from '../../../../shared/ui/Stack';
import {Line} from '../../../../shared/ui/Line/Line';

interface ProductDetaildCardProps {
	product: IProduct;
	onChangeIngredient?: (product: IProduct) => void;
}

const ProductDetaildCard = memo(({product, onChangeIngredient}: ProductDetaildCardProps) => {
	const {
		id,
		metric,
		name,
		price,
		amountInOnePack,
		amountCurrent = 0,
		timesUsed
	} = product;
	const [productPrice, setProductPrice] = useState<number>(price || 0);
	const [productCurrentAmount, setProductCurrentAmount] = useState<number>(amountCurrent || 0);
	const [productAmountInOnePack, setProductAmountInOnePack] = useState<number>(amountInOnePack || 0);

	const onPriceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
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
					...product,
					[e.target.name]: value,
					amountCurrent: productCurrentAmount,
					amountInOnePack: productAmountInOnePack,
				});
			}
		}
	};

	const onPackAmountChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
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
					...product,
					[e.target.name]: value,
					amountCurrent: productCurrentAmount,
					price: productPrice
				});
			}
		}
	};

	const onDeleteProduct = async (id: number) => {
		await db.activeProducts
			.where('id')
			.equals(id)
			.delete();
	};

	const onCurrentAmountChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
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
					...product,
					amountCurrent: value,
					amountInOnePack: productAmountInOnePack,
					price: productPrice
				});
			}
		}

	};

	return (
		<AppearAnimation initOnRender className={cls.animationWrapper}>
			<VStack max gap={'4'} className={classNames(cls.ProductDetaildCard)}>
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
					{/*<Text*/}
					{/*	className={cls.result}*/}
					{/*	content={'Стоимость израсходованного продукта: ' +*/}
					{/*		calculatePriceOfProduct(*/}
					{/*			productPrice,*/}
					{/*			productCurrentAmount,*/}
					{/*			productAmountInOnePack*/}
					{/*		).toFixed(2) + 'р'}/>*/}
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
		</AppearAnimation>
	);
});

export default ProductDetaildCard;
