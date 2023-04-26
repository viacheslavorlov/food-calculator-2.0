import {ComponentMeta, ComponentStory} from '@storybook/react';
import AddNewItems from './AddNewItems';
import {ThemeDecorator} from '../../../../shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../../widgets/themeSwitcher/teme/temeConsts';
import {StoreProvider} from '../../../../app/store/StoreProvider/StoreProvider';
import {store} from '../../../../app/store/store';

export default {
	title: 'Pages/AddNewItems',
	component: AddNewItems,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [(story) => <StoreProvider store={store}>{story()}</StoreProvider>]
} as ComponentMeta<typeof AddNewItems>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template: ComponentStory<typeof AddNewItems> = (args) => <AddNewItems />;

export const AddNewItemsDark = Template.bind({});
AddNewItemsDark.args = {};
AddNewItemsDark.decorators = [ThemeDecorator(ThemeConsts.dark)];

export const AddNewItemsLight = Template.bind({});
AddNewItemsLight.args = {};
AddNewItemsLight.decorators = [ThemeDecorator(ThemeConsts.light)];