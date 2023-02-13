import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IProduct {
    name: string;
    price: number;
    amountInOnePack: number;
    metric: string;
    amountCurrent: number;
    id: string;
}
interface ProductsSliceInterface {
    allProducts: IProduct[];
    activeProducts: IProduct[];
    newProduct: IProduct
}

const initialState: ProductsSliceInterface = {
	activeProducts: [],
	allProducts: [],
	newProduct: {
		name: '',
		id: '',
		metric: '',
		price: 0,
		amountCurrent: 0,
		amountInOnePack: 0

	}
};

export const productsSlice = createSlice({
	initialState,
	name: 'products',
	reducers: {
		addNewProduct: (state, action: PayloadAction<IProduct>) => {
			state.allProducts.push(action.payload);
		},

		addProductToActive: (state, action: PayloadAction<string>) => {
			const alreadyInList = state.activeProducts.findIndex(product => product.id === action.payload);
			if (alreadyInList < 0) {
				const newActiveProduct = state.allProducts.filter(product => product.id === action.payload);
				state.activeProducts.unshift(...newActiveProduct);
			}
		},

		deleteFromActiveList: (state, action) => {
			state.activeProducts.filter(product => product.id !== action.payload);
		}
	}
});