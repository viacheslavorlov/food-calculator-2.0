import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {productsReducer} from '../../../entities/Products/model/slice/productsSlice';
import {newProductReducer} from '../../../entities/addNewProduct/model/slice/newProductSlice';
import {StateSchema} from '../../../store/types';

export const store  = configureStore<StateSchema>({
	devTools: true,
	reducer: combineReducers({
		products: productsReducer,
		newProduct: newProductReducer
	})
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

