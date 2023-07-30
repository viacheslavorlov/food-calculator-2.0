import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from '../../helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from 'widgets/themeSwitcher';
import {Line} from './Line';

export default {
	title: 'entities/Line',
	component: Line,
	argTypes: {
		background: {control: 'background'},
	},
} as ComponentMeta<typeof Line>;

const Template: ComponentStory<typeof Line> = (args) => <Line {...args} />;

export const LightLine = Template.bind({});
LightLine.args = {};
LightLine.decorators = [];

export const DarkLine = Template.bind({});
DarkLine.args = {};
DarkLine.decorators = [ThemeDecorator(ThemeConsts.dark)];
