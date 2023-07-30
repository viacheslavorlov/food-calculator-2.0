import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from 'app/reduxStore/store';
import {StateSchema} from '../types';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;