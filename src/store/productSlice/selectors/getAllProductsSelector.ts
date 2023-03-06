import {StateShema} from '../../types';

export const getAllProductsSelector = (state: StateShema) => state.products.allProducts;