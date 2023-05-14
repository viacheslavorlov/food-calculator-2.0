import {StoryFn} from '@storybook/react';
import {StateSchema} from '../../../store/types';
import {DeepPartial} from '@reduxjs/toolkit';
//
//
export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: StoryFn) => (
// 	<StoreProvider initialState={state as StateSchema}>
	<StoryComponent/>
// 	</StoreProvider>
);