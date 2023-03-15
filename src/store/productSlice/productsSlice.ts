import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductsSliceInterface, IProduct} from '../types';
import {fetchProducts} from './fetchProducts/fetchProducts';
import {putProduct} from './putProduct/putProduct';
import {deleteFrofDB} from './deleteFromDB/deleteFrofDB';

export const initialState: ProductsSliceInterface = {
	isLoading: false,
	error: undefined,
	activeProducts: [],
	allProducts: [],
};

interface ChangeDataAction {
	name: string;
	value: number;
	id: number;
}

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
		changeProductData: (state, action: PayloadAction<ChangeDataAction>) => {
			state.activeProducts = state.activeProducts.map(item => {
				if (item.id === action.payload.id) {
					console.log(action.payload);
					return {
						...item,
						amountCurrent: action.payload.value
					};
				}
				return item;
			});
		},
		deleteFromActiveList: (state, action: PayloadAction<number>) => {
			state.activeProducts = state.activeProducts.filter((product) => product.id != action.payload);
		},
		deleteProduct: (state, action: PayloadAction<number>) => {
			state.allProducts = state.allProducts.filter(item => item.id !== action.payload);
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				if (action.payload) {
					state.allProducts = action.payload;
				}
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message;
			});
		builder
			.addCase(putProduct.pending, (state, action) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(putProduct.fulfilled, (state, action) => {
				state.isLoading = false;
				state.activeProducts = state.activeProducts.map(item => {
					if (item.id === action.meta.arg.id) {
						return action.meta.arg;
					} else {
						return item;
					}
				});
			})
			.addCase(putProduct.rejected, (state, action) => {
				state.error = action.error.message;
			});
		builder
			.addCase(deleteFrofDB.pending, (state, action) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(deleteFrofDB.fulfilled, (state, action) => {
				console.log('delete action', action.meta.arg);
			})
			.addCase(deleteFrofDB.rejected, (state, action) => {
				state.error = action.error.message;
			});
	}
});

export const {
	reducer: productsReducer,
	actions: productsActions
} = productsSlice;
