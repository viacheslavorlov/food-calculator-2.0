import {StateSchema} from '../../../../store/types';

export const newProductNameSelector = (state: StateSchema) => state.newProduct.newProduct.name;