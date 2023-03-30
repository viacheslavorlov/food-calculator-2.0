import {StoreProvider} from '../../../app/store/StoreProvider/StoreProvider';
import {Story} from '@storybook/react';
import {store} from '../../../app/store/store';

export const StoreDecorator = () => (StoryComponent: Story) => (
	<StoreProvider store={store}>
		<StoryComponent/>
	</StoreProvider>
);