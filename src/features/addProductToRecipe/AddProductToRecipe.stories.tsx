import {Meta, StoryFn} from '@storybook/react';
import {ThemeDecorator} from 'shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from 'widgets/themeSwitcher/teme/temeConsts';
import {AddProductToRecipe} from './AddProductToRecipe';

export default {
	title: 'entities/AddProductToRecipe',
	component: AddProductToRecipe,
	argTypes: {
		background: {control: 'background'},
	},
} as Meta<typeof AddProductToRecipe>;

const Template: StoryFn<typeof AddProductToRecipe> = (args) => <AddProductToRecipe {...args} />;

export const LightAddProductToRecipe = Template.bind({});
LightAddProductToRecipe.args = {};
LightAddProductToRecipe.decorators = [];

export const DarkAddProductToRecipe = Template.bind({});
DarkAddProductToRecipe.args = {};
DarkAddProductToRecipe.decorators = [ThemeDecorator(ThemeConsts.dark)];
