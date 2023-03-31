import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/themeDecorator/themeDecorator';
import {Theme} from 'app/providers/TemeProvider';
import {StoreDecorator} from 'shared/config/StoreDecorator/StoreDecorator';
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
LightImcomeOutcomeForm.decorators = [];

export const DarkImcomeOutcomeForm = Template.bind({});
DarkImcomeOutcomeForm.args = {};
DarkImcomeOutcomeForm.decorators = [ThemeDecorator(Theme.DARK)];
