import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductsSliceInterface, IProduct} from '../../../../store/types';
import {fetchProducts} from '../services/fetchProducts/fetchProducts';
import {putProduct} from '../services/putProduct/putProduct';
import {deleteFrofDB} from '../../../DeleteItems/model/deleteFromDB/deleteFrofDB';

export const initialState: ProductsSliceInterface = {
	isLoading: false,
	error: undefined,
	activeProducts: [],
	allProducts: [],
	searchValue: ''
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
		addNewProduct: (state: ProductsSliceInterface, action: PayloadAction<IProduct>) => {
			state.allProducts.push(action.payload);
		},

		addProductToActive: (state: ProductsSliceInterface, action: PayloadAction<number>) => {
			const alreadyInList = state.activeProducts.findIndex(product => product.id === action.payload);
			if (alreadyInList < 0) {
				const newActiveProduct = state.allProducts.filter(product => product.id === action.payload);
				state.activeProducts.unshift(...newActiveProduct);
			}
		},
		changeProductData: (state: ProductsSliceInterface, action: PayloadAction<ChangeDataAction>) => {
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
		deleteFromActiveList: (state: ProductsSliceInterface, action: PayloadAction<number>) => {
			state.activeProducts = state.activeProducts.filter((product) => product.id != action.payload);
		},
		deleteProduct: (state: ProductsSliceInterface, action: PayloadAction<number>) => {
			state.allProducts = state.allProducts.filter(item => item.id !== action.payload);
		},
		setSearchValue: (state:ProductsSliceInterface, action: PayloadAction<string>) => {
			state.searchValue = action.payload;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.pending, (state: ProductsSliceInterface, action) => {
				state.isLoading = true;
			})
			.addCase(fetchProducts.fulfilled, (state: ProductsSliceInterface, action) => {
				state.isLoading = false;
				if (action.payload) {
					state.allProducts = action.payload;
				}
			})
			.addCase(fetchProducts.rejected, (state: ProductsSliceInterface, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
		builder
			.addCase(putProduct.pending, (state: ProductsSliceInterface, action) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(putProduct.fulfilled, (state: ProductsSliceInterface, action) => {
				state.isLoading = false;
				state.activeProducts = state.activeProducts.map(item => {
					if (item.id === action.meta.arg.id) {
						return action.meta.arg;
					} else {
						return item;
					}
				});
			})
			.addCase(putProduct.rejected, (state: ProductsSliceInterface, action) => {
				state.error = action.payload;
			});
		builder
			.addCase(deleteFrofDB.pending, (state: ProductsSliceInterface, action) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(deleteFrofDB.fulfilled, (state: ProductsSliceInterface, action) => {
				console.log('delete action', action.meta.arg);
			})
			.addCase(deleteFrofDB.rejected, (state: ProductsSliceInterface, action) => {
				state.error = action.error.message;
			});
	}
});

export const {
	reducer: productsReducer,
	actions: productsActions
} = productsSlice;
