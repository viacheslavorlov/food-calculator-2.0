import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {productsReducer} from '../productSlice/productsSlice';
import {newProductReducer} from '../newProductSlice/newProductSlice';
import {StateShema} from '../types';

export const store  = configureStore<StateShema>({
	devTools: true,
	reducer: combineReducers({
		products: productsReducer,
		newProduct: newProductReducer
	})
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

