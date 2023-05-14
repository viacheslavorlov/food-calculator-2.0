import {StateSchema} from '../../../../store/types';

export const newProductPriceSelector = (state: StateSchema) => state.newProduct.newProduct.price;