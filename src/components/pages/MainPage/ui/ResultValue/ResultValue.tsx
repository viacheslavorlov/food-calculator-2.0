import cls from './ResultValue.module.scss';
import {IProduct} from '../../../../../store/types';
import {classNames} from '../../../../../helpers/classNames';
import {finalPrice} from '../../../../../helpers/calculationFunctions';
import {Text} from '../../../../shared/Text/Text';

interface ResultValueProps {
	list: IProduct[];
	className: string;
}

const ResultValue = (props: ResultValueProps) => {
	const {className, list} = props;
	return (
		<Text title={`Себестоимость этого набора продуктов ${finalPrice(list).toFixed(2)}`} className={classNames(className, cls.ResultValue)}/>
	);
};

export default ResultValue;
