import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from 'shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from 'widgets/themeSwitcher';
import {ImcomeOutcomeForm} from './ImcomeOutcomeForm';

export default {
	title: 'entities/ImcomeOutcomeForm',
	component: ImcomeOutcomeForm,
	argTypes: {
		background: {control: 'background'},
	},
} as ComponentMeta<typeof ImcomeOutcomeForm>;

const Template: ComponentStory<typeof ImcomeOutcomeForm> = (args) => <ImcomeOutcomeForm {...args} />;

export const LightImcomeOutcomeForm = Template.bind({});
LightImcomeOutcomeForm.args = {};
LightImcomeOutcomeForm.decorators = [ThemeDecorator(ThemeConsts.light)];

export const DarkImcomeOutcomeForm = Template.bind({});
DarkImcomeOutcomeForm.args = {};
DarkImcomeOutcomeForm.decorators = [ThemeDecorator(ThemeConsts.dark)];
