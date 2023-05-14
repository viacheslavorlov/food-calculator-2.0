import {classNames} from '../../../shared/helpers/classNames/classNames';
import cls from './ImcomeOutcomeForm.module.scss';
import {memo} from 'react';
import {useSelector} from 'react-redux';
import {Text} from '../../../shared/ui/Text/Text';
import {getIncome} from '../model/selectors/incomeOutcomeSelectors';

interface ImcomeOutcomeFormProps {
	className?: string;
}

export const ImcomeOutcomeForm = memo((props: ImcomeOutcomeFormProps) => {
	const {
		className
	} = props;


	return (
		<div className={classNames(cls.ImcomeOutcomeForm, className)}>
			<Text title={'Доходы, расходы'}/>
			<ul>
				{/*{income.map(item => item.date)}*/}
			</ul>
		</div>
	);
});