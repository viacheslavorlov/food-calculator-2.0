import {ReactNode} from 'react';
import {StateSchema} from '../../../store/types';
import {Provider} from 'react-redux';
import {store} from '../store';

interface StoreProviderProps {
	children: ReactNode;
	initialState?: StateSchema
}

export const StoreProvider = (props: StoreProviderProps) => {
	const {initialState, children} = props;
	return (
		<Provider store={store(initialState)}>
			{children}
		</Provider>
	);
};