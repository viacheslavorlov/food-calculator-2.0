import {StateSchema} from '../../../../store/types';

export const searchValueSelector = (state: StateSchema) => state.searchProducts.searchValue || '';
export const searchOrderSelector = (state: StateSchema) => state.searchProducts.searchOrder || 'asc';
export const searchPropSelector = (state: StateSchema) => state.searchProducts.searchProp || 'none';