import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SearchOrder, SearchProductsSchema, SearchProp} from '../type/SearchProductsSchema';

const initialState: SearchProductsSchema = {
	searchValue: '',
	searchOrder: 'asc',
	searchProp: 'none'
};

const searchProductSlice = createSlice({
	name: 'searchProducts',
	initialState,
	reducers: {
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.searchValue = action.payload;
		},
		setSearchOrder: (state, action: PayloadAction<SearchOrder>) => {
			state.searchOrder = action.payload;
		},
		setSearchProp: (state, action: PayloadAction<SearchProp>) => {
			state.searchProp = action.payload;
		}
	}
});

export const {reducer: searchReducer, actions: searchActions} = searchProductSlice;