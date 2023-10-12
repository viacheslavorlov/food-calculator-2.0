import {db} from 'db/db';
import {ChangeEvent, useEffect, useRef, useState} from 'react';
import {Button, ButtonBackground, ButtonVariants} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';
import {Modal} from 'shared/ui/Modal/ui/Modal';
import {VStack} from 'shared/ui/Stack';
import {Text} from 'shared/ui/Text/Text';
import {IProduct} from 'store/types';
import cls from './AddNewProductForm.module.scss';
import {classNames} from 'shared/helpers/classNames/classNames';


export const AddNewProductForm = () => {
	const [price, setPrice] = useState<number | undefined>(undefined);
	const [amountInOnePack, setAmountInOnePack] = useState<number | undefined>(undefined);
	const nameRef = useRef<HTMLInputElement | null>(null);
	const metricRef = useRef<HTMLInputElement | null>(null);
	const [isModal, setIsModal] = useState(false);
	const [modalMessage, setModalMessage] = useState('');
	const [modalTimer, setModalTimer] = useState(1000);

	const onPackAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
		setAmountInOnePack(parseFloat(e.target.value));
	};
	const onPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPrice(parseFloat(e.target.value));
	};

	async function onAddNewProduct() {
		try {
			if (nameRef.current?.value && price && metricRef.current?.value && amountInOnePack) {
				const product: IProduct = {
					name: nameRef.current?.value,
					id: Date.now(),
					price,
					metric: metricRef.current?.value,
					amountInOnePack,
					amountCurrent: 0,
					timesUsed: 0,
				};
				await db.products.add(product).then(() => {
					setIsModal(true);
					setModalMessage('Продукт добавлен!');
					setAmountInOnePack(0);
					setPrice(0);
					metricRef.current!.value = '';
					nameRef.current!.value = '';
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
		<VStack max justify={'center'} align={'center'} gap="4">
			<Text className={cls.text} title={'Добавить новый продукт'}/>
			<Text className={cls.text} content={'Название продукта:'}/>
			<Input
				className={cls.input}
				ref={nameRef}
				type="text"
				placeholder="Введите название продукта"
			/>

			<Text className={cls.text} content={'Единицы измерения:'}/>
			<Input
				className={cls.input}
				ref={metricRef}
				type="text"
				placeholder="Введите единицы измерения продукта"
			/>
			<Text className={cls.text} content={'Цена за упаковку:'}/>
			<Input
				className={classNames(cls.input)}
				value={price}
				onChange={onPriceChange}
				type="number"
				min={0}
				placeholder="Введите цену за упаковку"
			/>
			<Text className={cls.text} content={'Количество в одной упаковке:'}/>
			<Input
				className={classNames(cls.input)}
				value={amountInOnePack}
				onChange={onPackAmountChange}
				type="number"
				min={0}
				placeholder="Введите количество в упаковке"
			/>
			<Button
				className={cls.button}
				variant={ButtonVariants.rounded}
				onClick={onAddNewProduct}
				background={ButtonBackground.green}
			>
				Сохранить
			</Button>
			{isModal && (
				<Modal
					closeModal={setIsModal}
					visible={isModal}
					autoClose={true}
					// autoCloseTimer={modalTimer}
				>
					{modalMessage}
				</Modal>
			)}
		</VStack>
	);
};
