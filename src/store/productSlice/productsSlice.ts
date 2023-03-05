import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProduct, ProductsSliceInterface} from '../types';


export const initialState: ProductsSliceInterface = {
	activeProducts: [],
	allProducts: [],

};

export const productsSlice = createSlice({
	initialState,
	name: 'products',
	reducers: {
		addNewProduct: (state, action: PayloadAction<IProduct>) => {
			state.allProducts.push(action.payload);
		},

		addProductToActive: (state, action: PayloadAction<string>) => {
			const alreadyInList = state.activeProducts.findIndex(product => product.id === action.payload);
			if (alreadyInList < 0) {
				const newActiveProduct = state.allProducts.filter(product => product.id === action.payload);
				state.activeProducts.unshift(...newActiveProduct);
			}
		},

		deleteFromActiveList: (state, action) => {
			state.activeProducts.filter(product => product.id !== action.payload);
		}
	}
});