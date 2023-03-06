import {StateShema} from '../../types';

export const getActiveProductsSelector = (state: StateShema) => state.products.activeProducts;