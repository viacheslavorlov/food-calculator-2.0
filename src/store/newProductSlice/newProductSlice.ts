import {Metrics, NewProductSliceSchema} from '../types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {addProductToDB} from './services/addProductToDB';


const initialState: NewProductSliceSchema = {
	loading: false,
	error: undefined,
	newProduct: {
		name: '',
		id: Date.now(),
		metric: Metrics.none,
		price: 0,
		amountCurrent: 0,
		amountInOnePack: 0
	}
};

const newProductSlice = createSlice({
	name: 'newProducts',
	initialState,
	reducers: {
		setProductName: (state: NewProductSliceSchema, action) => {
			state.newProduct.name = action.payload;
		},
		setProductId: (state: NewProductSliceSchema) => {
			state.newProduct.id = Date.now();
		},
		setProductMetric: (state: NewProductSliceSchema, action: PayloadAction<Metrics>) => {
			state.newProduct.metric = action.payload;
		},
		setProductPrice: (state: NewProductSliceSchema, action: PayloadAction<number>) => {
			state.newProduct.price = action.payload;
		},
		setProductAmountInOnePack: (state: NewProductSliceSchema, action: PayloadAction<number>) => {
			state.newProduct.amountInOnePack = action.payload;
		},
		setDefaultValues: (state: NewProductSliceSchema) => {
			state.newProduct.name = '';
			state.newProduct.id = Date.now();
			state.newProduct.metric = Metrics.none;
			state.newProduct.price = 0;
			state.newProduct.amountCurrent = 0;
			state.newProduct.amountInOnePack = 0;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(addProductToDB.pending, (state: NewProductSliceSchema, action) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(addProductToDB.fulfilled, (state: NewProductSliceSchema, action) => {
				state.newProduct = initialState.newProduct;
			})
			.addCase(addProductToDB.rejected, (state: NewProductSliceSchema, action) => {
				state.error = 'error';
			});
	}
});

export const {
	actions: newProductActions,
	reducer: newProductReducer
} = newProductSlice;