import {StateShema} from '../../types';

export const getErrorProductsSelector = (state: StateShema) => state.products.error;