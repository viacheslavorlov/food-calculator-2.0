import {StateSchema} from '../../../../store/types';

export const newProductPackAmountSelector = (state: StateSchema) => state.newProduct.newProduct.amountInOnePack;