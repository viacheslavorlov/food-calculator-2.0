import {Provider} from 'react-redux';
import {ReactNode} from 'react';
import {store} from '../store';
import {StateSchema} from '../../../store/types';

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