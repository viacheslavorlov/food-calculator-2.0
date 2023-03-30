import {StateSchema} from '../../../../store/types';

export const getErrorProductsSelector = (state: StateSchema) => state.products.error;