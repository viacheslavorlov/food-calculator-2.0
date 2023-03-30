import {StateSchema} from '../../../../store/types';

export const getSearchValue = (state: StateSchema) => state.products.searchValue;