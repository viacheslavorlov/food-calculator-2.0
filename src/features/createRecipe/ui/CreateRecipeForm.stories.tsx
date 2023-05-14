import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from '../../../shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../widgets/themeSwitcher/teme/temeConsts';
import {CreateRecipeForm} from './CreateRecipeForm';

export default {
	title: 'entities/CreateRecipeForm',
	component: CreateRecipeForm,
	argTypes: {
		background: {control: 'background'},
	},
} as ComponentMeta<typeof CreateRecipeForm>;

const Template: ComponentStory<typeof CreateRecipeForm> = (args) => <CreateRecipeForm {...args} />;

export const LightCreateRecipeForm = Template.bind({});
LightCreateRecipeForm.args = {};
LightCreateRecipeForm.decorators = [];

export const DarkCreateRecipeForm = Template.bind({});
DarkCreateRecipeForm.args = {};
DarkCreateRecipeForm.decorators = [ThemeDecorator(ThemeConsts.dark)];
