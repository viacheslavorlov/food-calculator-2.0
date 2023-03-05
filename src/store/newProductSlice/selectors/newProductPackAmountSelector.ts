import {RootState} from '../../store';

export const newProductPackAmountSelector = (state: RootState) => state.newProduct.amountInOnePack;