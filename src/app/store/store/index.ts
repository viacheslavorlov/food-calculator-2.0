import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {productsReducer} from '../../../entities/Products/model/slice/productsSlice';
import {newProductReducer} from '../../../entities/addNewProduct/model/slice/newProductSlice';
import {incomeOutcomeSliceReducer} from '../../../entities/IncomeOutcome/model/slice/incomeOutcomeSlice';
import {searchReducer} from '../../../features/searchProducts/model/slice/searchProductSlice';
import {recipesApi} from '../../../features/recipies/model/service/recipesApi';
import {rtkApi} from '../../../shared/helpers/api/rtkApi';
import {recipeReducer} from '../../../features/recipies';


export const rootReducer = combineReducers({
	products: productsReducer,
	newProduct: newProductReducer,
	incomeOutcome: incomeOutcomeSliceReducer,
	searchProducts: searchReducer,
	recipe: recipeReducer,
	[recipesApi.reducerPath]: recipesApi.reducer
});

export const store = (initialState?: ReturnType<typeof rootReducer>) => configureStore({
	devTools: true,
	preloadedState: initialState,
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(rtkApi.middleware).concat(recipesApi.middleware),
});

export type AppDispatch = ReturnType<typeof store>['dispatch'];

