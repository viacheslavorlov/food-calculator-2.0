import {ChangeEvent, memo, useState} from 'react';
import cls from './ProductDetaildCard.module.scss';
import {Text} from '../../../../shared/Text/Text';
import {Input} from '../../../../shared/Input/Input';
import {useAppDispatch} from '../../../../../store/hooks';
import {productsActions} from '../../../../../store/productSlice/productsSlice';
import {putProduct} from '../../../../../store/productSlice/putProduct/putProduct';
import {calculatePriceOfProduct} from '../../../../../helpers/calculationFunctions';
import {Button, ButtonVariants} from '../../../../shared/Button/Button';


interface ProductDetaildCardProps {
	name: string;
	price: number;
	amountInOnePack: number;
	metric: string;
	amountCurrent: number;
	id: number;
}

const ProductDetaildCard = memo((props: ProductDetaildCardProps) => {
	const {
		id,
		metric,
		name,
		price,
		amountInOnePack,
		amountCurrent = 0,
	} = props;
	const dispatch = useAppDispatch();
	const [productPrice, setProductPrice] = useState<number>(price);
	const [productCurrentAmount, setProductCurrentAmount] = useState<number>(amountCurrent || 0);
	const [productAmountInOnePack, setProductAmountInOnePack] = useState<number>(amountInOnePack);

	const onPriceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		const name = e.target.name;
		if (!Number.isNaN(value)) {
			if (value === 0) {
				setProductPrice(0);
			}
			if (value > 0) {
				setProductPrice(value);
			}
			dispatch(productsActions.changeProductData({name, value, id}));
			dispatch(putProduct({
				...props,
				price: value
			}));
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
			dispatch(productsActions.changeProductData({name, value, id}));
		}
	};
	
	const onDeleteProduct = (id: number) => {
		dispatch(productsActions.deleteFromActiveList(id));
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
			dispatch(productsActions.changeProductData({name, value, id}));
		}
	};


	return (
		<div className={cls.ProductDetaildCard}>
			<div className={cls.inputBlock}>
				<Text className={cls.space} title={name}/>
				<Text title={metric}/>
			</div>

			<div className={cls.inputBlock}>
				<Text className={cls.text} content="Цена: "/>
				<Input
					className={cls.input}
					value={productPrice}
					onChange={onPriceChangeHandler} name="price"/>
			</div>
			<div className={cls.inputBlock}>
				<Text className={cls.text} content="Количество в одной упаковке: "/>
				<Input
					className={cls.input}
					onChange={onPackAmountChangeHandler}
					value={productAmountInOnePack} name="amountInOnePack"/>
			</div>
			<div className={cls.inputBlock}>
				<Text className={cls.text} content="Израсходованное количество: "/>
				<Input
					className={cls.input}
					value={productCurrentAmount || ''}
					onChange={onCurrentAmountChangeHandler}
					name="amountCurrent"/>
			</div>
			<div className={cls.inputBlock}>
				<Text
					className={cls.result}
					content={`Стоимость израсходованного продукта: ${
						calculatePriceOfProduct(productPrice, productCurrentAmount, productAmountInOnePack)
					} р`}
				/>
				<Button
					variant={ButtonVariants.rounded}
					onClick={() => onDeleteProduct(id)}
				>
					Удалить
				</Button>
			</div>
		</div>
	);
});

export default ProductDetaildCard;
