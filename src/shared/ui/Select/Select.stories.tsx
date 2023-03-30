import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from '../../helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../widgets/themeSwitcher/teme/temeConsts';
import {Select} from './Select';

export default {
	title: 'entities/Select',
	component: Select,
	argTypes: {
		background: {control: 'background'},
	},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const LightSelect = Template.bind({});
LightSelect.args = {};
LightSelect.decorators = [];

export const DarkSelect = Template.bind({});
DarkSelect.args = {};
DarkSelect.decorators = [ThemeDecorator(ThemeConsts.dark)];
