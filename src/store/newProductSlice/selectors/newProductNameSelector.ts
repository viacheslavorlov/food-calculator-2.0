import {RootState} from '../../store';

export const newProductNameSelector = (state: RootState) => state.newProduct.name;