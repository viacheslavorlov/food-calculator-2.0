import {Metrics, NewProductSliceSchema} from '../types';
import {createSlice,  PayloadAction} from '@reduxjs/toolkit';
import {addProductToDB} from './services/addProductToDB';



const initialState: NewProductSliceSchema = {
	loading: false,
	error: undefined,
	newProduct: {
		name: '',
		id: null,
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
		setProductName: (state, action) => {
			state.newProduct.name = action.payload;
		},
		setProductId: (state) => {
			state.newProduct.id = Date.now();
		},
		setProductMetric: (state, action: PayloadAction<Metrics>) => {
			state.newProduct.metric = action.payload;
		},
		setProductPrice: (state, action: PayloadAction<number>) => {
			state.newProduct.price = action.payload;
		},
		setProductAmountInOnePack: (state, action: PayloadAction<number>) => {
			state.newProduct.amountInOnePack = action.payload;
		},
		setDefaultValues: (state) => {
			state.newProduct.name = '';
			state.newProduct.id = null;
			state.newProduct.metric = Metrics.none;
			state.newProduct.price = 0;
			state.newProduct.amountCurrent = 0;
			state.newProduct.amountInOnePack = 0;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(addProductToDB.pending, (state, action) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(addProductToDB.fulfilled, (state, action) => {
				console.log('added to server!');
				state.newProduct = action.payload;
			})
			.addCase(addProductToDB.rejected, (state, action) => {
				state.error = action.error.message;
			});
	}
});

export const {
	actions: newProductActions,
	reducer: newProductReducer
} = newProductSlice;