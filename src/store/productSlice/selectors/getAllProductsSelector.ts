import {StateSchema} from '../../types';

export const getAllProductsSelector = (state: StateSchema) => state.products.allProducts;