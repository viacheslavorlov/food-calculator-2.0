import {StateSchema} from '../../../../store/types';

export const getAllProductsSelector = (state: StateSchema) => state.products.allProducts;