import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {productsSlice} from '../productSlice/productsSlice';

export const store = configureStore({
	reducer: combineReducers({
		products: productsSlice.reducer
	})
});