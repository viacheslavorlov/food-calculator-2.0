import { StateSchema } from 'src/store/types';

export const getAllProductsSelector = (state: StateSchema) => state.products.allProducts;