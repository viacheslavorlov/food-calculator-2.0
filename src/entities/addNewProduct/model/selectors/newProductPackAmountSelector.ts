import {RootState} from '../../../../app/store/store';

export const newProductPackAmountSelector = (state: RootState) => state.newProduct.newProduct.amountInOnePack;