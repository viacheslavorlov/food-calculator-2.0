import {StateSchema} from '../../types';

export const getErrorProductsSelector = (state: StateSchema) => state.products.error;