import {RootState} from '../../store/store';

export const newProductPackAmountSelector = (state: RootState) => state.newProduct.amountInOnePack;