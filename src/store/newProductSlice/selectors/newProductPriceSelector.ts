import {RootState} from '../../store';

export const newProductPriceSelector = (state: RootState) => state.newProduct.price;