import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {searchReducer} from 'features/searchProducts';


export const rootReducer = combineReducers({
	searchProducts: searchReducer,
});

export const store = (initialState?: ReturnType<typeof rootReducer>) => configureStore({
	devTools: true,
	preloadedState: initialState,
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware(),
});

export type AppDispatch = ReturnType<typeof store>['dispatch'];

