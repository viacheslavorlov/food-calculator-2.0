export interface IncomeOutcomeTypes {
	id: number;
	date: string;
	amount: number;
}

export interface IncomeOutcomeSchema {
	error: string | undefined;
	isLoading: boolean;
	income: IncomeOutcomeTypes[];
	outcome: IncomeOutcomeTypes[];
}