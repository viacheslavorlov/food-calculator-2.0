import {ComponentMeta, ComponentStory} from '@storybook/react';
import DeleteItems from './DeleteItems';
import {ThemeDecorator} from '../../../shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../widgets/themeSwitcher/teme/temeConsts';
import {StoreDecorator} from '../../../shared/helpers/storybookDecorators/StorybookDecorator';

export default {
	title: 'Pages/DeleteItems',
	component: DeleteItems,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [StoreDecorator({})]
} as ComponentMeta<typeof DeleteItems>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template: ComponentStory<typeof DeleteItems> = (args) => <DeleteItems />;

export const DeleteItemsDark = Template.bind({});
DeleteItemsDark.args = {};
DeleteItemsDark.decorators = [ThemeDecorator(ThemeConsts.dark)];

export const DeleteItemsLight = Template.bind({});
DeleteItemsLight.args = {};
DeleteItemsLight.decorators = [ThemeDecorator(ThemeConsts.light)];