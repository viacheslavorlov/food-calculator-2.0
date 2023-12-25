import { classNames } from 'shared/helpers/classNames/classNames';
import cls from './ImcomeOutcomeForm.module.scss';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
// import { Diagram } from 'entities/diagramm';
// import { Expense, Income } from 'entities/diagramm';

// const income: Income[] = [
// 	{ amount: 400, description: '12-03-2023', id: 1 },
// 	{ amount: 500, description: '13-03-2023', id: 2 }
// ];

// const outcome: Expense[] = [
// 	{ amount: 200, description: '12-03-2023', id: 1 }
// ];

interface ImcomeOutcomeFormProps {
	className?: string;
}

export const ImcomeOutcomeForm = memo((props: ImcomeOutcomeFormProps) => {
	const {
		className
	} = props;


	return (
		<div className={classNames(cls.ImcomeOutcomeForm, className)}>
			<Text title={'Доходы, расходы'} />
			{/* <Diagram incomes={income} expenses={outcome} /> */}
		</div>
	);
});