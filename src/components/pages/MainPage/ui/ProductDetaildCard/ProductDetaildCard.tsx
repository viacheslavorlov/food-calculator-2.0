import {memo} from 'react';
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
		amountCurrent
	} = props;
	return (
		<div className={cls.ProductDetaildCard}>
			<div className={cls.inputBlock}>
				<Text className={cls.space} title={name}/>
				<Text title={metric}/>
			</div>

			<div className={cls.inputBlock}>
				<Text content="Цена: "/>
				<Input value={price} name="price"/>
			</div>
			<div className={cls.inputBlock}>
				<Text content="Количество в одной упаковке: "/>
				<Input value={amountInOnePack} name="amountInOnePack" />
			</div>
			<div className={cls.inputBlock}>
				<Text content="Израсходованное количество: "/>
				<Input value={amountCurrent || ''} name="amountCurrent" />
			</div>


		</div>
	);
});

export default ProductDetaildCard;
