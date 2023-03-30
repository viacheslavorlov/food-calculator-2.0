import {StateSchema} from '../../../../store/types';

export const getActiveProductsSelector = (state: StateSchema) => state.products.activeProducts;