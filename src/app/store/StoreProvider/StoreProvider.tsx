import {Provider} from 'react-redux';
import {ReactNode} from 'react';
import {store} from '../store';

interface StoreProviderProps {
	children: ReactNode;
	store: typeof store;
}

export const StoreProvider = ({store, children}: StoreProviderProps) => {
	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};