import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProduct, ThunkConfig } from '../../../../store/types';

export const addProductToDB = createAsyncThunk<IProduct, IProduct, ThunkConfig<string>>(
    'newProducts/addProductToDB',
    async (data, thunkAPI) => {
        try {
            const listOfProducts = await axios.get<IProduct[]>('http://localhost:3000/products');
            const indexOfNewProduct = listOfProducts.data.findIndex(
                (item) => item.name === data.name
            );
            console.log('indexOfNewProduct', indexOfNewProduct);
            if (data && indexOfNewProduct < 0) {
                const response = await axios.post<IProduct>('http://localhost:3000/products', data);
                return response.data;
            } else {
                throw new Error();
            }
        } catch (e) {
            return thunkAPI.rejectWithValue('error while adding product to DB');
        }
    }
);
