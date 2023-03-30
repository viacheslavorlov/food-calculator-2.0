import {RootState} from '../../../../app/store/store';

export const newProductPriceSelector = (state: RootState) => state.newProduct.newProduct.price;