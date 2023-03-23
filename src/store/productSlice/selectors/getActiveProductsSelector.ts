import {StateSchema} from '../../types';

export const getActiveProductsSelector = (state: StateSchema) => state.products.activeProducts;