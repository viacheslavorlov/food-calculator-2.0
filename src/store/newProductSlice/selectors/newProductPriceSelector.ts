import {RootState} from '../../store/store';

export const newProductPriceSelector = (state: RootState) => state.newProduct.price;