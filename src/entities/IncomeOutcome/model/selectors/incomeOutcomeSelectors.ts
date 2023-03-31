import {StateSchema} from '../../../../store/types';

export const getIncome = (state: StateSchema) => state.incomeOutcome.income;
export const getOutcome = (state: StateSchema) => state.incomeOutcome.outcome;
export const getError = (state: StateSchema) => state.incomeOutcome.error;
export const getIsLoading = (state: StateSchema) => state.incomeOutcome.isLoading;