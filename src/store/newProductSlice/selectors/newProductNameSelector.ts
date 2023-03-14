import {RootState} from '../../store/store';

export const newProductNameSelector = (state: RootState) => state.newProduct.name;