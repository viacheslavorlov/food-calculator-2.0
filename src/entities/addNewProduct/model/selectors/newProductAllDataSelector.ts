import {StateSchema} from '../../../../store/types';

export const newProductAllDataSelector = (state: StateSchema) => state.newProduct.newProduct;