import {IProduct, Metrics} from '../types';
import {createSlice,  PayloadAction} from '@reduxjs/toolkit';


const initialState: IProduct = {
	name: '',
	id: null,
	metric: Metrics.none,
	price: null,
	amountCurrent: null,
	amountInOnePack: null
};

const newProductSlice = createSlice({
	name: 'newProducts',
	initialState,
	reducers: {
		setProductName: (state, action) => {
			state.name = action.payload;
		},
		setProductId: (state) => {
			state.id = Date.now();
		},
		setProductMetric: (state, action: PayloadAction<Metrics>) => {
			state.metric = action.payload;
		},
		setProductPrice: (state, action: PayloadAction<number>) => {
			state.price = action.payload;
		},
		setProductAmountInOnePack: (state, action: PayloadAction<number>) => {
			state.amountInOnePack = action.payload;
		},
		setDefaultValues: (state) => {
			state.name = '';
			state.id = null;
			state.metric = Metrics.none;
			state.price = 0;
			state.amountCurrent = 0;
			state.amountInOnePack = 0;
		}
	}
});

export const {
	actions: newProductActions,
	reducer: newProductReducer
} = newProductSlice;