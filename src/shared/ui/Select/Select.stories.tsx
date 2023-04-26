import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from '../../helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../widgets/themeSwitcher/teme/temeConsts';
import {Select} from './Select';

export default {
	title: 'shared/Select',
	component: Select,
	argTypes: {
		background: {control: 'background'},

	},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const LightSelect = Template.bind({});
LightSelect.args = {
	optionsVariants: [
		{name: 'first option', value: 'first option'}, {
			name: 'second option',
			value: 'second option'
		}, {name: 'third option', value: 'third option'},]
};
LightSelect.decorators = [];

export const DarkSelect = Template.bind({});
DarkSelect.args = {
	optionsVariants: [
		{name: 'first option', value: 'first option'},
		{name: 'second option', value: 'second option'},
		{name: 'third option', value: 'third option'}
	]
};
DarkSelect.decorators = [ThemeDecorator(ThemeConsts.dark)];
