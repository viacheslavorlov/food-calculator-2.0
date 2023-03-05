import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductsSliceInterface, IProduct} from '../types';

export const initialState: ProductsSliceInterface = {
	activeProducts: [],
	allProducts: [],
};

const productsSlice = createSlice({
	initialState,
	name: 'products',
	reducers: {
		addNewProduct: (state, action: PayloadAction<IProduct>) => {
			state.allProducts.push(action.payload);
		},

		addProductToActive: (state, action: PayloadAction<number>) => {
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

export const {
	reducer: productsReducer,
	actions: productsActions
} = productsSlice;
