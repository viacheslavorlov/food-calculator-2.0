import {Meta, StoryFn} from '@storybook/react';
import {ThemeDecorator} from 'shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from 'widgets/themeSwitcher';
import {CreateRecipeForm} from './CreateRecipeForm';

export default {
	title: 'entities/CreateRecipeForm',
	component: CreateRecipeForm,
	argTypes: {
		background: {control: 'background'},
	},
	decorators: []
} as Meta<typeof CreateRecipeForm>;

const Template: StoryFn<typeof CreateRecipeForm> = (args) => <CreateRecipeForm {...args} />;

export const LightCreateRecipeForm = Template.bind({});
LightCreateRecipeForm.args = {};
LightCreateRecipeForm.decorators = [ThemeDecorator(ThemeConsts.light)];

export const DarkCreateRecipeForm = Template.bind({});
DarkCreateRecipeForm.args = {};
DarkCreateRecipeForm.decorators = [ThemeDecorator(ThemeConsts.dark)];
