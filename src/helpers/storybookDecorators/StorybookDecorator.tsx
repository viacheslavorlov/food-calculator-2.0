import {StoreProvider} from '../../store/store/StoreProvider/StoreProvider';
import {Story} from '@storybook/react';
import {store} from '../../store/store/store';

export const StoreDecorator = () => (StoryComponent: Story) => (
	<StoreProvider store={store}>
		<StoryComponent/>
	</StoreProvider>
);