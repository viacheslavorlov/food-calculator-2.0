import cls from './ResultValue.module.scss';
import { IProduct } from 'store/types';
import { finalPrice } from 'shared/helpers/resultCalculationFunctions/calculationFunctions';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { ChangeEvent, memo, useState } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { classNames } from 'shared/helpers/classNames/classNames';

interface ResultValueProps {
  list: IProduct[];
  className?: string;
}

export const ResultValue = memo((props: ResultValueProps) => {
	const { className, list } = props;
	const [increase, setIncrease] = useState<string>('35');

	const onIncrease = (e: ChangeEvent<HTMLInputElement>) => {
		setIncrease(e.target.value);
	};

	const baseCost = finalPrice(list);
	const totalCostWithElectricity = (baseCost * 1.15).toFixed(2);
	const totalCostWithMarkup = (baseCost * 1.15 + baseCost * (Number(increase) / 100)).toFixed(2);

	return (
		<VStack max className={classNames(className, cls.resultWrapper)}>
			<HStack max align='center' justify='start'>
				<Text title={'Себестоимость набора продуктов: '}/>
				<Text className={cls.resultValue} title={baseCost.toFixed(2)}/>
			</HStack>
			<HStack max align='center' justify='start'>
				<Text title={'Себестоимость + электричество: '}/>
				<Text className={cls.resultValue} title={totalCostWithElectricity}/>
			</HStack>
			<Text title={'Себестоимость приготовления c наценкой: '}/>
			<HStack max justify={'start'}>
				<Input type={'string'} className={cls.input} value={increase} onChange={onIncrease} />
				<Text title={'%: '} className={cls.percent}/>
				<Text className={cls.resultValue} title={totalCostWithMarkup}/>
			</HStack>
		</VStack>
	);
});