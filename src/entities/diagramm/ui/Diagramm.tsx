import { Expense, Income } from '../model/type';
import cls from './Diagramm.module.scss';

interface DiagramProps {
	incomes: Income[];
	expenses: Expense[];
}

export const Diagram = ({ incomes, expenses }: DiagramProps) => {
	const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);
	const totalExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);
	const totalAmount = totalIncome + totalExpense;

	const incomePercentage = Math.round((totalIncome / totalAmount) * 100);
	const expensePercentage = Math.round((totalExpense / totalAmount) * 100);

	return (
		<div className={cls.chart}>
			<div className={cls.bar} style={{ height: `${incomePercentage}%` }}>
				<span className={cls.label}>Доходы</span>
			</div>
			<div className={cls.bar} style={{ height: `${expensePercentage}%` }}>
				<span className={cls.label}>Расходы</span>
			</div>
		</div>
	);
};
