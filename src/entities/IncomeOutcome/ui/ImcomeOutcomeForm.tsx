import {classNames} from '../../../shared/helpers/classNames/classNames';
import cls from './ImcomeOutcomeForm.module.scss';
import {memo} from 'react';
import {useSelector} from 'react-redux';
import {getIncome} from '../model/selectors/incomeOutcomeSelectors';

interface ImcomeOutcomeFormProps {
	className?: string;
}

export const ImcomeOutcomeForm = memo((props: ImcomeOutcomeFormProps) => {
	const {
		className
	} = props;

	const income = useSelector(getIncome);

	return (
		<div className={classNames(cls.ImcomeOutcomeForm, className)}>
			<ul>
				{income.map(item => item.date)}
			</ul>
		</div>
	);
});