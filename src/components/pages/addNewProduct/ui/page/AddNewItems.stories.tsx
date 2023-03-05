import {ComponentMeta, ComponentStory} from '@storybook/react';
import AddNewItems from './AddNewItems';
import {ThemeDecorator} from '../../../../../helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../../../teme/temeConsts';

export default {
	title: 'Pages/AddNewItems',
	component: AddNewItems,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof AddNewItems>;

const Template: ComponentStory<typeof AddNewItems> = (args) => <AddNewItems  />;

export const AddNewItemsDark = Template.bind({});
AddNewItemsDark.args = {};
AddNewItemsDark.decorators = [ThemeDecorator(ThemeConsts.dark)];

export const AddNewItemsLight = Template.bind({});
AddNewItemsLight.args = {};
AddNewItemsLight.decorators = [ThemeDecorator(ThemeConsts.light)];