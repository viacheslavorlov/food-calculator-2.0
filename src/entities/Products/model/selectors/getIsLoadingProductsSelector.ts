import {StateSchema} from '../../../../store/types';

export const getIsLoadingProductsSelector = (state: StateSchema) => state.products.isLoading;