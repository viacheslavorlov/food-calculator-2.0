import {Text} from 'shared/ui/Text/Text';
import {FormEvent, memo, useEffect, useRef, useState} from 'react';
import {Input} from 'shared/ui/Input/Input';
import cls from './AddNewProductForm.module.scss';
import {db} from 'db/db';
import {Button, ButtonBackground, ButtonVariants} from 'shared/ui/Button/Button';
import {IProduct, Metrics} from 'store/types';
import {VStack} from 'shared/ui/Stack';
import {Modal} from 'shared/ui/Modal/ui/Modal';

interface AddNewProductFormProps {
	className?: string;
}

export const AddNewProductForm = memo(({className}: AddNewProductFormProps) => {
	// const [name, setName] = useState<string>('');
	// const [metric, setMetric] = useState<string>('');
	// const [price, setPrice] = useState<number>(0);
	// const [amountInOnePack, setAmountInOnePack] = useState<number>(0);
	const nameRef = useRef<HTMLInputElement | null>(null);
	const metricRef = useRef<HTMLInputElement |null>(null);
	const priceRef = useRef<HTMLInputElement | null>(null);
	const amountInOnePackRef = useRef<HTMLInputElement | null>(null);
	const [isModal, setIsModal] = useState(false);
	const [modalMessage, setModalMessage] = useState('');
	const [modalTimer, setModalTimer] = useState(1000);

	// const onNameChange = (e: FormEvent<HTMLInputElement>) => {
	// 	setName(e.currentTarget.value);
	// };
	// const onPriceChange = (e: FormEvent<HTMLInputElement>) => {
	// 	setPrice(parseInt(e.currentTarget.value));
	// };
	// const onMetricChange = (e: FormEvent<HTMLInputElement>) => {
	// 	setMetric(e.currentTarget.value as Metrics);
	// };

	async function onAddNewProduct() {
		try {
			if (nameRef.current?.value
				&& priceRef.current?.value
				&& metricRef.current?.value
				&& amountInOnePackRef.current?.value) {
				const product: IProduct = {
					name: nameRef.current?.value,
					id: Date.now(),
					price: Number(priceRef.current?.value),
					metric: metricRef.current?.value,
					amountInOnePack: Number(amountInOnePackRef.current.value),
					amountCurrent: 0,
					timesUsed: 0
				};
				await db.products.add(product)
					.then(() => {
						setIsModal(true);
						setModalMessage('Продукт добавлен!');
					});
			} else {
				setIsModal(true);
				setModalTimer(5000);
				setModalMessage('Введите корректные данные!');
			}
		} catch (e) {
			setIsModal(true);
			setModalTimer(5000);
			setModalMessage('Продукт с таким названием уже существет: Измените название продукта');
		}
	}

	useEffect(() => {
		if (isModal) {
			const clearModal = setTimeout(() => {
				setIsModal(false);
			}, modalTimer);
			return () => clearTimeout(clearModal);
		}
	}, [isModal, modalTimer]);

	return (
		<VStack max justify={'center'} align={'center'} gap="4" className={className}>
			<Text className={cls.text} title={'Добавить новый продукт'}/>
			<Text className={cls.text} content={'Название продукта:'}/>
			<Input
				className={cls.input}
				ref={nameRef}
				// value={name}
				type="text"
				// onChange={onNameChange}
				placeholder="Введите название продукта"
			/>

			<Text className={cls.text} content={'Единицы измерения:'}/>
			<Input
				className={cls.input}
				ref={metricRef}
				// value={metric}
				type="text"
				// onChange={onMetricChange}
				placeholder="Введите единицы измерения продукта"
			/>
			<Text className={cls.text} content={'Цена за упаковку:'}/>
			<Input
				className={cls.input}
				ref={priceRef}
				// value={price || ''}
				// onInput={onPriceChange}
				type="number"
				placeholder="Введите цену за упаковку"
			/>
			<Text className={cls.text} content={'Количество в одной упаковке:'}/>
			<Input
				className={cls.input}
				ref={amountInOnePackRef}
				// value={amountInOnePack || ''}
				// onChange={onPackAmountChange}
				type="number"
				placeholder="Введите количество в упаковке"
			/>
			<Button
				className={cls.button}
				variant={ButtonVariants.rounded}
				onClick={onAddNewProduct}
				background={ButtonBackground.green}>
				Сохранить
			</Button>
			{isModal && <Modal closeModal={setIsModal} visible={isModal} autoClose={true} autoCloseTimer={modalTimer}>
				{modalMessage}
			</Modal>}
		</VStack>
	);
});
