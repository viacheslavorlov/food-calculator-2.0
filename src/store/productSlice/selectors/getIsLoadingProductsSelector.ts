import {StateShema} from '../../types';

export const getIsLoadingProductsSelector = (state: StateShema) => state.products.isLoading;