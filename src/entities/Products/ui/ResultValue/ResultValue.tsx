import cls from './ResultValue.module.scss';
import {IProduct} from '../../../../store/types';
import {classNames} from '../../../../shared/helpers/classNames/classNames';
import {finalPrice} from '../../../../shared/helpers/resultCalculationFunctions/calculationFunctions';
import {Text} from '../../../../shared/ui/Text/Text';
import { Input } from '../../../../shared/ui/Input/Input';
import {ChangeEvent, memo, useState} from 'react';

interface ResultValueProps {
	list: IProduct[];
	className: string;
}

export const ResultValue = memo((props: ResultValueProps) => {
	const {className, list} = props;
	const [increase, setIncrease] = useState<string>('35');
	
	const onIncrease = (e: ChangeEvent<HTMLInputElement>) => {
		setIncrease(e.target.value);
	};
	return (
		<>
			<Text
				content={`Себестоимость набора продуктов ${finalPrice(list)
					.toFixed(2)}`}
				className={classNames(className, cls.ResultValue)}/>
			<Text
				content={'Себестоимость набора продуктов c наценкой '}
				className={classNames(className, cls.ResultValue)}>
				<div className={cls.resultWrapper}>
					<Input type={'string'} className={cls.input} value={increase} onChange={onIncrease} />
					<Text title={'%: '} className={cls.percent}/>
					<Text title={`${(finalPrice(list) + finalPrice(list) * Number(increase) / 100)
						.toFixed(2)}`} />
				</div>
			</Text>

		</>
	);
});
