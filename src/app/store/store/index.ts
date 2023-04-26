import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {productsReducer} from '../../../entities/Products/model/slice/productsSlice';
import {newProductReducer} from '../../../entities/addNewProduct/model/slice/newProductSlice';
import {StateSchema} from '../../../store/types';
import {incomeOutcomeSliceReducer} from '../../../entities/IncomeOutcome/model/slice/incomeOutcomeSlice';
import {searchReducer} from '../../../features/searchProducts/model/slice/searchProductSlice';

export const store  = configureStore<StateSchema>({
	devTools: true,
	// preloadedState: {
	// 	incomeOutcome: {isLoading: false,
	// 		error: undefined,
	// 		income: [],
	// 		outcome: []
	// 	},
	// 	newProduct: {
	// 		loading: false,
	// 		error: undefined,
	// 		newProduct: {
	// 			name: '',
	// 			id: Date.now(),
	// 			metric: Metrics.none,
	// 			price: 0,
	// 			amountCurrent: 0,
	// 			amountInOnePack: 0
	// 		},
	// 	},
	// 	products: {
	// 		isLoading: false,
	// 		error: undefined,
	// 		activeProducts: [],
	// 		allProducts: [],
	// 		searchValue: ''
	// 	}
	// },
	reducer: combineReducers({
		products: productsReducer,
		newProduct: newProductReducer,
		incomeOutcome: incomeOutcomeSliceReducer,
		searchProducts: searchReducer
	}),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

