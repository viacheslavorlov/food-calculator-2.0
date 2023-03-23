import {StateSchema} from '../../types';

export const getIsLoadingProductsSelector = (state: StateSchema) => state.products.isLoading;