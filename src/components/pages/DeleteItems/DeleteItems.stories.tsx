import {ComponentMeta, ComponentStory} from '@storybook/react';
import DeleteItems from './DeleteItems';
import {ThemeDecorator} from '../../../helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../teme/temeConsts';

export default {
	title: 'Pages/DeleteItems',
	component: DeleteItems,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof DeleteItems>;

const Template: ComponentStory<typeof DeleteItems> = (args) => <DeleteItems />;

export const DeleteItemsDark = Template.bind({});
DeleteItemsDark.args = {};
DeleteItemsDark.decorators = [ThemeDecorator(ThemeConsts.dark)];

export const DeleteItemsLight = Template.bind({});
DeleteItemsLight.args = {};
DeleteItemsLight.decorators = [ThemeDecorator(ThemeConsts.light)];