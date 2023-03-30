import {RootState} from '../../../../app/store/store';

export const newProductNameSelector = (state: RootState) => state.newProduct.newProduct.name;