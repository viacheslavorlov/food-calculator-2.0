import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {productsReducer} from '../../../entities/Products/model/slice/productsSlice';
import {newProductReducer} from '../../../entities/addNewProduct/model/slice/newProductSlice';
import {incomeOutcomeSliceReducer} from '../../../entities/IncomeOutcome/model/slice/incomeOutcomeSlice';
import {searchReducer} from '../../../features/searchProducts/model/slice/searchProductSlice';
import {recipesApi} from '../../../features/recipies/model/service/recipesApi';
import {rtkApi} from '../../../shared/helpers/api/rtkApi';
import {setupListeners} from '@reduxjs/toolkit/query';

export const store  = configureStore({
	devTools: true,
	reducer: combineReducers({
		products: productsReducer,
		newProduct: newProductReducer,
		incomeOutcome: incomeOutcomeSliceReducer,
		searchProducts: searchReducer,
		[recipesApi.reducerPath]: recipesApi.reducer
	}),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(rtkApi.middleware).concat(recipesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

