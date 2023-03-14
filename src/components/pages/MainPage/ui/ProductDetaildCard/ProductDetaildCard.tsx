import {ChangeEvent, memo, useState} from 'react';
import cls from './ProductDetaildCard.module.scss';
import {Text} from '../../../../shared/Text/Text';
import {Input} from '../../../../shared/Input/Input';


interface ProductDetaildCardProps {
	name: string;
	price: number;
	amountInOnePack: number;
	metric: string;
	amountCurrent: number | null;
	id: number;
}

const ProductDetaildCard = memo((props: ProductDetaildCardProps) => {
	const {
		id,
		metric,
		name,
		price,
		amountInOnePack,
		amountCurrent,
	} = props;
	const [productPrice, setProductPrice] = useState<number | undefined>(price);
	const [productCurrentAmount, setProductCurrentAmount] = useState<number | undefined>(amountCurrent || 0);
	const [productAmountInOnePack, setProductAmountInOnePack] = useState<number | undefined>(amountInOnePack);

	const onPriceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		if (!Number.isNaN(value)) {
			if (value === 0) {
				setProductPrice(undefined);
			}
			if (value > 0) {
				setProductPrice(value);
			}
		}
	};

	const onPackAmountChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		if (!Number.isNaN(value)) {
			if (value === 0) {
				setProductAmountInOnePack(undefined);
			}
			if (value > 0) {
				setProductAmountInOnePack(value);
			}
		}
	};

	const onCurrentAmountChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		if (!Number.isNaN(value)) {
			if (value === 0) {
				setProductCurrentAmount(undefined);
			}
			if (value > 0) {
				setProductCurrentAmount(value);
			}
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
		</div>
	);
});

export default ProductDetaildCard;
