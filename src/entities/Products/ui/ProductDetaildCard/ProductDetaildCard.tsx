import {ChangeEvent, memo, useState} from 'react';
import cls from './ProductDetaildCard.module.scss';
import {Text} from '../../../../shared/ui/Text/Text';
import {Input} from '../../../../shared/ui/Input/Input';
import {useAppDispatch} from '../../../../store/hooks';
import {productsActions} from '../../model/slice/productsSlice';
import {putProduct} from '../../model/services/putProduct/putProduct';
import {calculatePriceOfProduct} from '../../../../shared/helpers/resultCalculationFunctions/calculationFunctions';
import {Button, ButtonBackground, ButtonVariants} from '../../../../shared/ui/Button/Button';
import {IProduct} from '../../../../store/types';


const ProductDetaildCard = memo((props: IProduct) => {
	const {
		id,
		metric,
		name,
		price,
		amountInOnePack,
		amountCurrent = 0,
		timesUsed
	} = props;
	const dispatch = useAppDispatch();
	const [productPrice, setProductPrice] = useState<number>(price || 0);
	const [productCurrentAmount, setProductCurrentAmount] = useState<number>(amountCurrent || 0);
	const [productAmountInOnePack, setProductAmountInOnePack] = useState<number>(amountInOnePack || 0);

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
				id,
				metric,
				name,
				amountCurrent,
				amountInOnePack,
				price: value,
				timesUsed
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
			</div>
			<div className={cls.inputBlock}>
				<Text className={cls.text} content="Цена: "/>
				<Input
					className={cls.input}
					value={productPrice}
					onChange={onPriceChangeHandler} name="price"/>
			</div>
			<div className={cls.inputBlock}>
				<Text className={cls.text} content="В упаковке: "/>
				<Input
					className={cls.input}
					onChange={onPackAmountChangeHandler}
					value={productAmountInOnePack} name="amountInOnePack"/>
				<Text content={metric} />
			</div>
			<div className={cls.inputBlock}>
				<Text className={cls.text} content="Израсходовано: "/>
				<Input
					placeholder={`... ${metric} израсходовано`}
					className={cls.input}
					value={productCurrentAmount || ''}
					onChange={onCurrentAmountChangeHandler}
					name="amountCurrent"
				/>
				<Text content={metric} />
			</div>
			<div className={cls.inputBlock}>
				<Text
					className={cls.result}
					content={'Стоимость израсходованного продукта: ' +
					calculatePriceOfProduct(
						productPrice,
						productCurrentAmount,
						productAmountInOnePack
					).toFixed(2) + 'р'}/>
				<Button
					className={cls.deleteBtn}
					variant={ButtonVariants.rounded}
					background={ButtonBackground.red}
					onClick={() => onDeleteProduct(id)}
				>
					Удалить
				</Button>
			</div>
		</div>
	);
});

export default ProductDetaildCard;
