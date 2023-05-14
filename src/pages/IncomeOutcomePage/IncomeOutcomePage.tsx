import { classNames} from '../../shared/helpers/classNames/classNames';
import cls from './IncomeOutcomePage.module.scss';
import {memo, useEffect} from 'react';
import {ImcomeOutcomeForm} from '../../entities/IncomeOutcome/ui/ImcomeOutcomeForm';
// import {useAppDispatch} from '../../store/hooks';
// import {fetchIncome} from '../../entities/IncomeOutcome/model/services/fetchIncome';

interface IncomeOutcomeProps {
    className?: string;
}

export const IncomeOutcomePage = memo((props: IncomeOutcomeProps) => {
	const {
		className
	} = props;
	// const dispatch = useAppDispatch();
	useEffect(() => {
		// dispatch(fetchIncome());
	}, []);
	return (
		<div className={classNames(cls.IncomeOutcome, className)}>
			<ImcomeOutcomeForm />
		</div>
	);
});